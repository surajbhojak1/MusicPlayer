let arr = [
    { songName: "295 - Sidhu Moose Wala", url:"./songs/295 - Sidhu Moose Wala.mp3", img: "./images/295.jpg" },
    { songName: "EveryBody Hurts", url: "./songs/Everybody Hurts - Sidhu Moose Wala.mp3", img: "./images/EverybodyHurts.jpg" },
    { songName: "Gulabi Sadi", url: "./songs/Gulabi Sadi.mp3", img: "./images/GulabiSadi.jpg" },
    { songName: "Tu Aake Dekh Le - King", url: "./songs/Tu Aake Dekhle - King.mp3", img: "./images/TuAakeDekh.jpg" },
    { songName: "Sohne Lagde - Sidhu Moose Wala", url: "./songs/Sohne Lagde - Sidhu Moose Wala.mp3", img: "./images/SohneLagde.jpg" },
    { songName: "Maan Meri Jann - King", url: "./songs/Maan Meri Jaan - King.mp3", img: "./images/maanMeriJaan.jpg" },
    { songName: "Gulabi Sarara - Inder Arya", url: "./songs/Thumak Thumak Pahari.mp3", img: "./images/GulabiSarara.jpg" }


]
let allSongs = document.querySelector("#all-songs")
let poster = document.querySelector("#left")

let play = document.querySelector("#play")
let backward = document.querySelector("#backward")
let forward = document.querySelector("#forward")



let audio = new Audio()

let selectedSong = 0

function mainFunction() {
    let clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

let flag = 0

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.4
    }
})