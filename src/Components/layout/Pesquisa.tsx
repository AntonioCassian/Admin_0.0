import React from 'react';

export const Pesquisa = () => {
   return(
    <div className="d-flex my-2 justify-content-center">
        <input type='text' className="bg-gray w-25 py-2 px-1 rounded" placeholder="Pesquise" />
        <button style={{background:'#111827'}} className="text-white">Pesquisar</button>
    </div>
   )
}