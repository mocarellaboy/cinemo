// ===== КОНФИГУРАЦИЯ =====
const CONFIG = {
    itemsPerPage: 4
};

// ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
let videos = [
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
        videoUrl: "https://vkvideo.ru/video_ext.php?oid=-220018529&id=456244508&hash=7bbfc22990f4fd9c&hd=3",
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
        videoUrl: "https://vkvideo.ru/video_ext.php?oid=-215394060&id=456239164&hash=d26f2b41433b78e7&hd=3",
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
        videoUrl: "https://vkvideo.ru/video_ext.php?oid=-209477587&id=456243273&hash=63f1b458fd8b5573&hd=3",
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
        videoUrl: "https://vkvideo.ru/video_ext.php?oid=-232881785&id=456239035&hash=5e86daf18c345246&hd=3",
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
        videoUrl: "https://vkvideo.ru/video_ext.php?oid=-231729433&id=456239487&hash=8aa725655de0accf&hd=3",
        preview: "https://avatars.mds.yandex.net/get-vertis-journal/4080458/2019-05-13-86b58ee2ac5f40549b04f959d95a5132.jpg_1622735738971/orig"
    }
];

let currentPage = 1;
let currentMovies = [...videos];

// ===== ЭЛЕМЕНТЫ СТРАНИЦЫ =====
const videoList = document.getElementById('videoList');
const playerContainer = document.getElementById('playerContainer');
const player = document.getElementById('player');
const closePlayer = document.getElementById('closePlayer');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const cinemoMessage = document.getElementById('cinemoMessage');
const moviesCount = document.getElementById('moviesCount');
const themeSwitcher = document.getElementById('themeSwitcher');
const themeLabel = document.getElementById('themeLabel');
const currentCount = document.getElementById('currentCount');
const totalCount = document.getElementById('totalCount');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumbers = document.getElementById('pageNumbers');

// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ (ИЗ СТАРОГО РАБОЧЕГО КОДА) =====
function initThemeSwitcher() {
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('cinemo-theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeLabel(savedTheme);
    } else {
        // По умолчанию темная тема
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeLabel('dark');
    }
    
    // Обработчик клика
    themeSwitcher.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('cinemo-theme', newTheme);
        updateThemeLabel(newTheme);
    });
}

function updateThemeLabel(theme) {
    if (themeLabel) {
        themeLabel.textContent = theme === 'dark' ? 'Темная' : 'Светлая';
    }
}

// ===== БЕЗОПАСНАЯ ЗАГРУЗКА ВИДЕО =====
function playVideo(videoId) {
    const selectedVideo = videos.find(v => v.id === videoId);
    if (!selectedVideo) return;

    player.innerHTML = '';
    cinemoMessage.classList.add('show');
    
    // БЕЗОПАСНОЕ СОЗДАНИЕ IFRAME (исправление XSS)
    const iframe = document.createElement('iframe');
    iframe.width = "1280";
    iframe.height = "720";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock";
    iframe.allowFullscreen = true;
    
    // Валидация URL - принимаем только vkvideo.ru
    const videoUrl = selectedVideo.videoUrl || extractUrlFromEmbed(selectedVideo.embedCode);
    
    if (videoUrl && videoUrl.includes('vkvideo.ru')) {
        iframe.src = videoUrl;
        player.appendChild(iframe);
        playerContainer.classList.add('active');
        
        setTimeout(() => {
            playerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        console.error("Недоверенный или неверный URL видео");
        alert("Ошибка загрузки видео. URL должен быть с vkvideo.ru");
    }
}

function extractUrlFromEmbed(embedCode) {
    const srcMatch = embedCode.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : null;
}

// ===== ПАГИНАЦИЯ =====
function updatePagination() {
    const totalPages = Math.ceil(currentMovies.length / CONFIG.itemsPerPage);
    const startIndex = (currentPage - 1) * CONFIG.itemsPerPage;
    const endIndex = Math.min(startIndex + CONFIG.itemsPerPage, currentMovies.length);
    const pageMovies = currentMovies.slice(startIndex, endIndex);
    
    // Обновление счетчиков
    currentCount.textContent = currentMovies.length > 0 ? `${startIndex + 1}-${endIndex}` : '0';
    totalCount.textContent = currentMovies.length;
    moviesCount.textContent = currentMovies.length;
    
    // Обновление кнопок навигации
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Обновление номеров страниц
    renderPageNumbers(totalPages);
    
    // Рендер фильмов для текущей страницы
    renderVideoList(pageMovies);
    
    // Показ/скрытие состояния "пусто"
    emptyState.style.display = currentMovies.length === 0 ? 'block' : 'none';
}

function renderPageNumbers(totalPages) {
    pageNumbers.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Кнопка "1" если не видна
    if (startPage > 1) {
        createPageNumber(1);
        if (startPage > 2) createDots();
    }
    
    // Основные номера страниц
    for (let i = startPage; i <= endPage; i++) {
        createPageNumber(i);
    }
    
    // Кнопка последней страницы если не видна
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) createDots();
        createPageNumber(totalPages);
    }
}

function createPageNumber(page) {
    const pageElement = document.createElement('span');
    pageElement.className = 'page-number';
    pageElement.textContent = page;
    pageElement.classList.toggle('active', page === currentPage);
    
    pageElement.addEventListener('click', () => {
        if (page !== currentPage) {
            currentPage = page;
            updatePagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    pageNumbers.appendChild(pageElement);
}

function createDots() {
    const dots = document.createElement('span');
    dots.className = 'page-number dots';
    dots.textContent = '...';
    dots.style.cursor = 'default';
    dots.style.pointerEvents = 'none';
    pageNumbers.appendChild(dots);
}

function goToPage(page) {
    const totalPages = Math.ceil(currentMovies.length / CONFIG.itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    updatePagination();
}

// ===== РЕНДЕР СПИСКА ФИЛЬМОВ =====
function renderVideoList(moviesToRender) {
    videoList.innerHTML = '';
    
    moviesToRender.forEach(video => {
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
            <img src="${video.preview}" alt="${video.title}" class="video-preview" onerror="this.src='https://placehold.co/300x200/1a1a3a/ffffff?text=No+Image'">
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

// ===== ПОИСК И ФИЛЬТРАЦИЯ =====
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    currentPage = 1;
    
    if (searchTerm) {
        currentMovies = videos.filter(video => 
            video.title.toLowerCase().includes(searchTerm) ||
            video.description.toLowerCase().includes(searchTerm) ||
            (video.genre && video.genre.some(g => g.toLowerCase().includes(searchTerm)))
        );
    } else {
        currentMovies = [...videos];
    }
    
    updatePagination();
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
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

function closeVideoPlayer() {
    playerContainer.classList.remove('active');
    cinemoMessage.classList.remove('show');
    player.innerHTML = '';
}

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

// ===== ИНИЦИАЛИЗАЦИЯ =====
function initApp() {
    updatePagination();
    initThemeSwitcher();
    
    closePlayer.addEventListener('click', closeVideoPlayer);
    searchInput.addEventListener('input', performSearch);
    document.addEventListener('keydown', handleKeyControls);
    
    prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
}

// ===== API ДЛЯ КОНСОЛИ =====
window.CINEMO = {
    addMovie: function(movieData) {
        const newId = videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1;
        const newMovie = {
            id: newId,
            ...movieData,
            embedCode: `<iframe src="${movieData.videoUrl}" width="1280" height="720" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>`
        };
        
        videos.push(newMovie);
        currentMovies = [...videos];
        currentPage = 1;
        updatePagination();
        
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
            currentMovies = [...videos];
            currentPage = 1;
            updatePagination();
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
            currentMovies = [...videos];
            updatePagination();
            console.log(`✏️ Фильм "${videos[index].title}" обновлен`);
            return videos[index];
        }
        return null;
    },
    
    playMovie: playVideo,
    closePlayer: closeVideoPlayer,
    clearSearch: function() {
        searchInput.value = '';
        performSearch();
    },
    
    // Новый метод для переключения темы
    toggleTheme: function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('cinemo-theme', newTheme);
        updateThemeLabel(newTheme);
    },
    
    setTheme: function(theme) {
        if (theme === 'dark' || theme === 'light') {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('cinemo-theme', theme);
            updateThemeLabel(theme);
        }
    },
    
    exportMovies: function() {
        const dataStr = JSON.stringify(videos, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = 'cinemo-movies.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
};

// ===== ЗАПУСК ПРИЛОЖЕНИЯ =====
document.addEventListener('DOMContentLoaded', initApp);
