import React, { useState } from 'react';

function Form() {


    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[gender,setGender]=useState("");
    const[file,setFile]=useState();
    const[choise,setChoise]=useState("");
    const[message,setMessage]=useState("")

    const handleSubmit=(e)=>{
        console.log(name,email,gender,file);
        e.preventDefault();
    }

    return (
        <>
            <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col'>
                            <form>
                                <label>First Name</label>
                                <input className='mb-2' type='text' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}></input><br />
                                <label>E-mail</label>
                                <input className='mb-2' type='email' placeholder='Enter Your E-mail' onChange={(e)=>setEmail(e.target.value)}></input><br />
                                <label>Gender</label>
                                <label style={{ marginLeft: "1rem" }} >Male</label><input onChange={(e)=>setGender(e.target.value)} value={"male"} type='radio'></input>
                                <label style={{ marginLeft: "1rem" }}>Female</label><input type='radio' onChange={(e)=>setGender(e.target.value)} value={"female"}></input><br />
                                <label>Uploade Resume</label>
                                <input type='file' onChange={(e)=>setFile(e.target.files[0])}></input><br />
                                <label>select your choise</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value={choise} onChange={(e)=>setChoise(e.target.value)} selected>Open this select menu</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select><br/>
                                <label>Message</label>
                                <textarea onChange={(e)=>setMessage(e.target.value)}></textarea><br/>
                                <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form;