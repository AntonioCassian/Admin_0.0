import React, { useContext } from 'react';
import { Logo } from "../../Logo";
import { Link } from 'react-router-dom';
import { Bell, UserCircle } from 'phosphor-react'
import { AuthContext } from "../../contexts/auth";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

//<span size='md' className="font-semibold text-black mr-1" >{user.name}</span>
export function Header() {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    

    return(
        <header>
            <div className="d-flex justify-content-between mx-5">
                <Link to='#'>
                    <Logo />
                </Link>
                <div>
                <div className="d-flex">
                    <UserCircle  className="text-gray mt-3 nav-link" style={{width: 45, height: 45}}/>
                    <DropdownButton className='mt-3 text-black'  id="dropdown" title="">
      <Dropdown.Item href="#/action-1" onClick={handleLogout}>Sair</Dropdown.Item>
      
    </DropdownButton>
                    <div>
                        
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}
