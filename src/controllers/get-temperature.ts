
export class GetTemperatureController {

    async getTemperature(city: string): Promise<void> {

        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d872cd9206755ce6d18505ea19979d4`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }
            const result = await response.json();
            console.log('Temperatura obtenida', result.main.temp);
            return result.main.temp;
        } catch (error) {
            console.error('Error al obtener la temperatura', error);
            alert('Error al obtener la temperatura');
        }
    }
}