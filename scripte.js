
//         switch(error.code) {
//     case error.PERMISSION_DENIED:
//       error = "User denied the request for Geolocation. اذا مستخدم رفض صلاحية وصول للموقع"
//       break;
//     case error.UNKNOWN_ERROR:
//       error = "An unknown error occurred. إذا حدث خطا غير معروف"
//       break;
//   }

var islive = false;
var shareLocation

function cation() {
    
    
      
    
     if(islive === false){
         shareLocation = navigator.geolocation.watchPosition(
        
        function(position){
            
        document.getElementById("alert").innerHTML =  `<div class="alert alert-success mt-3 mb-3" role="alert">Your location is now displayed in a map directly </div>` ;    
            
        document.getElementById("map").innerHTML = `<iframe height="300" width="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"></iframe>`
        console.log(position)
        document.getElementById("gatlocation").innerHTML = "Stop Share"
         islive = true    
    },
                                             
     function(error) {
         
         switch(error.code){
           
             case error.PERMISSION_DENIED:
                 document.getElementById("alert").innerHTML =  `<div class="alert alert-danger mt-3 mb-3" role="alert">you have been denied access to your site, please agree! </div>` ;
                 break;
              
             case error.UNKNOWN_ERROR:
                  document.getElementById("alert").innerHTML = "There is an unknown error !!";
                 break;
         }
         

        
        console.log("prrrrrr");
        
       
    }      
        
    )
        
    }else{
        
        console.log("you stop loca")
        document.getElementById("alert").innerHTML =  `<div class="alert alert-success mt-3 mb-3" role="alert">Sharing a site has been successfully stopped </div>` ;
        navigator.geolocation.clearWatch(shareLocation);
        document.getElementById("gatlocation").innerHTML = "get location"
        islive = false
    }
    
     
}