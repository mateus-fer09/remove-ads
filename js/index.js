const input_link = document.getElementById("link");
const button_inserir = document.getElementById("btn");
const videoContainer = document.querySelector(".painel .video");

inserirVideo = () => {
    let input_link_value = input_link.value;

    // Extrai o ID do vídeo do link do YouTube
    let videoId = getYouTubeVideoId(input_link_value);

    // Constrói o link de incorporação
    let embedLink = `https://www.youtube.com/embed/${videoId}`;

    // Cria um novo elemento iframe
    let iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = embedLink;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    // Limpa o conteúdo anterior e adiciona o novo iframe à div com a classe "video"
    videoContainer.innerHTML = "";
    videoContainer.appendChild(iframe);
};

button_inserir.addEventListener("click", inserirVideo);

// Função para obter o ID do vídeo do YouTube a partir do URL
function getYouTubeVideoId(url) {
    // Extrai o ID do vídeo da URL do YouTube
    let match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : "";
}
