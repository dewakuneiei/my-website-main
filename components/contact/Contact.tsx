import { contacts } from '@/constants/contacts';
import ContactCard from './ContactCard';

const Contact = () => {
  return (
    <section id="contact" className="relative space-y-12 px-6 py-24">
      <h4 className="h3-bold md:mx-auto md:max-w-[850px] md:text-center">
        Looking for a{' '}
        <span className="text-cyan-400">Fullstack Developer</span> or{' '}
        <span className="text-violet-400">Game Developer</span>? Let&apos;s
        build something together!
      </h4>

      <div className="flex flex-col gap-4 lg:flex-row xl:justify-center">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            title={contact.title}
            description={contact.description}
            icon={contact.icon}
            path={contact.path}
          />
        ))}
      </div>

      <div className="mx-auto max-w-[400px] space-y-2 rounded-xl border border-gray-700/40 bg-[#1a1a1a6c] p-5 text-center">
        <p className="font-Silkscreen text-xs uppercase tracking-widest text-gray-400">
          Direct Info
        </p>
        <p className="text-whiteice">Nattawut Pasuk (Deewa)</p>
        <p className="text-silverchalice">dewapasuk.n@gmail.com</p>
        <p className="text-silverchalice">065-818-6437</p>
        <p className="font-Silkscreen text-xs text-gray-500">
          Blood Type: AB · Age: 23 · Thai / English (A2)
        </p>
      </div>
    </section>
  );
};
export default Contact;
