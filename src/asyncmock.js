const productos = [
    {id: 1, name:"Playstation 5", price: 4000, img:'https://arsonyb2c.vtexassets.com/arquivos/ids/356995/PlayStation-5-DualShock.jpg?v=637586444113030000', category: 'console', detail: 'Consola PS5'},
    {id: 2, name:"Xbox Series X", price: 3000, img:'https://www.atajo.com.ar/thumb/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01_800x800.jpg', category: 'console', detail: 'Consola XBOX X'},
    {id: 3, name:"Xbox Series S", price: 2000, img:'https://www.atajo.com.ar/images/0000000RRS-0000287914RRS-00002-Consola-Xbox-Series-S-01.jpg', category: 'console', detail: 'Consola XBOX S'},
    {id: 4, name:"Nintendo Switch", price: 2500, img:'https://www.atajo.com.ar/images/00000HAD-S-KABAA65619HAD-S-KABAA-Consola-Nintendo-Switch-Neon-01.jpg', category: 'console', detail: 'Consola SWITCH'}
]

export const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        }, 2000)
    })
}