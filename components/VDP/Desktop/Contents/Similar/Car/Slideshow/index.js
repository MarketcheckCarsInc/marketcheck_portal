import SliderWrapper from './SlideWrapper'
import Slider from 'react-slick'
import Slide from './Slide'
import SliderHOC from '@/HOC/Slider'

import { breakpoints } from '%/styles'

import { NextArrow, PreviousArrow } from './Components.js'

const SliderSettings = {
  slidesToShow: 1,
  dots: true,
  slide: 'slick-slide > div',
  arrows: true,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
  responsive: [
    {
      breakpoint: breakpoints.laptop,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0'
      }
    },
    {
      breakpoint: breakpoints.largeTablet,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '30px'
      }
    }
  ]
}

const OverviewSlider = (props) =>
  <SliderWrapper>
    <Slider {...SliderSettings}>
      {props.data.media.photo_links.map((slide, index) =>
        <div key={index} >
          <Slide image={slide} />
        </div>
      )}
    </Slider>
  </SliderWrapper>

export default SliderHOC(OverviewSlider)
