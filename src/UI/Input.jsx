import React from 'react'


export const Input = (props) => {
    return (
        
            <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            className={props.className}
            required
            />
            
        
    )
}


export const Label = (props) => {
    return (
        
            <label htmlFor={props.id} className={props.className}>{props.label}</label>
        
    )
}



