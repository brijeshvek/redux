
export const INSERT = 'INSERT';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
export const DISPLAY = "DISPLAY";

export const insert = (data) =>{
    return{
        type:INSERT,
        payload:data
    }
}
export const deleteData = (id) =>{
    return{
        type:DELETE,
        payload:id
    }
}
export const display= () =>{
    return{
        type:DISPLAY
    }
}
export const upadte= (id,data) =>{
    return{
        type:UPDATE,
        payload:{id,data}
    }
}