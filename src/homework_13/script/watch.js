import '../styles/watch.scss';

//export  function watch (){
    //const clocks = document.querySelectorAll('clock');
    //window.setInterval(
   //  function(){
   //      let d = new Date();
    //     document.getElementById("clock").innerHTML = d.toLocaleTimeString();
   //  }
   //, 1000);
   // }   

   export function digitalClock () {
      
       const clocks = document.querySelectorAll('clock');
       let date = new Date();
       let hours = date.getHours ();
       let minutes = date.getMinutes ();
       let seconds = date.getSeconds();

       if (hours < 10) hours = "0" + hours;
       if (minutes < 10) minutes = "0" + minutes;
       if (seconds < 10) seconds = "0" + seconds;

        document.getElementById("clock").innerHTML = hours+ ':' +minutes+ ':'  + seconds;

        setInterval (digitalClock, 1000);

    }
    
 