
function fetchSearchContries (nameContries){
    const url = `https://restcountries.eu/rest/v2/name/${nameContries}`

    return fetch(url).then(response => response.json())
}

export default fetchSearchContries