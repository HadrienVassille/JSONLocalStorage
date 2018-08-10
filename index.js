// Storage
document.getElementById('storage').onclick = function() {
    if(typeof localStorage!='undefined' && JSON) {
        let book = {
            title:document.getElementById('title').value,
            author:document.getElementById('author').value,
            year:document.getElementById('year').value,
        };
        localStorage.setItem('book',JSON.stringify(book));
        alert("Book saved");
    } else alert("localStorage is not supported");
};
// Lecture
document.getElementById('lecture').onclick = function() {
    if(typeof localStorage!='undefined' && JSON) {
        let book = JSON.parse(localStorage.getItem('book'));
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('year').value = book.year;
        alert("Lecture Done");
    } else alert("localStorage is not supported");
};
