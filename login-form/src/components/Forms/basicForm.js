import React, { useState } from 'react'

import "./src/components/Froms/loginform.css"

 const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");

    const[allEntry , setAllEntry] = useState([]);

const submitForm = (e) => {
   e.preventDefault();

  const newEntry = { email: email, password: password };

  setAllEntry([...allEntry, newEntry]);
  console.log(allEntry);
}

  return (
    <>
    <center> <h1> Gitson Login Form </h1> </center>  

    <form action=" " onSubmit={submitForm}>
        
<div> 
    <label htmlFor="email">Email: </label>
    <input type="text" name="email" id="email"  value={email}
     onChange={(e) => setEmail(e.target.value)} />
</div>

<div> 
    <label htmlFor="password">Password: </label>
    <input type="text" name="password" id="password" value={password} 
    onChange={(e) => setPassword(e.target.value)} />
</div>

<div> 
<label for="telNo">Phone number:</label>
    <input id="telNo" name="telNo" type="tel" value={contact} 
     onChange={(e) => setContact(e.target.value)}  />
</div>



<button type="submit"> Login </button>
    </form>

    <div>
        {
            allEntry.map((curElem) => {
                return (
                    <div className="showDataStyle">
                       <p>{curElem.email}</p>
                       <p>{curElem.password}</p>
                       <p>{curElem.contact}</p>
                    </div>
                )
            })
        }
    </div>
    </>















































/* <>
<center> <h1> Gitson Login Form </h1> </center>   
<form>  
  <div className="container">   
    <label>Username : </label>   
    <input type="text" placeholder="Enter Username" name="username" required />  
    <label>Password : </label>   
    <input type="password" placeholder="Enter Password" name="password" required />  
    <button type="submit">Login</button>   
    <input type="checkbox" defaultChecked="checked" /> Remember me   
    <button type="button" className="cancelbtn"> Cancel</button>   
    Forgot <a href="#"> password? </a>   
  </div>   
</form>
</> */
  )
}
export default BasicForm
