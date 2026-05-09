const SONGS_DB = [
            {
                id: 1,
                title: "Callin U",
                artist: "Tamally Maak",
                cover: "https://i1.sndcdn.com/artworks-ycEyagkWkHhQ-0-t500x500.jpg",
                src: "songs/Callin U (Tamally Maak)-(SambalpuriStar.In).mp3",
                duration: 198
            },
            {
                id: 2,
                title: "Espresso",
                artist: "Sabrina Carpenter",
                cover: "https://images.wsj.net/im-962859?width=1280&size=1",
                src: "songs/Espresso-(SambalpuriStar.In).mp3",
                duration: 200
            },
            {
                id: 3,
                title: "Fa9la",
                artist: "Daffy and Flipperachi",
                cover: "https://assets.gqindia.com/photos/693a94700958304b55fbd99b/16:9/w_2560%2Cc_limit/Dhurandhar-.jpg",
                src: "songs/Fa9la-(SambalpuriStar.In).mp3",
                duration: 196
            },
            {
                id: 4,
                title: "Fell For You",
                artist: "Shubh",
                cover: "https://i.ytimg.com/vi/0KHJ1YLvCq0/maxresdefault.jpg",
                src: "songs/Fell For You-(SambalpuriStar.In).mp3",
                duration: 141
            },
            {
                id: 5,
                title: "Ishqa Ve",
                artist: "Zeeshan Ali",
                cover: "https://c.saavncdn.com/617/Ishqa-Ve-Urdu-2025-20251205162653-500x500.jpg",
                src: "songs/Ishqa Ve-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 6,
                title: "Levitating",
                artist: "Dua Lipa",
                cover: "https://i1.sndcdn.com/artworks-YL3ua1FAzIzzSk0e-OWj0qw-t1080x1080.jpg",
                src: "songs/Levitating-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 7,
                title: "Mi Amor",
                artist: "Sharn and Paul",
                cover: "https://c.saavncdn.com/800/Mi-Amor-Punjabi-2021-20211107115532-500x500.jpg",
                src: "songs/Mi Amor-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 8,
                title: "Peaky Blinders",
                artist: "PJ Harvey",
                cover: "https://i1.sndcdn.com/artworks-000181492471-bu528z-t500x500.jpg",
                src: "songs/Peaky Blinders-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 9,
                title: "Suniyan Suniyan",
                artist: "Juss and MixSingh",
                cover: "https://i1.sndcdn.com/artworks-9L7V4njW3zkBVG1l-misuQQ-t500x500.jpg",
                src: "songs/Suniyan Suniyan-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 10,
                title: "Supreme",
                artist: "Shubh",
                cover: "https://i1.sndcdn.com/artworks-L6qh13MiGYMTKk21-zXzmEQ-t500x500.png",
                src: "songs/Supreme-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 11,
                title: "Andaaz e Karam",
                artist: "ER, Madhur Sharma and Moin",
                cover: "https://c.saavncdn.com/499/Andaaz-e-Karam-Hindi-2025-20251015200149-500x500.jpg",
                src: "songs/Andaaz e Karam-(SambalpuriStar.In).mp3",
                duration: 198
            },
            {
                id: 12,
                title: "Choudhar Jaat Ki",
                artist: "Raju Punjabi",
                cover: "https://c.saavncdn.com/153/Choudhar-Jaat-Ki-Audio-Edit-Haryanvi-2023-20230924000521-500x500.jpg",
                src: "songs/Choudhar Jaat Ki (Slowed, Reverb)-(SambalpuriStar.In).mp3",
                duration: 200
            },
            {
                id: 13,
                title: "Ek Khatola Jail Ke Bhitar",
                artist: "Masoom Sharma",
                cover: "https://c.saavncdn.com/355/Ek-Khtola-Jail-Ke-Bhitar-feat-Ankiit-Baliyann-Haryanvi-2023-20250124110531-500x500.jpg",
                src: "songs/Ek Khatola Jail Ke Bhitar-(SambalpuriStar.In).mp3",
                duration: 196
            },
            {
                id: 14,
                title: "Hawa Hawa",
                artist: "Hasan Jahangir",
                cover: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1YO2b8.img?w=768&h=472&m=6&x=363&y=189&s=96&d=96",
                src: "songs/Hawa Hawa (Viral Remix)-(SambalpuriStar.In).mp3",
                duration: 141
            },
            {
                id: 15,
                title: "Kiliye Kiliye",
                artist: "Ilaiyaraaja, S. Janaki",
                cover: "https://c.saavncdn.com/821/Kiliye-Kiliye-Afrobeat-Mix-Malayalam-2024-20250905103933-500x500.jpg",
                src: "songs/Kiliye Kiliye (Afrobeat Mix) The Independeners-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 16,
                title: "Let Me Down",
                artist: "Alec Benjamin",
                cover: "https://i.scdn.co/image/ab67616d0000b273f5542344af0e3db04008f069",
                src: "songs/Let Me Down Slowly x Aaja Ve Mahiya-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 17,
                title: "Maand",
                artist: "Bayaan, Hasan Raheem, and Rovalio",
                cover: "https://c.saavncdn.com/897/Maand-Hindi-2025-20250326091542-500x500.jpg",
                src: "songs/Maand-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 18,
                title: "Mein Zinda Hoon Lekin Kahan Zindagi Hai",
                artist: "Ankit Prajapati Palla, Arpit Singh",
                cover: "https://c.saavncdn.com/129/Main-Zinda-Hu-Lekin-Lo-fi-Hindi-2023-20230203034701-500x500.jpg",
                src: "songs/Mein Zinda Hoon Lekin Kahan Zindagi Hai-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 19,
                title: "Moonlight",
                artist: "Grace VanderWaal",
                cover: "https://c.saavncdn.com/418/Moonlight-Punjabi-2022-20220219175319-500x500.jpg",
                src: "songs/Moonlight-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 20,
                title: "Paaro",
                artist: "Aditya Rikhari",
                cover: "https://i.scdn.co/image/ab67616d0000b27390c6e25ed80fd8a70c71e921",
                src: "songs/Paaro-(SambalpuriStar.In).mp3",
                duration: 215
            },
            {
                id: 21,
                title: "Russian Bandana",
                artist: "Dhanda Nyoliwala",
                cover: "https://cdn-images.dzcdn.net/images/cover/292bfa44dcf7f9f03947b4b2075adb39/0x1900-000000-80-0-0.jpg",
                src: "songs/Russian Bandana-(SambalpuriStar.In).mp3",
                duration: 198
            },
            {
                id: 22,
                title: "Teri Hoke Maraan Jind Jaan Karaan",
                artist: "Arijit Singh and Jasleen Royal",
                cover: "https://static.toiimg.com/thumb/msid-112028116,width-1280,height-720,resizemode-4/112028116.jpg",
                src: "songs/Teri Hoke Maraan Jind Jaan Karaan-(SambalpuriStar.In).mp3",
                duration: 200
            },
            {
                id: 23,
                title: "Tum Mile Dil Khile",
                artist: "Arijit Singh",
                cover: "https://artistbookingcompany.com/wp-content/uploads/2024/03/arjit-singh-680x680.png",
                src: "songs/Tum Mile Dil Khile Arijit Singh New Version [128 Kbps]-(SongsPk.com.se).mp3",
                duration: 196
            }
        ];

        // DOM elements
        const audio = document.getElementById('audioPlayer');
        const playBtn = document.getElementById('playPauseBtn');
        const playIcon = document.getElementById('playIcon');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const progressSlider = document.getElementById('progressSlider');
        const currentTimeSpan = document.getElementById('currentTime');
        const totalDurationSpan = document.getElementById('totalDuration');
        const volumeSlider = document.getElementById('volumeSlider');
        const coverArt = document.getElementById('coverArt');
        const songTitleSpan = document.getElementById('songTitle');
        const artistNameSpan = document.getElementById('artistName');
        const playlistContainer = document.getElementById('playlistContainer');
        const waveBars = document.querySelectorAll('.wave-bar');
        const themeBtn = document.getElementById('themeSwitcherBtn');

        let currentSongIndex = 0;
        let isPlayingLocal = false;
        let updateInterval = null;
        let themes = ['', 'light', 'blue', 'purple'];
        let themeIdx = 0;

        // ----- Helper functions -----
        function formatTime(seconds) {
            if (isNaN(seconds) || seconds === Infinity) return "0:00";
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        // Load current song data from index
        function loadSong(index) {
            const song = SONGS_DB[index];
            if (!song) return;
            songTitleSpan.innerText = song.title;
            artistNameSpan.innerText = song.artist;
            coverArt.src = song.cover;
            coverArt.alt = song.title;
            // Change audio source
            audio.src = song.src;
            audio.load();
            audio.volume = parseFloat(volumeSlider.value);
            totalDurationSpan.innerText = formatTime(song.duration);
            progressSlider.value = 0;
            currentTimeSpan.innerText = "0:00";
            if (isPlayingLocal) {
                audio.play().catch(e => console.log("autoplay blocked", e));
            } else {
                // if paused, just load metadata
            }
            updateActivePlaylistHighlight();
            // trigger pulse cover when new song loads
            coverArt.classList.add('cover-pulse');
            setTimeout(() => coverArt.classList.remove('cover-pulse'), 600);
        }

        // update active song in playlist UI
        function updateActivePlaylistHighlight() {
            const items = document.querySelectorAll('.playlist-item-li');
            items.forEach((item, idx) => {
                const indicatorSpan = item.querySelector('.playing-indicator');
                if (idx === currentSongIndex && isPlayingLocal) {
                    if (indicatorSpan) indicatorSpan.innerHTML = '<i class="fas fa-volume-up"></i>';
                } else if (idx === currentSongIndex && !isPlayingLocal) {
                    if (indicatorSpan) indicatorSpan.innerHTML = '<i class="fas fa-pause-circle"></i>';
                } else {
                    if (indicatorSpan) indicatorSpan.innerHTML = '';
                }
            });
        }

        // Render playlist with album covers and dynamic UI
        function renderPlaylist() {
            playlistContainer.innerHTML = '';
            SONGS_DB.forEach((song, idx) => {
                const li = document.createElement('li');
                li.classList.add('playlist-item-li');
                li.setAttribute('data-idx', idx);
                li.innerHTML = `
        <img class="playlist-img" src="${song.cover}" onerror="this.src='https://picsum.photos/id/100/50/50'" alt="cover">
        <div class="playlist-info">
          <div class="playlist-song-title">${song.title}</div>
          <div class="playlist-artist">${song.artist}</div>
        </div>
        <div class="playing-indicator" style="width: 28px;"></div>
      `;
                li.addEventListener('click', () => {
                    if (currentSongIndex === idx) {
                        // same song toggles play/pause
                        togglePlayPause();
                    } else {
                        currentSongIndex = idx;
                        loadSong(currentSongIndex);
                        if (isPlayingLocal) {
                            audio.play().catch(e => console.log(e));
                        } else {
                            togglePlayPause(); // auto play after selection for better UX
                        }
                    }
                    updateActivePlaylistHighlight();
                });
                playlistContainer.appendChild(li);
            });
            updateActivePlaylistHighlight();
        }

        // Wave animation while playing (dynamic volume reactivity)
        function startWaveAnimation() {
            if (!isPlayingLocal) {
                waveBars.forEach(bar => {
                    bar.classList.remove('wave-active');
                    bar.style.height = '8px';
                });
                return;
            }
            waveBars.forEach(bar => {
                bar.classList.add('wave-active');
                // random intensity based on volume & randomness for realism
                const randomHeight = 12 + Math.random() * 28;
                bar.style.height = `${randomHeight}px`;
            });
        }

        function updateWaveformIntensity() {
            if (!isPlayingLocal) {
                waveBars.forEach(bar => bar.style.height = '8px');
                return;
            }
            const vol = audio.volume;
            waveBars.forEach((bar, i) => {
                let intensity = 12 + (vol * 28) + (Math.sin(Date.now() * 0.005 + i) * 8);
                intensity = Math.min(42, Math.max(10, intensity));
                bar.style.height = `${intensity}px`;
            });
        }

        let waveInterval = null;
        function manageWaveInterval() {
            if (waveInterval) clearInterval(waveInterval);
            if (isPlayingLocal) {
                waveInterval = setInterval(() => {
                    if (audio.paused || !isPlayingLocal) return;
                    updateWaveformIntensity();
                }, 110);
            } else {
                waveBars.forEach(bar => {
                    bar.classList.remove('wave-active');
                    bar.style.height = '8px';
                });
                if (waveInterval) clearInterval(waveInterval);
            }
        }

        function togglePlayPause() {
            if (audio.paused) {
                audio.play().then(() => {
                    isPlayingLocal = true;
                    playIcon.className = "fas fa-pause";
                    manageWaveInterval();
                    updateActivePlaylistHighlight();
                    startWaveAnimation();
                    // add pulse effect
                    coverArt.classList.add('cover-pulse');
                    setTimeout(() => coverArt.classList.remove('cover-pulse'), 500);
                }).catch(err => console.log("play error", err));
            } else {
                audio.pause();
                isPlayingLocal = false;
                playIcon.className = "fas fa-play";
                manageWaveInterval();
                updateActivePlaylistHighlight();
                waveBars.forEach(bar => {
                    bar.classList.remove('wave-active');
                    bar.style.height = '6px';
                });
            }
        }

        function nextSong() {
            currentSongIndex = (currentSongIndex + 1) % SONGS_DB.length;
            loadSong(currentSongIndex);
            if (isPlayingLocal) {
                audio.play().catch(e => console.log(e));
            } else {
                togglePlayPause();
            }
            updateActivePlaylistHighlight();
        }

        function prevSong() {
            currentSongIndex = (currentSongIndex - 1 + SONGS_DB.length) % SONGS_DB.length;
            loadSong(currentSongIndex);
            if (isPlayingLocal) {
                audio.play().catch(e => console.log(e));
            } else {
                togglePlayPause();
            }
            updateActivePlaylistHighlight();
        }

        // Update progress bar
        function updateProgress() {
            if (audio.duration && !isNaN(audio.duration)) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressSlider.value = percent;
                currentTimeSpan.innerText = formatTime(audio.currentTime);
            }
        }

        function setProgress(e) {
            if (audio.duration) {
                const seekTime = (progressSlider.value / 100) * audio.duration;
                audio.currentTime = seekTime;
            }
        }

        function setVolume(e) {
            audio.volume = volumeSlider.value;
        }

        // Theme switching (multiple themes + keep state)
        function changeTheme() {
            document.body.className = themes[themeIdx];
            themeIdx = (themeIdx + 1) % themes.length;
            // store preference
            localStorage.setItem('player_theme', themes[themeIdx - 1] || '');
        }

        function applySavedTheme() {
            const saved = localStorage.getItem('player_theme');
            if (saved && themes.includes(saved)) {
                document.body.className = saved;
                themeIdx = themes.indexOf(saved);
                if (themeIdx === -1) themeIdx = 0;
            } else {
                document.body.className = '';
                themeIdx = 0;
            }
        }

        // Event listeners & audio sync
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', () => {
            totalDurationSpan.innerText = formatTime(audio.duration);
        });
        audio.addEventListener('play', () => {
            isPlayingLocal = true;
            playIcon.className = "fas fa-pause";
            manageWaveInterval();
            updateActivePlaylistHighlight();
            coverArt.classList.add('cover-pulse');
            setTimeout(() => coverArt.classList.remove('cover-pulse'), 400);
        });
        audio.addEventListener('pause', () => {
            isPlayingLocal = false;
            playIcon.className = "fas fa-play";
            manageWaveInterval();
            updateActivePlaylistHighlight();
        });
        audio.addEventListener('ended', () => {
            nextSong();
        });
        progressSlider.addEventListener('input', setProgress);
        volumeSlider.addEventListener('input', setVolume);
        playBtn.addEventListener('click', togglePlayPause);
        nextBtn.addEventListener('click', nextSong);
        prevBtn.addEventListener('click', prevSong);
        themeBtn.addEventListener('click', changeTheme);

        // Initialize everything
        function init() {
            renderPlaylist();
            currentSongIndex = 0;
            loadSong(currentSongIndex);
            audio.volume = 0.7;
            volumeSlider.value = 0.7;
            isPlayingLocal = false;
            playIcon.className = "fas fa-play";
            manageWaveInterval();
            applySavedTheme();
            // extra: if user wants to see beautiful interfaces
            // preload background effects
            setInterval(() => {
                if (isPlayingLocal && audio.volume > 0) {
                    updateWaveformIntensity();
                }
            }, 140);
        }
        init();