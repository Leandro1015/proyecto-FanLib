/**
 * Clase Rest
 * Proporciona métodos para interactuar con una API REST para operaciones CRUD de obras.
 */
export class Rest {
    /**
     * Constructor de la clase Rest.
     * Configura la URL base y los encabezados de la solicitud.
     */
    constructor() {
        this.baseUrl = 'https://migueljaque.com/fanlib/v1' // URL base de la API
        this.token = 'L_ogGM_pzr3ybW' // Token de autenticación
        this.headers = {
            'Fanlibtoken': this.token,
            'Content-Type': 'application/json'
        }
    }

    /**
     * Método asincrónico para crear una nueva obra.
     * @param {Object} obraData - Los datos de la obra a crear.
     * @returns {Promise} - Promesa que se resuelve con los datos de la respuesta del servidor o null en caso de error.
     */
    async crearObra(obraData) {
        try {
            const url = `${this.baseUrl}/obra`
            const response = await fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(obraData)
            })
            return this.handleResponse(response)
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }

    /**
     * Método asincrónico para obtener la lista de obras.
     * @returns {Promise} - Promesa que se resuelve con los datos de la respuesta del servidor o null en caso de error.
     */
    async listarObras() {
        try {
            const url = `${this.baseUrl}/obra`
            const response = await fetch(url, {
                method: 'GET',
                headers: this.headers
            })
            return this.handleResponse(response)
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }

    /**
     * Método asincrónico para borrar una obra.
     * @param {string} id - El ID de la obra a borrar.
     * @returns {Promise} - Promesa que se resuelve con los datos de la respuesta del servidor o null en caso de error.
     */
    async borrarObra(id) {
        try {
            const url = `${this.baseUrl}/obra/${id}`
            console.log(id)
            const response = await fetch(url, {
                method: 'DELETE',
                headers: this.headers
            })
            return this.handleResponse(response)
        } catch (error) {
            console.error('Error:', error)
            return null
        }
    }

    /**
     * Método asincrónico para manejar la respuesta de la solicitud.
     * @param {Response} response - La respuesta de la solicitud fetch.
     * @returns {Promise} - Promesa que se resuelve con los datos de la respuesta del servidor o null en caso de error.
     */
    async handleResponse(response) {
        if (!response.ok) {
            console.error('Estado de Error:', response.status)

            const contentType = response.headers.get('content-type')
            
            if (contentType) {
                if (contentType.includes('application/json')) {
                    try {
                        const errorData = await response.json()
                        console.error('Datos de Error (JSON):', errorData)
                        return errorData
                    } catch (jsonError) {
                        console.error('Error al analizar el error JSON:', jsonError)
                    }
                } else if (contentType.includes('text/plain')) {
                    //  respuesta de texto plano
                    const errorText = await response.text()
                    console.error('Datos de Error (Texto):', errorText)
                    return errorText
                } else if (contentType.includes('text/html')) {
                    //  respuesta HTML
                    const errorHtml = await response.text()
                    console.error('Datos de Error (HTML):', errorHtml)
                    return errorHtml
                } else {
                    // Manejar otros tipos de contenido según sea necesario
                    console.warn('Tipo de contenido no manejado:', contentType)
                }
            }
            return null
        }

        //  respuesta exitosa
        const contentType = response.headers.get('content-type')

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json()
            console.log('Datos recibidos del servidor (JSON):', data)
            return data
        } else if (contentType && contentType.includes('text/plain')) {
            //  respuesta de texto plano 
            const textData = await response.text()
            console.log('Datos de texto recibidos del servidor:', textData)
            return textData
        } else if (contentType && contentType.includes('text/html')) {
            //  respuesta HTML 
            const htmlData = await response.text()
            console.log('Datos HTML recibidos del servidor:', htmlData)
            return htmlData
        } else {
            //  otros tipos de contenido 
            console.warn('Tipo de contenido no manejado:', contentType)
        }
    }
}
