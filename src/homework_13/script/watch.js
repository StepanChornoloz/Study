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
       
       let date = new Date();
       let hours = date.getHours ();
       let minutes = date.getMinutes ();
       let seconds = date.getSeconds();
       let day = date.getDate();
       let month = date.getMonth();
       let year = date.getFullYear();

       if (hours < 10) hours = "0" + hours;
       if (minutes < 10) minutes = "0" + minutes;
       if (seconds < 10) seconds = "0" + seconds;
       if (day < 10) day = "0" + day;
       if (month< 10) month = "0" + month;

        document.getElementById("clock").innerHTML = hours+ ':' +minutes+ ':' + seconds;

        setInterval (digitalClock, 1000);

        document.getElementById("clock").addEventListener('click', function () {
            document.getElementById("clock").innerHTML = hours+ ':' +minutes;
           // setInterval (digitalClock, 1000);
        })
        
        document.getElementById("clock").addEventListener('contextmenu', function () {
            document.getElementById("clock").innerHTML = hours+ ':' +minutes+ ':' + seconds+ '/' +day+ '/' +month+ '/' +year;
           // setInterval (digitalClock, 1000);
        })

    }

    
    
 