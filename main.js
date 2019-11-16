

function getLuke() {
  fetch(`https://swapi.co/api/people/1`) // make the request
.then(response => response.json()) // convert response to json
.then(myJson => { // display data in the browser
  const random = document.getElementById ('random')
  random.innerHTML =


  // document.body.innerHTML =
    "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"

    console.log(myJson);
})
}

function getVader() {
  fetch(`https://swapi.co/api/people/4`) // make the request
.then(response => response.json()) // convert response to json
.then(myJson => { // display data in the browser
  const darth = document.getElementById ('darth')
  random.innerHTML =



  // document.body.innerHTML =
    "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"

    console.log(myJson);
})
}





