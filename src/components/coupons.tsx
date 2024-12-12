'use client';

import extra from '../../public/img/coupons/extra.svg';
import sala from '../../public/img/coupons/sala.svg';
import alarabia from '../../public/img/coupons/alarabia.svg';
import Slider from './slider';
import CouponsCard from './couponsCard';

export function Coupons() {
  const coupons = [
    {
      id: 1,
      title: 'اكسترا',
      discount: '25%',
      rating: 4.71,
      reviews: 245,
      image: extra,
    },
    {
      id: 2,
      title: 'العربية للعود',
      discount: '25%',
      rating: 4.68,
      reviews: 189,
      image: alarabia,
    },
    {
      id: 3,
      title: 'المالة الاقتصادية',
      discount: '25%',
      rating: 4.84,
      reviews: 312,
      image: sala,
    },
    {
      id: 4,
      title: 'المالة الاقتصادية',
      discount: '25%',
      rating: 4.84,
      reviews: 312,
      image: sala,
    },
    {
      id: 5,
      title: 'المالة الاقتصادية',
      discount: '25%',
      rating: 4.84,
      reviews: 312,
      image: sala,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 " id="brands">
      <Slider
        data={coupons}
        CardComponent={CouponsCard}
        title="الكوبونات الأكثر استخداماً"
        sliderButton="coupons"
      />
    </section>
  );
}
