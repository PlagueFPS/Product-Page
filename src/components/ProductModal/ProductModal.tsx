import './ProductModal.css'
import { useState, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductModal: FC<Props> = ({ setShowModal }) => {
  const [currentModalImage, setCurrentModalImage] = useState<string>('/images/image-product-1.jpg')
  
  const product1 = '/images/image-product-1.jpg'
  const product2 = '/images/image-product-2.jpg'
  const product3 = '/images/image-product-3.jpg'
  const product4 = '/images/image-product-4.jpg'
  
  const modalImages: string[] = [product1, product2, product3, product4]

  const handleModalPrevCycle = () => {
    const imageIndex = modalImages.indexOf(currentModalImage)
    const newIndex = imageIndex - 1

    if (newIndex < 0) setCurrentModalImage(modalImages[modalImages.length - 1])
    else return setCurrentModalImage(modalImages[newIndex])
  }

  const handleModalNextCycle = () => {
    const imageIndex = modalImages.indexOf(currentModalImage)
    const newIndex = imageIndex + 1

    if (newIndex < modalImages.length) setCurrentModalImage(modalImages[newIndex])
    else return setCurrentModalImage(modalImages[0])
  }

  return (
    <div className='productModal-Container'>
      <div className="productModal-Image-Container">
        <picture className="productModalImage-Container">
          <img 
          src={ currentModalImage } 
          alt="Sneakers" 
          className="productModalImage" 
          />
        </picture>
        <button className="productModalPrevButton" onClick={ handleModalPrevCycle }>
          <FontAwesomeIcon icon={ faAngleLeft } />
        </button>
        <button className="productModalNextButton" onClick={ handleModalNextCycle }>
          <FontAwesomeIcon icon={ faAngleRight } />
        </button>
        <button className="productModalCloseButton" onClick={ () => setShowModal(false) }>
          <FontAwesomeIcon icon={ faTimes } />
        </button>
      </div>
      <div className="productModalImage-Selector">
        <picture 
          className={ currentModalImage === product1 ? "productModalImageChoice-Container currentModalImage" : "productModalImageChoice-Container" }
          onClick={ () => setCurrentModalImage('/images/image-product-1.jpg') }>
          <img 
            src='/images/image-product-1.jpg' 
            alt="sneakers" 
            className="productModalImageChoice" 
            />
        </picture>
        <picture 
          className={ currentModalImage === product2 ? "productModalImageChoice-Container currentModalImage" : "productModalImageChoice-Container" }
          onClick={ () => setCurrentModalImage('/images/image-product-2.jpg') }>
          <img 
            src='/images/image-product-2.jpg'
            alt="sneakers" 
            className="productModalImageChoice"
            />
        </picture>
        <picture 
          className={ currentModalImage === product3 ? "productModalImageChoice-Container currentModalImage" : "productModalImageChoice-Container" }
          onClick={ () => setCurrentModalImage('/images/image-product-3.jpg') }>
          <img 
            src='/images/image-product-3.jpg'
            alt="sneakers" 
            className="productModalImageChoice"
            />
        </picture>
        <picture 
          className={ currentModalImage === product4 ? "productModalImageChoice-Container currentModalImage" : "productModalImageChoice-Container" }
          onClick={ () => setCurrentModalImage('/images/image-product-4.jpg') }>
          <img 
            src='/images/image-product-4.jpg'
            alt="sneakers" 
            className="productModalImageChoice"
            />
        </picture>
      </div>
    </div>
  )
}
