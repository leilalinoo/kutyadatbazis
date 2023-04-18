import { ADATLISTA } from "./adat.js";
let modalIndex = 0;
$(function () {
  init();
});
function init() {
  const ARTICLEELEM = $("article");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);
  const GOMB = $(".mod");
  const MODAL = $("#modbod");
  console.log(GOMB);

  GOMB.on("click", function () {
    MODAL.html(modaltartalom(this.id));
    modalIndex = this.id;
  });

  const BAL = $("#bal");

  BAL.on("click", function () {
    modalIndex--;
    if (modalIndex < 0) {
      modalIndex = ADATOK.length - 1;
    }
    MODAL.html(modaltartalom(modalIndex));
  });

  const JOBB = $("#jobb");

  JOBB.on("click", function () {
    modalIndex++;
    if (modalIndex > ADATOK.length - 1) {
      modalIndex = 0;
    }
    MODAL.html(modaltartalom(modalIndex));
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
    </p><button id= "${index}" type="button" class="btn btn-primary mod fekete" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button>
    </div>`;
  }
  txt += "</div>";
  txt += "</div>";

  return txt;
}
function modaltartalom(szam) {
  let txt = "";
  txt +=
    "<h2>" +
    ADATLISTA[szam].nev +
    "</h2><p><b>Kor:</b> " +
    ADATLISTA[szam].kor +
    "<br><b>Fajta: </b>";
  ("</p>");
  return txt;
}
function megjelenit(adat, tarolo) {
  tarolo.append(adat);
}
