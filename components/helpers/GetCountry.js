    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        console.log("Geolocalización no está soportada en este navegador");
      }
      
      function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        // Llamar a la API de geolocalización con las coordenadas obtenidas
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
          .then(response => response.json())
          .then(data => {
            const country = data.countryName;
            // Guardar el nombre del país en una variable o hacer lo que necesites con él
            console.log("País: " + country);
          })
          .catch(error => console.log("Error al obtener el país: " + error));
      }
      
      function errorCallback(error) {
        console.log("Error al obtener la ubicación: " + error.message);
      }
      