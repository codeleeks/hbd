import giftOpenImg from '../assets/gift-open.png'
import giftNotOpenImg from '../assets/gift-not-open.png'
import wonderrustBackpack from '../assets/wonderrust-backpack.png'
import malenka from '../assets/malenka.png'
import { useRef, useState } from 'react'
import Modal, { ModalHandle } from './Modal'

const giftContents = [
  {
    src: wonderrustBackpack,
    title: '룰루레몬 원더러스트 백팩',
    url: 'https://www.lululemon.co.kr/ko-kr/p/%EC%9B%90%EB%8D%94%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B0%B1%ED%8C%A9-25l/142177327.html?CID=ps_google_campaign_upper_dm_ko-kr_A_prospecting_newcampaign_pmax&gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyVxw5mW-0syN1RKDFPMasJVxS6YAcMhjoDfcEYAO0el5F2piwfhg5EaAngzEALw_wcB',
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
  const [countdown, setCountdown] = useState<number>(0)
  const clickHandler = (id: number) => {
    setOpenedGiftId(id)
    setCountdown(3)
    modalRef.current?.open()

    const intervalTimer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)
    setTimeout(() => {
      clearInterval(intervalTimer)
    }, 5000)
  }

  const gifts = Array.from({ length: 3 }, (_, i) => (
    <GiftItem key={i} id={i} onClick={clickHandler} />
  ))

  return (
    <div className='gifts inner'>
      <h2>선물을 골라봐</h2>
      <ul className='gifts__contents'>{gifts}</ul>
      <Modal
        title={
          countdown <= 0 && openedGiftId > -1
            ? giftContents[openedGiftId].title
            : ''
        }
        ref={modalRef}
      >
        <div className='gift'>
          {countdown > 0 && (
            <span className='gift__countdown'>{countdown}</span>
          )}
          {countdown <= 0 && openedGiftId > -1 && (
            <img src={giftContents[openedGiftId].src} alt='생일 선물' />
          )}
          {countdown <= 0 &&
            openedGiftId > -1 &&
            giftContents[openedGiftId].url && (
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
