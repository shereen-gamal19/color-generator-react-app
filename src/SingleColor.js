import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
// rgb , weight coming from the color and our backgrounds will rgb
const SingleColor = ({rgb , weight,index}) => {
//1 to copy the hex color to the clipboard
  const[alert ,setAlert] = useState(false)
  const Thebackgroundcolor = rgb.join(',')
  // there is two ways to convert the rgb to hex , i used this method:
  const hex = rgbToHex(...rgb)
  console.log(hex)
// 3 after we set alert to copy the hex then the statement of alert will be on the square and we want to remove it after a seconds so we will use useEffect
//Use setTimeout in your React components to execute a function or block of code after a period of time specified using the second argument and the time is in millisecond
//A setTimeout timer must be cleared and handle properly, otherwise, you may experience adverse side effects in your code.
//To clear or cancel a timer, you call the clearTimeout(); method, passing in the timer object that you created into clearTimeout().
// we will use setTimeout with useEffect
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false)
      
    },2000);
    //
    return ()=>{  
      clearTimeout(timeout)
    }

  },[alert])
  

//Defined return () => { /*code/* } function inside useEffect runs every time useEffect runs (except first render on component mount) 
//and on component unmount (if you don't display component any more).

  return (// كل لما اللون يغمق الكتابه مش هتبان عليه عشان كدا احنا حطينا شرط ان لو اللون غامق يبقي نغير الستايل ونفتح لون الكتابه
    <article className={`color ${index > 10 && 'color-light'}`}
     style ={{backgroundColor:`rgb(${Thebackgroundcolor})`}}
    //2 here we will make the copy to each square of the colors so we will use navigator.clipboard.writeText(the text that we want to copy it)
    onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(hex)
    }} 
     
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
