import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topmeel } from './topmeel';
import Caursolitem from './Caursolitem';

const Items = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false

      };
  return (
    <div className='overflow:hidden'>
      <Slider {...settings}>
            {topmeel.map((item)=>(
                <Caursolitem image={item.image} title={item.title} />
            ))}
      </Slider>

      
    </div>

    
  )
}

export default Items
