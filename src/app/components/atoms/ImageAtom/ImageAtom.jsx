import React from 'react';
import Image from 'next/image';

const ImageAtom = ({ src, alt, width, height }) => {
  return (
    <Image 
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default ImageAtom