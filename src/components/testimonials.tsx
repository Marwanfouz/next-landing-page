'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import image from '../../public/img/testimonials/image.svg';
import TestimonialCard from './testimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'محمد مصطفي',
    title: 'طالب ثانوي',
    image: image,
    content:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.',
    rating: 4,
    badge: 'آراء العملاء والأعضاء في كوبونات وعروض جو اوفر الحصرية',
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-prev w-12 h-12 rounded-full bg-[#9977CE] text-white flex items-center justify-center focus:outline-none hover:bg-[#8A67C0]">
              <span className="sr-only">Previous</span>
            </button>
            <button className="swiper-button-next w-12 h-12 rounded-full bg-[#9977CE] text-white flex items-center justify-center focus:outline-none hover:bg-[#8A67C0]">
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
