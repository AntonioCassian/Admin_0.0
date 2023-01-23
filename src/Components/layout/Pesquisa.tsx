import React from 'react';

export const Pesquisa = () => {
   return(
    <div className="flex gap-2 my-4">
        <input type='text' className="bg-gray-600 outline-none w-full py-4 px-3 rounded focus-within:ring-2 ring-red-600 text-gray-200" placeholder="Pesquise"  children={undefined}/>
        <button className="bg-gray-900 text-white w-32 hover:bg-gray-400">Pesquisar</button>
    </div>
   )
}