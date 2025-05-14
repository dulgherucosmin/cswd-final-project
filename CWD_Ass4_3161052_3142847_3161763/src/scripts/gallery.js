const gallery = document.getElementById('lightgallery');

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    selector: 'a'
});