import { FormEvent, useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth";

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
            <label htmlFor="user" className="pb-5">
                <p className="text-sm font-semibold">Úsuario</p>

                <input 
                    type="text"
                    id="user"
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => setName(e.target.value)}    
                    value={name}
                    placeholder="Digite seu úsuario" 
                />

            </label>

            <label htmlFor="password" className="pb-5">
                <p className="text-sm font-semibold">Senha</p>

                <input 
                    type="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}    
                    value={password}
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    placeholder="Digite sua senha" 
                />

            </label>

            <button type="submit" className="py-3 px-4 text-gray-200 bg-red-600 rounded font-semibold text-sm w-full transition-colors hover:bg-red-400 focus:ring-2 ring-white">
                Enviar
            </button>
        </form>
    )
}