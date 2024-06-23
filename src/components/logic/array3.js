class Array3 {
  constructor() {
    this.tanggal = new Array(35).fill(null);
    this.tahun1 = [
      "63",
      "79",
      "95",
      "72",
      "88",
      "81",
      "97",
      "74",
      "90",
      "67",
      "83",
      "99",
      "76",
      "92",
      "85",
      "-",
      "78",
      "94",
      "71",
      "87",
      "64",
      "80",
      "96",
      "89",
      "",
      "82",
      "98",
      "75",
      "91",
      "68",
      "84",
      "0",
      "93",
      "-",
      "86",
    ];
    this.tahun2 = [
      "24",
      "40",
      "56",
      "49",
      "65",
      "42",
      "58",
      "35",
      "51",
      "28",
      "44",
      "60",
      "53",
      "69",
      "46",
      "62",
      "39",
      "55",
      "32",
      "48",
      "41",
      "57",
      "73",
      "50",
      "66",
      "43",
      "59",
      "36",
      "52",
      "45",
      "61",
      "77",
      "54",
      "70",
      "74",
    ];
    this.tahun3 = [
      "1",
      "17",
      "33",
      "10",
      "26",
      "3",
      "19",
      "-",
      "12",
      "5",
      "21",
      "37",
      "14",
      "30",
      "7",
      "23",
      "-",
      "16",
      "9",
      "25",
      "2",
      "18",
      "34",
      "11",
      "27",
      "4",
      "20",
      "13",
      "29",
      "6",
      "22",
      "38",
      "15",
      "31",
      "8",
    ];

    for (let i = 0; i < 31; i++) {
      this.tanggal[i] = (i + 1).toString();
    }
  }

  static fromArray3(th, key) {
    const ar = new Array3();
    const newArray3 = new Array3();
    const q = th.substring(2);
    const s = parseInt(q).toString();
    let i = -1;

    for (let j = 0; j < 35; j++) {
      if (s === ar.tahun1[j]) {
        i = j;
        break;
      }
    }
    if (i === -1) {
      for (let j = 0; j < 35; j++) {
        if (s === ar.tahun2[j]) {
          i = j;
          break;
        }
      }
      if (i === -1) {
        for (let j = 0; j < 35; j++) {
          if (s === ar.tahun3[j]) {
            i = j;
            break;
          }
        }
      }
    }

    for (let j = 0; j < 35; j++) {
      if (i === 35) {
        i = 0;
      }
      if (key === 35) {
        key = 0;
      }
      newArray3.tanggal[key] = ar.tanggal[i];
      newArray3.tahun1[key] = ar.tahun1[i];
      newArray3.tahun2[key] = ar.tahun2[i];
      newArray3.tahun3[key] = ar.tahun3[i];
      key++;
      i++;
    }
    return newArray3;
  }

  getTanggal() {
    return this.tanggal;
  }

  getTahun1() {
    return this.tahun1;
  }

  getTahun2() {
    return this.tahun2;
  }

  getTahun3() {
    return this.tahun3;
  }

  getIndexTanggal(tgl) {
    for (let i = 0; i < this.tanggal.length; i++) {
      const tg = this.tanggal[i];
      if (tgl === tg) {
        return i;
      }
    }
    return -1;
  }
}

export default Array3;
