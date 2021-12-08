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
    if(search == "papa" || search == "papas"){
      var locs = [
        ["Mercado Lupe - 20%", 20.6746, -103.3465],
        ["Las quince letras - Precio mas bajo encontrado", 20.680772, -103.345953],
        ["Teresita - 30% arriba de 5kg", 20.681971, -103.34708]
      ]
      map.setView([20.679735, -103.348689], 16)
    }else if(search == "frijol" || search == "frijoles"){
      var locs = [
        ["Tienda de Abarrotes - Precio más bajo encontrado", 20.680777, -103.34982],
        ["Abarrotes VICKY - Mitad de precio", 20.665519, -103.359413],
        ["Mercado Alcalde - Mejores reseñas", 20.682368, -103.346672]
      ]
      map.setView([20.679735, -103.348689], 16)
    }else if(search == "abarrote" || search == "abarrotes" || search == "tienda" || search == "tiendas" ||
          search == "tiendita" || search == "mercado" || search == "mercados" || search == "mercadito" ||
          search == "mercaditos"){
      var locs = [
        ["Tienda de Abarrotes", 20.680777, -103.34982],
        ["Abarrotes VICKY", 20.665519, -103.359413],
        ["Mercado Alcalde", 20.682368, -103.346672],
        ["Mercado Lupe", 20.6746, -103.3465],
        ["Las quince letras", 20.680772, -103.345953],
        ["Teresita", 20.681971, -103.34708]
      ]
      map.setView([20.679735, -103.348689], 14)
    }else{
      alert("No se encontraron resultados para la búsqueda");
      return;
    }


    window.scrollTo(0,document.body.scrollHeight);
    for(var i = 0; i < locs.length; i++){
      marker = new L.marker([locs[i][1], locs[i][2]]).bindPopup(locs[i][0]).addTo(map);
    }
  }
}

function backTop(){
  window.scrollTo(0,0); 
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