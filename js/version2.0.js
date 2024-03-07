// Sua chave de API do YouTube
const apiKey = 'AIzaSyCvxvZE-DeO4W3Hs-6ERo5OvcsHmgs7ndA';

document.getElementById('video-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    performSearch();
});

document.getElementById('buttonPesquisa').addEventListener('click', function(event) {
    event.preventDefault();
    performSearch();
});

function performSearch() {
    const searchQuery = document.getElementById('pesquisar').value;
    const searchResultsContainer = document.getElementById('search-results');
    
    // Mostra o spinner de carga durante a busca
    searchResultsContainer.innerHTML = '<div class="loader"></div>';

    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&key=${apiKey}&maxResults=20`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            // Remove o spinner de carga antes de exibir os resultados
            searchResultsContainer.innerHTML = '';
            displaySearchResults(data.items);
        })
        .catch(error => {
            console.error('Erro ao realizar a pesquisa:', error.message);
            // Em caso de erro, remova o spinner e informe ao usuário
            searchResultsContainer.innerHTML = '<p>Erro ao buscar resultados. Tente novamente mais tarde.</p>';
        });
}

function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';

    results.forEach(result => {
        const videoId = result.id.videoId;
        const videoTitle = result.snippet.title;

        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <div class="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <h3>${videoTitle}</h3>
             </div>
        `;

        searchResultsContainer.appendChild(videoElement);
    });
}
