# pokedex-global

## Build Setup

```bash
# Intalación de dependencias
$ npm install

# Correr el proyecto en un servidor local
$ npm run dev

# Hacer el build para producción
$ npm run build
$ npm run start

# Generar archivos estáticos del proyecto
$ npm run generate
```

Para una explicación mas detallada revisar la [documentación](https://nuxtjs.org).

## Directorios Especiales

Puede crear los siguientes directorios adicionales, algunos de los cuales tienen comportamientos especiales. Solo se requieren "pages"; puede eliminarlos si no desea utilizar su funcionalidad.

### `assets`

El directorio de "assets" contiene sus activos sin compilar, como archivos, imágenes o fuentes de Stylus o Sass.

En este apartado se creó la carpeta principal del SASS junto con su archivo principal "main.scss" y los modulos que contienen las  variables globales. Adicionalmente esta la carpeta de fuentes (Montserrat) qu el proyecto requeria.

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

El directorio de componentes contiene sus componentes de Vue.js. Los componentes forman las diferentes partes de su página y se pueden reutilizar e importar a sus páginas, diseños e incluso a otros componentes.

La lista de componente es la siguiente:
1. Boton.vue: Es el componente del boton utilizado en toda la plataforma, solamente se reutiliza cambiando algunos props y encapsulando los estilos de mas alto nivel en el elemento padre.
2. FavStar.vue: Este componente es el símbolo de la estrella Gris-Amarilla que se pone de acurso a si el pokemon es un favorito o no
3. ListItem.vue: Este componente es el reutilizado para listar todos los pokemones
4. Loader.vue: Este componente es el "Loader" que puede ser llamado desde cualquier parte de la aplicación 
5. ModalInfo.vue: Este componente es el Modal donde se visualiza la información individual de cada Pokemon

###### Todos los componente son utilizados mas de una vez dentro de la apliación

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Los "layouts" son de gran ayuda cuando desea cambiar la apariencia de su aplicación Nuxt, ya sea que desee incluir una barra lateral o tener diseños distintos para dispositivos móviles y computadoras de escritorio.

Este proyecto no utiliza Layouts

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

Este directorio contiene las vistas y rutas de su aplicación. Nuxt leerá todos los archivos `* .vue` dentro de este directorio y configurará Vue Router automáticamente.

En este proyecto tenemos la ruta por defecto "/" y tambien la ruta del buscador "/seeker", desde estas dos rutas se hace la implementación de los componentes etc...

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

El directorio de "plugins" contiene complementos de JavaScript que desea ejecutar antes de crear una instancia de la aplicación raíz Vue.js. Este es el lugar para agregar complementos de Vue e inyectar funciones o constantes. Cada vez que necesite usar `Vue.use ()`, debe crear un archivo en `plugins /` y agregar su ruta a los plugins en `nuxt.config.js`.

Este proyecto no cuenta con plugins externos a los instalados por defecto con Nuxt.js (Axios)

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

Este directorio contiene sus archivos estáticos. Cada archivo dentro de este directorio se asigna a `/`.

En este caso, estamos usando el directorio de archivos estáticos para almacenar los iconos e imágenes y referenciar mucho más rápido dentro de la aplicación

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

Este directorio contiene los archivos de su tienda Vuex. La creación de un archivo en este directorio activa Vuex automáticamente.

Este directorio es uno de lo más importantes del proyecto, Acá se hacen las peticiones a la API que son disparadas dentro de los métodos de mounted() dentro de los componentes, esto se realiza dentro el archivo de "actions.js". Luego de realizar las peticiones a la API, la información que retorna la enviamos a la mutación ya que en las mutaciones se declara el estado e iguala a la información retornada por las peticiones. 

Por ultimo tenemos los archivos "state.js" y "getters.js" donde se declara el estado incial de las variables y se hacen los getters donde se retorna este estado y puede ser consumido en cualquier parte de la aplicación(Estado Global).

*Nota: Dentro del archivo Actions existe el método "fetchPokemones()", este médoto es un metodo recursivo, va a ejecutarse hasta traer toda la informacion de toda la páginacion de la API ya que por página solamente hay 20 Pokemones*

Más información sobre el uso de este directorio en [la Documentación](https://nuxtjs.org/docs/2.x/directory-structure/store).
