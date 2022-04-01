# Proyecto Final ReactJS

Este proyecto es una simulación de un e-commerce, hecho con las herramientas aprendidas en el curso de ReactJS de CoderHouse.



## Tech Stack

**Client:** React, Bootstrap

**Server:** Firebase


## Variables de Entorno

Para ejecutar este programa, necesitará agregar las siguientes variables de entorno a su archivo .env con la información de su base de datos de Firebase.

`REACT_APP_ApiKey`

`REACT_APP_AuthDomain`

`REACT_APP_ProjectId`

`REACT_APP_StorageBucket`

`REACT_APP_MessagingSenderId`

`REACT_APP_AppId`


## Tipos de Componentes

Dentro de la base de datos de Firebase se utilizan dos tipos de componentes.

**Productos:** un array con todos los productos y sus propiedades. 

Cada producto debe tener el siguiente formato:
```javascript
Objeto {
    category: "categoría del producto",
    detail: "Breve descripción del producto",
    img: "link de la imagen",
    name: "Nombre del producto",
    price: "precio del producto",
    stock: "stock del producto"
}
```

**Orders:** un array con todas las órdenes de compra generadas. 

Cada orden debe tener el siguiente formato:

```javascript
Orden {
    buyer: {
        email: "email del usuario",
        name: "nombre del usuario",
        phone: "teléfono del usuario",
        surname: "apellido del usuario"
        },
    items: [
        {
            cantidad: "cantidad de unidades a comprar",
            id: "id generado por firebase",
            img: "link de imagen del producto",
            name: "nombre del producto",
            price: "precio del producto",
            stock: "stock del producto"
        }
    ]
}
```


## Flujo de Trabajo

Para el correcto uso y funcionamiento de la aplicación web se debe tener en cuenta cierta información.

#### Rutas

`path = '/'`  Lleva al home donde se muestran todos los productos. Renderiza el <ItemListContainer> el cual obtiene por prop *greeting* un string como msj de bienvenida.

`path = '/category/:categoryId'` Dependiendo del parámetro de la url, filtra los productos por su categoría y renderiza <ItemListContainer>.

`path = '/detail/:productId'` Dependiendo del parámetro de la url, renderiza <ItemDetailContainer> y muestra el producto seleccionado.

`path = '/cart'` Renderiza <Cart> donde se muestra el carrito de compras con los objetos incluidos.

#### Procedimiento

Desde el home o alguna categoría, se debe seleccionar un producto, elegir la cantidad deseada y agregar al carrito.
Si se desea agregar más productos, debe clickear en alguna categoría o en el logo del NavBar, y repetir el procedimiento.

Una vez en el carrito, podrá remover algún producto, vaciar el carrito, o proceder.
Debe completar sus datos en el formulario, confirmarlos y luego confirmar la compra.

Luego de generada la compra, se le otorgará un ID por su orden.
## Ejecutar en local

Clonar el proyecto

```bash
  git clone https://github.com/Santiago-Guerci/react-coderhouse
```

Ir al directorio del proyecto

```bash
  cd miapp
```

Instalar paquetes de node y React Router

```bash
  npm install
  npm install react-router-dom
```

Iniciar el servidor

```bash
  npm start
```

