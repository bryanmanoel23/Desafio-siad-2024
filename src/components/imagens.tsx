import Image from "next/image";
import fundo from "../components/assets/imgbackground.jpeg";
import logosiad from "../components/assets/logosiad.jpeg";

export function Imagem(){
    return(
      <>
        <Image src={fundo} className="w-[799px] h-[1024px]" alt="logo fundo" />  

        <Image src={logosiad} className="absolute w-[236px] h-[81px] top-[89px] left-[996px] gap-0 " alt="logo siad" /> 
      </>
    );
}