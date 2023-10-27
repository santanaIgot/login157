import {promises as fs} from 'fs';
import { request } from 'http';
import { NextResponse } from 'next/server';

const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf-8');
export async function GET(request,{params}) {

    //Recuperar o arquivo json.
    return NextResponse.json(JSON.parse(file));
}


export async function POST(request,response) {
    //parseando o arquivo para o json nativo 
    const body = await JSON.parse(file)

    console.log(body);

    body.usuarios 


    //OBJETO USUARIO REQUEST
    const usuario = await request.json()

    for(let x=0; x< body.usuarios.lenght ; x++){
        const u = body.usuarios[x];
        console.log("USUARIO DE BASE:"+ u.name);

        if(u.email == usuario.email && u.senha == usuario.senha ){
            return NextResponse.json({"status":"ok"})
        }
    }

    // console.log(request.json());

    return NextResponse.json(({"status":"ok"}));
}

export async function name(params) {
  

}