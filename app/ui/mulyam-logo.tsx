import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function MulyamLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src={'/mulyam-logo.svg'}
        width={560}
        height={620}
        className="block"
        alt="Mulyam Logo"
      />
    </div>
  );
}
