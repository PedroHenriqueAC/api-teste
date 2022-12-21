function getImagesByAlt(alt) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alt) {
            images.push(allImages[i]);
        }
    }
    return images;
}
getImagesByAlt("Carrossel 1")[0].srcset = "https://s1.static.brasilescola.uol.com.br/be/2022/06/paisagem-natural-floresta.jpg"
