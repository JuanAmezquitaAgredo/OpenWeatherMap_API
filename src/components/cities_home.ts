import { CreateCityController } from "../controllers/create-city-controller";
import { GetTemperatureController } from "../controllers/get-temperature";
import { SpinnerController } from "../controllers/spinner-load-controller";
import "./cities_home.css";

export function CitiesHome() {

    const html = /*html*/`
        <div class="cities-home">
            <h1 class="cities-home-title">Ciudades</h1>
            <div class="cities-home-list">
                <ul id="cities-list">

                </ul>
            </div>
        </div>
    `;

    const logic = () => {
        const dialog = document.createElement('dialog');
        dialog.id = 'create-city-dialog';
        dialog.innerHTML = /*html*/`
            <h2 class="dialog-title">Crear ciudad</h2>
            <form class="dialog-form">
                <div class="dialog-form-field">
                    <label for="city-name">Nombre de la ciudad</label>
                    <input type="text" id="input-name" name="city-name">
                </div>
                <div class="dialog-form-field">
                    <label for="city-country">Pais</label>
                    <input type="text" id="input-country" name="city-country">
                </div>
                <div class="dialog-form-description">
                    <label for="city-description">Descripción</label>
                    <textarea id="input-description" name="city-description"></textarea>
                </div>
                <div class="dialog-form-buttons">
                    <button type="button" id="button-create">Crear</button>
                    <button type="button" id="cancel-city">Cancelar</button>
                </div>
            </form>
        `;
        document.body.appendChild(dialog);
        dialog.showModal();

        //*Dialog para crear una ciudad */
        const create_button = document.getElementById('button-create') as HTMLButtonElement;
        create_button.addEventListener('click', async () => {
            const spinnercontroller = new SpinnerController();
            spinnercontroller.createSpinner();
            spinnercontroller.startSpinner();
            const name = document.getElementById('input-name') as HTMLInputElement;

            const getTemperature = new GetTemperatureController();
            const temp: string = `${await getTemperature.getTemperature(name.value)}`;
            const tempKelvin: number = parseFloat(temp);
            const tempGrados = parseFloat((tempKelvin - 273.15).toFixed(2));

            const country = document.getElementById('input-country') as HTMLInputElement;
            const description = document.getElementById('input-description') as HTMLInputElement;
            const userId = sessionStorage.getItem('id') as string;
            if (!name.value || !country.value || !description.value) {
                alert('Por favor, rellene todos los campos');
                return;
            }
            const city = {
                userId: userId,
                name: name.value,
                country: country.value,
                description: description.value,
                temperature: tempGrados
            };
            console.log(city);
            const controller = new CreateCityController();
            try {
                await controller.createCity(city);
                alert('Ciudad creada exitosamente');
                dialog.close();
            } catch (error) {
                alert('Error al crear la ciudad: ' + error);
            }finally{
                spinnercontroller.stopSpinner();
            }
        });

        const cancel_button = document.getElementById('cancel-city') as HTMLButtonElement;
        cancel_button.addEventListener('click', () => {
            const dialog = document.getElementById('create-city-dialog') as HTMLDialogElement;
            dialog.close();
            window.location.reload();
        });

    };

    return {html,logic};
}