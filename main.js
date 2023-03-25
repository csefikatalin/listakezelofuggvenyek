import { KUTYALISTA, KUTYAKULCS } from "./adat.js";
import { osszeallit, osszeallit2 } from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";
// Ami az inportáláshoz kell: 
// az index.html-ben a type="module" attributum használata
// A importálandó függvény, vagy változó neve elé az export kuclsszó
//majd ahova importáljuk, ott az alább látható módon. 
//Figyelj a .js kiterjesztésre!
window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  rendezBarmiSzerint(KUTYALISTA,"kor",-1  ); /**kor szerint csökkenő sorrendbe rendez */
  console.log(KUTYALISTA);

  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujKutya);
}

function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  kartyak.innerHTML = osszeallit(KUTYALISTA);
  tablazat.innerHTML = osszeallit2(KUTYALISTA);
  torlesGomb();
}

function ujKutya() {
  const kutya = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  let kuldheto = true;
  let hibauzenet=""
  /**szedjük össze az űrlap adatait,
   * és tegyük bele egy objektumba
   * és fűzzük hozá a KUTYALISTA-hoz
   */
  const NevInputElem = document.querySelector("#kneve");
  kutya.nev = NevInputElem.value;

  const KorInputElem = document.querySelector("#kkor");
  kutya.kor = KorInputElem.value;

  const FajtaInputElem = document.querySelector("#kfajta");

  //itt is érdemes ellenőrizni, hogy megfelelő-e az adat:
  var filter = /^[A-Z][a-zA-Z]{2,}$/;
  if (filter.test(FajtaInputElem.value)) {
    kutya.fajta = FajtaInputElem.value;
    document.querySelector("#nevhiba").innerHTML=""
    kuldheto = true;
  } else {
    kuldheto = false;
    hibauzenet="A név hiányzik, vagy a formátuma hibás!"
    document.querySelector("#nevhiba").innerHTML=hibauzenet
  }

  const NemInputElem = document.querySelector("#szuka");
  if (NemInputElem.checked) {
    kutya.nem = "szuka";
  } else {
    kutya.nem = "kan";
  }

  console.log(kutya);
  if (kuldheto) {
    KUTYALISTA.push(kutya);
    console.log(KUTYALISTA);
    kartyak.innerHTML = osszeallit(KUTYALISTA);
    tablazat.innerHTML = osszeallit2(KUTYALISTA);
    torlesGomb();
  }
}

/* let index = 0;

 const ADAT = document.querySelectorAll("input");
  for (const kulcs in KUTYAKULCS) {
    if (ADAT[index].id == "szuka" && szuka.checked == true) {
      console.log("szuka");
      kutya[kulcs] = "szuka";
      index++;
    } else if (ADAT[index].id == "kan" && kan.checked == true) {
      console.log("kan");
      kutya[kulcs] = "kan";
    } else {
       kutya.kor=NevInputElem.value;
      kutya[kulcs] = `${ADAT[index].value}`;
    }
    index++;
  } */
