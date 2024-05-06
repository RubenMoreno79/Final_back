const { Schema, model } = require('mongoose');

const proyectoSchema = new Schema({
    titulo: String,
    descripcion: String,
    url:String,
    cliente: String,
    url_cliente: String,
    categoria:{
        type: String,
        enum:['angular','wordpress','nodejs','javaScript','backend']
    }

  
});


module.exports =  model('proyecto', proyectoSchema);


