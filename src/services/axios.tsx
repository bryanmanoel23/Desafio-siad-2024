// import axios from "axios";

// const getData = async () =>{
//     const response = await axios.get('https://fjinfor.ddns.net/fvendas/api/api_contato.php?funcao=get_contato_email&email=teste1@gmail.com')

//     return response.data
// }

// const getData2 = async () =>{
//     const response = await axios.get('https://fjinfor.ddns.net/fvendas/api/api_contato.php?funcao=get_contato_email&email=teste1@gmail.com')

//     return response.data
// }

// const Post = async (data : {  
        
// 		nome:string,
// 		telefone: string,
//         email: string,
// 		segmento: string,
// 		informacao: string,
	
//     })=>{

//     const response = await axios.post('https://fjinfor.ddns.net/fvendas/api/api_addcontato.php?funcao=post_contato',data)

//     return response.data ; 
// }


// export async function Teste(){
//   const [response, response2] = await Promise.all([getData(), getData2()])

//   const creatPost = Post({

//     nome: 'teste da silva',
//     telefone: '33 999575929',
//     email: 'teste@gmail.com',
//     segmento: 'Suporte',
//     informacao: 'this is a test'
   
//   })

//   console.log({Post})
//     return(
//         <div className=" text-preto">
//             <h2>{response}</h2>
//             <h2>teste</h2>
//             <h2>teste</h2>
//             <h2>teste</h2>
//             <h2>teste</h2>  
//         </div>
//     );
// }