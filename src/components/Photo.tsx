import { useCallback, useRef, useState } from 'react'

import Webcam from 'react-webcam'
import Modal, { ModalHandle } from './Modal'
import html2canvas from 'html2canvas'
interface PhotoProps {}

const Photo = (_: PhotoProps) => {
  const webcamRef = useRef<any>(null)
  const modalRef = useRef<ModalHandle>(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [countdown, setCountdown] = useState<number>(0)

  const capture = useCallback(() => {
    setCountdown(10)
    const intervalTimer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    setTimeout(() => {
      if (countdown <= 0 && webcamRef) {
        const imageSrc = webcamRef.current?.getScreenshot()
        setImgSrc(imageSrc)
        modalRef.current?.open()
        clearInterval(intervalTimer)
      }
    }, 10000)
  }, [webcamRef, modalRef, setImgSrc, setCountdown])

  const download = () => {
    const imageEl = document.getElementById('photo__result')!

    function downloadURI(uri: string, name: string) {
      var link = document.createElement('a')
      link.download = name
      link.href = uri
      document.body.appendChild(link)
      link.click()
    }

    html2canvas(imageEl).then(function (canvas) {
      var myImage = canvas.toDataURL()
      downloadURI(
        myImage,
        `희주생일기념사진(${new Date().toLocaleString()}).png`
      )
    })
  }
  return (
    <div className='photo inner'>
      <h2 className='font-kangwon-bold text-lg'>
        생일 기념으로 사진 찍자! <br />
        (찰칵 버튼 누르면 10초 뒤에 찍힌당!)
      </h2>
      <div className='photo__action'>
        {countdown > 0 && (
          <h3 className='photo__action__countdown'>{countdown}</h3>
        )}
        <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
        <button onClick={capture}>📷 찰칵!</button>
      </div>

      <Modal title='' ref={modalRef}>
        <div className='photo__result'>
          {imgSrc && (
            <>
              <img id='photo__result' src={imgSrc} alt='생일 기념 사진' />
              <button className='photo__result__download' onClick={download}>
                이미지 다운로드 하기
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Photo
