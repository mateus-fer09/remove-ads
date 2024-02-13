/* const axios = require('axios');

// Sua chave de API do YouTube
const apiKey = 'AIzaSyB1FO1ITQH9RT3cBOdwUkcuZqHHcDPKpuc';

// ID de vídeo de exemplo
const videoId = 'Vu63TLIbVKs';

// URL da API do YouTube para obter detalhes de vídeo
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

// Fazendo a solicitação GET para a API do YouTube
axios.get(apiUrl)
  .then(response => {
    // Extraindo informações do snippet do vídeo
    const videoDetails = response.data.items[0].snippet;

    // Exibindo informações do vídeo
    console.log('Título:', videoDetails.title);
    console.log('Descrição:', videoDetails.description);
    console.log('Data de publicação:', videoDetails.publishedAt);
  })
  .catch(error => {
    console.error('Erro ao obter detalhes do vídeo:', error.message);
  });
 */




/*  // Sua chave de API do YouTube
 const apiKey = 'AIzaSyB1FO1ITQH9RT3cBOdwUkcuZqHHcDPKpuc';

 // ID do vídeo de exemplo
 const videoId = 'Vu63TLIbVKs';

 // URL da API do YouTube para obter detalhes do vídeo
 const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

 // Fazendo a solicitação GET para a API do YouTube
 fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
     // Extraindo informações do snippet do vídeo
     const videoDetails = data.items[0].snippet;

     // Criando o iframe e incorporando na página
     const videoContainer = document.getElementById('video-container');
     const iframeCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
     videoContainer.innerHTML = iframeCode;
   })
   .catch(error => {
     console.error('Erro ao obter detalhes do vídeo:', error.message);
   }); */



 /*   // Sua chave de API do YouTube
  const apiKey = 'AIzaSyB1FO1ITQH9RT3cBOdwUkcuZqHHcDPKpuc';

  // Função para lidar com o envio do formulário
  document.getElementById('video-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo o nome do vídeo do formulário
    const videoName = document.getElementById('video-name').value;

    // URL da API do YouTube para pesquisa de vídeos
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(videoName)}&type=video&key=${apiKey}`;

    // Fazendo a solicitação GET para a API do YouTube para obter o ID do vídeo
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        // Obtendo o ID do vídeo a partir dos resultados da pesquisa
        const videoId = data.items[0].id.videoId;

        // Criando o iframe e incorporando na página
        const videoContainer = document.getElementById('video-container');
        const iframeCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        videoContainer.innerHTML = iframeCode;
      })
      .catch(error => {
        console.error('Erro ao obter ID do vídeo:', error.message);
      });
  }); */



   // Sua chave de API do YouTube
   const apiKey = 'AIzaSyB1FO1ITQH9RT3cBOdwUkcuZqHHcDPKpuc';

   // Função para lidar com o envio do formulário de pesquisa
   document.getElementById('video-search-form').addEventListener('submit', function(event) {
     event.preventDefault();
 
     // Obtendo a consulta de pesquisa do formulário
     const searchQuery = document.getElementById('search-query').value;
 
     // URL da API do YouTube para pesquisa de vídeos
     const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&key=${apiKey}`;
 
     // Fazendo a solicitação GET para a API do YouTube para obter os resultados da pesquisa
     fetch(searchUrl)
       .then(response => response.json())
       .then(data => {
         // Exibindo os resultados da pesquisa
         displaySearchResults(data.items);
       })
       .catch(error => {
         console.error('Erro ao realizar a pesquisa:', error.message);
       });
   });
 
   // Função para exibir os resultados da pesquisa na página
   function displaySearchResults(results) {
     const searchResultsContainer = document.getElementById('search-results');
 
     // Limpar os resultados anteriores
     searchResultsContainer.innerHTML = '';
 
     // Iterar sobre os resultados e exibir cada vídeo
     results.forEach(result => {
       const videoId = result.id.videoId;
       const videoTitle = result.snippet.title;
 
       // Criar um elemento de vídeo para exibir os resultados
       const videoElement = document.createElement('div');
       videoElement.innerHTML = `
         <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
         <p>${videoTitle}</p>
       `;
 
       // Adicionar o elemento de vídeo ao contêiner de resultados
       searchResultsContainer.appendChild(videoElement);
     });
   }