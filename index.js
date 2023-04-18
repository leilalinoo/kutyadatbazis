import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { rendezes } from "./rendezesek.js";
$(function () {
  init();
});
function init() {
  const ARTICLEELEM = $("article");
  const MODAL = $("#myModal .modal-content");
  const MUTAT = $(".gomb");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);

  MUTAT.on("click", function () {
    let id = event.target.id;
    let tartalom = `
    <div class="modal-header">
      <h4 class="modal-title">${ADATLISTA[id].nev}</h4>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    
    <div class="modal-body">
    <div class="card">
    
    <img src="${ADATLISTA[id].kep}" class="nagykep" alt="kutya"><br>
    <p class="card-body"> Kor: ${ADATLISTA[id].kor}<br>
    Fajta: ${ADATLISTA[id].fajta}
    </p><br>
    <div class="card-footer btn-group">
    </div>
    
    
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezár</button>
    </div>`;
    MODAL.html(tartalom);
  });
}

function osszeallit(lista) {
  let txt = '<div class="kozep">';
  txt += '<div class="container mt-4 row">';
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card" class="card col-lg-3 col-md-4 col-sm-6 p-0" style="width:400px">
    <div class="card-body"> <h4 class="card-title">${lista[index].nev}</h4>
    
    </div>
    <img class="card-img-bottom" src="${lista[index].kep}" alt="Card image" style="width:100%">
    <p class="card-text">${lista[index].kor}, ${lista[index].fajta}</p>
    <button class="fekete info btn btn" data-bs-toggle="modal" data-bs-target="#myModal" id="${index}">Mutat</button>
    </div>`;
  }
  txt += "</div>";
  txt += "</div>";
  txt += `<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
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
</div>`;
  return txt;
}
function megjelenit(adat, tarolo) {
  tarolo.append(adat);
}
