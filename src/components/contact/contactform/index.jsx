import React from 'react'
import "./style.scss"

import {send} from "emailjs-com"
import {useForm} from "react-hook-form"
import {ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Contactform = () => {

    const{register, handleSubmit, formState:{error}} = useForm();

    const onSubmit = (data) =>{
        send(
            "sservice_19z8yoq",
            "template_kk2tknp",
            data,
            "5CUEwLuTzYM-phBeQ"
        ).then(response =>{ 
            console.log("SUCCESS!", response.status, response.text)
            formSuccess();
        }).catch(err=>{
            console.log("FAILED", err)
        })
    }

    const formSuccess = ()=>{
        toast("Thanks for submitting your query!")
        document.getElementById("query-form").reset();
    }


  return (
    <div className='query-form'>
        <ToastContainer />
        <form id='query-form' onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <input type="text" name='form_name' placeholder='Your Name' />
            </div>
            <div className="input-field">
                <input type="text" name='reply_to' placeholder='Your Email' />
            </div>
            <div className="input-field">
                <input type="number" name='subject' placeholder='Subject' />
            </div>
            <div className="input-field full-width">
                <textarea className='textarea' name='message' placeholder='Your message' />
            </div>
            <button type='submit'>Submit</button>
           
        </form>
    </div>
  )
}

export default Contactform