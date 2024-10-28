const logoMain = document.getElementsByClassName('logo')
logoMain[0].addEventListener('click',()=>{
  location.reload()
})

let userData = {
  name: "",
  email: "",
  password: "",
  music: []
}


localStorage.setItem("username", "musiclist")
// localStorage.clear()



const myKey = `b71e321d32ba1844cc0df4d9d8a583a2`;
const myApi = `https://api.jamendo.com/v3.0/tracks/?client_id=fd9b5391&limit=100&order=popularity_total_desc`

const tracks = "tracks";
const albums = "albums";
const artists = "artists";

const tracksDiv = document.getElementById("tracks-div");

const tracksSection = document.getElementById("tracks-div");


const mainDisplay = document.getElementsByClassName("section-none");
const chooseMusic = document.getElementById("choosen-music");

const addMusicBtn = document.getElementsByClassName('add-button-order')

let sumOfliked = 0






let LikedSongdiv = document.getElementById("liked-div-container")

let myArry = []

let finalrresult = []

const addTofavorite = (elment) => {

  console.log(elment)
  // LikedSongdiv.innerHTML = ""
  for (let i = 0; i < elment.length; i++) {
    console.log(elment[i])

    // LikedSongdiv.innerHTML += `<div class="contain-Ofmusiclist" > <p class="artist-name"> ${mydate[i][0]} </p> <p class="albom-name"> ${mydate[i][1]} </p></div>`
  }

}

// library ICON style
const mainSection = document.getElementById('main-section')
let libraryIcon = document.getElementsByClassName('library-icon')
const libraryAside = document.getElementById('your-library-aside')



function screenzoom(){if (window.matchMedia("(min-width: 2051px)").matches) {
  libraryAside.style.height = '100vh'}
}
screenzoom()
let iconBoolean = false
libraryIcon[0].addEventListener('click', () => {
  
  
  iconBoolean = !iconBoolean
  if (window.matchMedia("(max-width: 1300px)").matches) {
    console.log('test')
    if (iconBoolean) {
      libraryAside.style.height = '300px'
      mainSection.style.top = '10px'
    } else {
      libraryAside.style.height = '80px'
      mainSection.style.top = '10px'
    }
  }


})



let choosenTrack = document.getElementById("choosen-music-div")
// chooseMusic.style.display = 'block'
let chooseMusicDiv = document.getElementsByClassName('choosen-music-album-img')[0]
let chooseMusicArtistText = document.getElementsByClassName('choose-music-name-artist-text')
let musicsLists = document.getElementById('musics-lists')

const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  for (let i = 50; i < 60; i++) {
    tracksDiv.innerHTML += `<div class="poster-div">
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
  for (let i = 0; i < posterDivHover.length; i++) {
    posterDivHover[i].addEventListener("mouseover", function () {
      playIcon[i].style.visibility = 'visible'
      playIcon[i].style.translate = '0px -55px';
      playIcon[i].style.opacity = '1';
    })
  }
  for (let i = 0; i < posterDivHover.length; i++) {
    posterDivHover[i].addEventListener("mouseout", function () {
      playIcon[i].style.opacity = '0';
      playIcon[i].style.visibility = 'hidden'
      playIcon[i].style.translate = '0px 10px';
    })
  }




  for (let i = 0; i < posterDivHover.length; i++) {
    posterDivHover[i].addEventListener("click", function () {
      chooseMusic.style.display = 'block'
      let artistName1 = posterDivHover[i].querySelector('.artist-name').innerHTML
      let totalDuration = 0
      chooseMusicDiv.src = posterDivHover[i].querySelector(".poster-img").src


      var playBtn = document.getElementById('playBtn');

      var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#ffffff88',
        progressColor: '#0be994',
        height: 90,
        barRadius: 4,
        responsive: true,


      });

      playBtn.onclick = function () {

        wavesurfer.playPause();

        if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
          playBtn.src = "./main-icons/pause-icon.png"
          console.log('yes')
        } else {
          playBtn.src = "./main-icons/play-icon1.png"
          console.log('no')
        }
      }

      wavesurfer.on('finish', function () {
        playBtn.src = "./main-icons/play-icon1.png";
        wavesurfer.stop();
      })




      let j = 0
      for (let x = 0; x < data.results.length; x++) {
        if (data.results[x].artist_name == artistName1) {

          j++
          totalDuration += data.results[x].duration
          musicsLists.innerHTML += `<div class="artists-music-div-play">
          <div class="music-order-div">
              <img class="play-music-order" src="./main-icons/play.png" alt="">
              <p class="music-order-number">${j}</p>
              <div class="artist-album-name-order-div">
                <p class="song-name-order">${data.results[x].name}</p>
                <p class="group-name-order">${data.results[x].artist_name}</p>
              </div>
                    
              </div>
                <div class="add-music-div-duration">
                  <img class="add-button-order" src="./main-icons/add.png" alt="">
                  <p class="booleancheck">false</p>
                  <p class="duration-text">${(data.results[x].duration / 60).toFixed(2)}</p>
                </div>
              </div>`;

          chooseMusicArtistText[0].innerHTML = `${artistName1} • ${j} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

          let artistDiv = document.getElementsByClassName('artists-music-div-play')

          for (let a = 0; a < artistDiv.length; a++) {
            artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
              let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
              let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
              let resultUrl = data.results.filter((item) => {
                if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                  return item.audio
                }

              })
              console.log(resultUrl[0].audio);

              wavesurfer.load(resultUrl[0].audio);
              wavesurfer.playPause();

              if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                playBtn.src = "./main-icons/pause-icon.png"
                console.log('yes')
              } else {
                playBtn.src = "./main-icons/play-icon1.png"
                console.log('no')
              }

            })


            addMusicBtn[a].addEventListener('click', () => {

              // console.log( artistDiv[a])
              console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
              if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                sumOfliked++
                LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                <p class="number-of-music">${sumOfliked}</p>
                <div class="container-of-names">
                  <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                  <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                </div>
              </div>`
              }
            })
          }

        }
      }

      for (let i = 0; i < mainDisplay.length; i++) {
        mainDisplay[i].style.display = "none"
      }
    })
  }
})

const showAllSection1 = document.getElementById("show-all-button-section-1");

let clickedSection1 = false;

showAllSection1.addEventListener("click", function () {

  clickedSection1 = !clickedSection1;

  if (clickedSection1) {
    tracksDiv.innerHTML = '';
    showAllSection1.innerHTML = 'Show less';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for (let i = 50; i < 71; i++) {
        tracksDiv.innerHTML += `              <div class="poster-div">
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
      for (let i = 0; i < posterDivHover.length; i++) {
        console.log(123)
        posterDivHover[i].addEventListener("mouseover", function () {
          playIcon[i].style.visibility = 'visible'
          playIcon[i].style.translate = '0px -55px';
          playIcon[i].style.opacity = '1';

        })
      }
      for (let i = 0; i < posterDivHover.length; i++) {
        posterDivHover[i].addEventListener("mouseout", function () {
          playIcon[i].style.opacity = '0';
          playIcon[i].style.visibility = 'hidden'
          playIcon[i].style.translate = '0px 10px';

        })
      }

      for (let i = 0; i < posterDivHover.length; i++) {
        posterDivHover[i].addEventListener("click", function () {
          chooseMusic.style.display = 'block'
          let artistName1 = posterDivHover[i].querySelector('.artist-name').innerHTML
          let totalDuration = 0
          chooseMusicDiv.src = posterDivHover[i].querySelector(".poster-img").src


          var playBtn = document.getElementById('playBtn');

          var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#ffffff88',
            progressColor: '#0be994',
            height: 90,
            barRadius: 4,
            responsive: true,


          });

          playBtn.onclick = function () {

            wavesurfer.playPause();

            if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
              playBtn.src = "./main-icons/pause-icon.png"
              console.log('yes')
            } else {
              playBtn.src = "./main-icons/play-icon1.png"
              console.log('no')
            }
          }

          wavesurfer.on('finish', function () {
            playBtn.src = "./main-icons/play-icon1.png";
            wavesurfer.stop();
          })




          let j = 0
          for (let x = 0; x < data.results.length; x++) {
            if (data.results[x].artist_name == artistName1) {

              j++
              totalDuration += data.results[x].duration
              musicsLists.innerHTML += `<div class="artists-music-div-play">
          <div class="music-order-div">
              <img class="play-music-order" src="./main-icons/play.png" alt="">
              <p class="music-order-number">${j}</p>
              <div class="artist-album-name-order-div">
                <p class="song-name-order">${data.results[x].name}</p>
                <p class="group-name-order">${data.results[x].artist_name}</p>
              </div>
                    
              </div>
                <div class="add-music-div-duration">
                  <img class="add-button-order" src="./main-icons/add.png" alt="">
                  <p class="booleancheck">false</p>
                  <p class="duration-text">${(data.results[x].duration / 60).toFixed(2)}</p>
                </div>
              </div>`;

              chooseMusicArtistText[0].innerHTML = `${artistName1} • ${j} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

              let artistDiv = document.getElementsByClassName('artists-music-div-play')

              for (let a = 0; a < artistDiv.length; a++) {
                artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                  let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                  let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                  let resultUrl = data.results.filter((item) => {
                    if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                      return item.audio
                    }

                  })
                  console.log(resultUrl[0].audio);

                  wavesurfer.load(resultUrl[0].audio);
                  wavesurfer.playPause();

                  if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                    playBtn.src = "./main-icons/pause-icon.png"
                    console.log('yes')
                  } else {
                    playBtn.src = "./main-icons/play-icon1.png"
                    console.log('no')
                  }

                })
                addMusicBtn[a].addEventListener('click', () => {

                  // console.log( artistDiv[a])
                  console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                  if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                    sumOfliked++
                    addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                    LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                <p class="number-of-music">${sumOfliked}</p>
                <div class="container-of-names">
                  <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                  <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                </div>
              </div>`
                  }
                })

              }

            }
          }
          for (let i = 0; i < mainDisplay.length; i++) {
            mainDisplay[i].style.display = "none"
          }
        })
      }


    })
  } else {
    tracksDiv.innerHTML = '';
    showAllSection1.innerHTML = 'Show all';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for (let i = 50; i < 60; i++) {
        tracksDiv.innerHTML += `              <div class="poster-div">
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
      for (let i = 0; i < posterDivHover.length; i++) {
        posterDivHover[i].addEventListener("mouseover", function () {
          playIcon[i].style.visibility = 'visible'
          playIcon[i].style.translate = '0px -55px';
          playIcon[i].style.opacity = '1';
        })
      }
      for (let i = 0; i < posterDivHover.length; i++) {
        posterDivHover[i].addEventListener("mouseout", function () {
          playIcon[i].style.opacity = '0';
          playIcon[i].style.visibility = 'hidden'
          playIcon[i].style.translate = '0px 10px';
        })
      }




      for (let i = 0; i < posterDivHover.length; i++) {
        posterDivHover[i].addEventListener("click", function () {
          chooseMusic.style.display = 'block'
          let artistName1 = posterDivHover[i].querySelector('.artist-name').innerHTML
          let totalDuration = 0
          chooseMusicDiv.src = posterDivHover[i].querySelector(".poster-img").src


          var playBtn = document.getElementById('playBtn');

          var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#ffffff88',
            progressColor: '#0be994',
            height: 90,
            barRadius: 4,
            responsive: true,


          });

          playBtn.onclick = function () {

            wavesurfer.playPause();

            if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
              playBtn.src = "./main-icons/pause-icon.png"
              console.log('yes')
            } else {
              playBtn.src = "./main-icons/play-icon1.png"
              console.log('no')
            }
          }

          wavesurfer.on('finish', function () {
            playBtn.src = "./main-icons/play-icon1.png";
            wavesurfer.stop();
          })




          let j = 0
          for (let x = 0; x < data.results.length; x++) {
            if (data.results[x].artist_name == artistName1) {

              j++
              totalDuration += data.results[x].duration
              musicsLists.innerHTML += `<div class="artists-music-div-play">
          <div class="music-order-div">
              <img class="play-music-order" src="./main-icons/play.png" alt="">
              <p class="music-order-number">${j}</p>
              <div class="artist-album-name-order-div">
                <p class="song-name-order">${data.results[x].name}</p>
                <p class="group-name-order">${data.results[x].artist_name}</p>
              </div>
                    
              </div>
                <div class="add-music-div-duration">
                  <img class="add-button-order" src="./main-icons/add.png" alt="">
                  <p class="booleancheck">false</p>
                  <p class="duration-text">${(data.results[x].duration / 60).toFixed(2)}</p>
                </div>
              </div>`;

              chooseMusicArtistText[0].innerHTML = `${artistName1} • ${j} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

              let artistDiv = document.getElementsByClassName('artists-music-div-play')

              for (let a = 0; a < artistDiv.length; a++) {
                artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                  let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                  let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                  let resultUrl = data.results.filter((item) => {
                    if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                      return item.audio
                    }

                  })
                  console.log(resultUrl[0].audio);

                  wavesurfer.load(resultUrl[0].audio);
                  wavesurfer.playPause();

                  if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                    playBtn.src = "./main-icons/pause-icon.png"
                    console.log('yes')
                  } else {
                    playBtn.src = "./main-icons/play-icon1.png"
                    console.log('no')
                  }

                })
                addMusicBtn[a].addEventListener('click', () => {

                  // console.log( artistDiv[a])
                  console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                  if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                    sumOfliked++
                    addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                    LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                <p class="number-of-music">${sumOfliked}</p>
                <div class="container-of-names">
                  <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                  <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                </div>
              </div>`
                  }
                })
              }

            }
          }
          for (let j = 0; j < mainDisplay.length; j++) {
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
  for (let i = 110; i < 120; i++) {
    albumsDiv.innerHTML += `              <div class="poster-div1">
                <div class="poster-img-div">
                  <img class="poster-img" src="${data.results[i].image}" alt="">
                </div>
                <img class="play-icon1" src="./main-icons/play-icon1.png" alt="">
                <p class="track-name">${data.results[i].name}</p>
                <p class="artist-name">${data.results[i].artist_name}</p>
                <p class="artist-id">${data.results[i].id}</p>
              </div>`
  }
  const posterDivHover1 = document.getElementsByClassName('poster-div1');
  const playIcon1 = document.getElementsByClassName("play-icon1");
  for (let i = 0; i < posterDivHover1.length; i++) {
    posterDivHover1[i].addEventListener("mouseover", function () {
      playIcon1[i].style.visibility = 'visible'
      playIcon1[i].style.translate = '0px -55px';
      playIcon1[i].style.opacity = '1';
    })
  }
  for (let i = 0; i < posterDivHover1.length; i++) {
    posterDivHover1[i].addEventListener("mouseout", function () {
      playIcon1[i].style.opacity = '0';
      playIcon1[i].style.visibility = 'hidden'
      playIcon1[i].style.translate = '0px 10px';
    })
  }


  const choosenTrack = document.getElementById("choosen-music-div")
  // chooseMusic.style.display = 'block'

  for (let i = 0; i < posterDivHover1.length; i++) {
    posterDivHover1[i].addEventListener("click", function () {
      chooseMusic.style.display = 'block'
      console.log(posterDivHover1[i].querySelector(".artist-name").innerHTML)
      const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
        return response.json();
      }).then((data1) => {



        let artistName1 = posterDivHover1[i].querySelector('.artist-name').innerHTML
        let totalDuration = 0
        chooseMusicDiv.src = posterDivHover1[i].querySelector(".poster-img").src


        var playBtn = document.getElementById('playBtn');

        var wavesurfer = WaveSurfer.create({
          container: '#waveform',
          waveColor: '#ffffff88',
          progressColor: '#0be994',
          height: 90,
          barRadius: 4,
          responsive: true,


        });

        playBtn.onclick = function () {

          wavesurfer.playPause();

          if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
            playBtn.src = "./main-icons/pause-icon.png"
            console.log('yes')
          } else {
            playBtn.src = "./main-icons/play-icon1.png"
            console.log('no')
          }
        }

        wavesurfer.on('finish', function () {
          playBtn.src = "./main-icons/play-icon1.png";
          wavesurfer.stop();
        })

        let j = 0

        for (let x = 0; x < 20; x++) {

          if (data1.results[x].id.includes(i)) {
            j++
            totalDuration += data1.results[x].duration
            musicsLists.innerHTML += `<div class="artists-music-div-play">
            <div class="music-order-div">
              <img class="play-music-order" src="./main-icons/play.png" alt="">
              <p class="music-order-number">${j}</p>
              <div class="artist-album-name-order-div">
                <p class="song-name-order">${data1.results[x].name}</p>
                <p class="group-name-order">${data1.results[x].artist_name}</p>
              </div>
              
            </div>
              <div class="add-music-div-duration">
                <img class="add-button-order" src="./main-icons/add.png" alt="">
                <p class="booleancheck">false</p>
                <p class="duration-text">${(data1.results[x].duration / 60).toFixed(2)}</p>
              </div>
            </div>`;
          }


          chooseMusicArtistText[0].innerHTML = `${artistName1} • ${j} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

          let artistDiv = document.getElementsByClassName('artists-music-div-play')

          for (let a = 0; a < artistDiv.length; a++) {
            artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
              let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
              let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
              let resultUrl = data1.results.filter((item) => {
                if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                  return item.audio
                }

              })
              console.log(resultUrl[0].audio);

              wavesurfer.load(resultUrl[0].audio);
              wavesurfer.playPause();

              if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                playBtn.src = "./main-icons/pause-icon.png"
                console.log('yes')
              } else {
                playBtn.src = "./main-icons/play-icon1.png"
                console.log('no')
              }

            })
            addMusicBtn[a].addEventListener('click', () => {

              // console.log( artistDiv[a])
              console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
              if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                sumOfliked++
                addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                <p class="number-of-music">${sumOfliked}</p>
                <div class="container-of-names">
                  <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                  <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                </div>
              </div>`
              }
            })
          }
        }

        for (let i = 0; i < mainDisplay.length; i++) {
          mainDisplay[i].style.display = "none"
        }


      })


    })
  }
})


const showAllSection2 = document.getElementById("show-all-button-section-2");

let clickedSection2 = false;

showAllSection2.addEventListener("click", function () {

  clickedSection2 = !clickedSection2;

  if (clickedSection2) {
    albumsDiv.innerHTML = '';
    showAllSection2.innerHTML = 'Show less';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${albums}/?client_id=fd9b5391&limit=150&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for (let i = 110; i < 130; i++) {
        albumsDiv.innerHTML += `<div class="poster-div1">
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
      for (let i = 0; i < posterDivHover1.length; i++) {
        console.log(123)
        posterDivHover1[i].addEventListener("mouseover", function () {
          playIcon1[i].style.visibility = 'visible'
          playIcon1[i].style.translate = '0px -55px';
          playIcon1[i].style.opacity = '1';

        })
      }
      for (let i = 0; i < posterDivHover1.length; i++) {
        posterDivHover1[i].addEventListener("mouseout", function () {
          playIcon1[i].style.opacity = '0';
          playIcon1[i].style.visibility = 'hidden'
          playIcon1[i].style.translate = '0px 10px';

        })
      }




      for (let i = 0; i < posterDivHover1.length; i++) {
        posterDivHover1[i].addEventListener("click", function () {
          chooseMusic.style.display = 'block'
          const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
            return response.json();
          }).then((data1) => {



            let artistName1 = posterDivHover1[i].querySelector('.artist-name').innerHTML
            let totalDuration = 0
            chooseMusicDiv.src = posterDivHover1[i].querySelector(".poster-img").src


            var playBtn = document.getElementById('playBtn');

            var wavesurfer = WaveSurfer.create({
              container: '#waveform',
              waveColor: '#ffffff88',
              progressColor: '#0be994',
              height: 90,
              barRadius: 4,
              responsive: true,


            });

            playBtn.onclick = function () {

              wavesurfer.playPause();

              if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                playBtn.src = "./main-icons/pause-icon.png"
                console.log('yes')
              } else {
                playBtn.src = "./main-icons/play-icon1.png"
                console.log('no')
              }
            }

            wavesurfer.on('finish', function () {
              playBtn.src = "./main-icons/play-icon1.png";
              wavesurfer.stop();
            })

            let j = 0

            for (let x = 0; x < 20; x++) {

              if (data1.results[x].id.includes(i)) {
                j++
                totalDuration += data1.results[x].duration
                musicsLists.innerHTML += `<div class="artists-music-div-play">
                <div class="music-order-div">
                  <img class="play-music-order" src="./main-icons/play.png" alt="">
                  <p class="music-order-number">${j}</p>
                  <div class="artist-album-name-order-div">
                    <p class="song-name-order">${data1.results[x].name}</p>
                    <p class="group-name-order">${data1.results[x].artist_name}</p>
                  </div>
                  
                </div>
                  <div class="add-music-div-duration">
                    <img class="add-button-order" src="./main-icons/add.png" alt="">
                    <p class="booleancheck">false</p>
                    <p class="duration-text">${(data1.results[x].duration / 60).toFixed(2)}</p>
                  </div>
                </div>`;
              }


              chooseMusicArtistText[0].innerHTML = `${artistName1} • ${j} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

              let artistDiv = document.getElementsByClassName('artists-music-div-play')

              for (let a = 0; a < artistDiv.length; a++) {
                artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                  let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                  let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                  let resultUrl = data1.results.filter((item) => {
                    if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                      return item.audio
                    }

                  })
                  console.log(resultUrl[0].audio);

                  wavesurfer.load(resultUrl[0].audio);
                  wavesurfer.playPause();

                  if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                    playBtn.src = "./main-icons/pause-icon.png"
                    console.log('yes')
                  } else {
                    playBtn.src = "./main-icons/play-icon1.png"
                    console.log('no')
                  }

                })
                addMusicBtn[a].addEventListener('click', () => {

                  // console.log( artistDiv[a])
                  console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                  if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                    sumOfliked++
                    addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                    LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                    <p class="number-of-music">${sumOfliked}</p>
                    <div class="container-of-names">
                      <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                      <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                    </div>
                  </div>`
                  }
                })
              }
            }
          })
          for (let i = 0; i < mainDisplay.length; i++) {
            mainDisplay[i].style.display = "none"
          }

        })
      }


    })
  } else {
    albumsDiv.innerHTML = '';
    showAllSection2.innerHTML = 'Show all';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${albums}/?client_id=fd9b5391&limit=150&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for (let i = 110; i < 120; i++) {
        albumsDiv.innerHTML += `              <div class="poster-div1">
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
      for (let i = 0; i < posterDivHover1.length; i++) {
        posterDivHover1[i].addEventListener("mouseover", function () {
          playIcon1[i].style.visibility = 'visible'
          playIcon1[i].style.translate = '0px -55px';
          playIcon1[i].style.opacity = '1';
        })
      }
      for (let i = 0; i < posterDivHover1.length; i++) {
        posterDivHover1[i].addEventListener("mouseout", function () {

          playIcon1[i].style.opacity = '0';
          playIcon1[i].style.visibility = 'hidden'
          playIcon1[i].style.translate = '0px 10px';
        })
      }


      for (let i = 0; i < posterDivHover1.length; i++) {
        posterDivHover1[i].addEventListener("click", function () {
          chooseMusic.style.display = 'block'
          const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
            return response.json();
          }).then((data1) => {



            let artistName1 = posterDivHover1[i].querySelector('.artist-name').innerHTML
            let totalDuration = 0
            chooseMusicDiv.src = posterDivHover1[i].querySelector(".poster-img").src


            var playBtn = document.getElementById('playBtn');

            var wavesurfer = WaveSurfer.create({
              container: '#waveform',
              waveColor: '#ffffff88',
              progressColor: '#0be994',
              height: 90,
              barRadius: 4,
              responsive: true,


            });

            playBtn.onclick = function () {

              wavesurfer.playPause();

              if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                playBtn.src = "./main-icons/pause-icon.png"
                console.log('yes')
              } else {
                playBtn.src = "./main-icons/play-icon1.png"
                console.log('no')
              }
            }

            wavesurfer.on('finish', function () {
              playBtn.src = "./main-icons/play-icon1.png";
              wavesurfer.stop();
            })

            let j = 0

            for (let x = 0; x < 20; x++) {

              if (data1.results[x].id.includes(i)) {
                j++
                totalDuration += data1.results[x].duration
                musicsLists.innerHTML += `<div class="artists-music-div-play">
                <div class="music-order-div">
                  <img class="play-music-order" src="./main-icons/play.png" alt="">
                  <p class="music-order-number">${j}</p>
                  <div class="artist-album-name-order-div">
                    <p class="song-name-order">${data1.results[x].name}</p>
                    <p class="group-name-order">${data1.results[x].artist_name}</p>
                  </div>
                  
                </div>
                  <div class="add-music-div-duration">
                    <img class="add-button-order" src="./main-icons/add.png" alt="">
                    <p class="booleancheck">false</p>
                    <p class="duration-text">${(data1.results[x].duration / 60).toFixed(2)}</p>
                  </div>
                </div>`;
              }


              chooseMusicArtistText[0].innerHTML = `${artistName1} • ${j} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

              let artistDiv = document.getElementsByClassName('artists-music-div-play')

              for (let a = 0; a < artistDiv.length; a++) {
                artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                  let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                  let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                  let resultUrl = data1.results.filter((item) => {
                    if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                      return item.audio
                    }

                  })
                  console.log(resultUrl[0].audio);

                  wavesurfer.load(resultUrl[0].audio);
                  wavesurfer.playPause();

                  if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                    playBtn.src = "./main-icons/pause-icon.png"
                    console.log('yes')
                  } else {
                    playBtn.src = "./main-icons/play-icon1.png"
                    console.log('no')
                  }

                })
                addMusicBtn[a].addEventListener('click', () => {

                  // console.log( artistDiv[a])
                  console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                  if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                    sumOfliked++
                    addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                    LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                    <p class="number-of-music">${sumOfliked}</p>
                    <div class="container-of-names">
                      <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                      <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                    </div>
                  </div>`
                  }
                })
              }
            }
          })
          // console.log(posterDivHover1[i].querySelector(".track-name"))
          for (let j = 0; j < mainDisplay.length; j++) {
            mainDisplay[j].style.display = "none"
          }
        })
      }
    })

  }

  // playlist ---------

  // for (let i = 0;i<posterDivHover1.length;i++){
  //   posterDivHover1.addEventListener("click" ,() =>{
  //     console.log(posterDivHover1[i].querySelector(".track-name"))
  //   })

  // }





})



// --------------------------------------------------




const artistsDiv = document.getElementById("artists-div");

const myFetch3 = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
  return response.json();
}).then((data) => {
  console.log(data);
  for (let i = 0; i < 10; i++) {
    let artistImg = ''
    if (data.results[i].image == "") {
      artistImg = './main-icons/default.jpg';
    } else {
      artistImg = data.results[i].image;
    }
    artistsDiv.innerHTML += `<div class="poster-div2">
                <div class="poster-img-div">
                  <img class="poster-img artist-round" src="${artistImg}" alt="">
                </div>
                <img class="play-icon2" src="./main-icons/play-icon1.png" alt="">
                <p class="track-name">${data.results[i].name}</p>
                
              </div>`
  }
  const posterDivHover2 = document.getElementsByClassName('poster-div2');
  const playIcon2 = document.getElementsByClassName("play-icon2");
  for (let i = 0; i < posterDivHover2.length; i++) {
    posterDivHover2[i].addEventListener("mouseover", function () {
      playIcon2[i].style.visibility = 'visible'
      playIcon2[i].style.translate = '0px -55px';
      playIcon2[i].style.opacity = '1';
    })
  }
  for (let i = 0; i < posterDivHover2.length; i++) {
    posterDivHover2[i].addEventListener("mouseout", function () {
      playIcon2[i].style.opacity = '0';
      playIcon2[i].style.visibility = 'hidden'
      playIcon2[i].style.translate = '0px 10px';
    })
  }

  const myFetch = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
    return response.json();
  }).then((data) => {
    // console.log(data);
    for (let i = 0; i < posterDivHover2.length; i++) {
      posterDivHover2[i].addEventListener("click", function () {
        chooseMusic.style.display = 'block'
        const myArtistName = posterDivHover2[i].querySelector(".track-name");
        // console.log(posterDivHover2[i].innerHTML);
        for (let i = 0; i < mainDisplay.length; i++) {
          mainDisplay[i].style.display = "none";
        }
        let artistImg = ''
        if (data.results[i].image == "") {
          artistImg = './main-icons/default.jpg';
        } else {
          artistImg = data.results[i].image;
        }

        const choosenTrack = document.getElementById("choosen-music-div");

        // chooseMusic.style.display = 'block'

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

          let artistName1 = posterDivHover2[i].querySelector('.track-name').innerHTML
          let totalDuration = 0
          chooseMusicDiv.src = posterDivHover2[i].querySelector(".poster-img").src


          var playBtn = document.getElementById('playBtn');

          var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#ffffff88',
            progressColor: '#0be994',
            height: 90,
            barRadius: 4,
            responsive: true,


          });

          playBtn.onclick = function () {

            wavesurfer.playPause();

            if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
              playBtn.src = "./main-icons/pause-icon.png"
              console.log('yes')
            } else {
              playBtn.src = "./main-icons/play-icon1.png"
              console.log('no')
            }
          }

          wavesurfer.on('finish', function () {
            playBtn.src = "./main-icons/play-icon1.png";
            wavesurfer.stop();
          })





          let totalDuration1 = 0
          for (let j = 0; j < 10; j++) {
            totalDuration += data1.results[j].duration
            musicsLists.innerHTML += ` <div class="artists-music-div-play">
          <div class="music-order-div">
            <img class="play-music-order" src="./main-icons/play.png" alt="">
            <p class="music-order-number">${j + 1}</p>
            <div class="artist-album-name-order-div">
              <p class="song-name-order">${data1.results[j].name}</p>
              <p class="group-name-order">${data1.results[j].artist_name}</p>
            </div>
            


          </div>


            <div class="add-music-div-duration">
              <img class="add-button-order" src="./main-icons/add.png" alt="">
              <p class="booleancheck">false</p>
              <p class="duration-text">${(data1.results[j].duration / 60).toFixed(2)}</p>
            </div>
          </div>`;

            chooseMusicArtistText[0].innerHTML = `${artistName1} • ${10} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

            let artistDiv = document.getElementsByClassName('artists-music-div-play')

            for (let a = 0; a < artistDiv.length; a++) {
              artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                let resultUrl = data1.results.filter((item) => {
                  if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                    return item.audio
                  }

                })
                console.log(resultUrl[0].audio);

                wavesurfer.load(resultUrl[0].audio);
                wavesurfer.playPause();

                if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                  playBtn.src = "./main-icons/pause-icon.png"
                  console.log('yes')
                } else {
                  playBtn.src = "./main-icons/play-icon1.png"
                  console.log('no')
                }

              })
              addMusicBtn[a].addEventListener('click', () => {

                // console.log( artistDiv[a])
                console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                  sumOfliked++
                  addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                  LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                <p class="number-of-music">${sumOfliked}</p>
                <div class="container-of-names">
                  <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                  <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                </div>
              </div>`
                }
              })
            }
          }
        })

      })
    }
  })



})



const showAllSection3 = document.getElementById("show-all-button-section-3");

let clickedSection3 = false;

showAllSection3.addEventListener("click", function () {

  clickedSection3 = !clickedSection3;

  if (clickedSection3) {
    artistsDiv.innerHTML = '';
    showAllSection3.innerHTML = 'Show less';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for (let i = 50; i < 71; i++) {
        let artistImg = ''
        if (data.results[i].image == "") {
          artistImg = './main-icons/default.jpg';
        } else {
          artistImg = data.results[i].image;
        }
        artistsDiv.innerHTML += `<div class="poster-div2">
                    <div class="poster-img-div">
                      <img class="poster-img artist-round" src="${artistImg}" alt="">
                    </div>
                    <img class="play-icon2" src="./main-icons/play-icon1.png" alt="">
                   <p class="track-name">${data.results[i].name}</p>
                  </div>`
      }

      const posterDivHover2 = document.getElementsByClassName('poster-div2');
      const playIcon2 = document.getElementsByClassName("play-icon2");
      for (let i = 0; i < posterDivHover2.length; i++) {
        console.log(123)
        posterDivHover2[i].addEventListener("mouseover", function () {
          playIcon2[i].style.visibility = 'visible'
          playIcon2[i].style.translate = '0px -55px';
          playIcon2[i].style.opacity = '1';

        })
      }
      for (let i = 0; i < posterDivHover2.length; i++) {
        posterDivHover2[i].addEventListener("mouseout", function () {
          playIcon2[i].style.opacity = '0';
          playIcon2[i].style.visibility = 'hidden'
          playIcon2[i].style.translate = '0px 10px';

        })
      }


      for (let i = 0; i < posterDivHover2.length; i++) {
        posterDivHover2[i].addEventListener("click", function () {
          chooseMusic.style.display = 'block'
          const myFetch1 = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
            return response.json();
          }).then((data1) => {

            let artistName1 = posterDivHover2[i].querySelector('.track-name').innerHTML
            let totalDuration = 0
            chooseMusicDiv.src = posterDivHover2[i].querySelector(".poster-img").src


            var playBtn = document.getElementById('playBtn');

            var wavesurfer = WaveSurfer.create({
              container: '#waveform',
              waveColor: '#ffffff88',
              progressColor: '#0be994',
              height: 90,
              barRadius: 4,
              responsive: true,


            });

            playBtn.onclick = function () {

              wavesurfer.playPause();

              if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                playBtn.src = "./main-icons/pause-icon.png"
                console.log('yes')
              } else {
                playBtn.src = "./main-icons/play-icon1.png"
                console.log('no')
              }
            }

            wavesurfer.on('finish', function () {
              playBtn.src = "./main-icons/play-icon1.png";
              wavesurfer.stop();
            })





            let totalDuration1 = 0
            for (let j = 0; j < 10; j++) {
              totalDuration += data1.results[j].duration
              musicsLists.innerHTML += ` <div class="artists-music-div-play">
            <div class="music-order-div">
              <img class="play-music-order" src="./main-icons/play.png" alt="">
              <p class="music-order-number">${j + 1}</p>
              <div class="artist-album-name-order-div">
                <p class="song-name-order">${data1.results[j].name}</p>
                <p class="group-name-order">${data1.results[j].artist_name}</p>
              </div>
              
  
  
            </div>
  
  
              <div class="add-music-div-duration">
                <img class="add-button-order" src="./main-icons/add.png" alt="">
                <p class="booleancheck">false</p>
                <p class="duration-text">${(data1.results[j].duration / 60).toFixed(2)}</p>
              </div>
            </div>`;

              chooseMusicArtistText[0].innerHTML = `${artistName1} • ${10} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

              let artistDiv = document.getElementsByClassName('artists-music-div-play')

              for (let a = 0; a < artistDiv.length; a++) {
                artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                  let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                  let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                  let resultUrl = data1.results.filter((item) => {
                    if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                      return item.audio
                    }

                  })
                  console.log(resultUrl[0].audio);

                  wavesurfer.load(resultUrl[0].audio);
                  wavesurfer.playPause();

                  if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                    playBtn.src = "./main-icons/pause-icon.png"
                    console.log('yes')
                  } else {
                    playBtn.src = "./main-icons/play-icon1.png"
                    console.log('no')
                  }

                })
                addMusicBtn[a].addEventListener('click', () => {

                  // console.log( artistDiv[a])
                  console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                  if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                    sumOfliked++
                    addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                    LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                  <p class="number-of-music">${sumOfliked}</p>
                  <div class="container-of-names">
                    <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                    <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                  </div>
                </div>`
                  }
                })
              }
            }
          })

          for (let i = 0; i < mainDisplay.length; i++) {
            mainDisplay[i].style.display = "none"
          }
        })
      }


    })
  } else {
    artistsDiv.innerHTML = '';
    showAllSection3.innerHTML = 'Show all';
    const myFetch = fetch(`https://api.jamendo.com/v3.0/${artists}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      for (let i = 50; i < 60; i++) {
        let artistImg = ''
        if (data.results[i].image == "") {
          artistImg = './main-icons/default.jpg';
        } else {
          artistImg = data.results[i].image;
        }
        artistsDiv.innerHTML += `              <div class="poster-div2">
                    <div class="poster-img-div">
                      <img class="poster-img artist-round" src="${artistImg}" alt="">
                    </div>
                    <img class="play-icon2" src="./main-icons/play-icon1.png" alt="">
                    <p class="track-name">${data.results[i].name}</p>
                  </div>`
      }
      const posterDivHover2 = document.getElementsByClassName('poster-div2');
      const playIcon2 = document.getElementsByClassName("play-icon2");
      for (let i = 0; i < posterDivHover2.length; i++) {
        posterDivHover2[i].addEventListener("mouseover", function () {
          playIcon2[i].style.visibility = 'visible'
          playIcon2[i].style.translate = '0px -55px';
          playIcon2[i].style.opacity = '1';
        })
      }
      for (let i = 0; i < posterDivHover2.length; i++) {
        posterDivHover2[i].addEventListener("mouseout", function () {
          playIcon2[i].style.opacity = '0';
          playIcon2[i].style.visibility = 'hidden'
          playIcon2[i].style.translate = '0px 10px';
        })
      }


      for (let i = 0; i < posterDivHover2.length; i++) {
        posterDivHover2[i].addEventListener("click", function () {
          chooseMusic.style.display = 'block'
          const myFetch1 = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
            return response.json();
          }).then((data1) => {

            let artistName1 = posterDivHover2[i].querySelector('.track-name').innerHTML
            let totalDuration = 0
            chooseMusicDiv.src = posterDivHover2[i].querySelector(".poster-img").src


            var playBtn = document.getElementById('playBtn');

            var wavesurfer = WaveSurfer.create({
              container: '#waveform',
              waveColor: '#ffffff88',
              progressColor: '#0be994',
              height: 90,
              barRadius: 4,
              responsive: true,


            });

            playBtn.onclick = function () {

              wavesurfer.playPause();

              if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                playBtn.src = "./main-icons/pause-icon.png"
                console.log('yes')
              } else {
                playBtn.src = "./main-icons/play-icon1.png"
                console.log('no')
              }
            }

            wavesurfer.on('finish', function () {
              playBtn.src = "./main-icons/play-icon1.png";
              wavesurfer.stop();
            })





            let totalDuration1 = 0
            for (let j = 0; j < 10; j++) {
              totalDuration += data1.results[j].duration
              musicsLists.innerHTML += ` <div class="artists-music-div-play">
            <div class="music-order-div">
              <img class="play-music-order" src="./main-icons/play.png" alt="">
              <p class="music-order-number">${j + 1}</p>
              <div class="artist-album-name-order-div">
                <p class="song-name-order">${data1.results[j].name}</p>
                <p class="group-name-order">${data1.results[j].artist_name}</p>
              </div>
              
  
  
            </div>
  
  
              <div class="add-music-div-duration">
                <img class="add-button-order" src="./main-icons/add.png" alt="">
                <p class="booleancheck">false</p>
                <p class="duration-text">${(data1.results[j].duration / 60).toFixed(2)}</p>
              </div>
            </div>`;

              chooseMusicArtistText[0].innerHTML = `${artistName1} • ${10} songs, ${(totalDuration / 60).toFixed(0)} min ${(totalDuration % 60)} sec`

              let artistDiv = document.getElementsByClassName('artists-music-div-play')

              for (let a = 0; a < artistDiv.length; a++) {
                artistDiv[a].querySelector('.artist-album-name-order-div').addEventListener('click', () => {
                  let mymusicname = artistDiv[a].querySelector('.song-name-order').innerHTML
                  let mymusticArtistName = artistDiv[a].querySelector('.group-name-order').innerHTML
                  let resultUrl = data1.results.filter((item) => {
                    if (item.name == mymusicname && item.artist_name == mymusticArtistName) {
                      return item.audio
                    }

                  })
                  console.log(resultUrl[0].audio);

                  wavesurfer.load(resultUrl[0].audio);
                  wavesurfer.playPause();

                  if (playBtn.src == "http://127.0.0.1:5502/musicApp/main-icons/play-icon1.png") {
                    playBtn.src = "./main-icons/pause-icon.png"
                    console.log('yes')
                  } else {
                    playBtn.src = "./main-icons/play-icon1.png"
                    console.log('no')
                  }

                })
                addMusicBtn[a].addEventListener('click', () => {

                  // console.log( artistDiv[a])
                  console.log(addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML)
                  if (addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML === "false") {
                    sumOfliked++
                    addMusicBtn[a].parentElement.querySelector(".booleancheck").innerHTML = "true"
                    LikedSongdiv.innerHTML += `<div class="liked-songs-div">
                  <p class="number-of-music">${sumOfliked}</p>
                  <div class="container-of-names">
                    <p class="name-of-music">${addMusicBtn[a].parentElement.parentElement.querySelector(".song-name-order").innerHTML}</p>
                    <p class="name-of-artist">${addMusicBtn[a].parentElement.parentElement.querySelector(".group-name-order").innerHTML}</p>
                  </div>
                </div>`
                  }
                })
              }
            }
          })

          for (let j = 0; j < mainDisplay.length; j++) {
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
const searchLogo = document.getElementsByClassName('search-logo')
let searchboolean = false
const signInDiv = document.getElementsByClassName("sign-log-div")[0]
console.log(searchInput)

// ------------------
searchLogo[0].addEventListener('click', () => {
  function checkScreenSize() {

    if (window.matchMedia("(max-width: 700px)").matches) {

      searchboolean = !searchboolean
      if (searchboolean) {
        // searchInput.style.animationDuration = '3s'
        searchInput.style.transition = '3s'
        searchInput.style.visibility = 'visible'
        // searchInput.style.animationIterationCount = 'infinite'
        // searchInput.style.display= 'block'
        searchInput.style.width = '240px'
        searchInput.style.fontSize = '17px'

        signInDiv.style.display = 'none'

      } else {
        searchInput.style.transition = '3s'
        searchInput.style.visibility = 'hidden'
        signInDiv.style.display = 'flex'
        // searchInput.style.animationDuration = '3s'
        searchInput.style.width = '0'

      }
    } else {
      searchInput.style.visibility = 'visible'
    }

  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
})

// Call the function on load


// Add an event listener for screen resize


// --------------------------

searchInput.addEventListener("input", (e) => {

  searchSection.style.display = "grid"
  for (let i = 0; i < mainDisplay.length; i++) {
    mainDisplay[i].style.display = "none"
  }

  let inpuValue = e.target.value.toLowerCase()

  console.log(inpuValue)
  const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
    return response.json();
  }).then((data) => {

    let nameOfarr = data.results.map((item) => {
      let result = item.name
      return [result.toLowerCase(), item.image, item.name, item.artist_name, item.audio]
    })

    // console.log(nameOfarr)
    let newArr = nameOfarr.filter((item) => {
      return item[0].includes(inpuValue)
    })

    searchSection.innerHTML = ""
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
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
    for (let i = 0; i < posterDivHover.length; i++) {
      posterDivHover[i].addEventListener("mouseover", function () {
        playIcon[i].style.visibility = 'visible'
        playIcon[i].style.translate = '0px -10px';
        playIcon[i].style.opacity = '1';
      })
    }
    for (let i = 0; i < posterDivHover.length; i++) {
      posterDivHover[i].addEventListener("mouseout", function () {
        playIcon[i].style.opacity = '0';
        playIcon[i].style.visibility = 'hidden'
        playIcon[i].style.translate = '0px 10px';
      })
    }

    if (searchInput.value == "") {
      for (let i = 0; i < mainDisplay.length; i++) {
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

let DateOfuser = {
  email: "",
  password : "",
  username : "",
}

let singBoolen = false

btnOfsingup.addEventListener("click", () => {
  singBoolen = !singBoolen

  if (singBoolen) {
    ContainOfsingup.style.display = "flex"
    ContainerOfForm1.style.display = "flex"
  } else {
    ContainOfsingup.style.display = "none"
    ContainerOfForm1.style.display = "none"
  }

})

let logBoolen = false

buttonOflog[0].addEventListener("click", () => {

  logBoolen = !logBoolen
  if (logBoolen) {
    ContainOflogin.style.display = "flex"

  } else {
    ContainOflogin.style.display = "none"
  }

})
// form1
let MyArr = []

Button[0].addEventListener("click", () => {
  if (!String(EmailOfregister.value).includes("@")) {
    LabelOfEmail.innerHTML = "Please enter correct Email address!!!"
    LabelOfEmail.style.color = "red"
    Button[0].style.backgroundColor = "red"
    EmailOfregister.value = ""
  } else {
    Line[0].style.backgroundColor = "#0be994"
    LabelOfEmail.innerHTML = "Email address"
    LabelOfEmail.style.color = "#ffffffbf"
    Button[0].style.backgroundColor = "#0be994"
    
    DateOfuser.email = EmailOfregister.value
    
    EmailOfregister.value = ""
    ContainerOfForm1.style.display = "none"
    ContainerOfForm2.style.display = "flex"
  }
  console.log(MyArr)


})

// form2
// let 

PassOfregister.addEventListener("input", () => {

  CircleOfregister[0].style.backgroundColor = "red"
  CircleOfregister[1].style.backgroundColor = "red"
  CircleOfregister[2].style.backgroundColor = "red"

  let checkletter = /[a-zA-Z]/.test(PassOfregister.value)
  let checkcharct = /[!@#$%&0-9]/.test(PassOfregister.value)

  if (checkletter) {
    CircleOfregister[0].style.backgroundColor = "#0be994"
  }
  if (checkcharct) {
    CircleOfregister[1].style.backgroundColor = "#0be994"
  }
  if (PassOfregister.value.length >= 10) {
    CircleOfregister[2].style.backgroundColor = "#0be994"
  }

  Button[1].addEventListener("click", () => {
    if (checkletter === true && checkcharct === true && PassOfregister.value.length >= 10) {
      Line[0].style.backgroundColor = "#0be994"
      Line[1].style.backgroundColor = "#0be994"
      Button[1].style.backgroundColor = "#0be994"
      LabelOfPass.innerHTML = "Password"
      LabelOfPass.style.color = "#ffffffbf"
      ContainerOfForm2.style.display = "none"
      ContainerOfForm3.style.display = "flex"
      DateOfuser.password = PassOfregister.value
    } else {
      Button[1].style.backgroundColor = "red"
      LabelOfPass.innerHTML = "Please enter correct password !!!"
      LabelOfPass.style.color = "red"
    }

  })

  

})

// form3
Button[2].addEventListener("click", () => {
  let sum = 0

  if (NameOfregister.value === "") {
    LabelOfre[0].style.color = "red"
    NameOfregister.style.borderColor = "red"
    Button[2].style.backgroundColor = "red"
  } else {
    sum += 1
    Button[2].style.backgroundColor = "#0be994"
    LabelOfre[0].style.color = "#ffffffbf"
    NameOfregister.style.borderColor = "#ffffffbf"
    // NameOfregister.value = ""
  }

  if (SurnameOfregister.value === "") {
    Button[2].style.backgroundColor = "red"
    LabelOfre[1].style.color = "red"
    SurnameOfregister.style.borderColor = "red"
  } else {
    sum += 1
    Button[2].style.backgroundColor = "#0be994"
    LabelOfre[1].style.color = "#ffffffbf"
    SurnameOfregister.style.borderColor = "#ffffffbf"
    // SurnameOfregister.value = ""
  }

  if (DateOfregister.value === "") {
    Button[2].style.backgroundColor = "red"
    LabelOfre[2].style.color = "red"
    DateOfregister.style.borderColor = "red"
  } else {
    sum += 1
    Button[2].style.backgroundColor = "#0be994"
    LabelOfre[2].style.color = "#ffffffbf"
    DateOfregister.style.borderColor = "#ffffffbf"
    // DateOfregister.value = ""
  }

  if (sum === 3) {
    Line[0].style.backgroundColor = "#0be994"
    Line[1].style.backgroundColor = "#0be994"
    Line[2].style.backgroundColor = "#0be994"
    DateOfuser.username = NameOfregister.value
    NameOfregister.value = ""
    SurnameOfregister.value = ""
    DateOfregister.value = ""
    ContainOfsingup.style.display= 'none'

  }
  console.log(sum)
  console.log(DateOfuser)

})


const logInBtn = document.getElementById("btn-ofregister")
let emailLogIn = document.getElementById('email-login')
let passwordLogIn = document.getElementById('password-login')
let signLogInDiv = document.getElementsByClassName('sign-log-div')


logInBtn.addEventListener('click',()=>{
 

  
  let firstChar = DateOfuser.username.split('')[0].toUpperCase()
  if(emailLogIn.value === DateOfuser.email && passwordLogIn.value === DateOfuser.password){
    logInBtn.style.display='none'
    
    ContainOfsingup.style.display= 'none'
    btnOfsingup.innerHTML = `${firstChar}`
    btnOfsingup.style.border= '1px solid #ffffff'
    btnOfsingup.style.borderRadius = '50%'
    btnOfsingup.style.padding = '5px 12px'
    btnOfsingup.style.marginRight = '10px'
    buttonOflog[0].innerHTML = 'Log Out'
    ContainOflogin.style.display = 'none'
  }
})




