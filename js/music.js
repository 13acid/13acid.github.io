fetch("./json/music.json")
  .then((response) => response.json())
  .then((musicData) => {

    var music = document.getElementById("music");
    const items = musicData.items;
    for(let i=0; i < items.length; i++){
  
      let item = document.createElement("div");
      item.className = "music-item";
      music.appendChild(item);

      let title = document.createElement("h2");
      title.innerHTML = items[i].title;
      item.appendChild(title);

      let artist = document.createElement("h3");
      artist.innerHTML = items[i].artist;
      item.appendChild(artist);

      let image = document.createElement("img");
      image.setAttribute('src', items[i].image);
      item.appendChild(image);

      let ul = document.createElement("ul");
      item.appendChild(ul);

      let genre = document.createElement("li");
      genre.innerHTML = "<strong>Genre:</strong> " + items[i].genre;
      ul.appendChild(genre);

      let releaseDate = document.createElement("li");
      releaseDate.innerHTML = "<strong>Released:</strong> " + items[i].release_month + " " + items[i].release_year;
      ul.appendChild(releaseDate);

      let link = document.createElement("li");
      let a = document.createElement("a");
      a.href = items[i].link;
      a.innerHTML = "Listen on YouTube"
      link.appendChild(a);
      ul.appendChild(link);
    }
  });


