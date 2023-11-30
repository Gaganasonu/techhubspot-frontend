import React from 'react'

 export const SignUp = () => {
  return (
    <div><br/><br/><br/><br/><br/>
     <form>
     <h2>SignUp</h2>
     <p> Name: <input type='text' name='name' id='' placeholder='Enter name'/><br/>
       email: <input type='email' name='email' id='' placeholder='Enter email'/><br/>
     Phone No: <input type='phone' name='phone' id='' placeholder='phone no'/><br/>
     Address: <input type='text' name='address' id='' placeholder='Enter address'/><br/></p> 
     <button>SignUp</button>
     </form>
      
    </div>
  )
}

