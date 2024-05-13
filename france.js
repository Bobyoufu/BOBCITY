function showContent(contentId) {
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var contentToShow = document.getElementById(contentId);
    contentToShow.style.display = 'block';
}
