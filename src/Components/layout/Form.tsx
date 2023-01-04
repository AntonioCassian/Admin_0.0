import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const database = [
        {
            user: "antonio",
            password: "123456"
        }
    ]
    const navigate = useNavigate();
    const data = database[0];
    const [isUserSignedIn, setUserSignedIn] = useState(false);
    const handleSigIn = async (e:FormEvent) => {
        if(user === data.user  && password === data.password){
         setUserSignedIn(true);
            navigate('/home')
        }
    }

    return (
        <form onSubmit={handleSigIn} action="" className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10" >
            <label htmlFor="user" className="pb-5">
                <p className="text-sm font-semibold">Úsuario</p>

                <input 
                    type="text"
                    id="user"
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => setUser(e.target.value)}    
                    value={user}
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