/**
 * ProductoTienda.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    existencias : {
      type : 'number',
      min : 1
    },
    tienda_FK : {
      model : 'Tienda'
    },
    producto_FK : {
      model : 'Producto'
    }

  },

};

