const jokes = [
    "Why was the math book sad? It had too many problems.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "Why was the computer cold? It left its Windows open.",
    "Why was the cat sitting on the computer? It wanted to keep an eye on the mouse.",
    "Why couldn't the leopard play hide and seek? Because he was always spotted."
  ];
  
  function getRandomJoke() {
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
  }
  
  console.log(getRandomJoke()); // prints a random joke from the array
  