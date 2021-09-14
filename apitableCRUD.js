// GET

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let requestOptions = {
    method: "get",
    headers: myHeaders,
    redirect: "follow",
    
};

fetch("https://v1.nocodeapi.com/mariaconejo/airtable/ncDtdgwVbBFtApkg?tableName=Respuestas de formulario 1", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// POST

let myHeadersPost = new Headers();
myHeaders.append("Content-Type", "application/json");
let requestOptionsPost = {
    method: "post",
    headers: requestOptionsPost,
    redirect: "follow",
    body: JSON.stringify([{"title":"Example 2","website":"https://example2.com"}])
};

fetch("https://v1.nocodeapi.com/mariaconejo/airtable/ncDtdgwVbBFtApkg?tableName=Respuestas de formulario 1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// PUT

let myHeadersPut = new Headers();
myHeaders.append("Content-Type", "application/json");
let requestOptionsPut = {
    method: "put",
    headers: myHeadersPut,
    redirect: "follow",
    body: JSON.stringify([{"id":"rec2CO7nLufSs5pKx","fields":{"title":"New Example 2","website":"https://example2.com"}}])
};

fetch("https://v1.nocodeapi.com/mariaconejo/airtable/ncDtdgwVbBFtApkg?tableName=Respuestas de formulario 1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// DELETE

let myHeadersDelete = new Headers();
myHeaders.append("Content-Type", "application/json");
let requestOptionsDelete = {
    method: "delete",
    headers: myHeadersDelete,
    redirect: "follow",
    body: JSON.stringify(["rec2CO7nLufSs5pKx","rec40zVHDN4nW4jVu"])
};

fetch("https://v1.nocodeapi.com/mariaconejo/airtable/ncDtdgwVbBFtApkg?tableName=Respuestas de formulario 1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));