'use client';

import extra from '../../public/img/coupons/extra.svg';
import sala from '../../public/img/coupons/sala.svg';
import alarabia from '../../public/img/coupons/alarabia.svg';
import Slider from './slider';
import CouponsCard from './couponsCard';
import { Coupon } from '@/types';

export default function ExclusiveOffers() {
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
  ];

  return (
    <section className="py-12 bg-gray-50 " id="exclusiveoffers">
      <Slider
        data={coupons}
        CardComponent={CouponsCard}
        title="العروض الحصــرية"
        sliderButton="exclusiveoffers"
      />
    </section>
  );
}
