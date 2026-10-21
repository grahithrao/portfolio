'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import ServicesCard from './ServicesCard';
import PortfolioCard from './PortfolioCard';
import ReviewCard from './ReviewCard';

import {
  ServiceItem,
  ProjectItem,
  Review,
} from '@/data/data';

type AllowedData = ServiceItem | ProjectItem | Review;

interface GenericSliderProps<T extends AllowedData> {
  data: T[];
  slidesPerView: number;
  heightClass?: string;
  cardType: 'service' | 'portfolio' | 'review';
}

export function GenericSlider<T extends AllowedData>({
  data,
  slidesPerView,
  heightClass = '',
  cardType,
}: GenericSliderProps<T>) {
  const [isClient, setIsClient] = useState(false);
  const isReview = cardType === 'review';
  const isPortfolio = cardType === 'portfolio';

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`relative w-full flex flex-col justify-center items-center ${heightClass}`}>
        <div className="w-full px-4 sm:px-6 lg:px-0 max-w-[1440px]">
          <div className="flex gap-5 overflow-x-auto pb-4">
            {data.slice(0, 3).map((item, index) => (
              <div key={index} className="flex-shrink-0 w-full max-w-sm sm:max-w-md">
                {cardType === 'service' && 'number' in item && (
                  <ServicesCard
                    number={item.number}
                    title={item.title}
                    desc={item.desc}
                    tags={item.tags}
                    icon={item.icon}
                    priority={index === 0}
                  />
                )}
                {cardType === 'portfolio' && 'badge' in item && (
                  <PortfolioCard
                    {...(item as ProjectItem)}
                    priority={index === 0}
                  />
                )}
                {cardType === 'review' && 'rating' in item && (
                  <ReviewCard
                    {...(item as Review)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full flex flex-col justify-center items-center ${heightClass}`}>
      <div className="w-full px-4 sm:px-6 lg:px-0 max-w-[1440px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          centeredSlides={isReview}
          loop={data.length > 2}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: isPortfolio ? 1 : Math.min(slidesPerView, 2),
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: isPortfolio ? 2 : Math.min(slidesPerView, 3),
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: slidesPerView,
              spaceBetween: 28,
            },
          }}
          className="!pb-16"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`!flex justify-center ${
                isReview ? '!w-full sm:!w-[90%] md:!w-[680px]' : ''
              }`}
            >
              {cardType === 'service' && 'number' in item && (
                <ServicesCard
                  number={item.number}
                  title={item.title}
                  desc={item.desc}
                  tags={item.tags}
                  icon={item.icon}
                  priority={index === 0}
                />
              )}
              {cardType === 'portfolio' && 'badge' in item && (
                <PortfolioCard
                  {...(item as ProjectItem)}
                  priority={index === 0}
                />
              )}
              {cardType === 'review' && 'rating' in item && (
                <ReviewCard
                  {...(item as Review)}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
