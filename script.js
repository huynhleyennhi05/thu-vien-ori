/**
 * Ori Interactive Library - Logic
 */

const libraryData = [
  {
    id: 1,
    title: "Tiếng Vọng Từ Spirit Tree",
    author: "Nibel Guardian",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Khám phá bí mật ẩn giấu sau những rễ cây cổ thụ của khu rừng Nibel, nơi ánh sáng và bóng tối giao thoa.",
    content: [
      "Tại trung tâm của Nibel, Cây Tinh Linh (Spirit Tree) tỏa sáng rực rỡ khắp khu rừng.",
      "Mỗi chiếc lá là một linh hồn, mỗi cơn gió là một lời thì thầm của quá khứ.",
      "Khi bóng tối bao trùm, một linh hồn nhỏ bé mang hình hài ánh sáng đã bắt đầu cuộc hành trình của mình.",
      "Ori không đơn độc. Sein luôn bên cạnh, dẫn lối qua những mê cung gai góc.",
      "Hãy lắng nghe nhịp đập của khu rừng. Đó là bài ca về sự hy vọng và hy sinh."
    ]
  },
  {
    id: 2,
    title: "Màn Sương Núi Horu",
    author: "Kuro's Shadow",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Hành trình chinh phục đỉnh núi lửa Horu, nơi ngọn lửa đỏ rực luôn rình rập thiêu rụi mọi hy vọng.",
    content: [
      "Horu rực cháy trong cơn giận dữ của mẹ Kuro.",
      "Không khí đặc quánh tro bụi và hơi nóng từ dung nham.",
      "Mỗi bước nhảy của Ori trên những mỏm đá chông chênh là một lần đối mặt với tử thần.",
      "Nhưng tình yêu dành cho Naru đã tiếp thêm sức mạnh cho trái tim bé nhỏ ấy.",
      "Cuối cùng, ngọn lửa sẽ lùi bước trước ánh sáng thuần khiết nhất."
    ]
  },
  {
    id: 3,
    title: "Hạt Giống Của Ginso",
    author: "Gumo the Engineer",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Cùng Gumo sửa chữa những dòng nước tinh khiết chảy qua thác nước Ginso thần thánh.",
    content: [
      "Thác nước Ginso đã cạn kiệt. Sự sống đang héo úa trong lòng đại ngàn.",
      "Gumo lặng lẽ quan sát từ trong bóng tối của hang động.",
      "Bàn tay khéo léo của người thợ máy Gumo đang hồi sinh những bánh răng cổ đại.",
      "Nước sẽ lại chảy, và khúc nhạc của sự sống sẽ lại vang lên.",
      "Sự đoàn kết giữa các linh hồn là chìa khóa để cứu lấy thế giới này."
    ]
  },
  {
    id: 4,
    title: "Hào Quang Của Kwolok",
    author: "Luma Creator",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Khám phá vùng đầm lầy Kwolok, nơi những sinh vật khổng lồ hiền lành đang đối mặt với sự tha hóa của hư vô.",
    content: [
      "Kwolok, vị thần của đầm lầy, đang lặng lẽ quan sát những kẻ xâm lăng.",
      "Sự tha hóa đang nhuộm đen những dòng nước xanh biếc.",
      "Ori phải tìm lại được Hào Quang đã mất để thanh tẩy vùng đất này.",
      "Mỗi linh hồn nhỏ bé đều có thể xoay chuyển vận mệnh của cả một thế giới.",
      "Hãy tin vào ánh sáng bên trong mình."
    ]
  },
  {
    id: 5,
    title: "Cơn Gió Lir",
    author: "Taur Wanderer",
    image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Bay lượn trên những luồng gió của đỉnh núi Lir, học cách làm chủ bầu trời.",
    content: [
      "Gió thổi mạnh qua những vách đá sắc lẹm của đỉnh Lir.",
      "Đôi cánh lông vũ trắng tinh khôi của Ori đang dang rộng.",
      "Học cách lướt trên những dòng khí nóng để đạt tới độ cao không tưởng.",
      "Bầu trời không có giới hạn cho những ai dám mơ ước.",
      "Nhìn xuống từ trên cao, thế giới bỗng trở nên nhỏ bé và bình yên lạ thường."
    ]
  },
  {
    id: 6,
    title: "Ký Ức Của Seir",
    author: "Moki Friend",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=300&h=400",
    desc: "Hành trình tìm lại những mảnh vỡ ký ức của Seir để hồi sinh Spirit Willow thần thánh.",
    content: [
      "Seir, ý chí của những đốm sáng, đã vỡ thành năm mảnh.",
      "Chúng rải rác khắp vùng đất Niwen rộng lớn.",
      "Mỗi mảnh vỡ chứa đựng một phần linh hồn của thế giới.",
      "Moki nhỏ bé luôn là người bạn đồng hành đáng tin cậy.",
      "Hãy thắp sáng lại tương lai từ chính những mảnh vỡ của quá khứ."
    ]
  }
];

let activeStory = null;
let synth = window.speechSynthesis;
let currentUtterance = null;
let isPlaying = false;
let currentParaIdx = 0;

// Elements
const grid = document.getElementById('library-grid');
const modal = document.getElementById('reader-modal');
const mouseGlow = document.getElementById('mouse-glow');
const particlesContainer = document.getElementById('particles-container');

const LOCAL_STORAGE_KEY = 'ori_library_data';

// Initialization
function init() {
  loadFromStorage();
  renderLibrary();
  createParticles();
  setupMouseTracking();
  setupEventListeners();
}

function loadFromStorage() {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Deep copy properties but keep initial objects if needed
        // For this app, simply replacing libraryData is enough
        libraryData.length = 0;
        libraryData.push(...parsed);
      }
    } catch (e) {
      console.error("Failed to load library from storage", e);
    }
  }
}

function saveToStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(libraryData));
}

function handleSearch(query) {
  const searchTerm = query.toLowerCase().trim();
  const filtered = libraryData.filter(story => 
    story.title.toLowerCase().includes(searchTerm) || 
    story.author.toLowerCase().includes(searchTerm)
  );
  renderLibrary(filtered);
}

function renderLibrary(filteredData = null) {
  const dataToRender = filteredData || libraryData;
  
  if (dataToRender.length === 0) {
    grid.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 4rem; opacity: 0.6;">
            <i class="fas fa-leaf" style="font-size: 3rem; margin-bottom: 1rem; color: var(--emerald);"></i>
            <p>Khu rừng im lặng... Không tìm thấy câu chuyện bạn yêu cầu.</p>
        </div>
    `;
    return;
  }

  grid.innerHTML = dataToRender.map(story => `
    <div class="story-card">
      <div class="card-img-container" onclick="openReader(${story.id})">
        <img src="${story.image}" alt="${story.title}">
      </div>
      <div class="card-info" onclick="openReader(${story.id})">
        <h3 class="card-title">${story.title}</h3>
        <p class="card-author">${story.author}</p>
      </div>
      <button class="edit-btn-mini" onclick="openEditModal(${story.id})" title="Sửa nội dung">
        <i class="fas fa-edit"></i>
      </button>
    </div>
  `).join('');
}

// Mouse Glow Tracking
function setupMouseTracking() {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
}

// Particle Generation
function createParticles() {
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.animationDuration = `${Math.random() * 15 + 10}s`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    p.style.opacity = Math.random() * 0.4 + 0.1;
    particlesContainer.appendChild(p);
  }
}

let editingId = null;

// Modal / Reader Controls
function openReader(id) {
  activeStory = libraryData.find(s => s.id === id);
  if (!activeStory) return;

  document.getElementById('modal-title').textContent = activeStory.title;
  document.getElementById('modal-author').textContent = activeStory.author;
  document.getElementById('modal-desc').textContent = activeStory.desc;
  document.getElementById('modal-image').style.backgroundImage = `url(${activeStory.image})`;
  
  // Reset reader
  document.getElementById('reader-view').classList.add('hidden');
  document.getElementById('start-read-btn').classList.remove('hidden');
  
  modal.classList.remove('hidden');
}

function closeReader() {
  stopReading();
  modal.classList.add('hidden');
}

function startAIRead() {
  document.getElementById('start-read-btn').classList.add('hidden');
  document.getElementById('reader-view').classList.remove('hidden');
  
  const contentEl = document.getElementById('reader-content');
  contentEl.innerHTML = activeStory.content.map((p, i) => `<p id="p-${i}">${p}</p>`).join('');
  
  currentParaIdx = 0;
  isPlaying = true;
  readParagraph(0);
}

function readParagraph(idx) {
  if (idx >= activeStory.content.length) {
    stopReading();
    return;
  }

  currentParaIdx = idx;
  highlightParagraph(idx);
  
  // Progress bar
  const progress = ((idx + 1) / activeStory.content.length) * 100;
  document.getElementById('progress-indicator').style.width = `${progress}%`;

  const text = activeStory.content[idx];
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = 'vi-VN'; // Vietnamese
  currentUtterance.rate = 1;

  currentUtterance.onend = () => {
    if (isPlaying) {
      setTimeout(() => readParagraph(currentParaIdx + 1), 800);
    }
  };

  synth.speak(currentUtterance);
}

function highlightParagraph(idx) {
  const allP = document.querySelectorAll('.reader-content p');
  allP.forEach(p => p.classList.remove('active'));
  
  const target = document.getElementById(`p-${idx}`);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function togglePlayPause() {
  const btn = document.getElementById('pause-resume');
  const icon = btn.querySelector('i');
  
  if (isPlaying) {
    synth.pause();
    isPlaying = false;
    icon.className = 'fas fa-play';
  } else {
    if (synth.paused) {
      synth.resume();
    } else {
      readParagraph(currentParaIdx);
    }
    isPlaying = true;
    icon.className = 'fas fa-pause';
  }
}

function stopReading() {
  synth.cancel();
  isPlaying = false;
  currentParaIdx = 0;
}

function setupEventListeners() {
  document.getElementById('start-read-btn').addEventListener('click', startAIRead);
  document.getElementById('pause-resume').addEventListener('click', togglePlayPause);
  
  // Add/Edit Story Form
  document.getElementById('add-story-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const storyInfo = {
      title: document.getElementById('form-title').value,
      author: document.getElementById('form-author').value,
      image: document.getElementById('form-image').value,
      desc: document.getElementById('form-desc').value,
      content: document.getElementById('form-content').value.split('\n').filter(p => p.trim() !== "")
    };

    if (editingId) {
      // Update
      const idx = libraryData.findIndex(s => s.id === editingId);
      if (idx !== -1) {
        libraryData[idx] = { ...libraryData[idx], ...storyInfo };
      }
    } else {
      // Create
      libraryData.push({ id: Date.now(), ...storyInfo });
    }
    
    saveToStorage();
    renderLibrary();
    closeAddModal();
    e.target.reset();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeReader();
        closeAddModal();
    }
  });
}

// Add Modal Functions
function openAddModal() {
  editingId = null;
  document.querySelector('#add-modal .glow-text').textContent = 'Gieo Hạt Giống Mới';
  document.querySelector('#add-modal .glow-button i').className = 'fas fa-leaf';
  document.querySelector('#add-modal .glow-button span').textContent = ' Gửi vào Spirit Tree';
  document.getElementById('add-story-form').reset();
  document.getElementById('add-modal').classList.remove('hidden');
}

function openEditModal(id) {
  const story = libraryData.find(s => s.id === id);
  if (!story) return;

  editingId = id;
  document.querySelector('#add-modal .glow-text').textContent = 'Chạm Vào Cội Nguồn';
  document.querySelector('#add-modal .glow-button i').className = 'fas fa-save';
  document.querySelector('#add-modal .glow-button span').textContent = ' Cập nhật linh hồn';

  document.getElementById('form-title').value = story.title;
  document.getElementById('form-author').value = story.author;
  document.getElementById('form-image').value = story.image;
  document.getElementById('form-desc').value = story.desc;
  document.getElementById('form-content').value = story.content.join('\n');

  document.getElementById('add-modal').classList.remove('hidden');
}

function closeAddModal() {
  document.getElementById('add-modal').classList.add('hidden');
}

init();
window.closeReader = closeReader; // Expose to HTML
window.openAddModal = openAddModal;
window.closeAddModal = closeAddModal;
window.openEditModal = openEditModal;
