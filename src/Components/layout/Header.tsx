import { useContext } from 'react';
import { Logo } from "../../Logo";
import { Link } from 'react-router-dom';
import { Bell, UserCircle } from 'phosphor-react'
import { AuthContext } from "../../contexts/auth";

//<span size='md' className="font-semibold text-black mr-1" >{user.name}</span>
export function Header() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return(
        <header>
            <div className="flex justify-between">
                <Link to='/home'>
                    <Logo />
                </Link>
                <div>
                <div className="flex items-center gap-2 mt-7">
                    <UserCircle  className="text-gray-400 w-8 h-8"/>
                    <div>
                        <Bell  className="text-gray-400 w-8 h-8"/>
                    </div>
                    <div>
                        <button onClick={handleLogout} >Sair</button>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}