import React, { FormEvent, useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth";
import { LabelInput } from "../LabelInput";
export const Form = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { authenticated, login } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSigIn = async (e:FormEvent) => {
        e.preventDefault();
        console.log("submit", {name, password});
        
        login(name, password);
    }

    return (
        <form onSubmit={handleSigIn} className="d-flex flex-column w-auto" >
            <div className="pb-2">
            <LabelInput
            htmlFor="user"
            label="Úsuario"
            type="text"
            id="user"
            className="py-2 px-3 rounded text-white"
            style={{background: '#A8A29E'}}
            onChange={newValue => setName(newValue)}
            value={name}
            placeholder="Digite seu úsuario"
            />
           
            </div>

            <div className="pb-2">
                
           <LabelInput
            htmlFor="password"
            label="Senha"
            type="password"
            id="password"
            className="py-2 px-3 rounded text-white"
            style={{background: '#A8A29E'}}
            onChange={newValue => setPassword(newValue)}
            value={password}
            placeholder="Digite sua Senha"
            />
            
            </div>
            <button type="submit" className="btn py-2 rounded mt-4" style={{background: '#C00606'}}>
                Enviar
            </button>
        </form>
    )
}