const myKey = `b71e321d32ba1844cc0df4d9d8a583a2`;
const myApi = `https://api.jamendo.com/v3.0/tracks/?client_id=fd9b5391&limit=100&order=popularity_total_desc`

const tracks = "tracks";
const albums = "albums";
const artists = "artists";

// search
const searchInput = document.getElementById("search-input")
const searchSection = document.getElementById("search-section")







searchInput.addEventListener("input", (e) =>{

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
  })

})

// 
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


  console.log(sum)


})





// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;





// // function acc(name, password) {
//   this.name = name,
//   this.password = password
// }






// let nameInp = document.getElementById('name')
// let passwordInp = document.getElementById('pass')
// const btn = document.getElementById('btn')

// let nameOutput = document.getElementById('output-name')
// let passOutput = document.getElementById('output-pass')


// // btn.addEventListener('click',()=>{
// //     localStorage.setItem('name',nameInp.value)
// //     localStorage.setItem('password',passwordInp.value)
// //     nameOutput.innerHTML = Name : ${localStorage.getItem('name')} and password ${localStorage.getItem('password')}
// // })


// // nameOutput.innerHTML = Name : ${localStorage.getItem('name')} and password ${localStorage.getItem('password')}
// let i=0
// localStorage.setItem(name,'password')

// btn.addEventListener('click',()=>{
//   person = new acc (nameInp.value,passwordInp.value)


//   localStorage.setItem(JSON.stringify(person.password),JSON.stringify(person.name))
//   // localStorage.setItem(password,JSON.stringify(person.password))
//   i++

//   nameOutput.innerHTML = JSON.parse(localStorage.getItem(person-${i}))
// })
// 



const tracksDiv = document.getElementById("tracks-div");

const tracksSection = document.getElementById("tracks-div");


const mainDisplay = document.getElementsByClassName("section-none");

const myFetch = fetch(`https://api.jamendo.com/v3.0/${tracks}/?client_id=fd9b5391&limit=100&order=popularity_total_desc`).then((response) => {
  return response.json();
}).then((data) => {

  // console.log(data);
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


// let register = document.getElementById("register")


// register.addEventListener("click", () =>{
//   console.log("test")
//   register.style.display = "none"
// })

// const mymusic = document.getElementById("mymusic");
// mymusic.style.display = "none";
// const playButton = document.getElementById("play-btn")
// let paused = true;
// playButton.addEventListener("click", () => {
//   paused = !paused
//   if(paused === false){
//     mymusic.play();
//   }else{
//     mymusic.pause();
//   }
// })




