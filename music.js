const json = {"items":[
  {
    "title": "softwehr",
    "artist": "Shawn Kemp",
    "genre": "Hip Hop (Instrumental)",
    "release_year": "2010",
    "release_month": "October",
    "image": "images/music/shawnkemp_softwehr.jpg",
    "blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Donec massa sapien faucibus et molestie ac. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc consequat interdum varius sit amet. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna. Purus faucibus ornare suspendisse sed. Tincidunt augue interdum velit euismod in."
  },
  {
    "title": "Breath From Another",
    "artist": "Esthero",
    "genre": "Trip Hop",
    "release_year": "1998",
    "release_month": "April",
    "image": "images/music/esthero_breathfromanother.jpg",
    "blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Donec massa sapien faucibus et molestie ac. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc consequat interdum varius sit amet. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna. Purus faucibus ornare suspendisse sed. Tincidunt augue interdum velit euismod in."
  },
  {
    "title": "Age/Sex/Location",
    "artist": "Ari Lennox",
    "genre": "R&B",
    "release_year": "2022",
    "release_month": "September",
    "image": "images/music/arilennox_agesexlocation.webp",
    "blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Donec massa sapien faucibus et molestie ac. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc consequat interdum varius sit amet. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna. Purus faucibus ornare suspendisse sed. Tincidunt augue interdum velit euismod in."
  },
  {
    "title": "A Glorious Lethal Euphoria",
    "artist": "The Mermen",
    "genre": "Surf Rock",
    "release_year": "1995",
    "release_month": "May",
    "image": "images/music/themermen_agloriouslethaleuphoria.jpeg",
    "blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Donec massa sapien faucibus et molestie ac. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc consequat interdum varius sit amet. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna. Purus faucibus ornare suspendisse sed. Tincidunt augue interdum velit euismod in."
  },
  {
    "title": "Sproutpup",
    "artist": "Tottomori",
    "genre": "Electronica",
    "release_year": "2024",
    "release_month": "January",
    "image": "images/music/tottomori_sproutpup.jpg",
    "blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Donec massa sapien faucibus et molestie ac. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc consequat interdum varius sit amet. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna. Purus faucibus ornare suspendisse sed. Tincidunt augue interdum velit euismod in."
  },
  {
    "title": "Kiss Goodbye",
    "artist": "DMX Krew",
    "genre": "Electronic Funk",
    "release_year": "2010",
    "release_month": "August",
    "image": "images/music/dmxkrew_kissgoodbye.jpg",
    "blurb": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Donec massa sapien faucibus et molestie ac. Sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc consequat interdum varius sit amet. Placerat in egestas erat imperdiet sed euismod nisi porta. Aliquet nibh praesent tristique magna. Purus faucibus ornare suspendisse sed. Tincidunt augue interdum velit euismod in."
  }
]};

var music = document.getElementById("music");
const items = json.items;
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

