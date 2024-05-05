import React, { useState } from 'react'
import Button from './Button'

interface Props {
    children: string,
    maxChar: number
}

const ExpendableText = ({children, maxChar}: Props) => {

    const [textExpanded, setTextState] = useState(false);

    const handleClick = () => {
        setTextState(!textExpanded);
    }

    const text = textExpanded ? children : children.substring(0, maxChar);


  return (
    <>
        <p>{text}...</p>
        <Button onClick={handleClick}>{textExpanded ? "Less" : "More"}</Button>
    </>
  )
}

export default ExpendableText