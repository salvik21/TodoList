import React from 'react';
import Image from 'next/image';
type ImageAtomProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

const ImageAtom = ({ src, alt, width, height }: ImageAtomProps) => {
  return (
    <Image src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default ImageAtom