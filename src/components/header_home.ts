import { navigateTo } from "../router";
import "./header_home.css";

export function HeaderHome() {

    const html = /*html*/`
        <header class="header">
            <h1 class="header-title">Weather Zone</h1>
            <div class="header-buttons">
                <button id="create-city" class="btn_header">Crear ciudad</button>
                <button id="logout" class="btn_header">Salir</button>
            </div>
        </header>
    `;

    const logic = () => {
        const button_logout = document.getElementById('logout') as HTMLButtonElement;
        button_logout.addEventListener('click', () => {
            sessionStorage.removeItem('token');
            navigateTo('/Login');
        })
    }

    return {html,logic};
    
}