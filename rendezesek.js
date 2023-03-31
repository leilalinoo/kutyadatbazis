export function rendezes(lista, kulcs, irany) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    ertek *= irany;
    return ertek;
  });
}