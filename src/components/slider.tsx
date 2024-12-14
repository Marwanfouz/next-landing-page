'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

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
      <div className="container md:mr-auto px-4 md:px-0">
        <div className="relative">
          <h2 className="text-3xl font-bold mb-16 text-right font-arabic">
            {title}
          </h2>
          <div className="swiper-button-container mx-auto w-[35%] inset-0">
            <div
              className={`swiper-button-prev-${sliderButton} swiper-button-prev md:!left-[80px]`}
            />
            <div
              className={`swiper-button-next-${sliderButton} swiper-button-next md:!left-[120px] !justify-self-end`}
            />
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: `.swiper-button-next-${sliderButton}`,
            prevEl: `.swiper-button-prev-${sliderButton}`,
          }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="swiper-slide-content opacity-100 transition-transform transform duration-1000 ease-in-out">
                {CardComponent(item)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
