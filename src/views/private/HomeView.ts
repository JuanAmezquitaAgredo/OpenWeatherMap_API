import { navigateTo } from "../../router";

export function HomeView() {
    const $root = document.getElementById('root') as HTMLElement;

    $root.innerHTML = ``;
    const h1 = document.createElement('h1');
    h1.textContent = 'Home';
    $root.appendChild(h1);
    const button_logout = document.createElement('button');
    button_logout.textContent = 'Logout';
    $root.appendChild(button_logout);

    //Logica Home

    //Logica Logout
    button_logout.addEventListener('click', () => {
        sessionStorage.removeItem('token');
        navigateTo('/Login');
    })
}