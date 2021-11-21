function cleanUpIndex(){
    var clean = document.querySelectorAll('div.contact')
    console.log(clean)
    for (i=0; i<clean.length; i++){
        clean[i].remove()
    }
}