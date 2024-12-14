import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import appstore from '../../public/img/footer/appstore.png';
import googleplay from '../../public/img/footer/googleplay.png';
import gooffer from '../../public/img/footer/gooffer.png';

export default function Footer() {
  const quickLinks = [
    { title: 'الرئيسية', href: '#' },
    { title: 'الكوبونات', href: '#' },
    { title: 'الصفقات', href: '#' },
    { title: 'تواصل معنا', href: '#' },
    { title: 'العرض اليومي', href: '#' },
  ];

  const categories = [
    { title: 'البقالة', href: '#' },
    { title: 'الملابس', href: '#' },
    { title: 'الرقميات والسفر', href: '#' },
    { title: 'مستلزمات المنزل', href: '#' },
    { title: 'الكفيهات', href: '#' },
  ];

  const brands = [
    { title: 'العثيم', href: '#' },
    { title: 'تمور واكثر', href: '#' },
    { title: 'نعناع', href: '#' },
    { title: 'نون', href: '#' },
    { title: 'سنتر بوينت', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-white" dir="rtl" id="footer">
      <div className="container mx-auto px-4 py-12">
        <Separator className="mb-6 h-[3px] bg-[#A33670]" />
        <div className="flex justify-center mb-12">
          <Image
            src={gooffer}
            alt="GO OFFER"
            width={120}
            height={60}
            className="h-15"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-[#1E1C36] text-lg mb-4">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFA360] rounded-full" />
                  <Link
                    href={link.href}
                    className="text-[#543883] font-semibold hover:text-[#9977CE] transition-colors hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#1E1C36] text-lg mb-4">الفئات</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.title} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFA360] rounded-full" />
                  <Link
                    href={category.href}
                    className="text-[#543883] font-semibold  hover:text-[#9977CE] transition-colors hover:underline"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#1E1C36] text-lg mb-4">
              العلامات التجارية
            </h3>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand.title} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFA360] rounded-full" />

                  <Link
                    href={brand.href}
                    className="text-[#543883] font-semibold hover:text-[#9977CE] transition-colors hover:underline"
                  >
                    {brand.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#1E1C36] text-lg mb-4">
              التواصل الاجتماعي والتطبيق
            </h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-[#262254] flex items-center justify-center text-white font-semibold  hover:bg-[#9977CE] hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
            <div className="space-y-3">
              <Link href="#" className="block">
                <Image
                  src={appstore}
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </Link>
              <Link href="#" className="block">
                <Image
                  src={googleplay}
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="mb-6 h-[3px] bg-[#CED1E5]" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-[#853962] hover:text-[#9977CE] hover:underline transition-colors"
            >
              خصوصية الاستخدام
            </Link>
            <Link
              href="#"
              className="text-[#853962] hover:text-[#9977CE] hover:underline transition-colors"
            >
              الشروط والأحكام
            </Link>
          </div>
          <p className="text-[#1E1C36]">الحقوق محفوظة الى جو اوفر 2024</p>
        </div>
      </div>
    </footer>
  );
}
