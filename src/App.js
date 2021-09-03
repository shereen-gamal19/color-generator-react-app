import React, { useState } from 'react'
import SingleColor from './SingleColor'
// we install package for the color =>--"check read me file"
import Values from 'values.js'

function App() {//state value to the color that the user will enter 
  const [color , setColor] = useState ('')
  //  state value for the error that the user may doing  when he writing the color 
  const [error , setError] =  useState(false)
  //state value for the list that will appear when the user write the color and we will set a default value or default color
  const [list , setList] = useState(new Values('#f15025').all(10))
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("hi")
    // we will check if the user entered a valid color or not
        // from the library of the color
    try {
      let colors = new Values(color).all(10)
      console.log(colors)

      setList(colors)
      console.log(setList)
    } catch (error) {
      setError(true)
      console.log(error)

      
    }


  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            value={color}
            onChange={(e) =>setColor(e.target.value)}
            placeholder='#f15025'
          // here we will set a style conditionally so we will use templete symbole "if the user entered invlalid color "
            className={`${error ? 'error' : null}`}// we can look at the style of the error in the css folder
          />
          <button className='btn' type='submit'  > Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index)=>{
          console.log(color)
          return <SingleColor key={index} 
          // here we want to put all properties to the component so we will use the spread operator
          {...color} index={index}
          />

        })}

      </section>
    </>
  )
}

export default App
