import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { rendezes } from "./rendezesek.js";
$(function () {
  const ARTICLEELEM = $("main");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);
});

function osszeallit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card" style="width:400px">
    <div class="card-body"> <h4 class="card-title">${lista[index].nev}</h4>
    <p class="card-text">${lista[index].kor}, ${lista[index].fajta}</p>
    <button class="btn btn-primary">Mutat</button>
    </div>
    <img class="card-img-bottom" src="${lista[index].kep}" alt="Card image" style="width:100%">
    </div>`;
  }

  return txt;
}
function megjelenit(adat, tarolo) {
  tarolo.append(adat);
}
