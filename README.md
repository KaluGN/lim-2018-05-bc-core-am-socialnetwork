# Creando una Red Social

El producto socilitado por la cliente es una red social, de las opciones temáticas para desarrollar el producto escogimos realizar una red social de alimentación, nos enfocaremos principalmente en conocer la experiencia de las personas en los lugares a los que suelen acudir cuando tienen antojitos.

El nombre propuesto es 'Dime tu point' / 'Wari ¿qué?' /  Punto escondido   

" La palabra huarique (o warique) es un vocablo quechua que proviene de dos palabras, la primera es 'wa', la cual era utilizada para referirse a algo que no se entiende, que no se conoce o que esta escondido. La segunda palabra es 'rique', la cual deriva de la palabra 'rocqro' que significa guiso. Haciendo el ejercicio de unirlas se podría decir que warique es un lugar escondido donde se hacen guisos.  (Fuente: Martha Hildebrant)

Es por eso que muchos conocedores del buen comer (llamados también sibaritas y gastrónomos) han venido usando el término huarique. Ahora se entiende el porque son lugares poco conocidos pero donde comer es una experiencia única.

Cabe recalcar que la mayoría de huariques tienen fama de ser económicos. En la mayoría de casos esto se aplica pero en otros el precio esta a la par de los más reconocidos restaurantes gourmets. Paga el que sabe comer. "

Fuente: [yumi.pe](http://www.yumi.pe/que-significa-huarique/)


## Cuáles son los elementos básicos que tiene una red social.


## Quiénes son los principales usuarios de producto.

## Cómo descubriste las necesidades de los usuarios.

## Qué problema resuelve el producto para estos usuarios.

## Cuáles son los objetivos de estos usuarios en relación con el producto.

## Cuáles son las principales funcionalidades del producto y cuál es su prioridad.

## Cómo verificaste que el producto les está resolviendo sus problemas.

## Cómo te asegurarás que estos usuarios usen este producto.


## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto:
  * [ ] Cuáles son los elementos básicos que tiene una red social.
  * [ ] Quiénes son los principales usuarios de producto.
  * [ ] Cómo descubriste las necesidades de los usuarios.
  * [ ] Qué problema resuelve el producto para estos usuarios.
  * [ ] Cuáles son los objetivos de estos usuarios en relación con el producto.
  * [ ] Cuáles son las principales funcionalidades del producto y cuál es su prioridad.
  * [ ] Cómo verificaste que el producto les está resolviendo sus problemas.
  * [ ] Cómo te asegurarás que estos usuarios usen este producto.
* [ ] Benchmark de las principales redes sociales.
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots del prototipo de alta fidelidad.
* [ ] Conclusiones de testing con el prototipo de alta fidelidad con usuarios.
* [ ] Conclusiones de testing con el producto en HTML.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite publicar y filtrar posts por público/yo.
* [ ] Permite dar _like_ a los posts y llevar un conteo de ellos.


==================================================

## Preámbulo

temas en los que le gustaría invertir:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

[`localStorage`](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web/Usando_la_API_de_almacenamiento_web)

En este proyecto **SÍ está permitido** usar librerías o frameworks, pero **no es obligatorio** :smiley:.


### UI y comportamiento (User Interface / Interfaz de Usuario)

La interfaz debe permitir lo siguiente:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Solamente para el login es obligatorio usar [Firebase](https://firebase.google.com/), no para las
    publicaciones en el muro ni las demás funcionalidades, para eso puedes
    usar [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web/Usando_la_API_de_almacenamiento_web).
  - Autenticación con Facebook o Google.
* Validaciones:
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido privado.
* Perspectiva de interfaz:

  ![Login](https://user-images.githubusercontent.com/9284690/40994765-c3cf9602-68c2-11e8-89ac-8254859b5ebb.png)

#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en el input.
* Comportamiento:
  - Poder publicar un post.
  - Poder poner _like_ a una publicación.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Poder publicar y mostrar los posts que son sólo para mi (o amigos - ver Hacker edition :wink:) y para todo público.
  - Pedir confirmación antes de eliminar un post.
  - Al darle click en el botón editar, debe cambiar el texto por un input que
    permita editar el texto y cambiar el link por guardar.
  - Al darle guardar debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados
* Perspectiva de interfaz:

  ![Muro](https://user-images.githubusercontent.com/9284690/40994768-c52c3442-68c2-11e8-99a5-9e127e700dee.png)


### Front end

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (separación de responsabilidades).
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web/Usando_la_API_de_almacenamiento_web)
  como primera opción para resolver este desafío, aun así, tú
  puedes optar por la que se acomode más a tu equipo.

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que puedes usar una librería o framework si así lo desea el equipo. Al navegar en internet te darás cuenta de que algunas de estas construyen un
  **boilerplate** por ti, tenlo presente al iniciar tu proyecto.
* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en estas pruebas, pues incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### UX

Desde el punto de vista de UX, deberás:  

* Hacer un _benchmark_ de las principales redes sociales.
* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un prototipo de alta fidelidad.
* Testear el prototipo con usuarios.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

### Ágil

Vamos a dar un paso importante para seguir aprendiendo de Ágil. Te será de mucha
ayuda para ir avanzando tu proyecto de forma incremental y no en cascada.

Esta vez te pedimos que los ítems de tu Backlog de Producto estén escritos
como [Historias de Usuario](http://jmbeas.es/guias/historias-de-usuario/).
Esta es una técnica muy simple que te ayudará a:

* Organizar el trabajo en función del valor que le aporta al usuario.
* Poder publicar partes completas y utilizables del producto al final del
  sprint.
* Que el equipo trabaje de manera multidisciplinaria de manera natural.


### Entregables

#### 1) Definición del producto

En el `README.md` debes colocar cómo conociste el mercado de las redes sociales, cómo descubriste las necesidades de los usuarios, y cómo llegaste a la definición final de tu producto. Si tienes fotos de entrevistas, cuestionarios y/o sketches
(bocetos) compártelos. Es importante que detalles:




## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve cómo adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history),
usando una librería (por ejemplo [`react-router`](https://github.com/ReactTraining/react-router)
o [`vue-router`](https://router.vuejs.org/)). En este proyecto te invitamos a
explorar opciones y decidir una opción de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (guardar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (guardar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar localmente usando
[`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
o de forma remota usando [Firebase](https://firebase.google.com/).

### Historias de usuario

En el proyecto "Data Dashboard", la primera historia "épica" podría haber sido:

Yo, como **Training Manager** quiero poder **ver el progreso de solución de
ejercicios de JS de las estudiantes de mi(s) cohort(s)** para **entender
cuánto están practicando y qué tan bien les está yendo**.

Esta la podríamos haber dividido en algunas más pequeñas, por ejemplo:

1. Yo, como **Training Manager** quiero poder **seleccionar cada uno de los
   cohorts de mi ciudad** para **ver un listado de todas las estudiantes de ese
   cohort, y que incluya el % de progreso de solución de ejercicios de cada una
   de ellas**
2. Yo, como **Training Manager** quiero poder **seleccionar a una estudiante en
   particular** para **ver el % de progreso de solución de todos los ejercicios
   y el resultado decada uno de ellos**

Como ves, dividirla en 1 y 2, hace que sea mucho más fácil imaginar y entender
lo que el equipo tiene que conseguir para completarla.

Otras:

* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Offline first manifesto](http://offlinefirst.org/)

***

