/* 

*/

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require("yargs")
    .command('crear', 'Crea elemento o tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado del elemento o tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra elemento o tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}