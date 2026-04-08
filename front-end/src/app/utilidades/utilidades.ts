export function toBase64(file:File){
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
}

export function parsearErroresAPI(response: any): string[] {
    const resultado: string[] = [];

    // 1. Verificamos que exista la respuesta y el error
    if (response && response.error) {
        
        // Caso A: El error es un simple string (ej. un error 401 o 404)
        if (typeof response.error === 'string') {
            resultado.push(response.error);
        } 
        // Caso B: Errores de validación de ASP.NET (el mapa de errores)
        else if (response.error.errors) { 
            const mapaErrores = response.error.errors;
            const entradas = Object.entries(mapaErrores);
            
            entradas.forEach((arreglo: any[]) => {
                const campo = arreglo[0];
                arreglo[1].forEach(mensajeError => {
                    resultado.push(`${campo}: ${mensajeError}`);
                });
            });
        }
        // Caso C: Error 500 u otros errores sin la propiedad 'errors'
        else {
            resultado.push("Ha ocurrido un error inesperado en el servidor.");
        }
    } else {
        resultado.push("No se pudo conectar con el servidor.");
    }

    return resultado;
}

export function formatearFecha(date : Date){
    const formato = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month:'2-digit',
        day: '2-digit',
    });

    const [
        {value:month},,
        {value:day},,
        {value:year}
    ] = formato.formatToParts(date);

    return `${year}-${month},${day}`;
}