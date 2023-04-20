import { ADATLISTA } from "./adat.js";
let modalIndex = 0;
$(function () {
  init();
});
function init() {
  const ARTICLEELEM = $("article");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);
  const GOMB = $(".kattintott");
  const MODAL = $("#modbod");
  console.log(GOMB);

  GOMB.on("click", function () {
    //  MODAL.html(modaltartalom(this.id));
    const MODALHEAD = $(".modal-title");
    modalIndex = $(this).attr("id");
    MODALHEAD.html(`<h1>${ADATLISTA[modalIndex].nev}</h1>`);
    const MODALBODY = $(".modal-body");
    MODALBODY.html(`<button class="balgomb" ><</button>
    <img style="width: 86%"src="${ADATLISTA[modalIndex].kep}">
    <button class="jobbgomb" ">></button><br>
    <h2>Kora: ${ADATLISTA[modalIndex].kor}</h2><br>
    <h2>Kora: ${ADATLISTA[modalIndex].fajta}<br></h2>`);
    
    
    
  });
  const JOBB = $(".jobbgomb");
  JOBB.on("click", function () {
    //  MODAL.html(modaltartalom(this.id));
    const MODALHEAD = $(".modal-title");
    modalIndex = $(this).attr("id");
    MODALHEAD.html(`<h1>${ADATLISTA[modalIndex+1].nev}</h1>`);
    const MODALBODY = $(".modal-body");
    MODALBODY.html(`<button class="balgomb" "><</button>
    <img style="width: 86%"src="${ADATLISTA[modalIndex+1].kep}">
    <button class="jobbgomb" ">></button><br>
    <h2>Kora: ${ADATLISTA[modalIndex+1].kor}</h2><br>
    <h2>Kora: ${ADATLISTA[modalIndex+1].fajta}<br></h2>`);
    
    
    
  });
}

function osszeallit(lista) {
  let txt = '<div class="kozep">';
  txt += '<div class="container mt-4 row">';
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card" class="card col-lg-3 col-md-4 col-sm-6 p-0" style="width:400px">
    <div class="card-body"> <h4 class="card-title">${lista[index].nev}<br></h4>
    
    </div>
    <img class="card-img-bottom" src="${lista[index].kep}" alt="Card image" style="width:100%">
    <p class="card-text">Kor: ${lista[index].kor} <br> Fajta:  ${lista[index].fajta}<br></p>
    </p><button id= "${index}" type="button" class="btn btn-primary kattintott fekete" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button>
    </div>`;
  }
  txt += "</div>";
  txt += "</div>";
  txt += modaltartalom();

  return txt;
}
function modaltartalom() {
  let txt = "";
  txt += `<div class="modal fade" id="myModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title"></h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
`;
  return txt;
}
function megjelenit(adat, tarolo) {
  tarolo.append(adat);
}
