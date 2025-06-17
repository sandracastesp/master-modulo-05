const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

fetchBtn.addEventListener('click', () => {
  fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5574e297d37e7679414aec93766cebe4&hash=080f7e090b1f176fb125a99eb1bd94f3&nameStartsWith=C')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      renderCharacters(data.data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

// Implementa las Solicitudes con Axios

// 1. Instala Axios o inclúyelo mediante una CDN:
//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// 2. Escribe una función que utilice Axios para obtener los datos y manejarlos de manera similar a `fetch`.

const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {
  axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5574e297d37e7679414aec93766cebe4&hash=080f7e090b1f176fb125a99eb1bd94f3&nameStartsWith=C')
    .then(response => {
      const data = response.data;
      // Completar: renderizar datos en el contenedor
      // Pista: Observa que Axios ya convierte la respuesta JSON, por lo que no necesitas usar `.json()`.}
      renderCharacters(data.data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('characters-item');
    characterElement.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" width="150">
    `;
    dataContainer.appendChild(characterElement);
  });
}

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  dataContainer.innerHTML = '';
});
      