import './ProductImage.css'
import { useState } from 'react'
import { ProductModal } from '../ProductModal/ProductModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const ProductImage = () => {
  const [currentImage, setCurrentImage] = useState<string>('/images/image-product-1.jpg')
  const [showModal, setShowModal] = useState<boolean>(false)

  const product1 = '/images/image-product-1.jpg'
  const product2 = '/images/image-product-2.jpg'
  const product3 = '/images/image-product-3.jpg'
  const product4 = '/images/image-product-4.jpg'

  const images: string[] = [product1, product2, product3, product4]

  const handleImageCyclePrev = () => {
    const imageIndex = images.indexOf(currentImage)
    const newIndex = imageIndex - 1

    if (newIndex < 0) setCurrentImage(images[images.length - 1])
    else return setCurrentImage(images[newIndex])
  }

  const handleImageCycleNext = () => {
    const imageIndex = images.indexOf(currentImage)
    const newIndex = imageIndex + 1

    if (newIndex < images.length) setCurrentImage(images[newIndex])
    else return setCurrentImage(images[0])
  }

  return (
    <>
      { showModal && <ProductModal setShowModal={ setShowModal } /> }
      <section className="productImageSelection-Container">
        <picture className="productImage-Container" onClick={ () => setShowModal(true) }>
          <img 
            src={ currentImage }
            alt="sneakers" 
            className="productImage" 
            />
        </picture>
        <button className="productImagePrevButton" onClick={ handleImageCyclePrev }>
          <FontAwesomeIcon icon={ faAngleLeft } />
        </button>
        <button className="productImageNextButton" onClick={ handleImageCycleNext }>
          <FontAwesomeIcon icon={ faAngleRight } />
        </button>
        <div className="productImage-Selector">
          <picture 
            className={ currentImage === product1 ? "productImageChoice-Container currentImage" : "productImageChoice-Container" }
            onClick={ () => setCurrentImage('/images/image-product-1.jpg') }>
            <img 
              src='/images/image-product-1.jpg' 
              alt="sneakers" 
              className="productImageChoice" 
              />
          </picture>
          <picture 
            className={ currentImage === product2 ? "productImageChoice-Container currentImage" : "productImageChoice-Container" }
            onClick={ () => setCurrentImage('/images/image-product-2.jpg') }>
            <img 
              src='/images/image-product-2.jpg'
              alt="sneakers" 
              className="productImageChoice"
              />
          </picture>
          <picture 
            className={ currentImage === product3 ? "productImageChoice-Container currentImage" : "productImageChoice-Container" }
            onClick={ () => setCurrentImage('/images/image-product-3.jpg') }>
            <img 
              src='/images/image-product-3.jpg'
              alt="sneakers" 
              className="productImageChoice"
              />
          </picture>
          <picture 
            className={ currentImage === product4 ? "productImageChoice-Container currentImage" : "productImageChoice-Container" }
            onClick={ () => setCurrentImage('/images/image-product-4.jpg') }>
            <img 
              src='/images/image-product-4.jpg'
              alt="sneakers" 
              className="productImageChoice"
              />
          </picture>
        </div>
      </section>
    </>
  )
}