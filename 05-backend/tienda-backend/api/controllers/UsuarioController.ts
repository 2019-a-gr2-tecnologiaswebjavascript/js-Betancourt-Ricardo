/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
declare var Producto;

module.exports = {
    // req = peticion = request
    // res = respuesta = response
    // URL EXPRESSJS => https://expressjs.com/es/4x/api.html
    // REQUEST SAILSJS => https://sailsjs.com/documentation/reference/request-req
    // RESPONSE SAILSJS => https://sailsjs.com/documentation/reference/request-req
    saludar: async (req, res) => {

        console.log(__dirname);
        const parametros = req.allParams();
        // req.param('nombre'); => 'Adrian'
        console.log(parametros);
        const nombre = parametros.nombre
        if(nombre){
            // PROMESA!!!! -> SYNC
            try{
                const productoEncontrado = await Producto.find({
                    where: {
                        id:1
                    },
                    skip:0,
                    limit:5,
                    sort: 'id ASC' // 'id DESC'
                });
                return res.ok({
                    mensaje: `Bienvenido ${nombre}`,
                    productoEncontrado: productoEncontrado
                })
            } catch(e){
                console.error(e);
                return res.serverError({
                    error: 500,
                    mensaje:'Error del servidor'
                });
            }

            
        }else{
            return res.serverError({
                error:400,
                mensaje:'Peticion invalida'
            });
        }
    },
    upload: (req, res) => {
        const opcionesCarga = {
            maxBytes:10000000,
            dirname: __dirname + '/../../archivos',
        }
        req.file('imagen')
            .upload(
                opcionesCarga,
                (error, archivosSubidos) => {
                    if(error){
                        return res.serverError({
                            error: 500,
                            mensaje: 'Error subiendo archivo de imagen'
                        });
                    }
                    const noExistenArchivos = archivosSubidos.length === 0;
                    if(noExistenArchivos) {
                        return res.badRequest({
                            error: 400,
                            mensaje: 'No envia ningun archivo'
                        });
                    } else {
                        console.log(archivosSubidos);
                        return res.ok({mensaje: 'ok'});
                    }

                }
            )
    }
};
















// PROTOCOLO HTTP

// RESTFUL Web Services

// protocolo + ip + puerto + segmentoUrl + modelo

// http://192.168.10.110:1337/api/Usuario

// http://localhost:1337/Usuario

// 1) CREAR DATO

// POST
// http://localhost:1337/Usuario
// Body Params

// RESPUESTA -> NuevoRegistro
 
// 2) BUSCAR TODOS LOS DATOS

// GET
// http://localhost:1337/Usuario

// RESPUESTA -> Todos los Registros (Limit = 30)

// 3) BUSCAR AL USUARIO POR ID

// GET
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12

// RESPUESTA -> EL USUARIO

// 4) ACTUALIZAR USUARIO POR ID

// FETCH / PUT
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12
// Body Params

// RESPUESTA -> EL USUARIO ACTUALIZADO

// 5) BORRAR USUARIO POR ID

// DELETE
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12

// RESPUESTA -> EL USUARIO BORRADO


// localhost:1337  -  Delta
// localhost:1337  -  Angular
// localhost:1337  -  Backend

// localhost:4200  -  Gamma
// localhost:4200  -  Angular


// Frontend -> quiero llamar -> Backend
// BLOQUEADO!
// NAVEGADOR
// CORS










// /tienda-backend/api/controllers   /../../archivos
// 







