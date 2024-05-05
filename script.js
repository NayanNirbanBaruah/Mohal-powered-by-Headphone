alert("You are using a testing Website");
console.log("Welcome to Headphone")
//ainitialize the variables
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif2 = document.getElementById('gif2');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let song = [

    { songName: "Bishakto Manus", filePath: "song1.mp3", coverPath: "foverImage.jpeg" },
    { songName: "Gajar Nouka Bhai", filePath: "song2.mp3", coverPath: "foverImage.jpeg" },
    { songName: "Tamak pata...", filePath: "song3.mp3", coverPath: "foverImage.jpeg" },
    { songName: "Kano korle by fossils", filePath: "song4.mp3", coverPath: "foverImage.jpeg" },
    { songName: "Ekla Ghor...", filePath: "song5.mp3", coverPath: "foverImage.jpeg" },
    { songName: "Marijuana...", filePath: "song6.mp3", coverPath: "foverImage.jpeg" },
    { songName: "Om Namah Shivay", filePath: "song7.mp3", coverPath: "foverImage.jpeg" },
]
songItem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;

});
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        gif2.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        gif2.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log('progress');
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        gif.style.opacity = 1;
        gif2.style.opacity = 1;
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src = `song${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    makeAllPlay();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 4
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    makeAllPlay();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
