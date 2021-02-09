import SliderWrapper from './SlideWrapper'
import Slider from 'react-slick'
import Slide from './Slide'
import SliderHOC from '@/HOC/Slider'
import check404 from '%/factory/check404'

import { NextArrow, PreviousArrow } from './Components.js'

const SliderSettings = {
  dots: true,
  arrows: true,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />
}

const OverviewSlider = ({slides}) => {

  if (slides.length > 0) {
    return (
      <SliderWrapper>
        <Slider {...SliderSettings}>
          {slides.slice(0, 20).map((slide, index) => {
            // console.log(slide)
            // if (check404(slide)) {
              return (
                <div key={index} >
                  <Slide image={slide} />
                </div>
              )
            // } else {
            //   return (
            //     <div key={index} >
            //       <Slide image="/static/img/vdp/notfound.jpg" />
            //     </div>
            //   )
            // }
          })}
        </Slider>
      </SliderWrapper>
    )
  } else {
    return (
      <SliderWrapper>
        <Slider {...SliderSettings}>
          <div>
            <Slide image="/static/img/vdp/notfound.jpg" />
          </div>
        </Slider>
      </SliderWrapper>
    )
  }
}

export default SliderHOC(OverviewSlider)
