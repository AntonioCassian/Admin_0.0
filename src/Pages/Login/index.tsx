import React from 'react';
import { Form } from "../../Components/layout/Form"
import { Logo } from "../../Logo"

export const Login = () => {
    return (
        <>
        <div className='text-white' style={{background: '#111827'}}>
            <main className=" d-flex justify-content-center vh-100 w-100">
               <div className="w-400px container align-self-center" style={{width: 400}}>
                    <div className='text-center'>
                    <Logo />
                    </div>
                 <Form />
               </div>
            </main>
        </div>
        </>
    )
}