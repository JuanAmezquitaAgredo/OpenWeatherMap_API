
export class GetCitiesController {
    async getCities(): Promise<void> {
        const url = 'http://localhost:3000/cities';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const result = await response.json();
            console.log('Ciudades obtenidas', result);
            return result;
        } catch (error) {
            console.error('Error al obtener las ciudades', error);
            alert('Error al obtener las ciudades');
        }
    }
}