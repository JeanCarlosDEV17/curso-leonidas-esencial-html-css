//Permite tener solo abierto un elemento details dentro del documento html de nuestra pagina web

const $detailList = document.querySelectorAll("details");
$detailList.forEach(($details) => {
   $details.querySelector("summary").addEventListener("click", expand);
});

function expand() {
   $detailList.forEach(($details) => {
      $details.removeAttribute("open");
   });
}

// const btn = document.getElementById("btn");
// let count = 0;
// function render() {
//    btn.innerText = `Count: ${count}`;
// }
// btn.addEventListener("click", () => {
//    // Count from 1 to 10.
//    if (count >= 10) {
//       count += 1;
//       render();
//    }
// });

// let yo = {
//    nombre: "yeison",
//    edad: 22,
//    hablar: function () {
//       console.log(this.nombre);
//    },
// };

// yo.hablar(); // yeison
