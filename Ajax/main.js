const main = document.querySelector("main");

const getData = function (url, callback, options = { method: "GET", async: true, body: null }) {
  console.log("Rien de fait");
  let xhr = new XMLHttpRequest();
  console.log("XHR instancie!");

  xhr.onreadystatechange = function () {
    console.log(`readyState:${xhr.readyState}`);
    if (this.readyState == 4) {
      console.log(`Status HTTP: ${xhr.status}`);

      if (xhr.status == 200 || xhr.status == 0) {
        console.log("Text: " + xhr.responseText);

        let data = JSON.parse(xhr.responseText);
        // console.log("JSON: ");
        // console.log(data);
        // for (const person of data.results) {
        //   generateCard(person);
        // }
        callback(data);
      }
    }
  };

  //console.log("Evenement definie!");

  // xhr.open("GET", "https://randomuser.me/api/?nat=fr", false);//synchronous, so it will wait for the response so the readyState will be 1 then 4
  xhr.open(options.method, url, options.async); //asynchronous, so it will not wait for the response so the readyState will be 1 then 2 then 3 then 4
  console.log("Connection ouverte!");

  xhr.send(options.bodyody);
  console.log("Requete envoye!");
};

const generateCard = function (data) {
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  main.appendChild(cardDiv);
  let lastNameH2 = document.createElement("h2");
  lastNameH2.innerText = data.name.last;
  cardDiv.appendChild(lastNameH2);
  let firstNameH3 = document.createElement("h3");
  firstNameH3.innerText = data.name.first;
  cardDiv.appendChild(firstNameH3);
  cardDiv.appendChild(document.createElement("hr"));
  let birthDateP = document.createElement("p");
  birthDateP.innerText = new Date(data.dob.date).toDateString(); // keep only date, not time
  cardDiv.appendChild(birthDateP);
  let addressAddress = document.createElement("address");
  addressAddress.innerHTML = `${data.location.street.number} ${data.location.street.name}` + `<br> ${data.location.postcode}, ${data.location.city}` + `<br> ${data.location.country.toUpperCase()}`;
  cardDiv.appendChild(addressAddress);
};

const personHandler = function (data) {
  for (const person of data.results) {
    generateCard(person);
  }
};

getData(`https://randomuser.me/api/?nat=fr&results=5`, personHandler, { method: "GET", body: null, async: true });

//if not defined options here, it will take the default options defined in the function
