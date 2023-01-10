import { useContext } from 'react';

import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";



import { AuthProvider,AuthContext } from "./contexts/auth";
import { Login } from './Pages/Login';
import { Web } from './Pages/Web';

const AppRoutes = () => {
   const Private = ({children}) => {
     const { authenticated, loading } =  useContext(AuthContext);
        if(loading) {
            return <div className='loading'> Carregando...</div>
        }
         if(!authenticated) {
            return <Navigate to="/login" />
         }
         return children;
   }

    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login /> } />
                    <Route path="/" element=
                    {<Private> 
                        <Web /> 
                    </Private>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;