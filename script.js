// Массив с фильмами
const videos = [
    {
        id: 1,
        title: "Ип Ман",
        description: "История легендарного мастера боевых искусств вин-чун, который обучал самого Брюса Ли. Фильм о чести, достоинстве и борьбе за справедливость во время японской оккупации.",
        year: 2008,
        duration: "1ч 48м",
        country: "Гонконг",
        rating: 8.0,
        genre: ["Боевик", "Драма", "Биография"],
        embedCode: `<iframe src="https://vkvideo.ru/video_ext.php?oid=-220018529&id=456244508&hash=7bbfc22990f4fd9c&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`,
        preview: "https://blog.okko.tv/imgs/2023/09/08/13/6132684/cab7e4ae28a5c75367cccfbded7025d6c62de6aa.jpg"
    },
    {
        id: 2,
        title: "Ип Ман 2",
        description: "Продолжение истории мастера вин-чун. Ип Ман переезжает в Гонконг, где вынужден защищать честь китайских боевых искусств от западных боксеров и местных бандитов.",
        year: 2010,
        duration: "1ч 48м",
        country: "Гонконг",
        rating: 7.6,
        genre: ["Боевик", "Драма", "Биография"],
        embedCode: `<iframe src="https://vkvideo.ru/video_ext.php?oid=-215394060&id=456239164&hash=d26f2b41433b78e7&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`,
        preview: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/yip_man_2.jpg"
    },
    {
        id: 3,
        title: "Ип Ман 3",
        description: "Третья часть саги о легендарном мастере. Ип Ман сталкивается с новым сильным противником и должен защитить школу от бандитов, одновременно борясь с личной трагедией.",
        year: 2015,
        duration: "1ч 45м",
        country: "Гонконг",
        rating: 7.1,
        genre: ["Боевик", "Драма"],
        embedCode: `<iframe src="https://vkvideo.ru/video_ext.php?oid=-209477587&id=456243273&hash=63f1b458fd8b5573&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`,
        preview: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/ip-man-3.jpg"
    },
    {
        id: 4,
        title: "Ип Ман 4: Финал",
        description: "Заключительная часть эпопеи. Ип Ман отправляется в США, где его ученик сталкивается с дискриминацией, а сам мастер должен доказать превосходство китайских боевых искусств.",
        year: 2019,
        duration: "1ч 47м",
        country: "Гонконг",
        rating: 7.0,
        genre: ["Боевик", "Драма"],
        embedCode: `<iframe src="https://vkvideo.ru/video_ext.php?oid=-232881785&id=456239035&hash=5e86daf18c345246&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`,
        preview: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/yip-man-4.jpg"
    },
    {
        id: 5,
        title: "Тройной форсаж: Токийский дрифт",
        description: "Молодой гонщик отправляется в Токио, чтобы избежать тюрьмы, и попадает в мир подпольных дрэг-рейсинга, где сталкивается с лучшими уличными гонщиками Японии.",
        year: 2006,
        duration: "1ч 44м",
        country: "США, Германия, Япония",
        rating: 6.0,
        genre: ["Боевик", "Триллер", "Криминал"],
        embedCode: `<iframe src="https://vkvideo.ru/video_ext.php?oid=-231729433&id=456239487&hash=8aa725655de0accf&hd=3" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`,
        preview: "https://avatars.mds.yandex.net/get-vertis-journal/4080458/2019-05-13-86b58ee2ac5f40549b04f959d95a5132.jpg_1622735738971/orig"
    }
];

// Элементы страницы
const videoList = document.getElementById('videoList');
const playerContainer = document.getElementById('playerContainer');
const player = document.getElementById('player');
const closePlayer = document.getElementById('closePlayer');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const cinemoMessage = document.getElementById('cinemoMessage');
const moviesCount = document.getElementById('moviesCount');

// Показ списка фильмов
function renderVideoList(filter = '') {
    videoList.innerHTML = '';
    moviesCount.textContent = videos.length;
    
    let filteredVideos = videos;
    if (filter) {
        const searchLower = filter.toLowerCase();
        filteredVideos = videos.filter(video => 
            video.title.toLowerCase().includes(searchLower) ||
            video.description.toLowerCase().includes(searchLower) ||
            video.genre.some(g => g.toLowerCase().includes(searchLower))
        );
    }
    
    if (filteredVideos.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.dataset.id = video.id;
        
        const metaTags = `
            <span class="meta-item year">${video.year}</span>
            <span class="meta-item rating">⭐ ${video.rating}/10</span>
            <span class="meta-item country">${video.country}</span>
            <span class="meta-item duration">${video.duration}</span>
        `;
        
        videoItem.innerHTML = `
            <img src="${video.preview}" alt="${video.title}" class="video-preview">
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
                <div class="video-meta">
                    ${metaTags}
                </div>
                <div class="video-actions">
                    <button class="play-btn" data-id="${video.id}">
                        <i class="fas fa-play"></i> Смотреть
                    </button>
                    <div class="vk-badge">
                        <i class="fab fa-vk"></i> VK Video
                    </div>
                </div>
            </div>
        `;
        
        videoList.appendChild(videoItem);
    });
    
    setupEventListeners();
}

// Воспроизведение видео
function playVideo(videoId) {
    const selectedVideo = videos.find(v => v.id === videoId);
    if (!selectedVideo) return;
    
    player.innerHTML = '';
    cinemoMessage.classList.add('show');
    player.innerHTML = selectedVideo.embedCode;
    playerContainer.classList.add('active');
    
    setTimeout(() => {
        playerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Закрытие плеера
function closeVideoPlayer() {
    playerContainer.classList.remove('active');
    cinemoMessage.classList.remove('show');
    player.innerHTML = '';
}

// Обработчики событий
function setupEventListeners() {
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const videoId = parseInt(this.dataset.id);
            playVideo(videoId);
        });
    });
    
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (!e.target.classList.contains('play-btn') && 
                !e.target.closest('.play-btn')) {
                const videoId = parseInt(this.dataset.id);
                playVideo(videoId);
            }
        });
    });
}

// Поиск
function performSearch() {
    const searchTerm = searchInput.value.trim();
    renderVideoList(searchTerm);
}

// Управление клавишами
function handleKeyControls(e) {
    if (e.code === 'KeyF' && playerContainer.classList.contains('active')) {
        e.preventDefault();
        const iframe = player.querySelector('iframe');
        if (iframe && iframe.requestFullscreen) {
            iframe.requestFullscreen();
        }
    }
    
    if (e.code === 'Escape' && playerContainer.classList.contains('active') && !document.fullscreenElement) {
        closeVideoPlayer();
    }
}

// Запуск приложения
function initApp() {
    renderVideoList();
    closePlayer.addEventListener('click', closeVideoPlayer);
    searchInput.addEventListener('input', performSearch);
    document.addEventListener('keydown', handleKeyControls);
}

// API для консоли
window.CINEMO = {
    addMovie: function(movieData) {
        const newId = videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1;
        const newMovie = { id: newId, ...movieData };
        videos.push(newMovie);
        renderVideoList(searchInput.value);
        console.log(`🎬 Фильм "${movieData.title}" добавлен!`);
        return newMovie;
    },
    
    getMovies: function() {
        return [...videos];
    },
    
    removeMovie: function(movieId) {
        const index = videos.findIndex(v => v.id === movieId);
        if (index !== -1) {
            const removed = videos.splice(index, 1)[0];
            renderVideoList(searchInput.value);
            console.log(`🗑️ Фильм "${removed.title}" удален`);
            return removed;
        }
        return null;
    },
    
    findMovie: function(searchTerm) {
        const term = searchTerm.toLowerCase();
        return videos.filter(video => 
            video.title.toLowerCase().includes(term) ||
            video.description.toLowerCase().includes(term)
        );
    },
    
    updateMovie: function(movieId, updates) {
        const index = videos.findIndex(v => v.id === movieId);
        if (index !== -1) {
            videos[index] = { ...videos[index], ...updates };
            renderVideoList(searchInput.value);
            console.log(`✏️ Фильм "${videos[index].title}" обновлен`);
            return videos[index];
        }
        return null;
    },
    
    playMovie: playVideo,
    closePlayer: closeVideoPlayer,
    clearSearch: function() {
        searchInput.value = '';
        renderVideoList();
    }
};

// Запуск
document.addEventListener('DOMContentLoaded', initApp);