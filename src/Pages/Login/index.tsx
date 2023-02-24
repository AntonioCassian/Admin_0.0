import React from 'react';
import { Form } from "../../Components/layout/Form"
import { Logo } from "../../Logo"

export const Login = () => {
    return (
        <>
        <div className='text-white' style={{background: '#111827'}}>
            <main className=" d-flex vh-100 vw-100">
               <div className="w-400px" style={{width: 400}}>
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