'use client';

import { certificates } from '@/constants/certificates';
import Image from 'next/image';
import { useState } from 'react';

const Certificates = () => {
  const internshipCerts = certificates.filter((c) => c.type === 'internship');
  const otherCerts = certificates.filter((c) => c.type === 'certificate');
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates" className="relative px-6 py-24 xl:px-56">
      <div className="mb-12 space-y-4">
        <h2 className="h2-bold">Certificates & Gallery</h2>
        <p className="regular-paragraph max-w-[835px]">
          Internship completion certificates and other achievements.
          <br />
          <span className="font-Silkscreen text-xs text-gray-500">
            📁 To update: add images to /public/certs/ and edit constants/certificates.ts
          </span>
        </p>
      </div>

      {/* Internship certificates */}
      <div className="mb-12">
        <p className="mb-6 font-Silkscreen text-xs uppercase tracking-widest text-gray-400">
          Internship Certificates
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {internshipCerts.map((cert) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelected(cert.id === selected ? null : cert.id)}
              isSelected={selected === cert.id}
            />
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
              <CertCard
                key={cert.id}
                cert={cert}
                onClick={() => setSelected(cert.id === selected ? null : cert.id)}
                isSelected={selected === cert.id}
                compact
              />
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-xl">
            <Image
              src={certificates.find((c) => c.id === selected)?.image ?? ''}
              alt={certificates.find((c) => c.id === selected)?.title ?? ''}
              width={900}
              height={650}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

type CertCardProps = {
  cert: { id: string; title: string; issuer: string; date?: string; image: string };
  onClick: () => void;
  isSelected: boolean;
  compact?: boolean;
};

const CertCard = ({ cert, onClick, isSelected, compact }: CertCardProps) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden rounded-xl border text-left transition-all hover:-translate-y-1 ${
      isSelected
        ? 'border-cyan-400/60 shadow-lg shadow-cyan-400/10'
        : 'border-gray-700/40 hover:border-gray-500/60'
    }`}
  >
    <div className={`relative w-full overflow-hidden bg-gray-900 ${compact ? 'h-36' : 'h-52'}`}>
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
    {!compact && (
      <div className="bg-[#1a1a1a6c] p-3">
        <p className="text-code text-sm font-bold text-whiteice">{cert.title}</p>
        {cert.issuer && (
          <p className="text-xs text-silverchalice">{cert.issuer}</p>
        )}
        {cert.date && (
          <p className="font-Silkscreen text-[10px] text-gray-500">{cert.date}</p>
        )}
      </div>
    )}
  </button>
);

export default Certificates;
