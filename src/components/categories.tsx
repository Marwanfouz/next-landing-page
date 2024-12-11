'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';
import { Card, CardContent } from '@/components/ui/card';
import smarthouse from '../../public/smarthouse.svg';
import clothes from '../../public/clothes.svg';
import market from '../../public/market.svg';
import phones from '../../public/phones.svg';

const categories = [
  {
    id: 1,
    name: 'الملابس',
    image: clothes,
  },
  {
    id: 2,
    name: 'البقالة',
    image: market,
  },
  {
    id: 3,
    name: 'المنزل الذكي',
    image: smarthouse,
  },
  {
    id: 4,
    name: 'الجوالات ومستلزماتها',
    image: phones,
  },
  {
    id: 5,
    name: 'منتج إضافي',
    image: phones,
  },
  {
    id: 6,
    name: 'منتج إضافي آخر',
    image: phones,
  },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white" dir="rtl" id='categories'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-right font-arabic">
          تسوق حسب الفئات
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Card className="border-none">
                <CardContent className="flex flex-col items-center p-6 h-[248px] mb-1 relative">
                  <div className="absolute top-0 right-20 w-32 h-32 bg-[#FFA360] rounded-full transform translate-x-6 translate-y-6" />
                  <div className="z-10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-center font-arabic">
                    {category.name}
                  </h3>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
