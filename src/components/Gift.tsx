import giftOpenImg from '../assets/gift-open.png'
import giftNotOpenImg from '../assets/gift-not-open.png'
import jillbyjillBackpack from '../assets/jillbyjill_backpack.jpg'
import malenka from '../assets/malenka.png'
import { useRef, useState } from 'react'
import Modal, { ModalHandle } from './Modal'

const giftContents = [
  {
    src: jillbyjillBackpack,
    title: '질바이질 백팩',
    url: 'https://www.musinsa.com/app/goods/3781416',
  },
  {
    src: 'https://r2.jjalbot.com/2023/03/fHNaadsy0V.jpeg',
    title: '다시 골라봐 ㅎㅎ;;;',
    url: '',
  },
  {
    src: malenka,
    title: '말렌카 허니 케이크 위드 월넛',
    url: 'https://marlenka.co.kr/product/detail.html?product_no=54&cate_no=84&display_group=1',
  },
]

interface GittItemProps {
  id: number
  onClick: (id: number) => void
}
const GiftItem = (props: GittItemProps) => {
  const { id, onClick } = props
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => {
    setIsOpen((prev) => !prev)
    if (!isOpen) {
      onClick(id)
    }
  }

  return (
    <li>
      <img
        src={isOpen ? giftOpenImg : giftNotOpenImg}
        alt='선물'
        onClick={clickHandler}
      />
    </li>
  )
}

interface GiftProps {}
const Gift = (_: GiftProps) => {
  const modalRef = useRef<ModalHandle>(null)
  const [openedGiftId, setOpenedGiftId] = useState<number>(-1)
  // const [countdown, setCountdown] = useState<number>(0)
  const clickHandler = (id: number) => {
    setOpenedGiftId(id)
    // setCountdown(3)
    modalRef.current?.open()

    // const intervalTimer = setInterval(() => {
    //   setCountdown((prev) => prev - 1)
    // }, 1000)
    // setTimeout(() => {
    //   clearInterval(intervalTimer)
    // }, 3000)
  }

  const gifts = Array.from({ length: 3 }, (_, i) => (
    <GiftItem key={i} id={i} onClick={clickHandler} />
  ))

  return (
    <div className='gifts inner'>
      <h2>선물을 하나만 골라봐~ 실제로 선물로 준다구!</h2>
      <ul className='gifts__contents'>{gifts}</ul>
      <Modal
        title={openedGiftId > -1 ? giftContents[openedGiftId].title : ''}
        ref={modalRef}
      >
        <div className='gift'>
          {/* {countdown > 0 && (
            <span className='gift__countdown'>{countdown}</span>
          )} */}
          {openedGiftId > -1 && (
            <img src={giftContents[openedGiftId].src} alt='생일 선물' />
          )}
          {openedGiftId > -1 && giftContents[openedGiftId].url && (
            <a href={giftContents[openedGiftId].url} target='_blank'>
              자세히 보기
            </a>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Gift
