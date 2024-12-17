'use client';

import Link from 'next/link';
import almarai from '../../public/img/brands/almarai.png';
import gdodna from '../../public/img/brands/gdodna.png';
import nana from '../../public/img/brands/nana.png';
import tmor from '../../public/img/brands/tmor.png';
import BrandsCard from './brandsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const brands = [
  { id: 1, name: 'أكلات جدودنا', image: gdodna },
  { id: 2, name: 'تمور وأكثر', image: tmor },
  { id: 3, name: 'المراعي', image: almarai },
  { id: 4, name: 'نعناع', image: nana },
  { id: 5, name: 'نعناع', image: nana },
  { id: 6, name: 'نعناع', image: nana },
];

export default function Brands() {
  return (
    <section className="py-12 bg-[#FDF5FF]" id="brands">
      <div className="container m-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#363062]">
          تصفح حسب العلامات التجارية
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3.5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="relative"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <BrandsCard key={brand.id} {...brand} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8">
          <Link
            href="#"
            className="text-[#2E398E] text-sm md:text-base hover:underline"
          >
            عرض الكل
          </Link>
        </div>
      </div>
    </section>
  );
}
