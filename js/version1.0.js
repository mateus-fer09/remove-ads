document.addEventListener("DOMContentLoaded", function () {
    const inputLink = document.getElementById("link");
    const btnInserir = document.getElementById("btn");
    const videoContainer = document.querySelector(".video-container");
    const messageContainer = document.querySelector(".message-container");
    const loadingSpinner = document.querySelector(".loading-spinner");

    btnInserir.addEventListener("click", inserirVideo);

    function inserirVideo() {
        const inputLinkValue = inputLink.value;
        const videoId = getYouTubeVideoId(inputLinkValue);

        if (videoId) {
            const embedLink = `https://www.youtube.com/embed/${videoId}`;

            exibirLoading(); // Mostra o indicador de carregamento

            setTimeout(function () {
                while (videoContainer.firstChild) {
                    videoContainer.removeChild(videoContainer.firstChild);
                }

                const iframe = criarIframe(embedLink);
                videoContainer.appendChild(iframe);

                ocultarLoading(); // Oculta o indicador de carregamento
                exibirMensagem("Vídeo inserido com sucesso!");
            }, 1000 / 2); // Simula um atraso para representar o carregamento do vídeo
        } else {
            exibirMensagem("Link do vídeo inválido. Por favor, insira um link válido.");
        }
    }

    function getYouTubeVideoId(url) {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        return match ? sanitizeInput(match[1]) : "";
    }

    function criarIframe(src) {
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "360";
        iframe.src = src;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        return iframe;
    }

    function exibirMensagem(mensagem) {
        messageContainer.textContent = mensagem;
    }

    function exibirLoading() {
        loadingSpinner.style.display = "block";
    }

    function ocultarLoading() {
        loadingSpinner.style.display = "none";
    }

    function sanitizeInput(input) {
        // Implemente a sanitização conforme necessário para evitar ataques XSS
        return input.replace(/[^a-zA-Z0-9_-]/g, "");
    }
});
