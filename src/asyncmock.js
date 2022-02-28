const productos = [
    {id: 1, name:"Playstation 5", price: 210000, stock: 15, img:'https://arsonyb2c.vtexassets.com/arquivos/ids/356995/PlayStation-5-DualShock.jpg?v=637586444113030000', category: 'consolas', detail: 'Consola PLAYSTATION 5 con DualSense, headset audio 3D y muchas cosas mas'},
    {id: 2, name:"Xbox Series X", price: 180000, stock: 20, img:'https://www.atajo.com.ar/thumb/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01_800x800.jpg', category: 'consolas', detail: 'Consola XBOX SERIES X con joystick a batería, cable USB C, headset y teclado'},
    {id: 3, name:"Xbox Series S", price: 90000, stock: 25, img:'https://www.atajo.com.ar/images/0000000RRS-0000287914RRS-00002-Consola-Xbox-Series-S-01.jpg', category: 'consolas', detail: 'Consola XBOX SERIES S con joystick a batería, cable USB C, headset y teclado'},
    {id: 4, name:"Nintendo Switch", price: 90000, stock: 30, img:'https://www.atajo.com.ar/images/00000HAD-S-KABAA65619HAD-S-KABAA-Consola-Nintendo-Switch-Neon-01.jpg', category: 'consolas', detail: 'Consola NINTENDO SWITCH con dos joycon, base para TV, joycon strap, y muchas cosas mas'},

    {id: 5, name:"Uncharted Legacy of Thieves Collection", price: 12000, stock: 10, img:'https://www.atajo.com.ar/thumb/PS5-UNCHARTEDLEGACY28290PS-LATAM-ULOTC-FRONT_400x400.jpg', category: 'juegos', detail: 'Juego físico Uncharted Remastered para PS5'},
    {id: 6, name:"Horizon: Forbidden West", price: 11000, stock: 9, img:'https://www.atajo.com.ar/thumb/0000HORIZONFWPS538807HORIZONFWPS5_400x400.jpg', category: 'juegos', detail: 'Juego físico Horizon: Forbidden West para PS5'},

    {id: 7, name:"Joystick Inalambrico XBOX Elite Series 2", price: 40000, stock: 8, img:'https://www.atajo.com.ar/thumb/0000000FST-0000281807FST-00002-Joystick-Inalambrico-Xbox-V2-Elite-01_400x400.jpg', category: 'hardware', detail: 'Joystick inalámbrico XBOX Elite Series 2, incluye botones intercambiables y mapeables desde la propia consola o PC.'},
    {id: 8, name:"Joystick PS5 Dualsense Cosmic Red", price: 17000, stock: 7, img:'https://www.atajo.com.ar/thumb/0000000CFI-ZCT1R10449CFI-ZCT1R-imagen-1_400x400.jpg', category: 'hardware', detail: 'Joystick inalámbrico PS5 con respuesta háptica'}
]

export const getProducts = (categoryId) => {
    return new Promise ((res, rej) => {
        const prods = categoryId ? productos.filter(p => p.category == categoryId) : productos
        setTimeout(() => {
            res(prods)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise ((res, rej) => {
        const prod = productos.find(p => p.id === parseInt(id));
        setTimeout(() => {
            res(prod)
        }, 2000)
    })
}