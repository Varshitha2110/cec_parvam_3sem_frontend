import React from 'react'

export default function OrderedComponent({text,value,Array}) {
  return (
    <>
        <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ol>
        <h1> {text}</h1>
        <h1> {value}</h1>
        <h1>{Array}</h1>
    </>

  
  )
}
