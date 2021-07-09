//Permite tener solo abierto un elemento details dentro del documento html de nuestra pagina web
const $detailList = document.querySelectorAll("details");
$detailList.forEach(($details) => {
   $details.querySelector('summary').addEventListener('click', expand);
});

function expand() {
   
   $detailList.forEach(($details) => {
      $details.removeAttribute('open');
   });
}
