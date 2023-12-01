const URL_API = "https://pokeapi.co/api/v2/";
const listUL = document.querySelector(".listPokemon");

fetch(URL_API + "pokemon-species/").then((reponse) => reponse.json().then((data) => generateList(data.results)));
//all pieces are asynchronous

// const getPokemon = async function () {
//   const URL_API = "https://pokeapi.co/api/v2/";
//   let response = await fetch(URL_API + "pokemon-species/");
//   let data = await response.json();
//   console.log(data);
// };---although async function, within this function, it is synchronous

const generateList = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
    let pokemonLi = document.createElement("li");
    pokemonLi.innerText = i + 1 + " " + data[i].name;
    console.log(pokemonLi);
    let pokemonA = document.createElement("a");
    // pokemonA.href = "pokeman.html?id=" + i;
    pokemonA.href = data[i].url;
    pokemonA.innerText = " Details";
    pokemonLi.appendChild(pokemonA);
    listUL.appendChild(pokemonLi);
  }
};

fetch(`https://pokeapi.co/api/v2/pokemon-species/9/`).then((reponse) => reponse.json().then((data) => generateList(data.results)));
