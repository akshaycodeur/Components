function getJoke() {
    const endpoint = 'https://jokeapi.dev/joke/Any';
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
          if(data.joke) {
          document.getElementById("joke").innerHTML = data.joke;
        }
        if(data.setup) {
          document.getElementById("joke").innerHTML = data.setup + "<br>" + data.delivery;
        }
      });
  }