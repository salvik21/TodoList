import React, { Children } from 'react'

type TitleProps = {
  children: string;
    className?: string;
};


const Title = ({ children, className }: TitleProps) => {
  return (
    <>
      <h1 className={className}>
        {children}
      </h1>
    </>
  )
}

export default  Title;
