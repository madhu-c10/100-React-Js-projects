import React, { useState } from 'react';

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const [resume, setResume] = useState("");
    const [selectedOpt, setSelectedOpt] = useState("");
    const [message, setMessage] = useState("");

    const handleClick=(e)=>{
        e.preventDefault()

        console.log(
            name,
            email,
            gender,
            resume,
            selectedOpt,
            message
        );
    }

    return (
        <>
            <section>
                <form>
                    <input
                        type='text' id='name'
                        name='name' placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input><br />
                    <input
                        type='email' id='email'
                        name='email'
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input><br />
                    <input type='radio'
                        id='male' name='male'
                        checked={gender === "male"}
                        value={"male"}
                        onChange={(e) => setGender(e.target.value)}
                    ></input>male<br />
                    <input
                        type='radio'
                        id='female' name='female'
                        checked={gender === "female"}
                        value={"female"}
                        onChange={(e) => setGender(e.target.value)}
                    ></input>Female<br />
                    <label for="cars">Choose a car:</label>

                    <select
                     onChange={(e)=>setSelectedOpt(e.target.value)} 
                    value={selectedOpt} name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select><br />
                    <input 
                    type='file' 
                    name='file' 
                    id='file' 
                    placeholder='Upload Your Resume'
                    onChange={(e)=>setResume(e.target.files[0])}
                    ></input><br />
                    <textarea
                     placeholder='Enter Your Message'
                     onChange={(e)=>setMessage(e.target.value)}
                     >

                    </textarea>
                    <button 
                    type='submit'
                    onClick={(e)=>handleClick(e)}
                    >Submit</button>
                </form>
            </section>
            {/* <section>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col'>
                            <form>
                                <label>First Name</label>
                                <input className='mb-2' type='text' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}></input><br />
                                <label>E-mail</label>
                                <input className='mb-2' type='email' placeholder='Enter Your E-mail' onChange={(e) => setEmail(e.target.value)}></input><br />
                                <label>Gender</label>
                                <label style={{ marginLeft: "1rem" }} >Male</label><input onChange={(e) => setGender(e.target.value)} name='male' id='male' value={"male"} type='radio' checked={gender === "male"}></input>
                                <label style={{ marginLeft: "1rem" }}>Female</label><input type='radio' onChange={(e) => setGender(e.target.value)} name='female' id='female' value={"female"} checked={gender === "female"}></input><br />
                                <label>Uploade Resume</label>
                                <input type='file' onChange={(e) => setFile(e.target.files[0])}></input><br />
                                <label>select your choise</label>
                                <select  value={choise} onChange={(e) => setChoise(e.target.value)} className="form-select" aria-label="Default select example">
                                    <option  selected>Open this select menu</option>
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                </select><br />
                                <label>Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)}></textarea><br />
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
            </section> */}
        </>
    )
}

export default Form;