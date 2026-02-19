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
    image: '/certs/intern-mammossix.png',
    type: 'internship',
  },
  {
    id: 'intern-techspace',
    title: 'Software Developer Internship Certificate',
    issuer: 'TECHSPACE COMPANY LIMITED',
    date: 'Sep 19, 2025',
    image: '/certs/intern-techspace.png',
    type: 'internship',
  },
  {
    id: 'cert-1',
    title: 'Certificate 1',
    issuer: '',
    image: '/certs/cert-1.png',
    type: 'certificate',
  },
  {
    id: 'cert-2',
    title: 'Certificate 2',
    issuer: '',
    image: '/certs/cert-2.png',
    type: 'certificate',
  },
  {
    id: 'cert-3',
    title: 'Certificate 3',
    issuer: '',
    image: '/certs/cert-3.png',
    type: 'certificate',
  },
  {
    id: 'cert-4',
    title: 'Certificate 4',
    issuer: '',
    image: '/certs/cert-4.png',
    type: 'certificate',
  },
  {
    id: 'cert-5',
    title: 'Certificate 5',
    issuer: '',
    image: '/certs/cert-5.png',
    type: 'certificate',
  },
];
