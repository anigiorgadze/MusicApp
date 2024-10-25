

// const waveform = document.getElementById("waveform")
// const wavesurfer = WaveSurfer.create({
//   "container": waveform,
//   "height": 25,
//   "width": 300,
//   "splitChannels": false,
//   "normalize": false,
//   "waveColor": "#ffffff",
//   "progressColor": "#0be994",
//   "cursorColor": "#000000",
//   "cursorWidth": 2,
//   "barWidth": 2,
//   "barGap": 2,
//   "barRadius": null,
//   "barHeight": null,
//   "barAlign": "",
//   "minPxPerSec": 1,
//   "fillParent": true,
//   "url": "./audio.mp3",
//   "autoplay": false,
//   "interact": true,
//   "dragToSeek": true,
//   "hideScrollbar": false,
//   "audioRate": 1,
//   "autoScroll": true,
//   "autoCenter": true,
//   "sampleRate": 8000
// })


// const playBtn = document.querySelector('.play-music-album1');

// wavesurfer.on('ready', function(){
//   playBtn.addEventListener('click', () => {
//     wavesurfer.playPause();
//     playBtn.textContent = wavesurfer.isPlaying() ? "Pause" : "Play";
//   })
// })


const myKey = `b71e321d32ba1844cc0df4d9d8a583a2`;
const myApi = `https://api.jamendo.com/v3.0/tracks/?client_id=fd9b5391&limit=100&order=popularity_total_desc`

const tracks = "tracks";
const albums = "albums";
const artists = "artists";

const tracksDiv = document.getElementById("tracks-div");

const tracksSection = document.getElementById("tracks-div");


const mainDisplay = document.getElementsByClassName("section-none");
const chooseMusic = document.getElementById("choosen-music");

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
        playIcon[i].style.translate = '0px -55px';
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
          playIcon[i].style.translate = '0px -55px';
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
          playIcon[i].style.translate = '0px -55px';
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







// ALBUMS -------------------------------------------

const albumsDiv = document.getElementById("albums-div");

const myFetch2 = fetch(`https://api.jamendo.com/v3.0/${albums}/?client_id=fd9b5391&limit=150&order=popularity_total_desc`).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  for(let i=110; i<120; i++){
    albumsDiv.innerHTML+= `              <div class="poster-div1">
                <div class="poster-img-div">
                  <img class="poster-img" src="${data.results[i].image}" alt="">
                </div>
                <img class="play-icon1" src="./main-icons/play-icon1.png" alt="">
                <p class="track-name">${data.results[i].name}</p>
                <p class="artist-name">${data.results[i].artist_name}</p>
              </div>`
  }
  const posterDivHover1 = document.getElementsByClassName('poster-div1');
  const playIcon1 = document.getElementsByClassName("play-icon1");
  for(let i=0; i < posterDivHover1.length; i++){
    posterDivHover1[i].addEventListener("mouseover", function(){
        playIcon1[i].style.visibility = 'visible'
        playIcon1[i].style.translate = '0px -55px';
        playIcon1[i].style.opacity = '1';
    })
  }
  for(let i=0; i < posterDivHover1.length; i++){
    posterDivHover1[i].addEventListener("mouseout", function(){
        playIcon1[i].style.opacity = '0';
        playIcon1[i].style.visibility = 'hidden'
        playIcon1[i].style.translate = '0px 10px';
    })
  }

  
  for(let i=0; i < posterDivHover1.length; i++){
    posterDivHover1[i].addEventListener("click", function(){
      for(let i=0; i<mainDisplay.length; i++){
        mainDisplay[i].style.display = "none"
      }
    })
  }
})


const showAllSection2 = document.getElementById("show-all-button-section-2");

let clickedSection2 = false;

showAllSection2.addEventListener("click", function(){

  clickedSection2 = !clickedSection2;

  if(clickedSection2){
    albumsDiv.innerHTML = '';
    showAllSection2.innerHTML = 'Show less';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${albums}/?client_id=fd9b5391&limit=150&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for(let i=110; i<130; i++){
        albumsDiv.innerHTML+= `              <div class="poster-div1">
                    <div class="poster-img-div">
                      <img class="poster-img" src="${data.results[i].image}" alt="">
                    </div>
                    <img class="play-icon1" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                    <p class="artist-name">${data.results[i].artist_name}</p>
                  </div>`
      }

      const posterDivHover1 = document.getElementsByClassName('poster-div1');
      const playIcon1 = document.getElementsByClassName("play-icon1");
      for(let i=0; i < posterDivHover1.length; i++){
        console.log(123)
        posterDivHover1[i].addEventListener("mouseover", function(){
          playIcon1[i].style.visibility = 'visible'
          playIcon1[i].style.translate = '0px -55px';
          playIcon1[i].style.opacity = '1';

        })
      }
      for(let i=0; i < posterDivHover1.length; i++){
        posterDivHover1[i].addEventListener("mouseout", function(){
          playIcon1[i].style.opacity = '0';
          playIcon1[i].style.visibility = 'hidden'
          playIcon1[i].style.translate = '0px 10px';

        })
      }


      for(let i=0; i < posterDivHover1.length; i++){
        posterDivHover1[i].addEventListener("click", function(){
          for(let i=0; i<mainDisplay.length; i++){
            mainDisplay[i].style.display = "none"
          }
        })
      }


    })
  }else{
    albumsDiv.innerHTML = '';
    showAllSection2.innerHTML = 'Show all';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${albums}/?client_id=fd9b5391&limit=150&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for(let i=110; i<120; i++){
        albumsDiv.innerHTML+= `              <div class="poster-div1">
                    <div class="poster-img-div">
                      <img class="poster-img" src="${data.results[i].image}" alt="">
                    </div>
                    <img class="play-icon1" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                    <p class="artist-name">${data.results[i].artist_name}</p>
                  </div>`
      }
      const posterDivHover1 = document.getElementsByClassName('poster-div1');
      const playIcon1 = document.getElementsByClassName("play-icon1");
      for(let i=0; i < posterDivHover1.length; i++){
        posterDivHover1[i].addEventListener("mouseover", function(){
          playIcon1[i].style.visibility = 'visible'
          playIcon1[i].style.translate = '0px -55px';
          playIcon1[i].style.opacity = '1';
        })
      }
      for(let i=0; i < posterDivHover1.length; i++){
        posterDivHover1[i].addEventListener("mouseout", function(){
          playIcon1[i].style.opacity = '0';
          playIcon1[i].style.visibility = 'hidden'
          playIcon1[i].style.translate = '0px 10px';
        })
      }


      for(let i=0; i < posterDivHover1.length; i++){
        posterDivHover1[i].addEventListener("click", function(){
          for(let j=0; j<mainDisplay.length; j++){
            mainDisplay[j].style.display = "none"
          }
        })
      }
    })
  }
})


// --------------------------------------------------




const artistsDiv = document.getElementById("artists-div");

const myFetch3 = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  for(let i=0; i<10; i++){
    let artistImg = ''
    if(data.results[i].image == ""){
      artistImg = './main-icons/default.jpg';
    }else{
      artistImg = data.results[i].image;
    }
    artistsDiv.innerHTML+= `              <div class="poster-div2">
                <div class="poster-img-div">
                  <img class="poster-img artist-round" src="${artistImg}" alt="">
                </div>
                <img class="play-icon2" src="./main-icons/play-icon1.png" alt="">
                <p class="track-name">${data.results[i].name}</p>
                
              </div>`
  }
  const posterDivHover2 = document.getElementsByClassName('poster-div2');
  const playIcon2 = document.getElementsByClassName("play-icon2");
  for(let i=0; i < posterDivHover2.length; i++){
    posterDivHover2[i].addEventListener("mouseover", function(){
        playIcon2[i].style.visibility = 'visible'
        playIcon2[i].style.translate = '0px -55px';
        playIcon2[i].style.opacity = '1';
    })
  }
  for(let i=0; i < posterDivHover2.length; i++){
    posterDivHover2[i].addEventListener("mouseout", function(){
        playIcon2[i].style.opacity = '0';
        playIcon2[i].style.visibility = 'hidden'
        playIcon2[i].style.translate = '0px 10px';
    })
  }

  const myFetch = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    for(let i=0; i < posterDivHover2.length; i++){
      posterDivHover2[i].addEventListener("click", function(){
        const myArtistName = posterDivHover2[i].querySelector(".track-name");
        console.log(posterDivHover2[i].innerHTML);
        for(let i=0; i<mainDisplay.length; i++){
          mainDisplay[i].style.display = "none";
        }
        let artistImg = ''
        if(data.results[i].image == ""){
          artistImg = './main-icons/default.jpg';
        }else{
          artistImg = data.results[i].image;
        }
        
        const choosenTrack = document.getElementById("choosen-music-div");

        chooseMusic.style.display = 'block'

        // const albumArray = data.results.filter((item) => item.name === data.results[i].name)
        // console.log(albumArray);
  
        // <p class="music-order-number">${i+1}</p>
        // <div class="artist-album-name-order-div">
        //   <p class="song-name-order">${data.results[i].name}</p>
        //   <p class="group-name-order">${data.results[i].artist_name}</p>
        // </div>

       
        const myFetch1 = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
          return response.json();
        }).then((data1) => {
          // console.log(data1);
          

        // const albumMusics = ` <div class="artists-music-div-play">
        //         <div class="music-order-div">
        //           <img class="play-music-order" src="./main-icons/play.png" alt="">


        //           ${albumArray.map((item, index) => {
        //             return(
        //               `                    <p class="music-order-number">${index+1}</p>
        //           <div class="artist-album-name-order-div">
        //             <p class="song-name-order">${item.name}</p>
        //             <p class="group-name-order">${item.artist_name}</p>
        //           </div>`
        //             )
        //           })}

        //         </div>


        //         <div class="add-music-div-duration">
        //           <img class="add-button-order" src="./main-icons/add.png" alt="">
        //           <p class="duration-text">${(data.results[i].duration / 60).toFixed(2)}</p>
        //         </div>
        //       </div>`;


        



        let artistName = ` <div class="music-title-date-added-div">
                        <div class="title-div">
                          <p class="order discription">#<span class="title-span">Title</span></p>
                        </div>


                        <div class="clockwise-div">
                          <img class="clockwise-icon" src="./main-icons/clockwise.png" alt="clockwise">
                        </div>
                      </div>`

        


        let chooseMusicHead = `<div class="choosen-music-above-div">
                      <div class="album-image-choosen-music-div">
                        <img class="choosen-music-album-img" src=${artistImg} alt="">
                      </div>
                      
                      <div class="album-artist-name-div">
                        <h1 class="choose-music-name-album"></h1>
                        <div class="choose-music-name-artist-div">
                          <h6 class="choose-music-name-artist-text">${data.results[i].name}<span class="date-span">• 2013 • 12 songs, 41 min 47 sec</span></h6>
                        </div>
                      </div>
                    
                    </div>

                    <div class="play-music-album-padding">
                      <img class="play-music-album" src="./main-icons/play-icon1.png" alt="">
                      <button class="play-music-album1">CLICK</button>
                      <div id="waveform"></div>
                    </div>`                    
        
        // const result = artistName + albumsMusic

        choosenTrack.innerHTML = ''

        choosenTrack.innerHTML += chooseMusicHead

        choosenTrack.innerHTML += artistName;

        for(let j=0; j<10;j++){
          choosenTrack.innerHTML += ` <div class="artists-music-div-play">
          <div class="music-order-div">
            <img class="play-music-order" src="./main-icons/play.png" alt="">
            <p class="music-order-number">${j+1}</p>
            <div class="artist-album-name-order-div">
              <p class="song-name-order">${data1.results[j].name}</p>
              <p class="group-name-order">${data1.results[j].artist_name}</p>
            </div>
            


          </div>


            <div class="add-music-div-duration">
              <img class="add-button-order" src="./main-icons/add.png" alt="">
              <p class="duration-text">${(data1.results[j].duration / 60).toFixed(2)}</p>
            </div>
          </div>`;
        }
      })

      })
    }
  })
  
  // for(let i=0; i < posterDivHover2.length; i++){
  //   posterDivHover2[i].addEventListener("click", function(){
  //     for(let i=0; i<mainDisplay.length; i++){
  //       mainDisplay[i].style.display = "none";

  //       const choosenTrack = document.getElementById("choosen-music-div");

  //       const albumMusics = ` <div class="artists-music-div-play">
  //               <div class="music-order-div">
  //                 <img class="play-music-order" src="./main-icons/play.png" alt="">
  //                 <p class="music-order-number">1</p>
  //                 <div class="artist-album-name-order-div">
  //                   <p class="song-name-order">IV dasi - abiturientebssa</p>
  //                   <p class="group-name-order">IV DASI</p>
  //                 </div>
  //               </div>


  //               <div class="add-music-div-duration">
  //                 <img class="add-button-order" src="./main-icons/add.png" alt="">
  //                 <p class="duration-text">3:34</p>
  //               </div>
  //             </div>`;


  //       const artistName = ` <div class="music-title-date-added-div">
  //                       <div class="title-div">
  //                         <p class="order discription">#<span class="title-span">Title</span></p>
  //                       </div>


  //                       <div class="clockwise-div">
  //                         <img class="clockwise-icon" src="./main-icons/clockwise.png" alt="clockwise">
  //                       </div>
  //                     </div>`


  //       const chooseMusicHead = `<div class="choosen-music-above-div">
  //                     <div class="album-image-choosen-music-div">
  //                       <img class="choosen-music-album-img" src="./main-icons/house.jpg" alt="">
  //                     </div>
                      
  //                     <div class="album-artist-name-div">
  //                       <h1 class="choose-music-name-album">AM</h1>
  //                       <div class="choose-music-name-artist-div">
  //                         <h6 class="choose-music-name-artist-text">Artict Monkeys <span class="date-span">• 2013 • 12 songs, 41 min 47 sec</span></h6>
  //                       </div>
  //                     </div>
                    
  //                   </div>

  //                   <div class="play-music-album-padding">
  //                     <img class="play-music-album" src="./main-icons/play-icon1.png" alt="">
  //                   </div>`


  //     }
  //   })
  // }
})



const showAllSection3 = document.getElementById("show-all-button-section-3");

let clickedSection3 = false;

showAllSection3.addEventListener("click", function(){

  clickedSection3 = !clickedSection3;

  if(clickedSection3){
    artistsDiv.innerHTML = '';
    showAllSection3.innerHTML = 'Show less';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for(let i=50; i<71; i++){
        let artistImg = ''
        if(data.results[i].image == ""){
          artistImg = './main-icons/default.jpg';
        }else{
          artistImg = data.results[i].image;
        }
        artistsDiv.innerHTML+= `              <div class="poster-div2">
                    <div class="poster-img-div">
                      <img class="poster-img artist-round" src="${artistImg}" alt="">
                    </div>
                    <img class="play-icon2" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                    <p class="artist-name">${data.results[i].artist_name}</p>
                  </div>`
      }

      const posterDivHover2 = document.getElementsByClassName('poster-div2');
      const playIcon2 = document.getElementsByClassName("play-icon2");
      for(let i=0; i < posterDivHover2.length; i++){
        console.log(123)
        posterDivHover2[i].addEventListener("mouseover", function(){
          playIcon2[i].style.visibility = 'visible'
          playIcon2[i].style.translate = '0px -55px';
          playIcon2[i].style.opacity = '1';

        })
      }
      for(let i=0; i < posterDivHover2.length; i++){
        posterDivHover2[i].addEventListener("mouseout", function(){
          playIcon2[i].style.opacity = '0';
          playIcon2[i].style.visibility = 'hidden'
          playIcon2[i].style.translate = '0px 10px';

        })
      }


      for(let i=0; i < posterDivHover2.length; i++){
        posterDivHover2[i].addEventListener("click", function(){
          for(let i=0; i<mainDisplay.length; i++){
            mainDisplay[i].style.display = "none"
          }
        })
      }


    })
  }else{
    artistsDiv.innerHTML = '';
    showAllSection3.innerHTML = 'Show all';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for(let i=50; i<60; i++){
        let artistImg = ''
        if(data.results[i].image == ""){
          artistImg = './main-icons/default.jpg';
        }else{
          artistImg = data.results[i].image;
        }
        artistsDiv.innerHTML+= `              <div class="poster-div2">
                    <div class="poster-img-div">
                      <img class="poster-img artist-round" src="${artistImg}" alt="">
                    </div>
                    <img class="play-icon2" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                    <p class="artist-name">${data.results[i].artist_name}</p>
                  </div>`
      }
      const posterDivHover2 = document.getElementsByClassName('poster-div2');
      const playIcon2 = document.getElementsByClassName("play-icon2");
      for(let i=0; i < posterDivHover2.length; i++){
        posterDivHover2[i].addEventListener("mouseover", function(){
          playIcon2[i].style.visibility = 'visible'
          playIcon2[i].style.translate = '0px -55px';
          playIcon2[i].style.opacity = '1';
        })
      }
      for(let i=0; i < posterDivHover2.length; i++){
        posterDivHover2[i].addEventListener("mouseout", function(){
          playIcon2[i].style.opacity = '0';
          playIcon2[i].style.visibility = 'hidden'
          playIcon2[i].style.translate = '0px 10px';
        })
      }


      for(let i=0; i < posterDivHover2.length; i++){
        posterDivHover2[i].addEventListener("click", function(){
          for(let j=0; j<mainDisplay.length; j++){
            mainDisplay[j].style.display = "none"
          }
        })
      }
    })
  }
})


// search

const searchInput = document.getElementById("search-input")
const searchSection = document.getElementById("search-section")

searchInput.addEventListener("input", (e) =>{

    searchSection.style.display = "grid"
    for(let i=0; i<mainDisplay.length; i++){
      mainDisplay[i].style.display = "none"
    }

    let inpuValue = e.target.value.toLowerCase()

    console.log(inpuValue)
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {

      let nameOfarr = data.results.map((item) =>{
        let result = item.name
        return [result.toLowerCase(),item.image,item.name,item.artist_name,item.audio]
      })

      console.log(nameOfarr)
      let newArr = nameOfarr.filter((item) =>{
        return item[0].includes(inpuValue)
      })

      searchSection.innerHTML = ""
      console.log(newArr)
      for(let i=0;i<newArr.length;i++){
        console.log(newArr[i][1].image)
        searchSection.innerHTML += `<div class="poster-div">
                    <div class="poster-img-div">
                      <img class="poster-img" src="${newArr[i][1]}" alt="">
                    </div>
                    <img class="play-icon" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${newArr[i][0]}</p>
                    <p class="artist-name">${newArr[i][3]}</p>
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

      if(searchInput.value == ""){
        for(let i=0; i<mainDisplay.length; i++){
          mainDisplay[i].style.display = "grid"
          searchSection.style.display = "none"
        }

      }
  })

})




// registration

let btnOfsingup = document.getElementById("sign-up-button")
let buttonOflog = document.getElementsByClassName("gol-in1")
// sing up ///
let Line = document.getElementsByClassName("line")
// 

let EmailOfregister = document.getElementById("email")
let ButtonOfregisterpart1 = document.getElementById("button")
let PassOfregister = document.getElementById("pass")
let CircleOfregister = document.getElementsByClassName("circle")
let ButtonOfpass = document.getElementById("button-of-pass")
let NameOfregister = document.getElementById("name")
let SurnameOfregister = document.getElementById("surname")
let DateOfregister = document.getElementById("date")

// 
let LabelOfEmail = document.getElementById("label-of-email")
let LabelOfPass = document.getElementById("label-of-pass")
let LabelOfre = document.getElementsByClassName("style-of-label-re")


// 
let Button = document.getElementsByClassName("style-of-btn")


let ContainOfsingup = document.getElementById("register-container")
let ContainOflogin = document.getElementById("log-container")
// 
let ContainerOfForm1 = document.getElementById("register-container-part1")
let ContainerOfForm2 = document.getElementById("register-container-part2")
let ContainerOfForm3 = document.getElementById("register-container-part3")

function DateOfuser(email,password,username,usersurname,birthday){
  this.email = email,
  this.password = password,
  this.username = username,
  this.usersurname = usersurname,
  this.birthday = birthday
}

let singBoolen = false

btnOfsingup.addEventListener("click", () =>{
  singBoolen = !singBoolen
  
  if(singBoolen){
    ContainOfsingup.style.display = "flex"
    ContainerOfForm1.style.display = "flex"
  }else{
    ContainOfsingup.style.display = "none"
    ContainerOfForm1.style.display = "none"
  }
  
})

let logBoolen = false

buttonOflog[0].addEventListener("click", () =>{

  logBoolen = !logBoolen
  if(logBoolen){
    ContainOflogin.style.display = "flex"
    
  }else{
    ContainOflogin.style.display = "none"
  }

})
// form1
let MyArr = []

Button[0].addEventListener("click", () =>{
  if(!String(EmailOfregister.value).includes("@")){
    LabelOfEmail.innerHTML = "Please enter correct Email address!!!"
    LabelOfEmail.style.color = "red"
    Button[0].style.backgroundColor = "red"
    EmailOfregister.value = ""
  }else{
    Line[0].style.backgroundColor = "#0be994"
    LabelOfEmail.innerHTML = "Email address"
    LabelOfEmail.style.color = "#ffffffbf"
    Button[0].style.backgroundColor = "#0be994"
    MyArr.push(EmailOfregister.value)
    EmailOfregister.value = ""
    ContainerOfForm1.style.display = "none"
    ContainerOfForm2.style.display = "flex"
  }
  console.log(MyArr)
})

// form2
// let 

PassOfregister.addEventListener("input", () =>{

  CircleOfregister[0].style.backgroundColor = "red"
  CircleOfregister[1].style.backgroundColor = "red"
  CircleOfregister[2].style.backgroundColor = "red"

  let checkletter = /[a-zA-Z]/.test(PassOfregister.value)
  let checkcharct = /[!@#$%&0-9]/.test(PassOfregister.value)

  if(checkletter){
    CircleOfregister[0].style.backgroundColor = "#0be994"
  }
  if(checkcharct){
    CircleOfregister[1].style.backgroundColor = "#0be994"
  }
  if(PassOfregister.value.length >=10){
    CircleOfregister[2].style.backgroundColor = "#0be994"
  }

  Button[1].addEventListener("click", () =>{
    if(checkletter === true && checkcharct === true && PassOfregister.value.length >=10){
      Line[0].style.backgroundColor = "#0be994"
      Line[1].style.backgroundColor = "#0be994"
      Button[1].style.backgroundColor = "#0be994"
      LabelOfPass.innerHTML = "Password"
      LabelOfPass.style.color = "#ffffffbf"
      ContainerOfForm2.style.display = "none"
      ContainerOfForm3.style.display = "flex"

    }else{
      Button[1].style.backgroundColor = "red"
      LabelOfPass.innerHTML = "Please enter correct password !!!"
      LabelOfPass.style.color = "red"
    }

  })

})

// form3
Button[2].addEventListener("click", () =>{
  let sum = 0

  if(NameOfregister.value === ""){
    LabelOfre[0].style.color = "red"
    NameOfregister.style.borderColor = "red"
    Button[2].style.backgroundColor = "red"
  }else{
    sum += 1
    Button[2].style.backgroundColor = "#0be994"
    LabelOfre[0].style.color = "#ffffffbf"
    NameOfregister.style.borderColor = "#ffffffbf"
    // NameOfregister.value = ""
  }

  if(SurnameOfregister.value === ""){
    Button[2].style.backgroundColor = "red"
    LabelOfre[1].style.color = "red"
    SurnameOfregister.style.borderColor = "red"
  }else{
    sum += 1
    Button[2].style.backgroundColor = "#0be994"
    LabelOfre[1].style.color = "#ffffffbf"
    SurnameOfregister.style.borderColor = "#ffffffbf"
    // SurnameOfregister.value = ""
  }

  if(DateOfregister.value === ""){
    Button[2].style.backgroundColor = "red"
    LabelOfre[2].style.color = "red"
    DateOfregister.style.borderColor = "red"
  }else{
    sum += 1
    Button[2].style.backgroundColor = "#0be994"
    LabelOfre[2].style.color = "#ffffffbf"
    DateOfregister.style.borderColor = "#ffffffbf"
    // DateOfregister.value = ""
  }

  if(sum === 3){
    Line[0].style.backgroundColor = "#0be994"
    Line[1].style.backgroundColor = "#0be994"
    Line[2].style.backgroundColor = "#0be994"
    NameOfregister.value = ""
    SurnameOfregister.value = ""
    DateOfregister.value = ""
  }
  // console.log(sum)
})


// const albumMusics = ` <div class="artists-music-div-play">
//                 <div class="music-order-div">
//                   <img class="play-music-order" src="./main-icons/play.png" alt="">
//                   <p class="music-order-number">1</p>
//                   <div class="artist-album-name-order-div">
//                     <p class="song-name-order">IV dasi - abiturientebssa</p>
//                     <p class="group-name-order">IV DASI</p>
//                   </div>
//                 </div>


//                 <div class="add-music-div-duration">
//                   <img class="add-button-order" src="./main-icons/add.png" alt="">
//                   <p class="duration-text">3:34</p>
//                 </div>
//               </div>`;


// const artistName = ` <div class="music-title-date-added-div">
//                 <div class="title-div">
//                   <p class="order discription">#<span class="title-span">Title</span></p>
//                 </div>


//                 <div class="clockwise-div">
//                   <img class="clockwise-icon" src="./main-icons/clockwise.png" alt="clockwise">
//                 </div>
//               </div>`


// const chooseMusicHead = `<div class="choosen-music-above-div">
//               <div class="album-image-choosen-music-div">
//                 <img class="choosen-music-album-img" src="./main-icons/house.jpg" alt="">
//               </div>
              
//               <div class="album-artist-name-div">
//                 <h1 class="choose-music-name-album">AM</h1>
//                 <div class="choose-music-name-artist-div">
//                   <h6 class="choose-music-name-artist-text">Artict Monkeys <span class="date-span">• 2013 • 12 songs, 41 min 47 sec</span></h6>
//                 </div>
//               </div>
            
//             </div>

//             <div class="play-music-album-padding">
//               <img class="play-music-album" src="./main-icons/play-icon1.png" alt="">
//             </div>`

// const choosenTrack = document.getElementById("choosen-music-div");


