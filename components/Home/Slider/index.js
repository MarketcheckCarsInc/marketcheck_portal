import Slider from 'react-slick'
import Slide from './Slide'
import slides from './slides'
import NextArrow from './NextArrow'
import PreviousArrow from './PreviousArrow'
import SliderHOC from '@/HOC/Slider'

import { breakpoints } from '%/styles'

const SliderSettings = {
  dots: true,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
  responsive: [
    { breakpoint: breakpoints.laptop, settings: { arrows: false } }
  ]
}

const HomeSlider = () =>
  <div>
    <Slider {...SliderSettings}>
      {slides.map((s, index) =>
        <div key={index + s.title}>
          <Slide
            image={s.image}
            subtitle={s.subtitle}
            title={s.title}
            text={s.text}
          />
        </div>
      )}
    </Slider>
  </div>

export default SliderHOC(HomeSlider)
