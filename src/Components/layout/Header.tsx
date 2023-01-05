import { Logo } from "../../Logo";
import { Link } from 'react-router-dom';
export function Header() {
    return(
        <header className="">
            <Link to='/home'>
                <Logo />
            </Link>
        </header>
    )
}