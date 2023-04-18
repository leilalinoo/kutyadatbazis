import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { rendezes } from "./rendezesek.js";
$(function () {
  init();
});
function init() {
  const ARTICLEELEM = $("article");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);
  
  
}

function osszeallit(lista) {
  let txt ='<div class="kozep">'
   txt += '<div class="container mt-4 row">';
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card" class="card col-lg-3 col-md-4 col-sm-6 p-0" style="width:400px">
    <div class="card-body"> <h4 class="card-title">${lista[index].nev}</h4>
    
    </div>
    <img class="card-img-bottom" src="${lista[index].kep}" alt="Card image" style="width:100%">
    <p class="card-text">${lista[index].kor}, ${lista[index].fajta}</p>
    <button class="fekete" class="btn btn-primary modalBtn" data-toggle="modal" data-target="#myModal">Mutat</button>
    </div>`;
  }
  txt += "</div>";
  txt += "</div>";
  let modal = $("<div>").addClass("modal").attr("id", "myModal");
  let modalContent = $("<div>").addClass("modal-content");
  let closeBtn = $("<span>").addClass("close").attr("data-dismiss", "modal").html("&times;");
  let modalText = $("<p>").text("Ez egy modal ablak!");

  modalContent.append(closeBtn, modalText);
  modal.append(modalContent);
  $("body").append(modal);

  // Gomb eseménykezelő hozzárendelése
  $(".modalBtn").click(function() {
    $("#myModal").modal("show");
  });

  // Bezárás gomb eseménykezelő hozzárendelése
  $(".close").click(function() {
    $("#myModal").modal("hide");
  });
  return txt;
}
function megjelenit(adat, tarolo) {
  tarolo.append(adat);
}
