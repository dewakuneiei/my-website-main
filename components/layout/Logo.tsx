import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-azureradiance">d</span>
      <span className="text-oceangreen">e</span>
      <span className="text-supernova">e</span>
      <span className="text-valencia">w</span>
      <span className="text-violet-400">a</span>
      <span className="text-tundora">.</span>
      <span className="text-silverchalice">dev</span>
    </Link>
  );
};
export default Logo;
