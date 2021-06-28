const word = 'hello'

const letters = [...word]

letters;


const mainCharacters = ['link', 'zelda', 'ganon'];
const allCharacters = ['navy', ...mainCharacters  ,'Zaria', 'deku tree']
console.log(allCharacters);

const perro ={
    nombre:'twinky',
    edad: 11,
    raza:'schanauzer'
}

const perro2 = {...perro}
perro2.nombre = 'chocorrol'

const perros = [perro, perro2]

console.log(perros);