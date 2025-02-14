const Movie = {
  // Jawaban soal nomor 1
  id: 25002,
  title: "Spongebob SquarePants",
  image: "https://moviefazz.id/public/img/spongebob.png",
  genre: ["Animasi", "Kartun", "Komedi"],
  cast: [
    {
      name: "Spongebob SquarePants",
      role: "Pemain utama",
    },
    {
      name: "Patrick Star",
      role: "Sahabat Spongebob",
    },
    {
      name: "Squidward Tentacles",
      role: "Tetangga atau rekan kerja spongebob",
    },
    {
      name: "Mr. Krabs",
      role: "Pemilik Restoran Krusty Krab",
    },
    {
      name: "Plankton",
      role: "pemilik Restoran Chumb Bucket",
    },
  ],

  //   Jawaban soal nomor 2 a
  getTitleImageGenre: function () {
    console.log(`Judul = ${this.title}`);
    console.log(`Gambar = ${this.image}`);
    console.log(`Genre = ${this.genre}`);
  },

  //   jawaban soal nomor 2 b
  getCast() {
    const cast = this.cast.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name < b.name) return 1;
    });
    console.log(cast);
  },

  //    jawaban soal nomor 2 c
  setTitle: function (newTitle) {
    this.title = newTitle;
    console.log(this.title);
  },

  //   Jawaban soal nomor 2 d
  setTitle(newImage) {
    this.image = newImage;
    console.log(this.image);
  },
};

Movie.getTitleImageGenre();
Movie.getCast();
Movie.setTitle("Upin & Ipin");
Movie.setTitle("https://moviefazz.id/private/img/patrick.png");
