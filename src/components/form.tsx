export function Form(){

    return(

        <form className="items-center justify-center">

        <div className="w-[609px] h-[904px] top-[69px] left-[815px] gap-0 border-r-radius shadow-shadows absolute ">

          <div className="absolute flex flex-col px-[34px] mt-[187px]"> 

          <div className="flex flex-col mb-[16px]">     

          <label className=" text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[256px] left-[849px] gap-0 mb-[5px]" htmlFor="name">Nome completo:</label>

          <input className="text-preto h-[45px] w-[541px] top-[285px] left-[849px] rounded-inradius border border-solid border-l-cinzaclaro gap-0 px-[17px] pt-[11px] pb-[10px] rounded-[10px] text-20" type='text' placeholder='Maria da Silva' />
        
          </div>

          <div className="flex flex-col mb-[13px]" >

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[346px] left-[849px] gap-0 mb-[8px]" htmlFor="tel">Telefone:</label>

          <input className="text-preto w-[541px] h-[45px] top-[378px] left-[849px] gap-0 px-[17px] pt-[13px] pb-[8px] border border-solid border-l-cinzaclaro rounded-[10px] text-20" type='number' placeholder='(27)3700-0000'/>

          </div>

          <div className="flex flex-col mb-[11px]">

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[436px] left-[849px] gap-0 mb-[10px]" htmlFor="email">E-mail:</label>

          <input className="text-preto w-[541px] h-[45px] top-[470px] left-[849px] gap-0 rounded-[10px] px-[17px] pt-[11px] pb-[10px] border border-solid border-l-cinzaclaro text-[20px]" type='email' placeholder='maria@gmail.com'/>

          </div>

          <div className="flex flex-col mb-[18px]">

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[526px] left-[849px] gap-0 mb-[10px]" htmlFor="segmento">Segmento:</label>

          <input className="text-preto w-[541px] h-[45px] top-[560px] left-[849px] px-[17px] pt-[11px] pb-[10px] rounded-[10px] border border-solid border-l-cinzaclaro text-20"name='segmento' placeholder='Selecione um segmento'/>

          </div>

          <div className="flex flex-col">

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[238px] h-[24px] top-[683px] left-[849px] gap-0 mb-[14px]" htmlFor="howtohelp">Como podemos ajudar?</label>

          <input className="text-preto w-[541px] h-[98px] top-[661px] left-[849px] px-[17px] py-2 border border-solid border-l-cinzaclaro rounded-[10px] text-20" />

          </div>
        
          <div className="mt-[51px] mb-[14px]">
          <button className="w-[541px] h-[51px] top-[810px] left-[849px] gap-0 rounded-[5px] bg-cinzaescuto font-inter text-[16px] font-semibold leading-[19.36px] text-center ">Receber Dados</button>
          </div>
         
          <button className="w-[541px] h-[51px] top-[875px] left-[849px] gap-5 rounded-[5px] bg-azulbutton">Enviar</button>
         
          </div>

          </div>

          </form>

    );

}