// const { getUUID } = require('../plugins/get-id');
// const {getAge} = require('../plugins/get-age'); 
// const {getAge,getUUID} = require('../plugins');

const crearPersonMake =({getUUID,getAge}) => {
   return ({name,fecha}) =>{

    return {
        id: getUUID(),
        name: name,
        fecha: fecha,
        age:getAge(fecha),
    }
}
}

// const person = {
//     name: 'Luisa',
//     fecha: '1976-09-19'
// }



// const luisa = getPerson(person);

// console.log(luisa);

module.exports ={
    crearPersonMake,
}