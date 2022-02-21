const productos = [
    {id: 1, name:"Playstation 5", price: 4000, img:'https://arsonyb2c.vtexassets.com/arquivos/ids/356995/PlayStation-5-DualShock.jpg?v=637586444113030000', category: 'console', detail: 'Consola PLAYSTATION 5 con DualSense, headset audio 3D y muchas cosas mas'},
    {id: 2, name:"Xbox Series X", price: 3000, img:'https://www.atajo.com.ar/thumb/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01_800x800.jpg', category: 'console', detail: 'Consola XBOX SERIES X con joystick a batería, cable USB C, headset y teclado'},
    {id: 3, name:"Xbox Series S", price: 2000, img:'https://www.atajo.com.ar/images/0000000RRS-0000287914RRS-00002-Consola-Xbox-Series-S-01.jpg', category: 'console', detail: 'Consola XBOX SERIES S con joystick a batería, cable USB C, headset y teclado'},
    {id: 4, name:"Nintendo Switch", price: 2500, img:'https://www.atajo.com.ar/images/00000HAD-S-KABAA65619HAD-S-KABAA-Consola-Nintendo-Switch-Neon-01.jpg', category: 'console', detail: 'Consola NINTENDO SWITCH con dos joycon, base para TV, joycon strap, y muchas cosas mas'}
]

export const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 2000)
    })
}

export const getProduct = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos[0])
        }, 2000)
    })
}