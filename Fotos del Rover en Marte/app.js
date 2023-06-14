function getMarsPhotos() {
    const apiKey = 'tf4KBiLBz1ansKWp9UZQKRfmbGNWfl1ZoYeNyNAG';
    const rover = document.getElementById('rover-select').value;
    const sol = document.getElementById('sol').value;
  
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const photos = data.photos;
        let html = '';
        photos.forEach(photo => {
          html += `<img src="${photo.img_src}" alt="${photo.rover.name} - ${photo.camera.name} - ${photo.earth_date}" class="img-thumbnail m-2">`;
        });
        document.getElementById('photos').innerHTML = html;
      })
      .catch(error => console.log(error));
  }
  
//contador dias
const rovers = [
    {
      name: "Curiosity",
      landed: new Date("2012-08-06T05:17:57.000Z")
    },
    {
      name: "Opportunity",
      landed: new Date("2004-01-25T04:05:00.000Z")
    },
    {
      name: "Spirit",
      landed: new Date("2004-01-04T04:35:00.000Z")
    }
  ];

  const roverList = document.getElementById("rovers");
  rovers.forEach(rover => {
    const roverElement = document.getElementById(rover.name.toLowerCase());
    const daysElement = document.getElementById(`${rover.name.toLowerCase()}-days`);
    const now = new Date();
    const days = Math.floor((now - rover.landed) / (1000 * 60 * 60 * 24));
    daysElement.textContent = days;
  });