import './style.css';

const people = [
  {
    user: 'ROX',
    message: 'Llegó la primavera con flores y esplendor, que el amarillo te regale alegría y mucho amor. 💛🌻'
  },
  {
    user: 'CELINA',
    message: 'Llegó la primavera con su flor amarilla, que tu alegría siempre brille, bonita y sencilla. 💛🌼'
  },
  {
    user: 'KIARIS',
    message: 'Primavera llegó vestida de amarillo, que nunca falte en tu día un momento bonito. 🌻💛'
  },
  {
    user: 'ROLIS',
    message: 'Llegaron las flores anunciando primavera, que tu sonrisa florezca feliz y duradera. 🌼😊'
  },
  {
    user: 'MARJORIE',
    message: 'Llegó la primavera cantando su canción, con flores amarillas y alegría en el corazón. 🌼💛'
  },
  {
    user: 'MAFER',
    message: 'Florece la primavera con su luz y color, que las flores amarillas te llenen de amor. 💛🌻'
  },
  {
    user: 'ARIANA',
    message: 'Florece el sol con su brillo y alegría, que las flores amarillas iluminen tu día. 🌻✨'
  },
  {
    user: 'DANITZA',
    message: 'Llegó la primavera con flores al pasar, que cada amarillo te haga sonreír y soñar. 💛🌼'
  }
];

const app = document.querySelector('#app');
const audio = new Audio('/assets/cancion.mpeg');
audio.loop = true;
audio.volume = 0.48;

const sunflowerGifs = [
  { src: '/assets/sunflower.gif', alt: 'Girasol floreciendo' },
  { src: '/assets/sunflower-pvz-dance.gif', alt: 'Girasol bailando' },
  { src: '/assets/sunflower-sunflower-plants-vs-zombies.gif', alt: 'Girasol sonriente' },
  { src: '/assets/sunflower-happy-dance.gif', alt: 'Girasol feliz' }
];

function envelopeTemplate(person, index) {
  return `
    <button class="envelope" data-index="${index}" type="button" aria-label="Abrir sobre de ${person.user}">
      <span class="envelope__badge">Sobre ${index + 1}</span>
      <div class="envelope__box">
        <div class="envelope__back"></div>
        <div class="envelope__paper">
          <div class="envelope__paper-content">
            <span class="envelope__paper-tag">Para</span>
            <strong class="envelope__paper-name">${person.user}</strong>
            <span class="envelope__paper-flowers">🌻 ✨ 💛</span>
          </div>
        </div>
        <div class="envelope__pocket"></div>
        <div class="envelope__flap"></div>
        <div class="envelope__seal">🌻</div>
      </div>
      <span class="envelope__hint">Pasa el cursor o toca</span>
    </button>
  `;
}

function nameWithFlowers(name) {
  return [...name].map((letter, i) => `
    <span class="name-letter" style="--i:${i}">
      <span class="name-flower">🌻</span>
      <span class="name-letter__text">${letter}</span>
    </span>
  `).join('');
}

function cardTemplate(person) {
  return `
    <section class="card-stage" aria-live="polite">
      <button class="back-button" id="backButton" type="button">← Ver todos los sobres</button>

      <article class="spring-card">
        <div class="card-glow"></div>
        <div class="card-top-decoration">✦ &nbsp; 🌼 &nbsp; ✦ &nbsp; 🌻 &nbsp; ✦</div>

        <header class="card-header">
          <p class="eyebrow">Un detalle para ti</p>
          <h1>FELIZ INICIO<br /><span>DE PRIMAVERA</span></h1>
          <p class="subtitle">de las flores amarillas</p>
        </header>

        <div class="recipient-name" aria-label="${person.user}">
          ${nameWithFlowers(person.user)}
        </div>

        <div class="message-box">
          <span class="quote-mark">“</span>
          <p>${person.message}</p>
          <span class="quote-mark quote-mark--end">”</span>
        </div>

        <div class="stamps-section">
          <p class="stamps-header">Mosaico de Girasoles 🌻</p>
          <div class="stamps" aria-label="Mosaico 2x2 de girasoles decorativos">
            ${sunflowerGifs.map((gif, i) => `
              <div class="stamp stamp--${i + 1}">
                <div class="stamp__border">
                  <img src="${gif.src}" alt="${gif.alt}" />
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <footer class="card-footer">Que esta primavera te encuentre sonriendo. 💛</footer>
      </article>
    </section>
  `;
}

function homeTemplate() {
  return `
    <main class="home">
      <div class="petal-field" aria-hidden="true"></div>
      <div class="sun-orb" aria-hidden="true"></div>

      <section class="welcome">
        <div class="welcome__flower">🌻</div>
        <p class="welcome__eyebrow">Un pequeño detalle para celebrar</p>
        <h1>Feliz inicio<br /><em>de primavera</em></h1>
        <p class="welcome__text">Hay un sobre esperando por ti.<br />Pasa el cursor sobre cada sobre para descubrir de quién es y haz clic para abrir tu tarjeta.</p>
        <div class="welcome__divider"><span></span> 🌼 <span></span></div>
        <p class="choose-label">Elige tu sobre</p>

        <div class="envelopes">
          ${people.map(envelopeTemplate).join('')}
        </div>
      </section>

      <button class="music-button" id="musicButton" type="button" aria-label="Activar música">
        <span class="music-icon">♫</span>
        <span id="musicText">Activar música</span>
      </button>

      <p class="footer-note">Con cariño, para celebrar la llegada de la primavera 💛</p>
    </main>
  `;
}

function setMusicState(isPlaying) {
  const text = document.querySelector('#musicText');
  const button = document.querySelector('#musicButton');
  if (!text || !button) return;
  text.textContent = isPlaying ? 'Música activada' : 'Activar música';
  button.classList.toggle('is-playing', isPlaying);
}

function tryPlayAudio() {
  audio.play().then(() => {
    setMusicState(true);
  }).catch(() => {
    setMusicState(false);
  });
}

// Iniciar música al interactuar si el navegador bloquea autoplay sin interacción
const enableAudioOnUserInteraction = () => {
  if (audio.paused) {
    tryPlayAudio();
  }
  window.removeEventListener('click', enableAudioOnUserInteraction);
  window.removeEventListener('touchstart', enableAudioOnUserInteraction);
  window.removeEventListener('keydown', enableAudioOnUserInteraction);
  window.removeEventListener('pointerdown', enableAudioOnUserInteraction);
};

window.addEventListener('click', enableAudioOnUserInteraction);
window.addEventListener('touchstart', enableAudioOnUserInteraction);
window.addEventListener('keydown', enableAudioOnUserInteraction);
window.addEventListener('pointerdown', enableAudioOnUserInteraction);

function renderHome() {
  app.innerHTML = homeTemplate();
  bindHomeEvents();
  setMusicState(!audio.paused);
}

function bindHomeEvents() {
  const envelopesContainer = document.querySelector('.envelopes');
  let isOpening = false;

  document.querySelectorAll('.envelope').forEach((button) => {
    button.addEventListener('click', () => {
      if (isOpening) return;
      isOpening = true;

      const person = people[Number(button.dataset.index)];
      if (audio.paused) {
        tryPlayAudio();
      }

      button.classList.add('is-opening');
      if (envelopesContainer) {
        envelopesContainer.classList.add('has-opening-envelope');
      }

      // Tiempo para ver salir la hoja del sobre y contemplar a quién va dedicado
      setTimeout(() => {
        renderCard(person);
      }, 1400);
    });
  });

  document.querySelector('#musicButton').addEventListener('click', async () => {
    if (audio.paused) {
      await audio.play().catch(() => {});
      setMusicState(true);
    } else {
      audio.pause();
      setMusicState(false);
    }
  });
}

function renderCard(person) {
  app.innerHTML = cardTemplate(person);
  document.body.classList.add('is-card-view');

  document.querySelector('#backButton').addEventListener('click', () => {
    document.body.classList.remove('is-card-view');
    renderHome();
    setMusicState(!audio.paused);
  });
}

// Intentar reproducir de inmediato por defecto
tryPlayAudio();
renderHome();
