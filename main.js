const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlistAmerican = $('.song--American')
const playlistVN = $('.song--VN')
const playlist = $('.playlist-song')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const duration = $('.duration')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextSongA = $('.next--songA')
const prevSongA = $('.prev--songA')
const nextSongVN = $('.next--songVN')
const prevSongVN = $('.prev--songVN')
const nextSongInPlayList = $('.next--songInPlayList')
const prevSongInPlayList = $('.prev--songInPlayList')
const repeatBtn = $('.btn-repeat')
const randomBtn = $('.btn-random')
const volume = $('#volume')
const volumeHigh = $('.volume-icon--high')
const volumeOff = $('.volume-icon--off')
const current = $('.current')

const listsongA = [
    {
        name: 'Counting Stars',
        singer: 'Alex Goot, Chrissy Costanza, KHS',
        path: './assets/music/music American/Counting Stars.mp3',
        image: './assets/img/img song American/Counting Stars.jpg',
        duration: '3:23'
    },
    {
        name: 'Only Love',
        singer: 'Trademark',
        path: './assets/music/music American/Only Love.mp3',
        image: './assets/img/img song American/Only Love.jpg',
        duration: '4:05'
    },
    {
        name: 'Attention',
        singer: 'Charlie Puth',
        path: './assets/music/music American/Attention.mp3',
        image: './assets/img/img song American/Attention.jpg',
        duration: '3:28'
    },
    {
        name: 'Señorita',
        singer: 'Shawn Mendes,Camila Cabello',
        path: './assets/music/music American/Senorita.mp3',
        image: './assets/img/img song American/Senorita.jpg',
        duration: '3:11'
    },
    {
        name: '2002',
        singer: 'Anne Marie',
        path: './assets/music/music American/2002.mp3',
        image: './assets/img/img song American/2002.jpg',
        duration: '3:07'
    },
    {
        name: 'One Call Away',
        singer: 'Charlie Puth',
        path: './assets/music/music American/One Call Away.mp3',
        image: './assets/img/img song American/One Call Away.jpg',
        duration: '3:14'
    },
    {
        name: 'Havana',
        singer: 'Camila Cabello, Young Thug',
        path: './assets/music/music American/Havana.mp3',
        image: './assets/img/img song American/Havana.jpg',
        duration: '3:34'
    },
    {
        name: 'Sugar',
        singer: 'Maroon 5',
        path: './assets/music/music American/Sugar.mp3',
        image: './assets/img/img song American/Sugar.jpg',
        duration: '3:54'
    },
    {
        name: 'We Don\'t Talk Anymore',
        singer: 'Charlie Puth, Selena Gomez',
        path: './assets/music/music American/We Don_t Talk Anymore.mp3',
        image: './assets/img/img song American/We Don_t Talk Anymore.jpg',
        duration: '3:37'
    },
    {
        name: 'Shape of You',
        singer: 'Ed Sheeran',
        path: './assets/music/music American/Shape of You.mp3',
        image: './assets/img/img song American/Shape of You.jpeg',
        duration: '4:00'
    },
    {
        name: 'Salt',
        singer: 'Ava Max',
        path: './assets/music/music American/Salt.mp3',
        image: './assets/img/img song American/Salt.jpg',
        duration: '3:00'
    },
    {
        name: 'The Show',
        singer: 'Lenka',
        path: './assets/music/music American/The Show.mp3',
        image: './assets/img/img song American/The Show.jpg',
        duration: '3:55'
    },
    {
        name: 'Perfect',
        singer: 'Ed Sheeran',
        path: './assets/music/music American/Perfect.mp3',
        image: './assets/img/img song American/Perfect.jpg',
        duration: '4:23'
    },
    {
        name: 'Wrecking Ball',
        singer: 'Miley Cyrus',
        path: './assets/music/music American/Wrecking Ball.mp3',
        image: './assets/img/img song American/Wrecking Ball.jpg',
        duration: '3:43'
    },
    {
        name: 'I Do',
        singer: '911',
        path: './assets/music/music American/I Do.mp3',
        image: './assets/img/img song American/I Do.jpg',
        duration: '3:27'
    },
    {
        name: 'Girls Like You',
        singer: 'Maroon 5, Cardi B',
        path: './assets/music/music American/Girls Like You.mp3',
        image: './assets/img/img song American/Girls Like You.jpg',
        duration: '3:55'
    },
    {
        name: 'Titanium',
        singer: 'David Guetta',
        path: './assets/music/music American/Titanium.mp3',
        image: './assets/img/img song American/Titanium.jpg',
        duration: '4:06'
    },
    {
        name: 'At My Worst',
        singer: 'Hanin Dhiya',
        path: './assets/music/music American/At My Worst.mp3',
        image: './assets/img/img song American/At My Worst.jpg',
        duration: '2:50'
    },
    {
        name: 'Monsters',
        singer: 'Katie Sky',
        path: './assets/music/music American/Monsters.mp3',
        image: './assets/img/img song American/Monsters.jpg',
        duration: '3:41'
    },
    {
        name: 'Something Just Like This',
        singer: 'The Chainsmokers, Coldplay',
        path: './assets/music/music American/Something Just Like This.mp3',
        image: './assets/img/img song American/Something Just Like This.jpg',
        duration: '4:07'
    },
    {
        name: 'On My Way × Lily',
        singer: 'Pink Sweat$',
        path: './assets/music/music American/On My Way - Lily.mp3',
        image: './assets/img/img song American/On My Way - Lily.jpg',
        duration: '3:27'
    },
    {
        name: 'Without Me',
        singer: 'Halsey',
        path: './assets/music/music American/Without Me.mp3',
        image: './assets/img/img song American/Without Me.jpg',
        duration: '3:21'
    },
    {
        name: 'Why Not Me?',
        singer: 'Enrique Iglesias',
        path: './assets/music/music American/Why Not Me.mp3',
        image: './assets/img/img song American/Why Not Me.jpg',
        duration: '3:39'
    },
    {
        name: 'Unstoppable',
        singer: 'Sia',
        path: './assets/music/music American/Unstoppable.mp3',
        image: './assets/img/img song American/Unstoppable.jpg',
        duration: '3:37'
    },
    {
        name: '7 Years',
        singer: 'Lukas Graham',
        path: './assets/music/music American/7 Years.mp3',
        image: './assets/img/img song American/7 Years.jpg',
        duration: '3:58'
    },
    {
        name: 'Let Me Down Slowly',
        singer: 'Alec Benjamin',
        path: './assets/music/music American/Let Me Down Slowly.mp3',
        image: './assets/img/img song American/Let Me Down Slowly.jpg',
        duration: '2:49'
    },
    {
        name: 'Someone You Loved',
        singer: 'Madilyn Bailey',
        path: './assets/music/music American/Someone You Loved.mp3',
        image: './assets/img/img song American/Someone You Loved.jpg',
        duration: '2:56'
    },
    {
        name: 'Closer',
        singer: 'The Chainsmokers, Halsey',
        path: './assets/music/music American/Closer.mp3',
        image: './assets/img/img song American/Closer.jpg',
        duration: '4:05'
    },
    {
        name: 'Lemon Tree',
        singer: 'Fools Garden',
        path: './assets/music/music American/Lemon Tree.mp3',
        image: './assets/img/img song American/Lemon Tree.jpg',
        duration: '3:11'
    },
    {
        name: 'Call Me Maybe',
        singer: 'Carly Rae Jepsen',
        path: './assets/music/music American/Call Me Maybe.mp3',
        image: './assets/img/img song American/Call Me Maybe.jpg',
        duration: '3:14'
    },
    {
        name: 'Love The Way You Lie',
        singer: 'Feat Rihanna, Eminem',
        path: './assets/music/music American/Love The Way You Lie.mp3',
        image: './assets/img/img song American/Love The Way You Lie.jpg',
        duration: '4:23'
    },
    {
        name: 'Baby',
        singer: 'Justin Bieber, Ludacris',
        path: './assets/music/music American/Baby.mp3',
        image: './assets/img/img song American/Baby.jpg',
        duration: '3:34'
    },
    {
        name: 'The Nights',
        singer: 'Avicii',
        path: './assets/music/music American/The Nights.mp3',
        image: './assets/img/img song American/The Nights.jpg',
        duration: '2:58'
    },
    {
        name: 'What Makes You Beautiful',
        singer: 'One Direction',
        path: './assets/music/music American/What Makes You Beautiful.mp3',
        image: './assets/img/img song American/What Makes You Beautiful.jpg',
        duration: '3:18'
    },
    {
        name: 'Counting Stars',
        singer: 'OneRepublic',
        path: './assets/music/music American/Counting Stars - OneRepublic.mp3',
        image: './assets/img/img song American/Counting Stars - OneRepublic.jpg',
        duration: '4:17'
    },
    {
        name: 'Love Yourself',
        singer: 'Justin Bieber',
        path: './assets/music/music American/Love Yourself.mp3',
        image: './assets/img/img song American/Love Yourself.jpg',
        duration: '3:53'
    },
    {
        name: 'Let Her Go',
        singer: 'Passenger',
        path: './assets/music/music American/Let Her Go.mp3',
        image: './assets/img/img song American/Let Her Go.jpg',
        duration: '4:12'
    },
    {
        name: 'Coming Home',
        singer: 'Skylar Grey',
        path: './assets/music/music American/Coming Home.mp3',
        image: './assets/img/img song American/Coming Home.jpg',
        duration: '2:24'
    },
    {
        name: 'The Way I Still Love You',
        singer: 'Reynard Silva',
        path: './assets/music/music American/The Way I Still Love You.mp3',
        image: './assets/img/img song American/The Way I Still Love You.jpg',
        duration: '4:09'
    },
    {
        name: 'I\'m Yours',
        singer: 'Jason Mraz',
        path: './assets/music/music American/I_m Yours.mp3',
        image: './assets/img/img song American/I_m Yours.jpg',
        duration: '4:03'
    },
    {
        name: 'Until You',
        singer: 'Shayne Ward',
        path: './assets/music/music American/Until You.mp3',
        image: './assets/img/img song American/Until You.jpg',
        duration: '4:08'
    },
    {
        name: 'My Love',
        singer: 'Westlife',
        path: './assets/music/music American/My Love.mp3',
        image: './assets/img/img song American/My Love.jpg',
        duration: '3:51'
    },
    {
        name: 'Nothing\'s Gonna Change My Love For You',
        singer: 'Westlife',
        path: './assets/music/music American/Nothing_s Gonna Change My Love For You.mp3',
        image: './assets/img/img song American/Nothing_s Gonna Change My Love For You.png',
        duration: '3:49'
    },
    {
        name: 'Bad Liar',
        singer: 'Imagine Dragons',
        path: './assets/music/music American/Bad Liar.mp3',
        image: './assets/img/img song American/Bad Liar.jpg',
        duration: '4:20'
    },
    {
        name: 'Play Date',
        singer: 'Melanie Martinez',
        path: './assets/music/music American/Play Date.mp3',
        image: './assets/img/img song American/Play Date.jpg',
        duration: '2:59'
    },
]

const listsongVN = [
    {
        name: 'Người Kế Nhiệm',
        singer: 'Nhậm Nhiên',
        path: './assets/music/music VN/Nguoi Ke Nhiem.mp3',
        image: './assets/img/img song VN/Nguoi Ke Nhiem.jpg',
        duration: '4:05'
    },
    {
        name: 'Chỉ Vì Quá Yêu Anh',
        singer: 'Đinh Phù Ni (Ding Fu Ni)',
        path: './assets/music/music VN/Chi Vi Qua Yeu Anh.mp3',
        image: './assets/img/img song VN/Chi Vi Qua Yeu Anh.jpg',
        duration: '4:08'
    },
    {
        name: 'Phi Điểu Và Ve Sầu',
        singer: 'Nhậm Nhiên',
        path: './assets/music/music VN/Phi Dieu Va Ve Sau.mp3',
        image: './assets/img/img song VN/Phi Dieu Va Ve Sau.jpg',
        duration: '4:56'
    },
    {
        name: 'Bước Qua Nhau',
        singer: 'Vũ',
        path: './assets/music/music VN/Buoc Qua Nhau.mp3',
        image: './assets/img/img song VN/Buoc Qua Nhau.jpg',
        duration: '4:17'
    },
    {
        name: 'Stay With Me',
        singer: 'Chan Yeol(EXO), Punch',
        path: './assets/music/music VN/Stay With Me.mp3',
        image: './assets/img/img song VN/Stay With Me.jpg',
        duration: '3:12'
    },
    {
        name: 'Everytime (Descendants Of The Sun OST)',
        singer: 'Chen',
        path: './assets/music/music VN/Everytime (Descendants Of The Sun OST).mp3',
        image: './assets/img/img song VN/Everytime (Descendants Of The Sun OST).jpg',
        duration: '3:09'
    },
    {
        name: 'This Love',
        singer: 'Davichi',
        path: './assets/music/music VN/This Love.mp3',
        image: './assets/img/img song VN/This Love.jpg',
        duration: '3:46'
    },
    {
        name: 'Em Đã Biết',
        singer: 'Suni Hạ Linh, R.Tee',
        path: './assets/music/music VN/Em Da Biet.mp3',
        image: './assets/img/img song VN/Em Da Biet.jpg',
        duration: '4:21'
    },
    {
        name: 'Chỉ Là Muốn nói',
        singer: 'Khải',
        path: './assets/music/music VN/Chi La Muon Noi.mp3',
        image: './assets/img/img song VN/Chi La Muon Noi.jpg',
        duration: '4:46'
    },
    {
        name: 'Cứ Thế Rời Xa',
        singer: 'Yến Tatoo, Great',
        path: './assets/music/music VN/Cu The Roi Xa.mp3',
        image: './assets/img/img song VN/Cu The Roi Xa.jpg',
        duration: '3:53'
    },
    {
        name: 'Chưa Bao Giờ',
        singer: 'Trung Quân',
        path: './assets/music/music VN/Chua Bao Gio.mp3',
        image: './assets/img/img song VN/Chua Bao Gio.jpg',
        duration: '4:23'
    },
    {
        name: 'Giúp Anh Trả Lời Những Câu Hỏi',
        singer: 'Vương Anh Tú',
        path: './assets/music/music VN/Giup Anh Tra Loi Nhung Cau Hoi.mp3',
        image: './assets/img/img song VN/Giup Anh Tra Loi Nhung Cau Hoi.jpg',
        duration: '4:49'
    },
]

const songInPlayLists = [
    // {
    //     name: 'Attention',
    //     singer: 'Charlie Puth',
    //     path: './assets/music/music european american/Attention.mp3',
    //     image: './assets/img/img european american/Attention.png',
    //     duration: '3:28'
    // },
]

const app = {
    // currentIndex: 0,
    currentIndexSongA: 0,
    currentIndexSongVN: 0,
    currentIndexSongInPlayList: 0,
    isPlaying: false,
    isRepeat: false,
    listsongA,
    listsongVN,
    songInPlayLists,

    renderSongAmerican: function() {
        const htmls = this.listsongA.map((songA, index) => {
            return `
                <div class="container-playlist__song song--American" data-index="${index}">
                    <div class="container-playlist__song-thumb" style="background-image: url('${songA.image}')">
                    </div>
                    <div class="container-playlist__song-body">
                        <h3 class="container-playlist__song-title">${songA.name}</h3>
                        <p class="container-playlist__song-author">${songA.singer}</p>
                    </div>
                    <div class="container-playlist__song-option--add">
                        <i class="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
            `
        })
        playlistAmerican.innerHTML = htmls.join('')
    },

    renderSongVN: function() {
        const htmls = this.listsongVN.map((songVN, index) => {
            return `
            <div class="container-playlist__song song--VN" data-index="${index}">
                    <div class="container-playlist__song-thumb" style="background-image: url('${songVN.image}')">
                    </div>
                    <div class="container-playlist__song-body">
                        <h3 class="container-playlist__song-title">${songVN.name}</h3>
                        <p class="container-playlist__song-author">${songVN.singer}</p>
                    </div>
                    <div class="container-playlist__song-option--add">
                        <i class="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
            `
        })
        playlistVN.innerHTML = htmls.join('')
    },

    renderSongInPlayList: function() {
        const htmls = this.songInPlayLists.map((songInPlayList, index) => {
            return `
                <div class="song ${index === this.currentIndexSongInPlayList ? 'song-active' : ''}" data-index="${index}">
                    <div class="song-thumb" style="background-image: url('${songInPlayList.image}')">
                    </div>
                    <div class="song-body">
                        <h3 class="song-title">${songInPlayList.name}</h3>
                        <p class="song-author">${songInPlayList.singer}</p>
                    </div>
                    <div class="song-option--remove">
                        <i class="fa-solid fa-circle-minus"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },

    renderSong: function() {
        const htmls = this.songInPlayLists.map((songInPlayList, index) => {
            return `
                <div class="song" data-index="${index}">
                    <div class="song-thumb" style="background-image: url('${songInPlayList.image}')">
                    </div>
                    <div class="song-body">
                        <h3 class="song-title">${songInPlayList.name}</h3>
                        <p class="song-author">${songInPlayList.singer}</p>
                    </div>
                    <div class="song-option--remove">
                        <i class="fa-solid fa-circle-minus"></i>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },

    defineProperties: function() {
        // Lấy đối tượng đầu tiên trong Array of listSongA
        Object.defineProperty(this, 'currentSongA', {
            get: function() {
                return this.listsongA[this.currentIndexSongA]
            }
        })

        // Lấy đối tượng đầu tiên trong Array of listSongVN
        Object.defineProperty(this, 'currentSongVN', {
            get: function() {
                return this.listsongVN[this.currentIndexSongVN]
            }
        })

        // Lấy đối tượng đầu tiên trong PlayList
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songInPlayLists[this.currentIndexSongInPlayList]
            }
        })
    },

    handleEvents: function() {
        const _this = this

        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000, // 10 second
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }    
        }

        // Khi song dược play
        audio.onplay = function() {
            _this.isPlaying = true
            playBtn.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            playBtn.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua song
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }
        
        // Xử lý khi âm thanh bài hát bị thay đổi
        volume.onchange = function(e) {
            const volumePercent = e.target.value
            audio.volume = volumePercent
            if(volumePercent === '0') {
                volumeHigh.classList.add('volume-active')
                volumeOff.classList.remove('volume-active')
            } else {
                volumeHigh.classList.remove('volume-active')
                volumeOff.classList.add('volume-active')
            }
        }

        // Xử lý lặp lại một song
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // Xử lý random một song
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom) 
        }

        // Khi click add thêm song A vào PlayList
        playlistAmerican.onclick = function(e) {
            const songNode = e.target.closest('.song--American')
            const songAdd = e.target.closest('.container-playlist__song-option--add')
            if(songNode || songAdd){
                if(songNode && !songAdd) {
                    _this.currentIndexSongA = Number(songNode.dataset.index)
                    _this.loadCurrentSongA()
                    _this.renderSong()
                    audio.play()

                    // khi next song 
                    nextSongA.onclick = function() {
                        if(_this.isRandom) {
                            _this.playRandomSongA()
                        } else {
                            _this.nextSongA()
                        }
                        audio.play()
                    }

                    // khi prev song 
                    prevSongA.onclick = function() {
                        if(_this.isRandom) {
                            _this.playRandomSongA()
                        } else {
                            _this.prevSongA()
                        }
                        audio.play()
                    }
                }
                if(songAdd) {
                    _this.currentIndexSongA = Number(songNode.dataset.index)
                    const song = _this.currentSongA
                    var check = songInPlayLists.some(function(e) {
                        return e.name === song.name && e.singer === song.singer
                    })    
                    if(check === true) {
                        alert('This song has been on the list, please add another song')
                    } else {
                        // if(playlist.audio) {
                        //     _this.renderSongInPlayList(songInPlayLists.push(song))
                        // } else {
                        //     _this.renderSong(songInPlayLists.push(song))
                        // }
                        _this.renderSong(songInPlayLists.push(song))
                        // _this.renderSong()
                        // _this.renderSongInPlayList()
                        // _this.renderSongInPlayList(songInPlayLists.push(song))
                        // _this.loadCurrentSongInPlayList()
                    }
                }
            }
            // Xử lý next song khi audio ended
            audio.onended = function() {
                if(_this.isRepeat) {
                    audio.play()
                } else {
                    nextSongA.click()
                }
            }
        }

        // khi click add thêm song VN vào PlayList
        playlistVN.onclick = function(e) {
            const songNode = e.target.closest('.song--VN')
            const songAdd = e.target.closest('.container-playlist__song-option--add')
            if(songNode || songAdd){
                if(songNode && !songAdd) {
                    _this.currentIndexSongVN = Number(songNode.dataset.index)
                    _this.loadCurrentSongVN()
                    _this.renderSong()
                    audio.play()

                    // khi next song 
                    nextSongVN.onclick = function() {
                        if(_this.isRandom) {
                            _this.playRandomSongVN()
                        } else {
                            _this.nextSongVN()
                        }
                        audio.play()
                    }

                    // khi prev song 
                    prevSongVN.onclick = function() {
                        if(_this.isRandom) {
                            _this.playRandomSongVN()
                        } else {
                            _this.prevSongA()
                        }
                        audio.play()
                    }
                }
                if(songAdd) {
                    _this.currentIndexSongVN = Number(songNode.dataset.index)
                    const song = _this.currentSongVN
                    var check = songInPlayLists.some(function(events) {
                        return events.name === song.name && events.singer === song.singer
                    })    
                    if(check === true) {
                        alert('This song has been on the list, please add another song')
                    } else {
                        // if(songInPlayLists.length !== 0) {
                        //     _this.renderSongInPlayList()
                        // } else {
                        //     _this.renderSong(songInPlayLists.push(song))
                        // }
                        // _this.renderSongInPlayList(songInPlayLists.push(song))
                        _this.renderSong(songInPlayLists.push(song))
                        // _this.renderSongInPlayList()
                        // _this.loadCurrentSongInPlayList()
                    }
                }
            }
            // Xử lý next song khi audio ended
            audio.onended = function() {
                if(_this.isRepeat) {
                    audio.play()
                } else {
                    nextSongVN.click()
                }
            }
        }

        playlist.onclick = function(e) {
            const songNodeNoActive = e.target.closest('.song:not(.song-active)')
            const songNode = e.target.closest('.song-active')
            const songRemove = e.target.closest('.song-option--remove')
            if(songNodeNoActive || songRemove || songNode){
                if(songNodeNoActive && !songRemove) {
                    _this.currentIndexSongInPlayList = Number(songNodeNoActive.dataset.index)
                    _this.loadCurrentSongInPlayList()
                    audio.play()
                    _this.renderSongInPlayList()
                }
                if(songRemove) {
                    if(songNode) {
                        _this.currentIndexSongInPlayList = Number(songNode.dataset.index)
                        _this.renderSong(songInPlayLists.splice(_this.currentIndexSongInPlayList, 1))
                        _this.renderSongInPlayList() 
                        _this.loadCurrentSongInPlayList()
                        audio.play()
                    } else if(songNodeNoActive) {
                        _this.currentIndexSongInPlayList = Number(songNodeNoActive.dataset.index)
                        _this.renderSong(songInPlayLists.splice(_this.currentIndexSongInPlayList, 1))
                    }
                }
            }

            // khi next song 
            nextSongInPlayList.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSongInPlayList()
                } else {
                    _this.nextSongInPlayList()
                }
                audio.play()
                _this.renderSongInPlayList()
                _this.scrollToActiveSong()
            }

            // khi prev song 
            prevSongInPlayList.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSongInPlayList()
                } else {
                    _this.prevSongInPlayList()
                }
                audio.play()
                _this.renderSongInPlayList()
                _this.scrollToActiveSong()
            }

            // Xử lý next song khi audio ended
            audio.onended = function() {
                if(_this.isRepeat) {
                    audio.play()
                } else {
                    nextSongInPlayList.click()
                }
            }
        }
    },

    displayTime: function() {
        setInterval(() => {
            const minutes = Math.floor(audio.currentTime / 60)
            const seconds = Math.floor(audio.currentTime - minutes * 60);
            current.textContent = `${minutes}:${seconds}`;
        }, 500)
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song-active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        }, 400)
    },

    loadCurrentSongA: function() {
        heading.textContent = this.currentSongA.name
        cdThumb.style.backgroundImage = `url('${this.currentSongA.image}')`
        duration.textContent = this.currentSongA.duration
        audio.src = this.currentSongA.path
    },

    loadCurrentSongVN: function() {
        heading.textContent = this.currentSongVN.name
        cdThumb.style.backgroundImage = `url('${this.currentSongVN.image}')`
        duration.textContent = this.currentSongVN.duration
        audio.src = this.currentSongVN.path
    },

    loadCurrentSongInPlayList: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        duration.textContent = this.currentSong.duration
        audio.src = this.currentSong.path
    },

    // chỉ next phần tử trong array listsongA
    nextSongA: function() {
        this.currentIndexSongA++
        if(this.currentIndexSongA >= this.listsongA.length) {
            this.currentIndexSongA = 0
        }
        this.loadCurrentSongA()
    },

    // chỉ prev phần tử trong array listsongA
    prevSongA: function() {
        this.currentIndexSongA--
        if(this.currentIndexSongA < 0) {
            this.currentIndexSongA = this.listsongA.length - 1
        }
        this.loadCurrentSongA()
    },

    // chỉ next phần tử trong array listsongVN
    nextSongVN: function() {
        this.currentIndexSongVN++
        if(this.currentIndexSongVN >= this.listsongVN.length) {
            this.currentIndexSongVN = 0
        }
        this.loadCurrentSongVN()
    },

    // chỉ prev phần tử trong array listsongVN
    prevSongVN: function() {
        this.currentIndexSongVN--
        if(this.currentIndexSongVN < 0) {
            this.currentIndexSongVN = this.listsongVN.length - 1
        }
        this.loadCurrentSongVN()
    },

    // chỉ next phần tử trong Play List
    nextSongInPlayList: function() {
        this.currentIndexSongInPlayList++
        if(this.currentIndexSongInPlayList >= this.songInPlayLists.length) {
            this.currentIndexSongInPlayList = 0
        }
        this.loadCurrentSongInPlayList()
    },

    // chỉ prev phần tử trong Play List
    prevSongInPlayList: function() {
        this.currentIndexSongInPlayList--
        if(this.currentIndexSongInPlayList < 0) {
            this.currentIndexSongInPlayList = this.songInPlayLists.length - 1
        }
        this.loadCurrentSongInPlayList()
    },

    // Chỉ Ramdom song trong listSongA
    playRandomSongA: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.listsongA.length)
        } while (newIndex === this.currentIndexSongA)
        this.currentIndexSongA = newIndex
        this.loadCurrentSongA()
    },

    // Chỉ Ramdom song trong listSongVN
    playRandomSongVN: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.listsongVN.length)
        } while (newIndex === this.currentIndexSongVN)
        this.currentIndexSongVN = newIndex
        this.loadCurrentSongVN()
    },

    // Chỉ Ramdom song trong PlayList
    playRandomSongInPlayList: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songInPlayLists.length)
        } while (newIndex === this.currentIndexSongInPlayList)
        this.currentIndexSongInPlayList = newIndex
        this.loadCurrentSongInPlayList()
    },

    start: function() {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents()

        // Load thời gian của song khi được play
        this.displayTime()

        // Tải thông tin bài hát đầu tiên trong Play List vào UI 
        if(songInPlayLists.length !== 0) {
            this.loadCurrentSongInPlayList()
        }

        // Render bài hát
        this.renderSongAmerican()
        this.renderSongVN()
        this.renderSongInPlayList()
    }
}

app.start()