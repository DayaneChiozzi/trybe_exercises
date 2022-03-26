function fetchCountry(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(
    (response) => {
      response.json().then((countries) => {
        console.log(countries);
      });
    }
  );
}

window.onload = fetchCountry('brasil');
