import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREMENT ,DECREMENT, PURCHASE_BOOK } from './Redux/action'

function CouterComponents() {
    const count = useSelector((state)=>state.count)
    const books = useSelector((state)=>state.books)
    const dispatch =useDispatch()
  return (
    <div>
        <h3>Couter Componet</h3>
        <h4>couter is: {count} </h4>
        <button onClick={()=>dispatch({type:INCREMENT})}>Add</button>
        <button onClick={()=>dispatch({type:DECREMENT})}>Minus</button>
        <br />
        <h3>Book Parchesh is :{books}</h3>
        <button onClick={()=>dispatch({type:PURCHASE_BOOK})}>Purchase Book</button>
    </div>
  )
}

export default CouterComponents
