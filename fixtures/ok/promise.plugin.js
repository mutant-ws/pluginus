const debug = require( "debug" )( "Pluginus:PromisePlugin" )

module.exports = {
  depend: [],

  create: () =>
    new Promise( resolve => {
      setTimeout( () => {
        resolve( {
          promiseLorem: "lorem promises ipsum",
        } )
      }, 50 )
    } ),
}