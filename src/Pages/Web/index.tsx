import React from "react";
import { Header } from "../../Components/layout/Header";
import { Nav } from "../../Components/layout/Nav";
import { Logo } from "../../Logo";
export const Home = () =>  {
    return(
        <>
        <Header />
            <section className="flex w-full gap-20">
                <Nav />
                <div className="flex flex-col gap-8"> 
                    <input type="date" name="" id="" />
                    <div>
                    <p className="text-black text-xl"> Valor do dia:</p>
                    <p className="text-black pt-2">R$90,00</p>
                    </div>
                    <div>
                    <p className="text-black text-xl"> Valor mensal:</p>
                    <p className="text-black pt-2">R$90,00</p>
                    </div>
                </div>

                <div className="">
                    <Logo />
                </div>
            </section>
        </>
    );
};