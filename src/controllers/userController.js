var userController = {
  ctor(){
    console.log("creado el userController")
    return this;
  },
  helloWorld(response,next){
    setTimeout(function(){
      response.send('Hello World!')
      next()
    },2000)
    console.log("llego");
  }
};


module.exports = userController;
