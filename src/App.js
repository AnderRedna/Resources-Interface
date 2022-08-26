import { Notifier } from "./Notifier.js";

const App = {
   async start(){
    try{
        await Notifier.init();
        Notifier.notify({
            title: "Seu tempo está chegando ao fim, renove para bom controle das VMS!",
            icon: "https://i0.wp.com/interfusaoti.com.br/wp-content/uploads/2021/07/logo-interfusao-colorido.png?fit=880%2C278&ssl=1"
        });
    }
    catch(err){
        console.log(err.message);
    }
  }
}


export { App }