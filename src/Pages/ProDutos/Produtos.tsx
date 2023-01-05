import { Header } from "../../Components/layout/Header";
import { Nav } from "../../Components/layout/Nav";


export function Produtos (){
    return(
        <>
        <Header/>
        <div className="flex gap-15 justify-items-center">
            <Nav />
            <div className="text-center flex-1 px-16">
                <h4 className="text-md">Lista de Produtos</h4>
                <div className="flex gap-2 my-4">
                    <input type='text' className="bg-gray-600 outline-none w-full py-4 px-3 rounded focus-within:ring-2 ring-red-600 text-gray-200" placeholder="Pesquise"  children={undefined}/>
                    <button className="bg-gray-900 w-32 hover:bg-gray-400">Pesquisar</button>
                </div>
                <div className="row">
                <table className="w-full text-center">
                    <thead className="text-md bg-gray-800 text-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">Quantidade</th>
                            <th scope="col" className="py-3 px-6">Q-Minima</th>
                            <th scope="col" className="py-3 px-6">Valor</th>
                            <th scope="col" className="py-3 px-6">Marca</th>
                            <th scope="col" className="py-3 px-6">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-400 border-black border-b" >
                            <td className="border-b-blackpy-4 px-6">20</td>
                            <td className="border-b-blackpy-4 px-6">10</td>
                            <td className="border-b-blackpy-4 px-6">30,00</td>
                            <td className="border-b-blackpy-4 px-6">Polo</td>
                            <td className="border-b-blackpy-4 px-6"><a href="#">visualizar</a></td>
                        </tr>
                        <tr className="bg-gray-400 border-black border-b" >
                            <td className="border-b-blackpy-4 px-6">20</td>
                            <td className="border-b-blackpy-4 px-6">10</td>
                            <td className="border-b-blackpy-4 px-6">30,00</td>
                            <td className="border-b-blackpy-4 px-6">Polo</td>
                            <td className="border-b-blackpy-4 px-6"><a href="#">visualizar</a></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>        
    </>
    )
}