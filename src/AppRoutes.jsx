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
import { ItemProduto } from './Pages/ProDutos/edição/ItemProduto';
import { CadastroProduto } from './Pages/ProDutos/edição/CadastroProduto';
import { EditProduto } from './Pages/ProDutos/edição/EditProduto';
import { Vendas } from './Pages/Vendas';
import { ItemVenda } from './Pages/Vendas/edição/ItemVenda';
import { Clientes } from './Pages/Clientes';
import { ViewCliente } from './Pages/Clientes/edição/Cliente';
import { NotFoud } from './Pages/NotFound';
import "./styles/global.css";


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
    //eslint-disable-next-line
    return(
        // eslint-disable-next-line to the line before
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login /> } />
                    <Route path="/" element={ <Private><Home /></Private> } />
                    <Route path="/lista-produtos" element={ <Private><Produtos /></Private> } />

                    <Route path='/cadastro-Produto' element={<Private><CadastroProduto /> </Private>}/>
                    <Route path='/item-Produto/:id' element={<Private><ItemProduto /></Private>}/>
                    <Route path="/edit-Produto/:id" element={<Private><EditProduto /></Private>} />

                    <Route path='/vendas' element={<Private><Vendas/></Private>}/>
                    <Route path='/vendaItem/:id' element={<Private><ItemVenda/></Private>} />

                    <Route path='/clientes' element={<Private><Clientes /></Private>}/>
                    <Route path='/viewcliente/:id' element={<Private><ViewCliente /> </Private>}/>

                    <Route path="*" element={ <NotFoud />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;