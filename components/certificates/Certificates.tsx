'use client';

import { certificates } from '@/constants/certificates';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.3;

const Certificates = () => {
  const internshipCerts = certificates.filter((c) => c.type === 'internship');
  const otherCerts = certificates.filter((c) => c.type === 'certificate');
  const [selected, setSelected] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });

  const openLightbox = (id: string) => {
    setSelected(id);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    posRef.current = { x: 0, y: 0 };
  };

  const closeLightbox = () => setSelected(null);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z - e.deltaY * 0.001 * ZOOM_STEP * 10)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - posRef.current.x, y: e.clientY - posRef.current.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const newPos = {
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    };
    posRef.current = newPos;
    setPosition(newPos);
  };

  const handleMouseUp = () => { isDragging.current = false; };

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const selectedCert = certificates.find((c) => c.id === selected);

  return (
    <section id="certificates" className="relative px-6 py-24 xl:px-56">
      <div className="mb-12 space-y-4">
        <h2 className="h2-bold">Certificates & Gallery</h2>
        <p className="regular-paragraph max-w-[835px]">
          Internship completion certificates and other achievements.
        </p>
      </div>

      {/* Internship certificates — full-size display */}
      <div className="mb-12">
        <p className="mb-6 font-Silkscreen text-xs uppercase tracking-widest text-gray-400">
          Internship Certificates
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {internshipCerts.map((cert) => (
            <button
              key={cert.id}
              onClick={() => openLightbox(cert.id)}
              className="group relative overflow-hidden rounded-xl border border-gray-700/40 text-left transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              {/* Full cert image — object-contain so no cropping */}
              <div className="relative w-full bg-gray-100" style={{ paddingBottom: '70%' }}>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-black/60 px-3 py-1 font-Silkscreen text-[10px] text-white backdrop-blur-sm">
                    Click to zoom
                  </span>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-3">
                <p className="text-code text-sm font-bold text-whiteice">{cert.title}</p>
                {cert.issuer && (
                  <p className="text-xs text-silverchalice">{cert.issuer}</p>
                )}
                {cert.date && (
                  <p className="font-Silkscreen text-[10px] text-gray-500">{cert.date}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Other certificates */}
      {otherCerts.length > 0 && (
        <div>
          <p className="mb-6 font-Silkscreen text-xs uppercase tracking-widest text-gray-400">
            Certificates
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {otherCerts.map((cert) => (
              <button
                key={cert.id}
                onClick={() => openLightbox(cert.id)}
                className="group relative overflow-hidden rounded-xl border border-gray-700/40 text-left transition-all hover:-translate-y-1 hover:border-gray-500/60"
              >
                <div className="relative h-36 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800/60">
                    <p className="px-2 text-center font-Silkscreen text-[10px] uppercase text-gray-400">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox with zoom */}
      {selected && selectedCert && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Toolbar */}
          <div
            className="relative z-10 mb-3 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(1)))}
              className="flex size-8 items-center justify-center rounded-full bg-white/10 font-bold text-white hover:bg-white/20"
            >
              −
            </button>
            <span className="min-w-[52px] text-center font-Silkscreen text-xs text-gray-300">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(1)))}
              className="flex size-8 items-center justify-center rounded-full bg-white/10 font-bold text-white hover:bg-white/20"
            >
              +
            </button>
            <button
              onClick={() => { setZoom(1); setPosition({ x: 0, y: 0 }); posRef.current = { x: 0, y: 0 }; }}
              className="rounded-full bg-white/10 px-3 py-1 font-Silkscreen text-[11px] text-gray-300 hover:bg-white/20"
            >
              Reset
            </button>
            <button
              onClick={closeLightbox}
              className="ml-2 flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              ✕
            </button>
          </div>

          {/* Image container */}
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              width: 'min(90vw, 900px)',
              height: 'min(80vh, 680px)',
              cursor: zoom > 1 ? 'grab' : 'zoom-in',
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transformOrigin: 'center center',
                transition: isDragging.current ? 'none' : 'transform 0.15s ease',
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
                sizes="90vw"
                draggable={false}
              />
            </div>
          </div>

          {/* Caption */}
          <div
            className="mt-3 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-semibold text-white">{selectedCert.title}</p>
            {selectedCert.issuer && (
              <p className="font-Silkscreen text-[11px] text-gray-400">{selectedCert.issuer}</p>
            )}
            <p className="mt-1 font-Silkscreen text-[10px] text-gray-600">
              Scroll to zoom · Drag to pan · ESC to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
