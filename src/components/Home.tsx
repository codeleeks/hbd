import { useRef } from 'react'
import heart from '../assets/heart.png'
import Modal, { ModalHandle } from './Modal'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const images = Object.values(
  import.meta.glob('../assets/happyMoments/*.{png,jpg,jpeg,PNG,JPEG}', {
    eager: true,
    as: 'url'
  })
)

interface HomeProps {}
const Home = (_: HomeProps) => {
  const modalRef = useRef<ModalHandle>(null)
  console.log(images)

  const clickHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    modalRef.current?.open()
  }

  return (
    <div className='heart inner'>
      <ul className='canvas'>
        {[...Array(50)].map((_, i) => (
          <li key={i} className='star'></li>
        ))}
      </ul>
      <div className='heart__image'>
        <img
          src={heart}
          alt='1년 동안 희주가 행복했던 이미지!'
          onClick={clickHandler}
        />
      </div>

      <Modal title='지난 1년 동안 희주가 행복했던 순간' ref={modalRef}>
        <Swiper
          spaceBetween={50}
          slidesPerView='auto'
          className='happy-moments'
        >
          {images.map((img) => {
            return (
              <SwiperSlide key={img} className='happy-moment-slide'>
                <img src={img} alt='행복했던 순간의 이미지' />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Modal>
    </div>
  )
}

export default Home
