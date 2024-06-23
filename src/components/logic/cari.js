import Array1 from "./array1.js";
import Array2 from "./array2.js";
import Array3 from "./array3.js";

function getBulan(i) {
  switch (parseInt(i)) {
    case 1:
      return "Jan";
    case 2:
      return "Peb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "Mei";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Agt";
    case 9:
      return "Sep";
    case 10:
      return "Okt";
    case 11:
      return "Nop";
    case 12:
      return "Des";
    default:
      return null;
  }
}

function getAbad(tahun, ar1) {
  const i = parseInt(tahun) % 2000;
  if (i >= 1 && i <= 100) {
    return ar1.getAbadAtIndex("A");
  } else if (i >= 101 && i <= 200) {
    return ar1.getAbadAtIndex("B");
  } else if (i >= 201 && i <= 300) {
    return ar1.getAbadAtIndex("C");
  } else if (i >= 301 && i <= 400) {
    return ar1.getAbadAtIndex("D");
  } else if (i >= 401 && i <= 500) {
    return ar1.getAbadAtIndex("E");
  } else if (i >= 501 && i <= 600) {
    return ar1.getAbadAtIndex("F");
  } else if (i >= 601 && i <= 700) {
    return ar1.getAbadAtIndex("G");
  } else if (i >= 701 && i <= 800) {
    return ar1.getAbadAtIndex("H");
  } else if (i >= 801 && i <= 900) {
    return ar1.getAbadAtIndex("I");
  } else if (i >= 901 && i <= 1000) {
    return ar1.getAbadAtIndex("J");
  } else if (i >= 1001 && i <= 1100) {
    return ar1.getAbadAtIndex("K");
  } else if (i >= 1101 && i <= 1200) {
    return ar1.getAbadAtIndex("L");
  } else if (i >= 1201 && i <= 1300) {
    return ar1.getAbadAtIndex("M");
  } else if (i >= 1301 && i <= 1400) {
    return ar1.getAbadAtIndex("N");
  } else if (i >= 1401 && i <= 1500) {
    return ar1.getAbadAtIndex("O");
  } else if (i >= 1501 && i <= 1600) {
    return ar1.getAbadAtIndex("P");
  } else if (i >= 1601 && i <= 1700) {
    return ar1.getAbadAtIndex("Q");
  } else if (i >= 1701 && i <= 1800) {
    return ar1.getAbadAtIndex("R");
  } else if (i >= 1801 && i <= 1900) {
    return ar1.getAbadAtIndex("S");
  } else if ((i >= 1901 && i <= 1999) || i == 0) {
    return ar1.getAbadAtIndex("T");
  } else {
    return -1;
  }
}

function getNeptuHari(str) {
  switch (str) {
    case "Senin":
      return 4;
    case "Selasa":
      return 3;
    case "Rabu":
      return 7;
    case "Kamis":
      return 8;
    case "Jum'at":
      return 6;
    case "Sabtu":
      return 9;
    case "Minggu":
      return 5;
    default:
      return 0;
  }
}

function getNeptuPasar(str) {
  switch (str) {
    case "Pahing":
      return 9;
    case "Pon":
      return 7;
    case "Wage":
      return 4;
    case "Kliwon":
      return 8;
    case "Legi":
      return 5;
    default:
      return 0;
  }
}

function getHasil(str) {
  const strSplit = str.split("-");
  const tgl = parseInt(strSplit[2]).toString();
  const bulan = getBulan(strSplit[1]);
  const tahun = strSplit[0];
  const tb1 = new Array1();
  const tb2 = Array2.fromArray2(getAbad(tahun, tb1));
  const tb3 = Array3.fromArray3(tahun, tb2.getIndexBulan(bulan, tahun));
  const hari = tb1.getHariAtIndex(tb3.getIndexTanggal(tgl));
  const pasar = tb1.getPasarAtIndex(tb3.getIndexTanggal(tgl));
  return {
    pasar: {
      value: pasar,
      neptu: getNeptuPasar(pasar),
    },
    hari: {
      value: hari,
      neptu: getNeptuHari(hari),
    },
  };
}

export default getHasil;
