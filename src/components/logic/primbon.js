function getSio(value) {
  switch (value % 4) {
    case 0:
      return { sio: "Macan", sioInd: "Harimau" };
    case 1:
      return { sio: "Kul", sioInd: "Keong" };
    case 2:
      return { sio: "Jaran", sioInd: "Kuda" };
    case 3:
      return { sio: "Ketek", sioInd: "Monyet" };
    default:
      return null;
  }
}

function getJodoh1(valueX, valueY) {
  switch ((valueX + valueY) % 5) {
    case 0:
      return {
        hasil: "Pati",
        ket: "",
      };
    case 1:
      return {
        hasil: "Sandang",
        ket: "",
      };
    case 2:
      return {
        hasil: "Papan",
        ket: "",
      };
    case 3:
      return {
        hasil: "Pangan",
        ket: "",
      };
    case 4:
      return {
        hasil: "Sekarat",
        ket: "",
      };
    default:
      return null;
  }
}

function getJodoh2(valueX, valueY) {
  switch ((valueX + valueY) % 8) {
    case 1:
      return {
        hasil: "Pegat",
        ket: "Yen tibo PEGAT bakal nemu masalah, mboh kui songko segi ekonomi, kekuasa'an, selingkuh sing akhir-akhire iso  pegatan.",
      };
    case 2:
      return {
        hasil: "Ratu",
        ket: "Yen tibo RATU iki jodoh banget. Di ajeni karo tonggo teparo lan wongliyo. Akeh wong iri karo keharmonisane.",
      };
    case 3:
      return {
        hasil: "Jodoh",
        ket: "Yen tibo JODOH cocok siji karo sijine. Iso podo-podo nrimo keluwehan lan kekurangan. Omah-omah lancar teko tuwo.",
      };
    case 4:
      return {
        hasil: "Topo",
        ket: "Yen tibo TOPO iki awal-awale susah nanging tembe mburi penak. Awal-awale kerep kenek masalah emboh kui songko segi ekonomi utowo liyane. Nanging yen wes duwe anak lan wes suwe anggone omah-omah bakal mulyo uripe.",
      };
    case 5:
      return {
        hasil: "Tinari",
        ket: "Yen tibo TINARI iki bakal nemu seneng. Penak anggone golek rejeki lan ora sampek urip kekurangan. Penak-penake tembung karep nemu bojo anggone omah-omah",
      };
    case 6:
      return {
        hasil: "Padu",
        ket: "Yen tibo PADU iki bakal sering tukaran. Nanging sejana saben ndino tukaran tapi ora sampek pegatan.",
      };
    case 7:
      return {
        hasil: "Sujanan",
        ket: "Yen tibo SUJANAN iki kerep tukaran lan akeh-akeh masalah selingkuh.",
      };
    case 0:
      return {
        hasil: "Pesthi",
        ket: "Yen tibo PESTHI iki omah-omahe bakal rukun, tentrem, adem ayem sampek tuwo. Senajan eneng masalah opo ae ora bakal ngrusak keharmonisane.",
      };
    default:
      null;
  }
}

export { getSio, getJodoh1, getJodoh2 };
