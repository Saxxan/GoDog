# GoDog
GoDog website plays a role in the contacts between pet owners and animal keepers. This website is a project of the ESAT Innovation School

## **Requisitos**
### **Instalación**
Debes clonar el repositorio del proyecto.

Abrir una terminal y ejecutar los comandos:
```
npm install
npm init
´´´

## **Programas utilizados**
El proyecto se ha construido con los siguientes programas:
- Para el diseño:
  - <a href="https://www.figma.com/">Figma</a>: diseño de wireframes.
- Para el desarrollo:
  - <a href="https://code.visualstudio.com/">Visual Studio Code</a>: editor de código fuente.
  - <a href="https://prepros.io/">Prepos</a>: compilador de archivos.

## **Nomenclatura**

### **Clases**

La convención de nombre para las clases de los elementos sigue el patrón BEM:

- .bloque{}
- .bloque__elemento{}
- .bloque--modificador{}

'.bloque' representa el primer nivel de una abstracción o componente, es el elemento padre.
'.bloque__elemento' representa un hijo del elemento padre '.bloque'.
'.bloque--modificador' representa un estado diferente de '.bloque'.

<!-- Ejemplo sacado del proyecto -->

### **Etiquetas archivos sass**

Para la localización rápida de archivos sass emplearemos etiquetas en texto comentado, por ejemplo:

- //-------$VARIABLES
- //-------$CARDS

### **camelCase en JavaScript**



## **Estructura del respositorio del proyecto**

Para nuestro proyecto aplicaremos la metodología de ramas de Gitflow, basada en cinco palabras clave, estas determinaran la estructura de nuestro repositorio.

En primer lugar, tenderemos la rama principal llamada **main**, donde está el código definitivo. No se debe trabajar directamente sobre ella.

La segunda rama mas importante de nuestro repositorio será la **develop**, donde se guardan las nuevas funcionalidades del proyecto. (No hacer commits directamente sobre ella.)

Para el desarrollo de las nuevas funcionalidades crearemos una rama nueva, para cada funcionalidad, que salga de la nombrada anteriormente, y la llamaremos **feature/funcionalidad**. Al finalizar la nueva funcionalidad la mezclamos con la rama Develop para que los cambios queden allí guardados. (Una vez mezclada estas ramas, se puede borrar la Feature.)

Es importante tener una rama llamada **hotfix**, se encarga de solucionar los incidentes. (Esta rama debe ser generada a partir de la Main.)

Al implementar las features en la develop, pueden surgir errores. Para solucionar estos errores se crea una rama **hotfix-error** a partir de la develop, en la que se soluciona el error y se realiza un pull request a la rama develop.

Por últimos tendremos la rama **releaes**, se utiliza para la entrega a producción o ambiente real. En ella se harán las pruebas para el cliente. (Una vez terminada la prueba si no tiene ningún fallo se mezcla con la rama Main.)


![ramas](https://user-images.githubusercontent.com/92877904/153928693-8aa5247e-470d-4f54-b365-163a4a15d1a1.jpg)



## **SCSS**

Los archivos scss son los encargados de aportar los estilos necesarios a los elementos html, estos se encuentran organizados en la carpeta sass/.

### **Estructura del repositorio sass/**

- scss/
  - style.scss
  - variables/
    - _color-vars.scss
    - _spaces-vars.scss
    - _typography-vars.scss
    - _maps.scss
  - utilities/
    - _functions.scss
    - _mixins.scss
    - _helpers.scss
  - components/
    - _buttons.scss
    - _cards.scss
    - _inputs.scss
    - _svg.scss
  - pages/
    - _landing-branding.scss
    - _landing-header.scss
    - _landing-search.scss
    - _landing-servicios.scss
  - site/
    - _topbar.scss
    - _site.scss
    - _typography.scss
    - _footer.scss

El archivo style.scss nos indica el path de los elementos así como su nombre. Todos los archivos sass tienen una etiqueta para facilitar su localización mediante la búsqueda de nuestro editor (Cmd/Ctrl + f) y acceder a ellos fácilmente.


### **Variables**

Las variables que se emplearán en este proyecto se encuentra en el archivo sass/utilites/_variables.scss. Estas variables globales definen los colores, el espaciado y las tipografías de todo el documento.

#### **Espaciado**

Para el espaciado la unidad base será 6px, de la cual se emplearán sus múltiplos en función del espaciado que necesitemos.
Para las tags del proyecto usaremos 12px vertical y 24px horizontales para las resoluciones pequeñas y el doble para las resoluciones grandes. Las tarjetas tendrán 24px horizontal en todas las resoluciones.

- $space-unit: 6px;

#### **Color**

La paleta de colores a utilizar en este proyecto estará declarada de la siguiente manera.

- $color-white
- $color-black
- $color-grey-lignt
- $color-grey-dark
- $color-main
- $color-main-tone-2
- $color-sec
- $color-sec-tone-2

#### **Fuentes**

En cuanto a las fuentes, se han elegido estás dos. Poppins se empleará para títulos y subtítulos. En cuanto a Work Sans se usará para el cuerpo del documento. De la misma manera se definirá el tamaño de fuente tanto de títulos como del cuerpo en función de la resolución de la pantalla.

- $font-main: 'Karla', sans-serif;
- $font-title: 'Exo', sans-serif;

## **PUG**
