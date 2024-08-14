// making an object of images src's and also all the songs and Title of the song.

let obj_of_songs = [{
    song_name: 'Sanam Re',
    image_src: 'photos/card_image1.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Phir bhi tmko Chahon',
    image_src: 'photos/card_image2.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Sun raha hy na to',
    image_src: 'photos/cards_image3.jfif',
    singer_name: 'Ankit Tiwari',
    production: 'T-Series',
    writter: 'Bhusan Kumar'
},
{
    song_name: 'Teri meri prem kahani',
    image_src: 'photos/card_image4.jfif',
    singer_name: 'Rahat Fateh Ali Khan',
    production: 'T-Series',
    writter: 'Shabbir Ahmed'
},
{
    song_name: 'Ve Kamlaya',
    image_src: 'photos/card_image2.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Summit Roy'
},
{
    song_name: 'Banjara',
    image_src: 'photos/card_image6.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series Films',
    writter: 'Robin Bhatt'
},
{
    song_name: 'Tum hi ho',
    image_src: 'photos/cards_image7.jfif',
    singer_name: 'Arijit Singh,',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Banjara',
    image_src: 'photos/card_image8.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Banjara',
    image_src: 'photos/cards_image5.jpg',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Banjara',
    image_src: 'photos/card_image9.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Banjara',
    image_src: 'photos/card_image10.jfif',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
},
{
    song_name: 'Banjara',
    image_src: 'photos/card_image11.jpg',
    singer_name: 'Arijit Singh',
    production: 'T-Series',
    writter: 'Mithoon'
}
]

// creating a songs Object 
const sanam_re = new Audio('songs/sanam.mp3');
const phir_bhi_tmko = new Audio('songs/phirbhitumko.mp3');
const sun_raha_hy_na = new Audio('songs/sunrahahyna.mp3');
const Teri_Meri_Prem_Kahani = new Audio('songs/Teri_Meri_Prem_Kahani.mp3');
const Vekamlaya = new Audio('songs/Vekamlaya.mp3');
const Banjara = new Audio('songs/banjara.mp3');
const Tum_hi_ho = new Audio('songs/tumhiho.mp3');

let arr_songs = [sanam_re, phir_bhi_tmko, sun_raha_hy_na, Teri_Meri_Prem_Kahani, Vekamlaya
    , Banjara, Tum_hi_ho];


// Song Name Element
let song_name = document.getElementById('song_name');
let singer = document.getElementById('song1_anchor_1');
let production = document.getElementById('song1_anchor_2');
let writter = document.getElementById('song1_anchor_3');

let song_img_element = document.getElementById('song_img');
let cards = document.querySelectorAll('.cards_container');
let arr_cards = Array.from(cards);
let currentSongIndex = null; // To keep track of the currently playing song

// Attach event listeners to each card
arr_cards.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        details_card_changer(index);
        to_pause_btn(index);
    });
});

// Function to change All the Functionality
const details_card_changer = (index) => {
    song_img_element.src = obj_of_songs[index].image_src;
    song_name.innerText = obj_of_songs[index].song_name;
    singer.innerText = obj_of_songs[index].singer_name;
    production.innerText = obj_of_songs[index].production;
    writter.innerText = obj_of_songs[index].writter;
    volume_controller(index);
    mute_btn(index);
    duration_song(index);
}


// Function to handle play/pause behavior
const to_pause_btn = async (index) => {
    // Stop the currently playing song if it's not the same as the one being clicked
    if (currentSongIndex !== null && currentSongIndex !== index) {
        arr_songs[currentSongIndex].pause();
        arr_songs[currentSongIndex].currentTime = 0;

        // Change the button back to play for the previously playing song
        let previousPauseBtn = document.getElementById('pause_btn');
        if (previousPauseBtn) {
            previousPauseBtn.outerHTML = `<svg onclick="play_song()" id="play_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z">
                </path>
            </svg>`;
            play_btn.addEventListener('click', () => arr_songs[0].play());
        }
    }
    // Play the selected song
    arr_songs[index].play();
    currentSongIndex = index; // Update the current song index

    // Change the play button to pause button
    setTimeout(() => {
        let play_btn = document.getElementById('play_btn');
        // console.log(play_btn)
        if (play_btn && !arr_songs[index].paused) {
            play_btn.outerHTML = `<i onclick="pause_song()" id="pause_btn" class="fa-regular fa-circle-pause"></i>`;
        }
    }, 100);

}

// Pause song button
const pause_song = () => {
    let button_change = document.getElementById('pause_btn');
    arr_songs[currentSongIndex].pause();
    // console.log(arr_songs[currentSongIndex]);
    button_change.outerHTML = `<svg onclick="play_song()" id="play_btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z">
                </path>
            </svg>`;
}
// Play song on again clicking
const play_song = () => {
    let play = document.getElementById('play_btn');
    arr_songs[currentSongIndex].play();
    play.outerHTML = `<i onclick="pause_song()" id="pause_btn" class="fa-regular fa-circle-pause"></i>`;
}

// Now making the sound control using js
const volume = document.getElementById('volume_right');
const volume_controller = (index) => {
    volume.addEventListener('input', () => {
        const volumeValue = volume.value;
        arr_songs[index].volume = volumeValue / 100;
    })
};
// Now making the Sound mute by clicking the Sound label
let label_volume = document.getElementById('label_volume')
let val = 1;
const mute_btn = (index) => {
    if (arr_songs[currentSongIndex] !== arr_songs[index]) {
        val = 1;
        label_volume.classList.remove('toggle_color');
    }
    label_volume.addEventListener('click', () => {
        if (val == 1 || val % 2 == 0) {
            arr_songs[index].volume = 0;
            label_volume.classList.toggle('toggle_color');
        }
        else {
            label_volume.classList.remove('toggle_color')
            arr_songs[index].volume = volume.value / 100;

        }
        val++;
    })
}

// Most important thing now getting the current run time of the current playing song
let start_time = document.getElementById('start_time')
let end_time = document.getElementById('end_time');
let range = document.getElementById('volume');
// function to cahange the start and end time according to the song
const duration_song = (index) => {
    const formet_time = (seconds) => {
        let minute = Math.floor(seconds / 60);
        let second = Math.floor(seconds % 60);
        if (seconds < 10) {
            seconds = `0${seconds}`; // Ensure two digits for seconds
        }
        return (`${minute}.${second}s`)
    }
    let total = (arr_songs[index].duration / 60).toString();
    if (total.length > 3) {
        let total_song_duration = total.slice(0, 4);
        end_time.innerText = total_song_duration;
        let id = setInterval(() => {
            start_time.innerText = formet_time(arr_songs[index].currentTime);
            // console.log((arr_songs[index].currentTime / arr_songs[index].duration) * 100)
            let percentage = arr_songs[index].currentTime / arr_songs[index].duration * 100
            range.value = percentage;
            if (percentage == 100) {
                start_time.innerHTML = total_song_duration;
                clearTimeout(id);
            }
        }, 1000);
    }
    range.addEventListener('change', () => {
        arr_songs[index].currentTime = ((range.value * arr_songs[index].duration) / 100);
    })
}
