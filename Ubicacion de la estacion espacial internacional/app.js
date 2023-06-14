function getIssInfo() {
    const apiEndpoint = 'http://api.open-notify.org/iss-now.json';
  
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        const issInfo = `
          <p>La posición actual de la Estación Espacial Internacional es:</p>
          <ul>
            <li>Latitud: ${data.iss_position.latitude}</li>
            <li>Longitud: ${data.iss_position.longitude}</li>
          </ul>
        `;
        document.getElementById('iss-info').innerHTML = issInfo;
      })
      .catch(error => console.error(error));
  }
  
  getIssInfo();
  setInterval(getIssInfo, 10000);
  