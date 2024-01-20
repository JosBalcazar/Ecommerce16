import banner01 from '/png/banner01.png'
import banner02 from '/png/banner02.png'
import banner03 from '/png/banner03.png'

export const Slider = () => {
  return (
    <>
        <div className="row">
            <div className="container-slider" id="cont-slider">
                <div className="slider" id="slider">
                    <div className="slider__section">
                        <img src={banner01} alt="" className="slider__img"></img>
                    </div>
                    <div className="slider__section">
                        <img src={banner02} alt="" className="slider__img"></img>
                    </div>
                    <div className="slider__section">
                        <img src={banner03} alt="" className="slider__img"></img>
                    </div>
                </div>
                <div className="slider__btn slider__btn--right" id="btn-right">&#62</div>
                <div className="slider__btn slider__btn--left" id="btn-left">&#60</div>
            </div>
        </div>            
    </>
  )
}
