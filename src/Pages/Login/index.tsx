import { Form } from "../../Components/layout/Form"
import { Logo } from "../../Logo"

export const Login = () => {
    return (
        <div className="bg-linear">
            <div className="w-screen h-screen flex flex-col items-center justify-center">
                <Logo />
                <Form />
            </div>
        </div>
    )
}