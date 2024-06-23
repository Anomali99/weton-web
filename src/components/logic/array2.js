class Array2 {
  constructor() {
    this.bulanB = new Array(35).fill("");
    this.bulanK = new Array(35).fill("");

    this.bulanB[0] = "Jan";
    this.bulanB[2] = "Agt";
    this.bulanB[6] = "Jul";
    this.bulanB[11] = "Jun";
    this.bulanB[15] = "Mei";
    this.bulanB[19] = "Des";
    this.bulanB[20] = "Apr";
    this.bulanB[24] = "Mar Nop";
    this.bulanB[28] = "Okt";
    this.bulanB[31] = "Peb";
    this.bulanB[33] = "Sep";

    this.bulanK[0] = "Jan";
    this.bulanK[3] = "Agt";
    this.bulanK[7] = "Jul";
    this.bulanK[12] = "Jun";
    this.bulanK[16] = "Mei";
    this.bulanK[20] = "Des";
    this.bulanK[21] = "Apr";
    this.bulanK[25] = "Mar Nop";
    this.bulanK[29] = "Okt";
    this.bulanK[31] = "Peb";
    this.bulanK[34] = "Sep";
  }

  static fromArray2(index) {
    const ar = new Array2();
    const newArray2 = new Array2();
    for (let i = 0; i < 35; i++) {
      if (index === 35) {
        index = 0;
      }
      newArray2.bulanB[index] = ar.getBulanB(i);
      newArray2.bulanK[index] = ar.getBulanK(i);
      index++;
    }
    return newArray2;
  }

  getBulanB(index) {
    return this.bulanB[index];
  }

  getBulanK(index) {
    return this.bulanK[index];
  }

  getIndexBulanB(s) {
    for (let j = 0; j < this.bulanB.length; j++) {
      let k = this.bulanB[j];
      if (k !== null) {
        for (let t of k.split(" ")) {
          if (s === t) {
            return j;
          }
        }
      }
    }
    return -1;
  }

  getIndexBulanK(s) {
    for (let j = 0; j < this.bulanK.length; j++) {
      let k = this.bulanK[j];
      if (k !== null) {
        for (let t of k.split(" ")) {
          if (s === t) {
            return j;
          }
        }
      }
    }
    return -1;
  }

  getIndexBulan(bln, th) {
    const thn = parseInt(th);
    if (thn % 4 == 0 || (thn % 400 == 0 && thn % 100 == 0)) {
      return this.getIndexBulanK(bln);
    } else {
      return this.getIndexBulanB(bln);
    }
  }
}

export default Array2;
