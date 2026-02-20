// Add new certificates here — just push a new object to the array!
// Place certificate images in /public/certs/ folder.

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  image: string;
  type: 'certificate' | 'internship';
};

export const certificates: Certificate[] = [
  {
    id: 'intern-mammossix',
    title: 'Game Programmer Internship Certificate',
    issuer: 'MAMMOSSIX ASIA CO., LTD.',
    date: 'Apr 30, 2025',
    image: '/certs/mammossix_intern_cert.jpg',
    type: 'internship',
  },
  {
    id: 'intern-techspace',
    title: 'Software Developer Internship Certificate',
    issuer: 'TECHSPACE COMPANY LIMITED',
    date: 'Sep 19, 2025',
    image: '/certs/techspace_intern_cert.jpg',
    type: 'internship',
  },
  {
    id: 'cert-ux',
    title: 'User Experience for Software Requirements Development',
    issuer: '',
    image: '/certs/User_Experience_for_Software_Requirements_Development_Certificate.jpg',
    type: 'certificate',
  },
  {
    id: 'cert-3d-modeling',
    title: '3D Modeling Course for the Metaverse Industry',
    issuer: '',
    image: '/certs/3D Modeling Course for the Metaverse Industry_with_imgen.jpg',
    type: 'certificate',
  },
  {
    id: 'cert-sql',
    title: 'Essential SQL for Everyone',
    issuer: 'BorntoDev Academy',
    image: '/certs/borntodev-acdemy_Essential SQL for Everyone_certifiacte.png',
    type: 'certificate',
  },
  {
    id: 'cert-csharp',
    title: 'C# with freeCodeCamp',
    issuer: 'freeCodeCamp',
    image: '/certs/csharp_with_freeCodeCamp.png',
    type: 'certificate',
  },
  {
    id: 'cert-good-student',
    title: 'Good Student Certificate',
    issuer: '',
    image: '/certs/good student .jpg',
    type: 'certificate',
  },
];
