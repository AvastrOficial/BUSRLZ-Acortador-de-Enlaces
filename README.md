# BUSRLZ-Acortador-de-Enlaces
## informacion :
Entrada de URL larga: El usuario ingresa una URL larga en un campo de entrada proporcionado por el servicio de acortamiento de URL.

Generación de URL corta: El servicio de acortamiento de URL toma la URL larga ingresada por el usuario y la asigna a una URL más corta que apunta a la misma dirección. Esto generalmente implica usar un algoritmo para generar una cadena más corta que represente la URL original.

Redirección: Cuando alguien accede a la URL corta generada, el servicio de acortamiento de URL redirige automáticamente al visitante a la URL original.

Estadísticas (opcional): Algunos servicios de acortamiento de URL ofrecen características adicionales, como estadísticas sobre cuántas veces se ha hecho clic en la URL corta y desde qué ubicaciones geográficas se han realizado los clics.

## documentacion del desarrollo
El código es una función llamada acortarURL() que se activa cuando se hace clic en un botón o se dispara un evento similar. Esta función realiza lo siguiente:

Obtiene el valor de la URL original que el usuario ha ingresado en un campo de entrada con el id originalUrl.
Obtiene el valor de personalización que el usuario ha ingresado en otro campo de entrada con el id personalization.

![image](https://github.com/AvastrOficial/BUSRLZ-Acortador-de-Enlaces/assets/91764815/e8316f50-294a-489d-8b8c-f2557c2a9590)

Construye la URL de la API de is.gd para acortar la URL original. Esta URL incluye la URL original codificada y, si se ha proporcionado una personalización, también se incluye en la URL de la API.

Utiliza la función fetch() para realizar una solicitud a la URL de la API.
Cuando se recibe una respuesta, la función then() convierte la respuesta en formato JSON.
Luego, otra función then() maneja los datos JSON obtenidos de la API. Si se proporciona una URL corta, se muestra en un elemento HTML con el id shortenedUrl. 

Si no se puede acortar la URL, se muestra un mensaje de error.
Si ocurre algún error durante la solicitud, la función catch() maneja el error y muestra un mensaje de error en el mismo elemento HTML shortenedUrl.

![image](https://github.com/AvastrOficial/BUSRLZ-Acortador-de-Enlaces/assets/91764815/47697f62-fe82-48df-8667-822c10dc9063)

## API Utilizado :
https://is.gd/developers.php 

## link de la pagina funcionando : 
https://fileboxbsz.foroactivo.com/h9-busrlz

![image](https://github.com/AvastrOficial/BUSRLZ-Acortador-de-Enlaces/assets/91764815/4fdc5f2f-88e4-441a-befa-7b9f147e9b95)

