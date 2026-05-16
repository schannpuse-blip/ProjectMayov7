document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = Math.floor(Math.random() * slides.length);

  slides[current].classList.add("active");

  function nextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(nextSlide, 3000);
  console.log(slides.length);
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("warningModal");
  const cancelBtn = document.getElementById("cancelBtn");
  const confirmBtn = document.getElementById("confirmBtn");

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal (Cancel)
  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Confirm button (you can redirect here if needed)
  confirmBtn.addEventListener("click", () => {
    modal.style.display = "none";
    // Example action:
    // window.location.href = "nextpage.html";
  });

  // Optional: click outside modal to close
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Handle navbar link scroll with navbar height offset
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition - navbarHeight - 20,
          behavior: "smooth"
        });
      }
    });
  });
});

// Handle roses section reveal on button click
document.addEventListener("DOMContentLoaded", () => {
  let currentRoseIndex = 0;
  const roseSectionIds = [
    "roses", "roses2", "roses3", "roses4", "roses5", 
    "roses6", "roses7", "roses8", "roses9", "roses10", 
    "roses11", "roses12", "roses13", "roses14", "roses15", 
    "roses16", "roses17", "roses18"
  ];

  const nextrosesContainer = document.getElementById("nextroses");
  const startButton = document.querySelector(".nextrosescont button");
  
  if (startButton) {
    startButton.addEventListener("click", () => {
      // Show next rose section
      if (currentRoseIndex < roseSectionIds.length) {
        const nextSection = document.getElementById(roseSectionIds[currentRoseIndex]);
        if (nextSection) {
          nextSection.classList.add("active");
          
          const dropdown = nextSection.querySelector('.dropdown');
          if (dropdown) {
            openDropdown(dropdown);
          }
          
          // Move the button container after the newly displayed rose
          nextSection.parentNode.insertBefore(nextrosesContainer, nextSection.nextSibling);
          
          // Scroll to the new section with offset for navbar
          setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight - 20,
              behavior: "smooth"
            });
          }, 100);
          
          currentRoseIndex++;
        }
      }

      // Change button text after first click
      if (currentRoseIndex === 1) {
        startButton.textContent = "Next Rose";
        
        // Show "Roses" link in navbar
        const rosesLink = document.querySelector("a[href='#roses']");
        if (rosesLink) {
          rosesLink.classList.add("visible");
        }
      }

      // Disable button when all roses are shown
      if (currentRoseIndex >= roseSectionIds.length) {
        // Hide the nextroses button
        if (nextrosesContainer) {
          nextrosesContainer.style.display = "none";
        }
        
        // Reveal the details section after the last rose
        const detailsSection = document.getElementById("details");
        if (detailsSection) {
          detailsSection.classList.add("active");
        }
        
        // Show the nextcandles button
        const nextcandlesContainer = document.getElementById("nextcandles");
        if (nextcandlesContainer) {
          nextcandlesContainer.classList.add("active");
        }
      }
    });
  }
});

// Handle candles section reveal on button click
document.addEventListener("DOMContentLoaded", () => {
  let currentCandleIndex = 0;
  const candleSectionIds = [
    "candles", "candles2", "candles3", "candles4", "candles5", 
    "candles6", "candles7", "candles8", "candles9", "candles10", 
    "candles11", "candles12", "candles13", "candles14", "candles15", 
    "candles16", "candles17", "candles18"
  ];

  const nextcandlesContainer = document.getElementById("nextcandles");
  const startButton = document.querySelector(".nextcandlescont button");
  
  if (startButton) {
    startButton.addEventListener("click", () => {
      // Show next candle section
      if (currentCandleIndex < candleSectionIds.length) {
        const nextSection = document.getElementById(candleSectionIds[currentCandleIndex]);
        if (nextSection) {
          nextSection.classList.add("active");
          
          const dropdown = nextSection.querySelector('.dropdown');
          if (dropdown) {
            openDropdown(dropdown);
          }
          
          // Move the button container after the newly displayed candle
          nextSection.parentNode.insertBefore(nextcandlesContainer, nextSection.nextSibling);
          
          // Scroll to the new section with offset for navbar
          setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const elementPosition = nextSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight - 20,
              behavior: "smooth"
            });
          }, 100);
          
          currentCandleIndex++;
        }
      }

      // Change button text after first click
      if (currentCandleIndex === 1) {
        startButton.textContent = "Next Candle";
        
        // Show "Candles" link in navbar
        const candlesLink = document.querySelector("a[href='#candles']");
        if (candlesLink) {
          candlesLink.classList.add("visible");
        }
      }

      // Disable button when all candles are shown
      if (currentCandleIndex >= candleSectionIds.length) {
        // Hide the nextcandles button
        if (nextcandlesContainer) {
          nextcandlesContainer.style.display = "none";
        }
        
        // Show message and continue sections
        const messageSection = document.getElementById("message");
        const continueSection = document.getElementById("continue");
        if (messageSection) messageSection.classList.add("active");
        if (continueSection) continueSection.classList.add("active");
        
        // Show "Message" link in navbar
        const messageLink = document.querySelector("a[href='#message']");
        if (messageLink) {
          messageLink.classList.add("visible");
        }
      }
    });
  }
});

function pauseDropdownVideo(dropdown) {
  if (!dropdown) return;

  const customPlayerDiv = dropdown.querySelector('.custom-player');
  if (customPlayerDiv) {
    const playerInfo = players.find(p => p.wrapper && dropdown.contains(p.wrapper));
    if (playerInfo?.player?.pauseVideo) {
      playerInfo.player.pauseVideo();
    }
  }

  const iframe = dropdown.querySelector('iframe');
  if (iframe && iframe.contentWindow) {
    const src = iframe.src || '';
    if (src.includes('vimeo.com')) {
      iframe.contentWindow.postMessage({ method: 'pause' }, '*');
    } else if (src.includes('youtube.com') || src.includes('youtu.be')) {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'pauseVideo',
        args: []
      }), '*');
    } else if (src.includes('dailymotion.com')) {
      iframe.contentWindow.postMessage({ method: 'pause' }, '*');
    }
  }
}

function ensureDailymotionAutoplay(iframe) {
  if (!iframe) return;
  const src = iframe.getAttribute('src') || '';
  if (src.includes('dailymotion.com') && !/autoplay=1/.test(src)) {
    const separator = src.includes('?') ? '&' : '?';
    iframe.src = `${src}${separator}autoplay=1`;
  }
}

function playVideoInDropdown(dropdown) {
  if (!dropdown) return;

  const playerInfo = players.find(p => p.wrapper && dropdown.contains(p.wrapper));
  if (playerInfo?.player?.playVideo) {
    playerInfo.player.playVideo();
  }

  const iframe = dropdown.querySelector('iframe');
  if (iframe) {
    ensureDailymotionAutoplay(iframe);
    try {
      iframe.contentWindow.postMessage({ method: 'play' }, '*');
    } catch (error) {
      // ignore if browser blocks postMessage when not supported
    }
  }
}

function openDropdown(dropdown) {
  if (!dropdown) return;
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(d => {
    if (d !== dropdown) {
      d.classList.remove('active');
      pauseDropdownVideo(d);
    }
  });
  dropdown.classList.add('active');
  playVideoInDropdown(dropdown);
}

function closeDropdown(dropdown) {
  if (!dropdown) return;
  dropdown.classList.remove('active');
  pauseDropdownVideo(dropdown);
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('button');
    if (button) {
      button.addEventListener('click', event => {
        event.stopPropagation();
        const isActive = dropdown.classList.contains('active');
        if (isActive) {
          closeDropdown(dropdown);
        } else {
          openDropdown(dropdown);
        }
      });
    }
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('active')) {
          closeDropdown(dropdown);
        }
      });
    }
  });
});

let myVideo = document.querySelector("my-video");
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}

// YouTube IFrame API variables and initialization
let players = [];
let playerIdCounter = 0;

function onYouTubeIframeAPIReady() {
  const playerDivs = document.querySelectorAll('.custom-player');
  
  playerDivs.forEach((div, index) => {
    const videoId = div.dataset.videoId;
    const playerId = `player-${playerIdCounter++}`;
    div.id = playerId;
    
    const player = new YT.Player(playerId, {
      width: '100%',
      height: '100%',
      videoId: videoId,
      playerVars: {
        'controls': 0,
        'modestbranding': 1,
        'rel': 0,
        'fs': 0,
        'showinfo': 0,
        'autoplay': 0
      },
      events: {
        'onReady': onPlayerReady
      }
    });
    
    players.push({
      player: player,
      playerId: playerId,
      wrapper: div.closest('.video-wrapper')
    });
  });
}

function onPlayerReady(event) {
  const player = event.target;
  const playerDiv = player.getIframe().parentElement;
  const wrapper = playerDiv.closest('.video-wrapper');
  
  // Add custom controls
  const controls = document.createElement('div');
  controls.className = 'player-controls';
  
  const playPauseBtn = document.createElement('button');
  playPauseBtn.innerHTML = '▶️';
  playPauseBtn.title = 'Play/Pause';
  playPauseBtn.addEventListener('click', () => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
      playPauseBtn.innerHTML = '▶️';
    } else {
      player.playVideo();
      playPauseBtn.innerHTML = '⏸️';
    }
  });
  
  const fullscreenBtn = document.createElement('button');
  fullscreenBtn.innerHTML = '🔲';
  fullscreenBtn.title = 'Fullscreen';
  fullscreenBtn.addEventListener('click', () => {
    wrapper.classList.toggle('fullscreen');
    if (wrapper.classList.contains('fullscreen')) {
      fullscreenBtn.innerHTML = '🔻';
    } else {
      fullscreenBtn.innerHTML = '🔲';
    }
  });
  
  controls.appendChild(playPauseBtn);
  controls.appendChild(fullscreenBtn);
  
  playerDiv.appendChild(controls);

  const dropdown = wrapper.closest('.dropdown');
  if (dropdown && dropdown.classList.contains('active')) {
    player.playVideo();
  }
}

function fullSize() {
  myVideo.width = "";
}
function normalSize() {
  myVideo.width = "";
}

