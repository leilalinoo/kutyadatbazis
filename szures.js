export function szures(lista, kulcs, szuresiFeltetel) {
  const SZURTLISTA = lista.filter(function (a) {
    return a[kulcs].includes(szuresiFeltetel);
  });
  return SZURTLISTA;
}

export function szuresKorra(lista, kulcs, szuresiFeltetel) {
  let szurtLista = lista.filter(function (obj) {
    console.log(obj.kor + szuresiFeltetel);
    return eval(obj.kor + szuresiFeltetel);
  });
  console.log(szurtLista);
  return szurtLista;
}