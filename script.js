import { ADATLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { rendezes } from "./rendezesek.js";
import { szures, szuresKorra } from "./szures.js";

let irany = 1;

$(function () {
  init();
});

function init() {
  const ARTICLEELEM = $("article");
  let txt = osszeallit(ADATLISTA);
  megjelenit(txt, ARTICLEELEM);
  console.log(ADATLISTA);

  ujElem(ADATLISTA);

  const FEJLEC = $("th");
  let kulcs;
  FEJLEC.on("click", function () {
    //console.log(event.target.id);
    kulcs = event.target.id;
    rendezes(ADATLISTA, kulcs, irany);
    irany *= -1;

    init();
  });

  const NEVINPUTELEM = $("#nevInput");
  const FAJTAINPUTELEM = $("#fajtaInput");
  const KORINPUTELEM = $("#korInput");
  
  NEVINPUTELEM.on("change", function () {
    let nevErtek = NEVINPUTELEM.val().charAt(0).toUpperCase();
    //console.log(nevErtek);
    let szurtlista = szures(ADATLISTA, "nev", nevErtek);
    //console.log(szurtlista);
    let tartalom = osszeallit(szurtlista);
    $(".table-responsive").replaceWith(tartalom);
  });

  FAJTAINPUTELEM.on("change", function () {
    let fajtaErtek = FAJTAINPUTELEM.val().charAt(0).toUpperCase();
    //console.log(fajtaErtek);
    let szurtlista = szures(ADATLISTA, "fajta", fajtaErtek);
    //console.log(szurtlista);
    let tartalom = osszeallit(szurtlista);    
    $(".table-responsive").replaceWith(tartalom);
  });

  KORINPUTELEM.on("change", function () {
    let korErtek = KORINPUTELEM.val();
    let szurtlista = szuresKorra(ADATLISTA, "kor", korErtek);
    let tartalom = osszeallit(szurtlista);
    $(".table-responsive").replaceWith(tartalom);
  });


  const TORLES = $(".deletebtn");
  TORLES.on("click", function () {
    let torolt = event.target.id;
    ADATLISTA.splice(torolt, 1);
    console.log(ADATLISTA)
    console.log(torolt)
    init();
    console.log(ADATLISTA)
  });
}

function osszeallit(lista) {
  let txt = "";
  txt = "<div class = 'table-responsive'>";
  txt += "<table class = 'table table-striped table-bordered table-hover'>";
  txt += "<thead class = 'table-dark'> <tr>";
  for (const key in kulcsLista) {
    txt += `<th id = '${key}' > ${kulcsLista[key]} ⇅ </th>`;
  }
  txt += "<th></th></tr></thead>";
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    const object = lista[index];
    for (const key in object) {
      const element = object[key];
      if (key === "nev") {
        txt += `<th> ${element} </th>`;
      } else if (key === "kep") {
        txt += `<th><div><img src = ${lista[index].kep} class = "kepek"></div></th>`;
      } else {
        txt += `<td> ${element}</td>`;
      }
    }
    txt += `<td> <button class="deletebtn" id="${index}">✖</button></td>`;
    txt += `</tr>`;
  }
  txt += "</table>";
  txt += "</div>";
  return txt;
}

function megjelenit(adat, tarolo) {
  tarolo.html(adat);
}

function ujElem(lista) {
  const NEV = $("#ujkutyaneve");
  const FAJTA = $("#ujkutyafaja");
  const KOR = $("#ujkutyakora");
  const KULDES = $("#felvetel");
  KULDES.on("click", function (event) {
    event.preventDefault();
    const UJELEM = {
      nev: NEV.val(),
      fajta: FAJTA.val(),
      kor: KOR.val(),
    };
    lista.push(UJELEM);
    //console.log(UJELEM);
    init();
  });
}
