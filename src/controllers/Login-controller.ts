import { BodyRequestLogin } from "../models/BodyRequestLogin";

export class LoginController {

    async postLogin(data:BodyRequestLogin):Promise<void> {
        const headers: Record<string, string>={
            'Content-Type':'application/json'
        }
    
        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
    
    
        const url = 'https://reqres.in/api/login';
        const result = await fetch(url,reqOptions);
    
        console.log(result.status);
    
        if(result.status === 200){
            alert('Login exitoso');
        }else if(result.status === 400){
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }else{
            alert('Usuario o contraseña incorrecto');
            throw new Error("Conexion fallida");
        }
    
        const token = (await result.json()).token;
        sessionStorage.setItem('token',token);
    }
}