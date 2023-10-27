import React, { useState } from 'react'

export default async function LoginUser() {
    let users;


    const handleSubmit = async (e) =>{
        
            try{
                const response = await fetch("http://localhost:3001/api/base/base-user-api",{
                    method: "POST", 
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(usuario)
                })
            }
        
    }


    if(response.ok){
        const result = response.json()
        if(result.status == "ok"){
            setMsg("Login efetuado com sucesso")
            setTimeout(()=>{
                setMsg("");
            },5000
            )
        }
    }
    
    
    const [usuario, setUsuario] = useState(
        {
            email: "",
            senha: ""
        }
    )

    const  handleChange = (e) =>{

    } 

    try{
        const response = await fetch("http://localhost:3001/api/base/base-user-api");
        // users = await response.json();
        console.log();
    } catch {
        console.log(error)
    }
  
    return (
        <div className="form-login">
            <h1>LOGIN</h1>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="idUser">Usuário:</label>
                        <input type="email" name="usuario" id = "idUser" value={usuario.email} placeholder='Digite seu nome ou email'/>
                        </div>
                    <div>
                        <label htmlFor="idPassword">Senha:</label>
                        <input type="password"name="senha" id="idPassword" value={usuario.senha} placeholder='Digite sua senha'/>
                    </div>
                    <div>
                       <button>Entrar</button>
                    </div>               
                </form>
            </div>
        </div>
    )
}
