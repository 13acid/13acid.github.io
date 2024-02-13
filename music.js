import musicData from "music.json" assert {type: "json"};

var music = document.getElementById("music");
const items = musicData.items;
for(let i=0; i < items.length; i++){
  
  let item = document.createElement("div");
  item.className = "music-item";
  music.appendChild(item);

  let title = document.createElement("h3");
  title.innerHTML = items[i].title;
  item.appendChild(title);

  let artist = document.createElement("h4");
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

  let blurb = document.createElement("li");
  blurb.innerHTML = items[i].blurb;
  ul.appendChild(blurb);
}



      // <div class="music-item">
      //   <h3 class="title">Shawn Kemp - softwehr</h3>
      //   <img src="images/music/shawnkemp_softwehr.jpg"></img>
      //   <ul>
      //     <li><strong>Released:</strong> October 2010</li>
      //     <li><strong>Genre:</strong> Hip Hop</li>
      //     <li><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      //   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      //   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      //   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      //   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
      //   deserunt mollit anim id est laborum.
      //     </li>
      //   </ul>

