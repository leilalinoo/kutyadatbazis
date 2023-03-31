import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { rendezes } from "./rendezesek.js";
let irany = 1;


$(function () {
  init();
});

function init() {
  const ARTICLEELEM = $("article");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);
  console.log(ADATLISTA);

  const FEJLEC = $("th");
  let kulcs;
  FEJLEC.on("click", function () {
    //console.log(event.target.id);
    kulcs = event.target.id;
    rendezes(ADATLISTA, kulcs, irany);
    irany *= -1
    torles(ADATLISTA);
    init();
  });
}

function osszeallit(lista) {
  let txt = "<div class = 'table-responsive'>";
  txt += "<table class = 'table table-striped table-bordered table-hover'>";
  txt += "<thead class = 'table-dark'> <tr>";
  for (const key in kulcsLista) {
    txt += `<th id = '${key}' > ${kulcsLista[key]} ⇅ </th>`;
  }
  txt += "<th></th></tr></thead>";
  for (let index = 0; index < lista.length; index++) {
    txt += "<tr>";
    const object = lista[index];
    for (const key in object) {
      const element = object[key];
      if (key === "nev") {
        txt += `<th> ${element} </th>`;
      } else {
        txt += `<td> ${element}</td>`;
      }
    }
    txt += `<td> <button class="btn torol" id="t${index}">✖</button></td>"`;
    txt += `</tr>`;
  }
  txt += "</table>";
  txt += "</div>";
  return txt;
}

function megjelenit(adat, tarolo) {
  tarolo.html(adat);
}

function torles(lista) {
  for (let index = 0; index < lista.length; index++) {
    const TOROL = $(`#t${index}`);
    TOROL.on("click", function () {
      let torolt = event.target.id;
      $(torolt).remove();
      console.log(torolt);
    });
  }
}
