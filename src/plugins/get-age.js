const getAgePatronAdapter = require('get-age');

const getAge = (fecha) => {
    if(!fecha) throw new Error('Fecha es requerido');

    return getAgePatronAdapter(fecha);
};

module.exports = {
    getAge
}