import giftOpenImg from '../assets/gift-open.png'
import giftNotOpenImg from '../assets/gift-not-open.png'
import jillbyjillBackpack from '../assets/jillbyjill_backpack.jpg'
import wonderrustBackpack from '../assets/wonderrust-backpack.png'
import zigzagEaring from '../assets/zigzag-earing.png'
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
    src: wonderrustBackpack,
    title: '룰루레몬 원더러스트 백팩',
    url: 'https://www.lululemon.co.kr/ko-kr/p/%EC%9B%90%EB%8D%94%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B0%B1%ED%8C%A9-*%EB%AF%B8%EB%8B%88-14l/145301564.html',
  },
  {
    src: zigzagEaring,
    title: '귀걸이',
    url: 'https://zigzag.kr/catalog/products/112164839',
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
  const [openedGiftId, setOpenedGiftId] = useState<number>(0)
  const clickHandler = (id: number) => {
    setOpenedGiftId(id)
    modalRef.current?.open()
  }

  const gifts = Array.from({ length: 4 }, (_, i) => (
    <GiftItem key={i} id={i} onClick={clickHandler} />
  ))

  return (
    <ul className='gifts inner'>
      {gifts}
      <Modal title={giftContents[openedGiftId].title} ref={modalRef}>
        <div className='gift'>
          <img src={giftContents[openedGiftId].src} alt='생일 선물' />
          <a href={giftContents[openedGiftId].url} target='_blank'>
            자세히 보기
          </a>
        </div>
      </Modal>
    </ul>
  )
}

export default Gift
