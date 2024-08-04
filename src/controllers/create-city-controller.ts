import { BodyRequestCreateCity } from "../models/BodyRequestCreateCity";

export class CreateCityController {

    async createCity(data: BodyRequestCreateCity): Promise<void> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };

        const reqOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        const url = 'http://localhost:3000/cities';

        try {
            const response = await fetch(url, reqOptions);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error ${response.status}: ${errorText}`);
            }

            const result = await response.json();
            
            console.log('Ciudad creada', result);
        } catch (error) {
            console.error('Error al crear la ciudad', error);
            alert('Error al crear la ciudad');
        }
    }
}
