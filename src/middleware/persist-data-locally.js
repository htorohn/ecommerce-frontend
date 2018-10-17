const persistDataLocally = store => next => action => {
  next(action)
  let data = {
        //"productsList": {}, Este campo no se guarda, para que al iniciar la 
        //aplicacion se actualice la lista de productos
        "cart": store.getState().cart,
        "order": store.getState().order
    }
  localStorage['ecommerceState'] = JSON.stringify(data)
  //console.log('Local Storage:', localStorage['ecommerceState'])
}

export default persistDataLocally