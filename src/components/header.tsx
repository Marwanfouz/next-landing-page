'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import goofferSvg from '../../public/gooffer.svg';
import engSvg from '../../public/eng.svg';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'الرئيسية', href: '#' },
    { title: 'الفئات', href: '#categories' },
    { title: 'العلامات التجارية', href: '#brands' },
    { title: 'الكوبونات', href: '#coupons' },
    { title: 'التخفيضات', href: '#exclusiveoffers' },
    { title: 'تطبيق الجوال', href: '#app' },
    { title: 'تواصل معنا', href: '#footer' },
  ];

  return (
    <header className="border-b bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-14">
          <Link href="/" className="shrink-0">
            <Image
              src={goofferSvg}
              alt="Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-bold relative group text-stroke-active`}
              >
                {item.title}
                <span
                  className={`absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FFA360] rounded-full transition-opacity ${
                    pathname === item.href
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                ></span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-sm border-2 border-[#FFA360] text-[#61707F] hover:text-[#FFA360] hover:bg-transparent w-20"
            >
              <Image
                src={engSvg}
                alt="eng lang icon"
                width={32}
                height={32}
                className="w-20 h-8 p-1"
              />
            </Button>
            <Button className="bg-[#4A3880] hover:bg-[#3E2D6A] text-white text-stroke-button">
              الدخول/انشاء حساب
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 relative group text-stroke-active"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-sm border-2 border-[#FFA360] text-[#61707F] hover:text-[#FFA360] hover:bg-transparent w-20"
              >
                <Image
                  src={engSvg}
                  alt="eng lang icon"
                  width={32}
                  height={32}
                  className="w-20 h-8 p-1"
                />
              </Button>
              <Button className="ml-2 bg-[#4A3880] hover:bg-[#3E2D6A] text-stroke-button">
                الدخول/انشاء حساب
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
