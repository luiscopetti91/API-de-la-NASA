// API key de la NASA
const apiKey = "tf4KBiLBz1ansKWp9UZQKRfmbGNWfl1ZoYeNyNAG";

// URL de la API de Datos de la NASA para obtener información de asteroides cercanos a la Tierra
const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getStartDate()}&end_date=${getEndDate()}&api_key=${apiKey}`;

// Obtener información de asteroides cercanos a la Tierra desde la API de Datos de la NASA
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Recorrer la información de asteroides y crear filas para la tabla
    let asteroids = data.near_earth_objects;
    let tableRows = "";
    let count = 1;
    for (let date in asteroids) {
      for (let i = 0; i < asteroids[date].length; i++) {
        let asteroid = asteroids[date][i];
        let diameter = asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2);
        let missDistance = asteroid.close_approach_data[0].miss_distance.kilometers;
        tableRows += `
          <tr>
            <th scope="row">${count}</th>
            <td>${asteroid.name}</td>
            <td>${diameter} metros</td>
            <td>${missDistance} km</td>
          </tr>
        `;
        count++;
      }
    }
    document.getElementById("asteroids-table").innerHTML = tableRows;
  })
  .catch(error => console.log(error));

// Función para obtener la fecha de inicio para la consulta de la API
function getStartDate() {
  let today = new Date();
  let month = today.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = today.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let year = today.getFullYear();
  return `${year}-${month}-${day}`;
}

// Función para obtener la fecha de fin para la consulta de la API
function getEndDate() {
  let today = new Date();
  let nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Calcular los valores de mes, día y año para la fecha de finalización
  let month = nextWeek.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
    }
    let day = nextWeek.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let year = nextWeek.getFullYear();
    return `${year}-${month}-${day}`;
  }

  // Obtener información de asteroides cercanos a la Tierra desde la API de Datos de la NASA
fetch(apiUrl)
.then(response => response.json())
.then(data => {
  // Recorrer la información de asteroides y crear filas para la tabla
  let asteroids = data.near_earth_objects;
  let tableRows = "";
  let count = 1;
  for (let date in asteroids) {
    for (let i = 0; i < asteroids[date].length; i++) {
      let asteroid = asteroids[date][i];
      let diameter = asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2);
      let missDistance = asteroid.close_approach_data[0].miss_distance.kilometers;
      tableRows += `
        <tr>
          <th scope="row">${count}</th>
          <td>${asteroid.name}</td>
          <td>${diameter} metros</td>
          <td>${missDistance} km</td>
        </tr>
      `;
      count++;
    }
  }
  document.getElementById("asteroids-table").innerHTML = tableRows;
})
.catch(error => console.log(error));

 
