const myKey = `b71e321d32ba1844cc0df4d9d8a583a2`;
const myApi = `https://api.jamendo.com/v3.0/tracks/?client_id=fd9b5391&limit=100&order=popularity_total_desc`

const tracks = "tracks";
const albums = "albums";
const artists = "artists";

const tracksDiv = document.getElementById("tracks-div");

const tracksSection = document.getElementById("tracks-div");


const mainDisplay = document.getElementsByClassName("section-none");

const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  for(let i=50; i<60; i++){
    tracksDiv.innerHTML+= `              <div class="poster-div">
                <div class="poster-img-div">
                  <img class="poster-img" src="${data.results[i].image}" alt="">
                </div>
                <img class="play-icon" src="./main-icons/play-icon1.png" alt="">
                <p class="track-name">${data.results[i].name}</p>
                <p class="artist-name">${data.results[i].artist_name}</p>
              </div>`
  }
  const posterDivHover = document.getElementsByClassName('poster-div');
  const playIcon = document.getElementsByClassName("play-icon");
  for(let i=0; i < posterDivHover.length; i++){
    posterDivHover[i].addEventListener("mouseover", function(){
        playIcon[i].style.visibility = 'visible'
        playIcon[i].style.translate = '0px -10px';
        playIcon[i].style.opacity = '1';
    })
  }
  for(let i=0; i < posterDivHover.length; i++){
    posterDivHover[i].addEventListener("mouseout", function(){
        playIcon[i].style.opacity = '0';
        playIcon[i].style.visibility = 'hidden'
        playIcon[i].style.translate = '0px 10px';
    })
  }

  
  for(let i=0; i < posterDivHover.length; i++){
    posterDivHover[i].addEventListener("click", function(){
      for(let i=0; i<mainDisplay.length; i++){
        mainDisplay[i].style.display = "none"
      }
    })
  }
})

const showAllSection1 = document.getElementById("show-all-button-section-1");

let clickedSection1 = false;

showAllSection1.addEventListener("click", function(){

  clickedSection1 = !clickedSection1;

  if(clickedSection1){
    tracksDiv.innerHTML = '';
    showAllSection1.innerHTML = 'Show less';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for(let i=50; i<71; i++){
        tracksDiv.innerHTML+= `              <div class="poster-div">
                    <div class="poster-img-div">
                      <img class="poster-img" src="${data.results[i].image}" alt="">
                    </div>
                    <img class="play-icon" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                    <p class="artist-name">${data.results[i].artist_name}</p>
                  </div>`
      }

      const posterDivHover = document.getElementsByClassName('poster-div');
      const playIcon = document.getElementsByClassName("play-icon");
      for(let i=0; i < posterDivHover.length; i++){
        console.log(123)
        posterDivHover[i].addEventListener("mouseover", function(){
          playIcon[i].style.visibility = 'visible'
          playIcon[i].style.translate = '0px -10px';
          playIcon[i].style.opacity = '1';

        })
      }
      for(let i=0; i < posterDivHover.length; i++){
        posterDivHover[i].addEventListener("mouseout", function(){
          playIcon[i].style.opacity = '0';
          playIcon[i].style.visibility = 'hidden'
          playIcon[i].style.translate = '0px 10px';

        })
      }


      for(let i=0; i < posterDivHover.length; i++){
        posterDivHover[i].addEventListener("click", function(){
          for(let i=0; i<mainDisplay.length; i++){
            mainDisplay[i].style.display = "none"
          }
        })
      }


    })
  }else{
    tracksDiv.innerHTML = '';
    showAllSection1.innerHTML = 'Show all';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for(let i=50; i<60; i++){
        tracksDiv.innerHTML+= `              <div class="poster-div">
                    <div class="poster-img-div">
                      <img class="poster-img" src="${data.results[i].image}" alt="">
                    </div>
                    <img class="play-icon" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                    <p class="artist-name">${data.results[i].artist_name}</p>
                  </div>`
      }
      const posterDivHover = document.getElementsByClassName('poster-div');
      const playIcon = document.getElementsByClassName("play-icon");
      for(let i=0; i < posterDivHover.length; i++){
        posterDivHover[i].addEventListener("mouseover", function(){
          playIcon[i].style.visibility = 'visible'
          playIcon[i].style.translate = '0px -10px';
          playIcon[i].style.opacity = '1';
        })
      }
      for(let i=0; i < posterDivHover.length; i++){
        posterDivHover[i].addEventListener("mouseout", function(){
          playIcon[i].style.opacity = '0';
          playIcon[i].style.visibility = 'hidden'
          playIcon[i].style.translate = '0px 10px';
        })
      }


      for(let i=0; i < posterDivHover.length; i++){
        posterDivHover[i].addEventListener("click", function(){
          for(let j=0; j<mainDisplay.length; j++){
            mainDisplay[j].style.display = "none"
          }



        })
      }
    })
  }
})


const mymusic = document.getElementById("mymusic");
mymusic.style.display = "none";
const playButton = document.getElementById("play-btn")
let paused = true;
playButton.addEventListener("click", () => {
  paused = !paused
  if(paused === false){
    mymusic.play();
  }else{
    mymusic.pause();
  }
})




