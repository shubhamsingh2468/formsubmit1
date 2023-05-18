import React, { useState } from 'react'

function App() {
  const[form, setForm]=useState({})
  function handleSubmit(e){
   // console.log(e.target.value, e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  }
  function onSubmit(e){
    e.preventDefault()
    console.log(form)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='text'>user name</label>
        <input type='text' name='username' placeholder='enter username' onChange={handleSubmit}></input>
        <label htmlFor='text'>password</label>
        <input type='text' name='password' placeholder='password' onChange={handleSubmit}></input>
        <button type='text'>click me</button>
        
      </form>
      
    </div>
  )
}

export default App 

