import React, { useState } from 'react'
import './style.css'

export default function Form() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return(
        <div className='container'>
            <div className='container-login'>
                <div className='wrap-login'>
                    <form className='login-form'>
                        <span className='login-form-title'>Login</span>
                        <span className='login-form-title'>                            
                        </span>
                        <div className='wrap-input'>
                            {/* Código para reconhecimento de variáveis dentro do input email*/}
                            <input 
                                className= {email !== "" ? 'has-val input' : 'input'} 
                                type='email' 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>

                        <div className='wrap-input'>
                            {/*Validação para reconhecimento de variáveis dentro do input password*/}
                            <input 
                                className={password !== "" ? 'has-val input' : 'input'}  
                                type='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}                            
                            />
                            <span className='focus-input' data-placeholder='Password'></span>
                        </div>

                        <div className='container-login-form-btn'>
                            <button className='login-form-btn'>Login</button>
                        </div>

                        <div className='text-center'>
                            <span className='txt1'>Cadastre-se</span>
                            <a className='txt2' href='#'>Criar conta</a>
                        </div>




                    </form>
                </div>
            </div>
            
        </div>
    )
}