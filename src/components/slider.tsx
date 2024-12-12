'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface SliderProps {
  data: any[];
  CardComponent: (item: any) => ReactNode;
  title: string;
  sliderButton: string;
}

export default function Slider({
  data,
  CardComponent,
  title,
  sliderButton,
}: SliderProps) {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="relative">
          <h2 className="text-3xl font-bold mb-16 text-right font-arabic">
            {title}
          </h2>
          <div className="swiper-button-container mx-auto w-[35%] inset-0">
            <div
              className={`swiper-button-prev-${sliderButton} swiper-button-prev`}
            />
            <div
              className={`swiper-button-next-${sliderButton} swiper-button-next !left-[60px] !justify-self-end`}
            />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `.swiper-button-next-${sliderButton}`,
            prevEl: `.swiper-button-prev-${sliderButton}`,
          }}
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
          {data.map((item) => (
            <SwiperSlide key={item.id}>{CardComponent(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
