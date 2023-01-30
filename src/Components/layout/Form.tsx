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
        <form onSubmit={handleSigIn} action="GET" className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10" >
            <LabelInput 
                label="Úsuario"
                htmlFor="user"
                type="text"
                id="user"
                value={name}
                onChange={newValue => setName(newValue)}
                placeholder= "Digite seu úsuario" 
            />
            <LabelInput 
                label="Senha"
                htmlFor="password"
                type="password"
                id="Senha"
                value={password}
                onChange={newValue => setPassword(newValue)}
                placeholder= "Digite sua Senha" 
            />
            

            <button type="submit" className="py-3 px-4 text-gray-200 bg-red-600 rounded font-semibold text-sm w-full transition-colors hover:bg-red-400 focus:ring-2 ring-white">
                Enviar
            </button>
        </form>
    )
}