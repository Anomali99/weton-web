class Array1 {
  constructor() {
    this.hari = new Array(35).fill("");
    this.pasar = new Array(35).fill("");
    this.abad = new Array(35).fill("");

    for (let i = 0; i < this.hari.length; i++) {
      this.hari[i++] = "Senin";
      this.hari[i++] = "Selasa";
      this.hari[i++] = "Rabu";
      this.hari[i++] = "Kamis";
      this.hari[i++] = "Jum'at";
      this.hari[i++] = "Sabtu";
      this.hari[i] = "Minggu";
    }

    for (let i = 0; i < this.pasar.length; i++) {
      this.pasar[i++] = "Pahing";
      this.pasar[i++] = "Pon";
      this.pasar[i++] = "Wage";
      this.pasar[i++] = "Kliwon";
      this.pasar[i] = "Legi";
    }

    this.abad[0] = "A";
    this.abad[1] = "L";
    this.abad[3] = "C";
    this.abad[5] = "N";
    this.abad[7] = "E";
    this.abad[8] = "P";
    this.abad[10] = "G";
    this.abad[12] = "R";
    this.abad[14] = "I";
    this.abad[15] = "T";
    this.abad[17] = "K";
    this.abad[19] = "B";
    this.abad[21] = "M";
    this.abad[22] = "D";
    this.abad[24] = "O";
    this.abad[26] = "F";
    this.abad[28] = "Q";
    this.abad[29] = "H";
    this.abad[31] = "S";
    this.abad[33] = "J";
  }

  getHari() {
    return this.hari;
  }

  getPasar() {
    return this.pasar;
  }

  getAbad() {
    return this.abad;
  }

  getHariAtIndex(i) {
    return this.hari[i];
  }

  getPasarAtIndex(i) {
    return this.pasar[i];
  }

  getAbadAtIndex(i) {
    return this.abad[i];
  }

  getIndexAbad(s) {
    let j = 0;
    for (let k of this.abad) {
      if (s === k) {
        break;
      }
      j++;
    }
    return j;
  }
}

export default Array1;
