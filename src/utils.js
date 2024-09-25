// Fungsi untuk mendapatkan domino default
export const defaultDominoes = () => {
  return [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [5, 1],
    [3, 4],
  ];
};

// Fungsi untuk mengacak domino
export const randomizeDominoes = () => {
  const dominoes = defaultDominoes(); // Gunakan domino default sebagai dasar
  return dominoes.map((domino) => [shuffle(domino[0]), shuffle(domino[1])]);
};

// Fungsi untuk mengacak angka 0-6 untuk domino
const shuffle = (num) => {
  return Math.floor(Math.random() * 7);
};

// Fungsi untuk menghitung jumlah double domino (angka kembar)
export const countDoubleNumber = (dominoes) => {
  return dominoes.filter((domino) => domino[0] === domino[1]).length;
};

// Fungsi untuk membalik pasangan angka pada setiap domino
export const flipDominoes = (dominoes) => {
  return dominoes.map((domino) => [domino[1], domino[0]]);
};

// Fungsi untuk menghapus kartu domino duplikat
export const removeDuplicates = (dominoes) => {
  const uniqueDominoes = [];
  const seen = new Set();

  for (const domino of dominoes) {
    // Buat kombinasi unik dengan mengurutkan elemen
    const sortedDomino = domino.slice().sort().toString();

    // Jika kombinasi belum ada di set, tambahkan
    if (!seen.has(sortedDomino)) {
      uniqueDominoes.push(domino);
      seen.add(sortedDomino);
    }
  }

  return uniqueDominoes;
};

// Fungsi untuk menghapus domino berdasarkan jumlah (sum) dari angkanya
export const removeBySum = (dominoes, sum) => {
  return dominoes.filter((domino) => {
    const dominoSum = domino[0] + domino[1];
    return dominoSum !== sum;
  });
};
