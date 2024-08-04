import { HeaderHome } from "../../components/header_home";
import { CitiesHome} from "../../components/cities_home";
import { printCities } from "../../components/print_cities";

export function HomeView() {
    const $root = document.getElementById('root') as HTMLElement;
    const headerHtml: string = HeaderHome().html;
    const headerLogic = HeaderHome().logic;

    const citiesHtml: string = CitiesHome().html;
    const citiesLogic = CitiesHome().logic;

    //*RENDERIZADO*/
    $root.innerHTML = ``;
    $root.innerHTML = headerHtml;
    $root.innerHTML += citiesHtml;



    //*LOGICA */
    //*HEADER */
    headerLogic();

    //*CITIES */

    //*Print cities */

    printCities();

    //*Create */
    const create_button = document.getElementById('create-city') as HTMLButtonElement;
    create_button.addEventListener('click', () => {
        citiesLogic();
    });

};