import Modal from 'react-modal'
import { useState } from 'react'

export default function ImageGallery({ images }) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const openModal = (index) => {
        setCurrentImage(index)
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    onClick={() => openModal(index)}
                    className="cursor-pointer"
                />
            ))}

            <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
                <button onClick={closeModal} className="close-button">X</button>
                <button onClick={prevImage} className="prev-button">Previous</button>
                <img src={images[currentImage]} alt={`Gallery Image ${currentImage + 1}`} className="modal-image" />
                <button onClick={nextImage} className="next-button">Next</button>
            </Modal>
        </div>
    )
}
