

export function CitiesHome() {

    const html = /*html*/`
        <div class="cities-home">
            <h1 class="cities-home-title">Ciudades</h1>
            <div class="cities-home-list">

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
                        <input type="text" id="city-name" name="city-name">
                    </div>
                    <div class="dialog-form-field">
                        <label for="city-country">Pais</label>
                        <input type="text" id="city-country" name="city-country">
                    </div>
                    <div class="dialog-form-description">
                        <label for="city-description">Descripción</label>
                        <textarea id="city-description" name="city-description"></textarea>
                    </div>
                    <div class="dialog-form-buttons">
                        <button type="submit" id="create-city">Crear</button>
                        <button type="button" id="cancel-city">Cancelar</button>
                    </div>
                </form>
            `;
            document.body.appendChild(dialog);
            dialog.showModal();

        const create_button = document.getElementById('create-city') as HTMLButtonElement;
        create_button.addEventListener('click', () => {
            const dialog = document.getElementById('create-city-dialog') as HTMLDialogElement;
            const form = dialog.querySelector('form') as HTMLFormElement;
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(form);
                const city_name = formData.get('city-name') as string;
                const city_country = formData.get('city-country') as string;
                const city_description = formData.get('city-description') as string;
                console.log(city_name, city_country, city_description);
                dialog.close();
                window.location.reload();
            });
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