import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  title: string
  children: JSX.Element
}
export type ModalHandle = {
  open: () => void
  close: () => void
}

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
  const { title, children } = props
  const modalRef = useRef<HTMLDialogElement>(null)
  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          modalRef.current!.showModal()
        },
        close() {
          modalRef.current!.close()
        },
      }
    },
    []
  )

  return createPortal(
    <dialog ref={modalRef}>
      <form method='dialog'>
        <div className='dialog__header'>
          <h2>{title}</h2>
        </div>
        <div className='dialog__contents'>{children}</div>
        <div className='dialog__footer'>
          <button>닫기</button>
        </div>
      </form>
    </dialog>,
    document.getElementById('modal')!
  )
})

export default Modal
