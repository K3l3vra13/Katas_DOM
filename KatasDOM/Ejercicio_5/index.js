//! Basándote en el array siguiente, crea una lista ul > li dinamicamente en el html 
//! que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ulAlbums = document.createElement("ul");

for (const album of albums) {
    const liAlbum = document.createElement("li");
    liAlbum.textContent = [album];
    ulAlbums.appendChild(liAlbum);
}

document.body.appendChild(ulAlbums);
