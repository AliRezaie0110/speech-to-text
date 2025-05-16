'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[166px] h-screen bg-[url('/back.png')] bg-cover bg-no-repeat bg-center text-white p-4 mx-auto flex flex-col items-center pt-[48px] rounded-l-[10px]">
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <Image src="/icon-ava.png" width={19} height={38} alt="icon ava" />
        <h1 className="text-[20px] font-bold">آوا</h1>
      </div>

      {/* Buttons  */}
      <div className="mt-24 flex flex-col space-y-4">
        
        <Link href="/speech">
          <button
            className={`flex items-center justify-center cursor-pointer gap-2 w-[150px] h-[48px] rounded-[10px] text-sm font-medium text-white transition-colors duration-200 ${
              pathname === '/speech' ? 'bg-[#02816E]' : 'bg-[#00BA9F]  hover:bg-[#00C69B]'
            }`}
          >
            <Image src="/speech-icon.png" width={22} height={24} alt="speech icon" />
            تبدیل گفتار
          </button>
        </Link>

        <Link href="/archive">
          <button
            className={`flex items-center justify-center cursor-pointer gap-2 w-[150px] h-[48px] rounded-[10px] text-sm font-medium text-white transition-colors duration-200 ${
              pathname === '/archive' ? 'bg-[#02816E]' : 'bg-[#00BA9F] hover:bg-[#00C69B]'
            }`}
          >
            <Image src="/archive-icon.png" width={20} height={20} alt="archive icon" />
            آرشیو
          </button>
        </Link>

      </div>
    </div>
  );
}
