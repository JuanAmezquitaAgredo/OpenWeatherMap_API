import { GetCitiesController } from "../controllers/get-cities-controller";
import './print_cities.css';

export function printCities() {
    const getCities = new GetCitiesController();
    getCities.getCities().then((data: any) => {
        const citiesList = document.getElementById('cities-list') as HTMLUListElement;
        data.forEach((city: any) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="city-container">
                    <h3 class="city-name">${city.name}</h3>
                    <p class="city-country">${city.country}</p>
                    <p class="city-description">${city.description}</p>
                    <p class="city-temperature">${city.temperature} °C</p>
                    <button class="button-delete-city" data-city-id="${city.id}">Eliminar</button>
                    <button class="button-edit-city" data-city-id="${city.id}">Editar</button>
                </div>
            `;
            if(city.temperature <= 10) {
                li.style.backgroundColor = 'green';
            } else if(city.temperature > 10 && city.temperature <= 20) {
                li.style.backgroundColor = 'yellow';
            } else if(city.temperature > 20) {
                li.style.backgroundColor = 'red';
            }
            citiesList.appendChild(li);
        });
    }); 
}