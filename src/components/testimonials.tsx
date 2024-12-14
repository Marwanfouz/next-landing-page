'use client';

import { motion } from 'framer-motion';
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
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50" dir="rtl">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, x: -500, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
