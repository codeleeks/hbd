import { useRef } from 'react'
import letterImg from '../assets/letter.png'
interface LetterProps {}

const Letter = (_: LetterProps) => {
  const envelopeRef = useRef<HTMLElement>(null)
  const openLetterHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    envelopeRef.current?.classList.add('--open')
  }

  const closeLetterHandler = () => {
    const classList = envelopeRef.current?.classList
    if (classList?.contains('--open')) {
      classList.remove('--open')
    }
  }

  return (
    <section className='letter inner' onClick={closeLetterHandler}>
      <section className='envelope' ref={envelopeRef}>
        <div className='top'></div>
        <div className='bottom'></div>
        <div className='circle' onClick={openLetterHandler}></div>
        <div className='letter__contents'>
          <div className='letter__contents__container'>
            <div className='letter__contents__scroll-area'>
              <img src={letterImg} alt='희주에게 주는 생일 편지' />
            </div>
          </div>
          {/* <img src={letterImg} alt='편지 샘플' /> */}
        </div>
      </section>
    </section>
  )
}

export default Letter
