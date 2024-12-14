'use client';

import extra from '../../public/img/coupons/extra.svg';
import sala from '../../public/img/coupons/sala.svg';
import alarabia from '../../public/img/coupons/alarabia.svg';
import CouponsCard from './couponsCard';
import { Coupon } from '@/types';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function CouponsOffers() {
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
    <section
      className="py-12 bg-[url('../../public/img/couponsoffers/image.png')]"
      id="allcoupons"
    >
      <motion.div
        className="container md:mr-auto px-4 md:px-0"
        initial={{ opacity: 0, scale: 0.8, clipPath: 'circle(0%)' }}
        whileInView={{ opacity: 1, scale: 1, clipPath: 'circle(100%)' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white text-center m-auto">
            عروض وكوبونات خاصة بمناسبة اليوم الوطني الـــ94
          </h2>
          <Link
            href="#"
            className="text-[#FFA360] font-extrabold underline hover:no-underline hover:text-[#ffc093] md:ml-[80px]"
          >
            عرض الكل
          </Link>
        </div>
        <div className="container mr-auto">
          <div className="relative">
            <h2 className="text-3xl font-bold mb-16 text-right font-arabic">
              العروض والكوبونات
            </h2>
            <div className="swiper-button-container mx-auto w-[35%] inset-0 !top-[310px]">
              <div className="swiper-button-prev-couponsoffers swiper-button-prev md:!left-[80px] !bg-[#51A17B]" />
              <div className="swiper-button-next-couponsoffers swiper-button-next md:!left-[120px] !justify-self-end !bg-[#51A17B]" />
            </div>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-couponsoffers',
              prevEl: '.swiper-button-prev-couponsoffers',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {coupons.map((item) => (
              <SwiperSlide key={item.id}>{CouponsCard(item)}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
