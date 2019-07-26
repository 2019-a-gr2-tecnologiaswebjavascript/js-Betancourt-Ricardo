/**
 * TiendaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    upload : (req, res) => {
        const opcionesDeCarga = {
            maxBytes : 10000000,
            dirname : __dirname + '/../../archivos',
        }
        req.file('imagen')
            .upload(
                opcionesDeCarga,
                (error, archivosSubidos) =>{
                    if(error){
                        return res.serverError({
                            error : 500,
                            mensaje : 'Error subiendo archivo de imagen'
                        })
                    }
                    const noExistenArchivos = archivosSubidos.length ===0
                    if(noExistenArchivos){
                        return res.badRequest({
                            error : 400,
                            mensaje : 'No se subió ningún archivo'
                        })
                    }else {
                        Tienda.update(req.param('id'))
                            .set({
                                tiendaPicFD: archivosSubidos[0].fd
                            }).exec(function (err){
                                if (err) return res.serverError(err);
                                return res.ok();
                              });
                        return res.ok({
                            mensaje : 'ok'
                        })
                    }
                }
            )
    },

    getPic (req, res){
        const opcionesDeDescarga = {
            maxBytes : 10000000,
            dirname : __dirname + '/../../archivos',
        }
        Tienda.findOne(req.param('id')).exec(function (err, tienda){
          if (err) return res.serverError(err);
          if (!tienda) return res.notFound();
      
          if (!tienda.tiendaPicFD) {
            return res.notFound();
          }
          var SkipperDisk = require('skipper-disk');
          var fileAdapter = SkipperDisk(opcionesDeDescarga);
          // Stream the file down
          fileAdapter.read(tienda.tiendaPicFD)
          .on('error', function (err){
            return res.serverError(err);
          })
          .pipe(res);
        });
      }
};

