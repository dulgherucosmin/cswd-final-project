const gallery = document.getElementById('lightgallery');
if (gallery) {
    lightGallery(gallery, {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        selector: 'a'
    });
}