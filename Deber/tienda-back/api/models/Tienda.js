/**
 * Tienda.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre : {
      type : 'string'
    },
    arregloProductoTienda : {
      collection : 'ProductoTienda',
      via : 'tienda_FK'
    },
    tiendaPicFD : {
      type : 'string'
    }

  },

};

