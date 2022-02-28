/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './carousel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import Card from '../Card/Card';

function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        pagination
        navigation
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide
          className="swiper-slide"
        >
          <Card className="swiper-card" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

Carousel.propTypes = {
};
Carousel.defaultProps = {
};
export default React.memo(Carousel);
