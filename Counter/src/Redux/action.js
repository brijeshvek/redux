
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const PURCHASE_BOOK = 'PURCHASE_BOOK';

export const increment = ()=>{
    return {type:INCREMENT}
}
export const decrement = () =>{
    return {type:DECREMENT}
}
export const parchesh_book = () =>{
    return {type :PURCHASE_BOOK}
}