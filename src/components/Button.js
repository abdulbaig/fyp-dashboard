import React from 'react';



const Button = ({width, height, buttonName, backgroundColor, color, fontWeight}) => {
    
  return (
      <>
        
        <button
           
            style={{
                width,
                height,
                backgroundColor,
                color,
                borderRadius: '5px',
                border: '1px solid',
                borderColor: '#02a95c',
                fontWeight
            }
        }
            className="submit-button"
            
        
        >
        
        {buttonName}
            
        </button>
        
      </>
  )
}
export default Button
