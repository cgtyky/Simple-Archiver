const fs = require("fs-extra");
const os = require("os");

function FilmArchiver() {
  fs.readdir("./target", (err, data) => {
    if (err) {
      console.log(err);
    }
    const newFilms = data;
    renameFilms(newFilms);
  });
}

function renameFilms(newFilms) {
  for (film of newFilms) {
    var str = film;
    var pos = str.indexOf(")");
    var newStr = str.slice(0, pos + 1);
    addNewLine(newStr);
    moveFilm(film);
  }
}
function addNewLine(input) {
  fs.appendFile("movie-list.txt", os.EOL + input, err => {
    if (err) throw err;
    console.log("Updated!");
  });
}

function moveFilm(input) {
  fs.move(`./target/${input}`, `./move-target/${input}`, err => {
    if (err) throw err;
    console.log(`Moved ${input}`);
  });
}
FilmArchiver();
