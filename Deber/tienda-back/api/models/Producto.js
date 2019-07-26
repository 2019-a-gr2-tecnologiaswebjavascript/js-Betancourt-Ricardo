/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre : {
      type : 'string'
    },
    descripcion : {
      type : 'string'
    },
    arregloProductoTienda : {
      collection : 'ProductoTienda',
      via : 'producto_FK'
    }

  },

};

