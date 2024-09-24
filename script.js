  
    const audio = document.getElementById('firtsSound')
    const progressBar = document.getElementById('AudioProgressBar');
    const currentTime = document.getElementById('CurrentTime');
    const trackTime = document.getElementById('TrackTime');
    // Установите максимальное значение ползунка равным продолжительности песни
audio.addEventListener('loadedmetadata', () => {
    progressBar.max = audio.duration;
    trackTime.textContent = formatTime(audio.duration);
  });
  
  // Обновите положение ползунка при изменении времени воспроизведения
  audio.addEventListener('timeupdate', () => {
    progressBar.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
  });
  
  // Обновите время воспроизведения при изменении положения ползунка
  progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
  });
  
  // Функция форматирования времени
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  const songs = [
    {
      title: 'Brennan Savage',
      name:  'Look At Me Now',
      image: 'assets/img/lemonade.png',
      audio: 'assets/audio/brennan-savage-look-at-me-now-mp3.mp3',
      backgroundImage: 'assets/img/lemonade.png',

    },
    {
      title: 'Masked Wolf',
      name:  'Astronaut in the ocean',
      image: 'assets/img/astronaut.png',
      audio: 'assets/audio/masked.mp3',
      backgroundImage: 'assets/img/astronaut.png',
    },
  ];
    document.getElementById('right').addEventListener('click', nextSong);
    document.getElementById('left').addEventListener('click', previousSong);
    document.getElementById('play-pause').addEventListener('click', playPause) ;
    function playPause() {
        const imagePlayPause = document.getElementById('play-pause');
        const mainImage = document.querySelector(".lemonade");
        const audio = document.getElementById('firtsSound');
      if (imagePlayPause.src.endsWith('assets/svg/play.png')) {
        imagePlayPause.src = 'assets/svg/pause.png';
        mainImage.style.transform = "scale(1.02)";
        mainImage.style.borderRadius = "30px 30px 10px 10px";
        audio.play();
    
      } else {
        imagePlayPause.src = 'assets/svg/play.png';
        mainImage.style.transform = "scale(1)";
        mainImage.style.borderRadius = "30px 30px 0px 0px";
        audio.pause();
      }
    } 

    let currentSongIndex = 0;

    function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playSong();
    }


  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    playSong();
  }
  
  function updateSongInfo() {
    const song = songs[currentSongIndex];
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('lemonade').src = song.image;
    document.getElementById('firtsSound').src = song.audio;
    document.body.style.backgroundImage = `url(${song.backgroundImage})`;
    document.getElementById('name').textContent = song.name;
  }
  
  function playSong() {
    document.getElementById('firtsSound').play();
    const imagePlayPause = document.getElementById('play-pause');
    imagePlayPause.src = 'assets/svg/pause.png';
    const mainImage = document.querySelector(".lemonade");
    mainImage.style.transform = "scale(1.02)";
  }
  audio.addEventListener('ended', nextSong);
  
  
