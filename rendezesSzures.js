export function rendezBarmiSzerint(lista,kulcs, irany=1) {
  /**név szerint ABC sorrendbe rendezzük az adatokat
   * Ezzel az eredeti lista is megváltozik!
   */
  console.log(lista);

  lista.sort(function (a, b) {
    console.log(a.nev);
    console.log(b.nev);

    console.log("következő a, b");
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    ertek*=irany;
    return ertek;/**vissszatérünk pozitív vagy negatív számmal */
  });
}

/**filter - szűrés 
 *  új listát hoz létre , 
 * megadhatunk egy szűrési feltételt 
 * 
 */


