/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, MouseEvent } from 'react'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import 'twin.macro'
interface GalleryProps {
  images: string[]
  className?: string
}

export const Gallery: React.FC<GalleryProps> = ({ images, className }) => {
  const [mainIndex, setMainIndex] = useState(0)
  const [shownIndex, setShownIndex] = useState(0)

  const handleThumbnailClick = (index: number) => {
    setMainIndex(index)
  }

  const handleThumbnailHover = (
    index: number,
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (event.type === 'mouseenter') {
      setShownIndex(index)
    } else if (event.type === 'mouseleave') {
      setShownIndex(mainIndex)
    }
  }

  const getImageSafe = (index: number): string => {
    if (index < 0) {
      return images[images.length - 1]
    } else if (index >= images.length) {
      return images[0]
    }
    return images[index]
  }

  return (
    <div tw="flex w-full flex-col items-start gap-y-md" className={className}>
      <div tw="relative h-auto w-full self-start">
        <Image
          src={getImageSafe(shownIndex)}
          layout="responsive"
          width={100}
          height={100}
          alt="Main Product Image"
          style={{
            borderRadius: '12px',
            objectFit: 'contain',
          }}
          sizes="50vw"
        />
      </div>
      <div tw="flex space-x-2 self-start overflow-x-scroll w-full">
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={index}
            className={`relative h-16 w-16 flex-shrink-0 cursor-pointer rounded-[4px] ${
              mainIndex === index ? 'border-gray-300 border' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
            onMouseEnter={(event) => handleThumbnailHover(index, event)}
            onMouseLeave={(event) => handleThumbnailHover(index, event)}
          >
            <Image
              src={image}
              fill
              alt={`Thumbnail ${index + 1}`}
              style={{
                borderRadius: '4px',
                objectFit: 'cover',
              }}
              sizes="64px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
