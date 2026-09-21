(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{user:`ROX`,message:`Llegó la primavera con flores y esplendor, que el amarillo te regale alegría y mucho amor. 💛🌻`},{user:`CELINA`,message:`Llegó la primavera con su flor amarilla, que tu alegría siempre brille, bonita y sencilla. 💛🌼`},{user:`KIARIS`,message:`Primavera llegó vestida de amarillo, que nunca falte en tu día un momento bonito. 🌻💛`},{user:`ROLIS`,message:`Llegaron las flores anunciando primavera, que tu sonrisa florezca feliz y duradera. 🌼😊`},{user:`MARJORIE`,message:`Llegó la primavera cantando su canción, con flores amarillas y alegría en el corazón. 🌼💛`},{user:`MAFER`,message:`Florece la primavera con su luz y color, que las flores amarillas te llenen de amor. 💛🌻`},{user:`ARIANA`,message:`Florece el sol con su brillo y alegría, que las flores amarillas iluminen tu día. 🌻✨`},{user:`DANITZA`,message:`Llegó la primavera con flores al pasar, que cada amarillo te haga sonreír y soñar. 💛🌼`}],t=document.querySelector(`#app`),n=new Audio(`/assets/cancion.mpeg`);n.loop=!0,n.volume=.48;var r=[{src:`/assets/sunflower.gif`,alt:`Girasol floreciendo`},{src:`/assets/sunflower-pvz-dance.gif`,alt:`Girasol bailando`},{src:`/assets/sunflower-sunflower-plants-vs-zombies.gif`,alt:`Girasol sonriente`},{src:`/assets/sunflower-happy-dance.gif`,alt:`Girasol feliz`}];function i(e,t){return`
    <button class="envelope" data-index="${t}" type="button" aria-label="Abrir sobre de ${e.user}">
      <span class="envelope__badge">Sobre ${t+1}</span>
      <div class="envelope__box">
        <div class="envelope__back"></div>
        <div class="envelope__paper">
          <div class="envelope__paper-content">
            <span class="envelope__paper-tag">Para</span>
            <strong class="envelope__paper-name">${e.user}</strong>
            <span class="envelope__paper-flowers">🌻 ✨ 💛</span>
          </div>
        </div>
        <div class="envelope__pocket"></div>
        <div class="envelope__flap"></div>
        <div class="envelope__seal">🌻</div>
      </div>
      <span class="envelope__hint">Pasa el cursor o toca</span>
    </button>
  `}function a(e){return[...e].map((e,t)=>`
    <span class="name-letter" style="--i:${t}">
      <span class="name-flower">🌻</span>
      <span class="name-letter__text">${e}</span>
    </span>
  `).join(``)}function o(e){return`
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

        <div class="recipient-name" aria-label="${e.user}">
          ${a(e.user)}
        </div>

        <div class="message-box">
          <span class="quote-mark">“</span>
          <p>${e.message}</p>
          <span class="quote-mark quote-mark--end">”</span>
        </div>

        <div class="stamps-section">
          <p class="stamps-header">Mosaico de Girasoles 🌻</p>
          <div class="stamps" aria-label="Mosaico 2x2 de girasoles decorativos">
            ${r.map((e,t)=>`
              <div class="stamp stamp--${t+1}">
                <div class="stamp__border">
                  <img src="${e.src}" alt="${e.alt}" />
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <footer class="card-footer">Que esta primavera te encuentre sonriendo. 💛</footer>
      </article>
    </section>
  `}function s(){return`
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
          ${e.map(i).join(``)}
        </div>
      </section>

      <button class="music-button" id="musicButton" type="button" aria-label="Activar música">
        <span class="music-icon">♫</span>
        <span id="musicText">Activar música</span>
      </button>

      <p class="footer-note">Con cariño, para celebrar la llegada de la primavera 💛</p>
    </main>
  `}function c(e){let t=document.querySelector(`#musicText`),n=document.querySelector(`#musicButton`);t&&n&&(t.textContent=e?`Música activada`:`Activar música`,n.classList.toggle(`is-playing`,e))}function l(){n.play().then(()=>{c(!0)}).catch(()=>{c(!1)})}var u=()=>{n.paused&&l(),window.removeEventListener(`click`,u),window.removeEventListener(`touchstart`,u),window.removeEventListener(`keydown`,u),window.removeEventListener(`pointerdown`,u)};window.addEventListener(`click`,u),window.addEventListener(`touchstart`,u),window.addEventListener(`keydown`,u),window.addEventListener(`pointerdown`,u);function d(){t.innerHTML=s(),f(),c(!n.paused)}function f(){let t=document.querySelector(`.envelopes`),r=!1;document.querySelectorAll(`.envelope`).forEach(i=>{i.addEventListener(`click`,()=>{if(r)return;r=!0;let a=e[Number(i.dataset.index)];n.paused&&l(),i.classList.add(`is-opening`),t&&t.classList.add(`has-opening-envelope`),setTimeout(()=>{p(a)},1400)})}),document.querySelector(`#musicButton`).addEventListener(`click`,async()=>{n.paused?(await n.play().catch(()=>{}),c(!0)):(n.pause(),c(!1))})}function p(e){t.innerHTML=o(e),document.body.classList.add(`is-card-view`),document.querySelector(`#backButton`).addEventListener(`click`,()=>{document.body.classList.remove(`is-card-view`),d(),c(!n.paused)})}l(),d();