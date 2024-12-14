'use client';

import extra from '../../public/img/coupons/extra.svg';
import sala from '../../public/img/coupons/sala.svg';
import alarabia from '../../public/img/coupons/alarabia.svg';
import CouponsCard from './couponsCard';
import { Coupon } from '@/types';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function AllCoupons() {
  const coupons: Coupon[] = [
    {
      id: 1,
      storeName: 'المراعي',
      discount: '25%',
      rating: 4.9,
      storeImage: extra,
      isActive: true,
      expiryText: 'تم الاستخدام 156 مرة اليوم',
    },
    {
      id: 2,
      storeName: 'نعناع',
      discount: '25%',
      rating: 4.9,
      storeImage: alarabia,
      isActive: false,
      expiryText: 'تم الاستخدام 89 مرة اليوم',
    },
    {
      id: 3,
      storeName: 'مكتبة جرير',
      discount: '25%',
      rating: 4.9,
      storeImage: sala,
      isActive: true,
      expiryText: 'تم الاستخدام 234 مرة اليوم',
    },
    {
      id: 4,
      storeName: 'مكتبة جرير',
      discount: '25%',
      rating: 4.9,
      storeImage: sala,
      isActive: true,
      expiryText: 'تم الاستخدام 234 مرة اليوم',
    },
    {
      id: 5,
      storeName: 'مكتبة جرير',
      discount: '25%',
      rating: 4.9,
      storeImage: sala,
      isActive: true,
      expiryText: 'تم الاستخدام 234 مرة اليوم',
    },
    {
      id: 6,
      storeName: 'مكتبة جرير',
      discount: '25%',
      rating: 4.9,
      storeImage: sala,
      isActive: false,
      expiryText: 'تم الاستخدام 234 مرة اليوم',
    },
    {
      id: 7,
      storeName: 'مكتبة جرير',
      discount: '25%',
      rating: 4.9,
      storeImage: sala,
      isActive: false,
      expiryText: 'تم الاستخدام 234 مرة اليوم',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 " id="allcoupons">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">كل الكوبونات</h2>
          <Link
            href="#"
            className="text-[#FFA360] font-extrabold underline hover:no-underline hover:text-[#ffc093]"
          >
            عرض الكل
          </Link>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.swiper-button-next-allcoupons`,
            prevEl: `.swiper-button-prev-allcoupons`,
          }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {Array(Math.ceil(coupons.length / 6))
            .fill(null)
            .map((_, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {coupons.slice(i * 6, i * 6 + 6).map((coupon) => (
                    <CouponsCard key={coupon.id} {...coupon} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="flex items-center justify-center mt-6 gap-4">
          <div className="swiper-button-next-allcoupons" />
          <div className="swiper-button-prev-allcoupons" />
        </div>
      </div>
    </section>
  );
}
