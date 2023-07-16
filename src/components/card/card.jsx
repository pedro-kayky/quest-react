import  React from 'react'
import './Card.css'

const card= ({children,color}) =>{
    return(
        <div className='Card' style={{backgroundColor:color, color:'lightgreen', textTransform:'uppercase'}}>
            {children}
            </div>
    )
}
card.defaultProps={
    color:'red'

}

export default card