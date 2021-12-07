var map;
function createMap(){
  map = L.map('map').setView([20.67, -103.35], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiY3Jpc3RpYW5jYXphcmVzIiwiYSI6ImNrd3doN2R4aTAzbmcyb3ExbnplNDgyeGEifQ.amjFc4EcQ0KVKEXeYhOk8g'
  }).addTo(map);
}

function spawnMarkers(){
  var search = document.getElementById("search").value.toLowerCase();

  if(search != ""){
    if(search == "restaurantes" || search == "restaurante" || search == "comida"){
      var locs = [
        ["CHATA", 20.6746, -103.3465],
        ["Come Rico", 20.680772, -103.345953],
        ["Restaurante y Menudería Lidia", 20.681971, -103.34708]
      ]
    }else if(search == "abarrote" || search == "abarrotes" || search == "tienda" || search == "tiendas" || search == "tiendita" || search == "papa"){
      var locs = [
        ["Mi Mandado", 20.680777, -103.34982],
        ["Come Rico", 20.680772, -103.345953],
        ["Restaurante y Menudería Lidia", 20.681971, -103.34708]
      ]
    }else{
      alert("No se encontraron resultados para la búsqueda");
      return;
    }


    window.scrollTo(0,document.body.scrollHeight);    
    map.setView([20.679735, -103.348689], 16)
    for(var i = 0; i < locs.length; i++){
      marker = new L.marker([locs[i][1], locs[i][2]]).bindPopup(locs[i][0]).addTo(map);
    }
  }
}

//Enter on input without submiting a form
//(requieres jQuery: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>)
$(document).ready(function() {
  //Prevent submition of form (posting)
  $("#search").keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
    }
  });
  //Run function
  $("#search").keyup(function(event){
    if(event.keyCode == 13){
      spawnMarkers();
    }
  })
});