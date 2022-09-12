
$(document).ready(function(){
    setTimeout(function(){
        $("#alert").remove();
    }, 5000 ); // 5 secs
    $('.home-banner-container').mkinfinite({
        maxZoom: 1.4,
        animationTime: 5000,
        imagesRatio: (940 / 720),
        isFixedBG: true,
        zoomIn: true,
        imagesList: new Array(
            './img/blimg-1.jpg',
            './img/blimg-9.jpg',
            './img/blimg-3.jpg',
            './img/blimg-4.jpg',
            './img/blimg-5.jpg',
            './img/blimg-6.jpg',
            './img/blimg-7.jpg',
            './img/blimg-10.jpg'
        )
    });
})