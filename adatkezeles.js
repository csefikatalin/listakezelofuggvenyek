export function osszeallit(lista) {
    let txt = "";
    txt += `<div class = "container">`;
    for (let index = 0; index < lista.length; index++) {
      for (const key in lista) {
        lista[key];
      }
      for (const kutya of lista) {
      }
      txt += `<div class= "kartya">`;
      txt += `<h3>Kutya adatai</h3>`;
      for (const kulcs in lista[index]) {
        txt += `<p>${kulcs}: ${lista[index][kulcs]}</p>`;
      }
      txt += `</div>`;
    }
    txt += `</div>`;
   return txt;
   //kartyak.innerHTML = txt;
}

export function osszeallit2(lista) {
    let txt2 = "";
    txt2 += `<div class = "container">`;
    txt2 += `<table>`;
    for (let index = 0; index < lista.length; index++) {
        txt2 += `<tr>`;
        for (const kulcs in lista[index]) {
            txt2 += `<td>${kulcs}: ${lista[index][kulcs]}</td>`;
        }
        txt2 += `</tr>`;
    }
    txt2 += `</table>`;
    txt2 += `</div>`;
    return txt2;
    //tablazat.innerHTML = txt2;
}
  