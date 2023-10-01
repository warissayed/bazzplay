// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('./songs/10.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName: "yaar na miley", filePath:"./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "Bye", filePath:"./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "Sach keh raha hai deewana", filePath:"./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "Apna bana le", filePath:"./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "Kabira", filePath:"./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "kabhi kabhi aditi", filePath:"./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "Subhanalla", filePath:"./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "Aankhon me tere", filePath:"./songs/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: "Tera Hone laga hu", filePath:"./songs/9.mp3", coverPath: "./covers/9.jpg"},
    {songName: "Tu jane na", filePath:"./songs/10.mp3", coverPath: "./covers/10.jpg"},
    {songName: "Darasal", filePath:"./songs/11.mp3", coverPath: "./covers/11.png"},
]

//song headder name and duration code
songItem.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src= songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerHTML= songs[i].songName;
})
//audioElement.play();

//Handel Play/paus/click
masterPlay.addEventListener('click',()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Event 
audioElement.addEventListener('timeupdate', ()=>{

 //update seekbar

 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
 
 myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays =()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })


} 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
         makeAllPlays();
         
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src = `./songs/${songIndex}.mp3`;
         masterSongName.innerText=songs[songIndex-1].songName;
         audioElement.currentTime =0;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        
    })

    
})
document.getElementById("next").addEventListener('click',()=>{
    
   if (songIndex>=11) {
    songIndex = 0 ;

    
   } else {
    songIndex += 1;
   }
    audioElement.src = `./songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
           
})

document.getElementById("previous").addEventListener('click', ()=>{
    
    if (songIndex<=0) {
     songIndex = 0 ;
  
     
    } else {
     songIndex -= 1;
    }
     audioElement.src = `./songs/${songIndex}.mp3`;
     masterSongName.innerText = songs[songIndex-1].songName;
     audioElement.currentTime =0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity = 1;
            
 })  