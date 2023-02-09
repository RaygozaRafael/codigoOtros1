const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {/* Se agrego la propiedad async antes de function */
  $n.textContent = 'cargando...';
  /* Se agrego .then para la conversion a tipo json lo recuperado */
  const response = await fetch(`${usersEndpoint}/${username}`)
  .then(response => response.json())
  .then(json => {
    /* Se cambio el tipo data a json */
    console.log(json);
    $n.textContent = `${json.name}`;
    $b.textContent = `${json.blog}`;
    $l.textContent = `${json.location}`;
  })
  //const data = response.map();
  
  
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /* n a $n */
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);