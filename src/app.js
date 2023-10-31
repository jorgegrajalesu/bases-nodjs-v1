const {emailTemplate} = require('./js-templates/templates1');
const {getAge,getUUID} = require('./plugins');
console.log(emailTemplate);

const {getUser} = require('./js-templates/callbacks');
const {crearPersonMake} = require('./js-templates/factory');

const creadorPerson = crearPersonMake({getUUID,getAge})
const person = {
    name: 'Luisa',
    fecha: '1976-09-19'
}

const Luisa = creadorPerson(person)

console.log({Luisa})

const id =1;
getUser(id, (err, user) => {
    if (err) throw new Error(err);

    console.log({user});

})