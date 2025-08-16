import React from 'react'

function handleSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
    console.log(event.target.innerText)
}

const Form = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Write something' />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form
