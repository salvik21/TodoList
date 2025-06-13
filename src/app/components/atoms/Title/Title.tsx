import React, { Children } from 'react'

type TitleProps = {
  children: string;
    className?: string;
};


export default function Title ({ children, className }: TitleProps) {
  return (
    <>
      <h1 className={className}>
        {children}
      </h1>
    </>
  )
}
