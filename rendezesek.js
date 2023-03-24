function rendezesNevAlapjan(lista, kulcs) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    return ertek;
  });
}

function rendezesKorAlapjan(lista) {
  lista.sort(function (a, b) {
    return a.kor - b.kor;
  });
}

export function rendezes(lista, kulcs) {
  if (typeof lista[0][kulcs] === "number") {
    rendezesKorAlapjan(lista);
  } else {
    rendezesNevAlapjan(lista, kulcs);
  }
}
