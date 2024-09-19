
// FUNÇÃO FADE IN !NÃO FUNCIONAL//

let elementsArray =
document.querySelectorAll(".imagem");

console.log(elementsArray)
window.addEventListener('scroll', fadeIn)

function fadeIn() {
    for (
        var i = 0; i < elementsArray.length; i++
    )
   {
    var elem = elementsArray[i]
    var distVisivel = 
elem.getBoundingClientRect().top - window.innerHeight + 20;
      
     if (distVisivel < 0) {
        elem.classList.add("visivel");
      }
      else {elem.classList.remove("visivel")}
   }
}

fadeIn();