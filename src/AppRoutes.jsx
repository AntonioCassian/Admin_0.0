import React, { useContext } from 'react';

import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";



import { AuthProvider,AuthContext } from "./contexts/auth";
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Produtos } from './Pages/ProDutos';
import { Vendas } from './Pages/Vendas';
import { NotFoud } from './Pages/NotFoun';

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
                    <Route path="/" element={<Private> <Home /> </Private>} />
                    <Route path="/lista-produtos" element={<Private> <Produtos /> </Private>} />
                    <Route path="/vendas" element={ <Vendas />} />
                    <Route path="*" element={ <NotFoud />} />

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;