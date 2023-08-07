import React from 'react'
import "./style.scss"

import {send} from "emailjs-com"
import {useForm} from "react-hook-form"
import {ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const Contactform = () => {

    const{register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        send(
            "service_19z8yoq",
            "template_k14hb9d",
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
                <input type="text" name='form_name' placeholder='Your Name' {...register("from_name", {
                    required: "Name is required"
                })} />
                {errors.from_name?.message && (
                    <p className='errors'>{errors.from_name?.message}</p>
                )}
            </div>
            <div className="input-field">
                <input type="text" name='reply_to' placeholder='Your Email' {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                })} />
                {errors.reply_to?.message && (
                    <p className='errors'>{errors.reply_to?.message}</p>
                )}
            </div>
            <div className="input-field">
                <input type="text" name='phone_number' placeholder='Your contact number' {...register("phone_number", {
                    required: "Contact number is required", 
                    minLength : {
                        value : 10,
                        message: "Enter a valid number"
                    }
                })} />
                {errors.phone_number?.message && (
                    <p className='errors'>{errors.phone_number?.message}</p>
                )}
            </div>
            <div className="input-field">
                <input type="text" name='subject' placeholder='Subject' {...register("subject", {
                    required: "Subject is required", 
                    minLength : {
                        value : 10,
                        message: "Minimum 10 character required"
                    }
                })} />
                {errors.subject?.message && (
                    <p className='errors'>{errors.subject?.message}</p>
                )}
            </div>
            <div className="input-field full-width">
                <textarea className='textarea' name='message' placeholder='Your message' {...register("message", {
                    required: "Message is required", 
                    minLength : {
                        value : 20,
                        message: "Minimum 20 character required"
                    },
                    maxLength : {
                        value : 500,
                        message: "Maximum 500 character allowed"
                    }
                })} />
                {errors.message?.message && (
                    <p className='errors'>{errors.message?.message}</p>
                )}
            </div>
            <button type='submit'>Submit</button>
           
        </form>
    </div>
  )
}

export default Contactform