const apiKey = "tf4KBiLBz1ansKWp9UZQKRfmbGNWfl1ZoYeNyNAG"; // Reemplazar con tu propia API Key

// Obtener la imagen astronómica del día desde la API de Datos de la NASA
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    // Actualizar la imagen y la información en la tarjeta
    document.getElementById("apod-img").src = data.url;
    document.getElementById("apod-title").innerText = data.title;
    document.getElementById("apod-explanation").innerText = data.explanation;
    document.getElementById("apod-date").innerText = data.date;
  })
  .catch((error) => {
    console.log("Error al obtener la imagen astronómica del día: ", error);
  });
