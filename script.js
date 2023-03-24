import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezesek.js";

$(function () {
  const ARTICLEELEM = $("article");
  let txt = osszeallit(ADATLISTA);
  ARTICLEELEM.append(txt);
  
});

function osszeallit(lista) {
  let txt =
    '<div class="container mt-3"><table class="table"><thead class="table-dark"><tr><td id="#nev">Név⇅</td><td id="#kor">Kor⇅</td><td id="#fajta">Fajta⇅</td></thead><tbody>';

  for (let index = 0; index < lista.length; index++) {
    txt += `<tr><th>${lista[index].nev}</th><td>${lista[index].kor}</td><td>${lista[index].fajta}</td></tr>`;
  }
  txt += "</tbody></table></div>";
  return txt;
}

