
const opts = {
    descripcion: {
        alias:'d',
        demand: true
    }
};

const opts2 = {
    completado: {
        alias: 'c',
        default: true
    }
};


const argv = require('yargs')
.command('crear', 'Crea un elemento por hacer',opts)
.command('actualizar', 'Actualiza el estado completo de una tarea',{
opts,opts2})
.command('borrar','Borra un elemento por hacer',opts)
.help()
.argv;

module.exports = {
    argv
}
