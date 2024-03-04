export class Rest {
    constructor() {
        this.baseUrl = 'https://migueljaque.com/fanlib/v1'
        this.token = 'L_ogGM_pzr3ybW'
        this.headers = {
            'Fanlibtoken': this.token,
            'Content-Type': 'application/json'
        }
    }

    /* Libro */
    /*async getLibro() {
        try {
            const url = `${this.baseUrl}/libro`
            const response = await fetch(url, {
                method: 'GET',
                headers: this.headers
            })
    
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`)
            }
    
            const data = await response.json();
                
            return data
        } catch (error) {
            console.error('Error fetching data:', error)
            return null
        }
    }*/

    async handleResponse(response) {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor:', response.status)
        }

        return response.json()
    }

    async crearLibro(libroData) {
        try {
            const url = `${this.baseUrl}/libro`
            const response = await fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(libroData)
            });

            return this.handleResponse(response)
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }

   /* async borrarObra(id) {
        try {
            const url = `${this.baseUrl}/libro/${id.join('/')}`
            console.log(id)
            const response = await fetch(url, {
                method: 'DELETE',
                headers: this.headers
            })

            return this.handleResponse(response);
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }*/
}