import React from 'react';

export default function InputField({textRows, textCols, placeholder, width, height, type}) {
  return (
    <>

    
      <input
        style=
          {{
          width, height: '35px',
          borderWidth: '1px',
          focus: '2px #6200ee',
          borderRadius: '10px',
          border: '1px solid lightgrey',
          paddingLeft: '20px',
          }}
        className='input-component'
        type={type}
        placeholder={placeholder}
        textarea = {<textarea rows={textRows} cols={textCols}></textarea>}
      /> 


    </>
  );
}