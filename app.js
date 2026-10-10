/**
 * BollyVoice AI - Modern Bollywood Text to Speech Engine
 * Powered by ElevenLabs Multilingual v2
 */

// Voice definitions for 5 Bollywood Superstars
const BOLLY_VOICES = {
  amitabh: {
    id: 'amitabh',
    name: 'Amitabh Bachchan',
    title: 'Shahenshah (The Baritone Legend)',
    gender: 'Male',
    voiceId: 'pNInz6obpgDQGcFmaJgB', // Adam - Deep, commanding, poetic baritone
    color: '#f59e0b',
    colorGlow: 'rgba(245, 158, 11, 0.3)',
    traits: 'Deep Baritone • Poetic • Authoritative • Legendary',
    avatarSvg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1e180d" stroke="#f59e0b" stroke-width="2"/>
      <path d="M30 35 L40 25 L50 32 L60 25 L70 35 L66 45 L34 45 Z" fill="#f59e0b" opacity="0.9"/>
      <circle cx="40" cy="55" r="9" stroke="#fbbf24" stroke-width="2.5" fill="#0d1117"/>
      <circle cx="60" cy="55" r="9" stroke="#fbbf24" stroke-width="2.5" fill="#0d1117"/>
      <line x1="49" y1="55" x2="51" y2="55" stroke="#fbbf24" stroke-width="3"/>
      <path d="M38 68 C44 75 56 75 62 68" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M34 72 C42 88 58 88 66 72" fill="#d97706" opacity="0.75"/>
    </svg>`,
    settings: { stability: 0.65, similarity: 0.85, style: 0.35, speed: 0.95 },
    dialogues: [
      { label: 'रिश्ते में तो... (Shahenshah)', text: 'रिश्ते में तो हम तुम्हारे बाप लगते हैं, नाम है शहंशाह!' },
      { label: 'Kabhi Kabhi Mere Dil...', text: 'कभी कभी मेरे दिल में ख्याल आता है, कि जैसे तुझको बनाया गया है मेरे लिए।' },
      { label: 'Deviyon aur Sajjano (KBC)', text: 'नमस्ते देवियों और सज्जनों! BollyVoice AI के इस शानदार मंच पर आप सभी का तहे दिल से स्वागत है।' },
      { label: 'Don Ko Pakadna...', text: 'डॉन को पकड़ना मुश्किल ही नहीं, नामुमकिन है... और हम शहंशाह हैं!' }
    ]
  },

  srk: {
    id: 'srk',
    name: 'Shah Rukh Khan',
    title: 'King Khan (The Romantic Icon)',
    gender: 'Male',
    voiceId: 'ErXwobaYiN019PkySvjV', // Antoni - Emotive, charismatic, heartfelt
    color: '#f43f5e',
    colorGlow: 'rgba(244, 63, 94, 0.3)',
    traits: 'Romantic • Charismatic • Heartfelt • Energetic',
    avatarSvg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1c0f16" stroke="#f43f5e" stroke-width="2"/>
      <path d="M25 45 C20 30 40 20 50 32 C60 20 80 30 75 45 C65 65 50 78 50 78 C50 78 35 65 25 45 Z" fill="#f43f5e" opacity="0.25"/>
      <path d="M32 50 C36 44 46 44 50 50 C54 44 64 44 68 50" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
      <path d="M42 66 C46 72 54 72 58 66" stroke="#fb7185" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="38" cy="67" r="1.5" fill="#fb7185"/>
      <path d="M42 22 L50 15 L58 22 L54 28 L46 28 Z" fill="#fbbf24"/>
    </svg>`,
    settings: { stability: 0.42, similarity: 0.80, style: 0.50, speed: 1.0 },
    dialogues: [
      { label: 'Bade Bade Deshon Mein...', text: 'बड़े-बड़े देशों में ऐसी छोटी-छोटी बातें होती रहती हैं, सेनोरिटा!' },
      { label: 'Rahul, Naam Toh Suna Hoga', text: 'राहुल... नाम तो सुना ही होगा! प्यार दोस्ती है, अगर वो मेरी सबसे अच्छी दोस्त नहीं बन सकती तो मैं उससे प्यार नहीं कर सकता।' },
      { label: 'Baazigar Dialogue', text: 'हार कर जीतने वाले को बाज़ीगर कहते हैं!' },
      { label: 'Picture Abhi Baaki Hai', text: 'इतनी शिद्दत से मैंने तुम्हें पाने की कोशिश की है, कि हर ज़र्रे ने मुझे तुमसे मिलाने की साज़िश की है। पिक्चर अभी बाकी है मेरे दोस्त!' }
    ]
  },

  deepika: {
    id: 'deepika',
    name: 'Deepika Padukone',
    title: 'The Graceful Queen',
    gender: 'Female',
    voiceId: 'EXAVITQu4vr4xnSDxMaL', // Bella - Expressive, graceful, warm, articulate
    color: '#10b981',
    colorGlow: 'rgba(16, 185, 129, 0.3)',
    traits: 'Graceful • Poised • Melodic • Elegant',
    avatarSvg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#0d1b16" stroke="#10b981" stroke-width="2"/>
      <path d="M50 20 L53 28 L61 29 L55 35 L57 43 L50 38 L43 43 L45 35 L39 29 L47 28 Z" fill="#34d399"/>
      <circle cx="50" cy="46" r="3" fill="#fbbf24"/>
      <path d="M35 55 C40 50 48 50 50 54 C52 50 60 50 65 55" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M42 68 C46 73 54 73 58 68" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
      <circle cx="50" cy="36" r="1.5" fill="#fbbf24"/>
    </svg>`,
    settings: { stability: 0.58, similarity: 0.82, style: 0.30, speed: 1.0 },
    dialogues: [
      { label: 'Ek Chutki Sindoor...', text: 'एक चुटकी सिन्दूर की कीमत तुम क्या जानो रमेश बाबू... ईश्वर का आशीर्वाद होता है एक चुटकी सिन्दूर!' },
      { label: 'Life Mein Kuch Chhootega...', text: 'जितना भी ट्राई करो बन्नी, लाइफ में कुछ ना कुछ तो छूटेगा ही... तो जहां हैं, वहीं का मज़ा लेते हैं ना!' },
      { label: 'Padmaavati Pride', text: 'चित्तौड़ के इतिहास में जब-जब त्याग और पराक्रम की बात होगी, पद्मिनी का नाम सबसे ऊपर लिखा जाएगा।' },
      { label: 'Piku Warm Greeting', text: 'हेलो! लाइफ में सादगी और सच्ची मुस्कान से बढ़कर कुछ भी नहीं होता।' }
    ]
  },

  priyanka: {
    id: 'priyanka',
    name: 'Priyanka Chopra',
    title: 'The Global Desi Icon',
    gender: 'Female',
    voiceId: 'Xb7hH8MSUJpSbSDYk0k2', // Alice - Bright, confident, punchy, international
    color: '#ec4899',
    colorGlow: 'rgba(236, 72, 153, 0.3)',
    traits: 'Confident • Bold • Dynamic • International Star',
    avatarSvg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1f0f1b" stroke="#ec4899" stroke-width="2"/>
      <polygon points="50,18 58,34 76,36 62,49 66,66 50,57 34,66 38,49 24,36 42,34" fill="#ec4899" opacity="0.3"/>
      <rect x="32" y="48" width="16" height="10" rx="3" fill="#f472b6"/>
      <rect x="52" y="48" width="16" height="10" rx="3" fill="#f472b6"/>
      <line x1="48" y1="52" x2="52" y2="52" stroke="#f472b6" stroke-width="2"/>
      <path d="M42 68 C46 74 54 74 58 68" stroke="#f472b6" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    settings: { stability: 0.52, similarity: 0.80, style: 0.45, speed: 1.02 },
    dialogues: [
      { label: 'Hum Risk Lete Hain!', text: 'हम में और बाकी लोगों में बस इतना सा फर्क है... वो सुरक्षित खेलते हैं, और हम रिस्क लेते हैं!' },
      { label: 'Don & Jungli Billi', text: 'डॉन को पकड़ना मुश्किल ही नहीं नामुमकिन है... पर ये मत भूलना कि जंगली बिल्ली भी कभी हार नहीं मानती।' },
      { label: 'Fashion Ka Hai Yeh Jalwa', text: 'फैशन का है ये जलवा! You do not need anyone’s validation to conquer the universe. Just own your stage!' },
      { label: 'Confidence Superpower', text: 'अपने सपनों को इतना ऊंचा रखो कि दुनिया तुम्हारी उड़ान देखती रह जाए।' }
    ]
  },

  salman: {
    id: 'salman',
    name: 'Salman Khan',
    title: 'Bhaijaan (The Action Megastar)',
    gender: 'Male',
    voiceId: 'VR6AewLTigWG4xSOukaG', // Arnold - Powerful, bold, swagger, high impact
    color: '#ff7849',
    colorGlow: 'rgba(255, 120, 73, 0.3)',
    traits: 'Powerful • Bold • High-Impact Swagger • Megastar',
    avatarSvg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#1f130e" stroke="#ff7849" stroke-width="2"/>
      <rect x="30" y="48" width="18" height="11" rx="4" fill="#38bdf8" stroke="#ff7849" stroke-width="2"/>
      <rect x="52" y="48" width="18" height="11" rx="4" fill="#38bdf8" stroke="#ff7849" stroke-width="2"/>
      <line x1="48" y1="52" x2="52" y2="52" stroke="#ff7849" stroke-width="2"/>
      <path d="M41 68 C46 72 54 72 59 68" stroke="#ff7849" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="84" r="5" fill="#38bdf8" stroke="#fff" stroke-width="1.5"/>
    </svg>`,
    settings: { stability: 0.56, similarity: 0.85, style: 0.42, speed: 0.98 },
    dialogues: [
      { label: 'Commitment Kar Di Toh...', text: 'एक बार जो मैंने कमिटमेंट कर दी, उसके बाद तो मैं खुद की भी नहीं सुनता!' },
      { label: 'Dosti Ka Usool (No Sorry)', text: 'दोस्ती का एक उसूल है मैडम... नो सॉरी, नो थैंक यू!' },
      { label: 'Swag Se Swagat', text: 'स्वैग से करेंगे सबका स्वागत! जिंदगी में तीन चीज़ें कभी अंडरएस्टिमेट मत करना: आई, मी, एंड मायसेल्फ!' },
      { label: 'Mujh Par Ek Ehsaan...', text: 'मुझ पर एक एहसान करना... कि मुझ पर कोई एहसान ना करना!' }
    ]
  }
};

// Application State
const state = {
  currentVoiceId: 'amitabh',
  apiKey: localStorage.getItem('bollyvoice_api_key') || 'sk_774f621bb8d7c89e6a2b682761b2da01681bec964ff02e3f',
  filterGender: 'all',
  currentAudioUrl: null,
  currentAudioBlob: null,
  isPlaying: false,
  isGenerating: false,
  history: JSON.parse(localStorage.getItem('bollyvoice_history') || '[]'),
  audioElement: new Audio(),
  audioCtx: null,
  analyser: null,
  sourceNode: null,
  animationFrameId: null,
  customAudioFx: 'none'
};

// DOM Elements
const elements = {
  voicesGrid: document.getElementById('voicesGrid'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  activeVoiceMiniAvatar: document.getElementById('activeVoiceMiniAvatar'),
  activeVoiceTitle: document.getElementById('activeVoiceTitle'),
  activeVoiceDesc: document.getElementById('activeVoiceDesc'),
  ttsTextarea: document.getElementById('ttsTextarea'),
  charCount: document.getElementById('charCount'),
  dialogueChipsContainer: document.getElementById('dialogueChipsContainer'),
  btnGenerate: document.getElementById('btnGenerate'),
  btnGenerateText: document.getElementById('btnGenerateText'),
  spinner: document.getElementById('generateSpinner'),
  actionStatusMsg: document.getElementById('actionStatusMsg'),
  
  // Custom Controls
  sliderStability: document.getElementById('sliderStability'),
  valStability: document.getElementById('valStability'),
  sliderClarity: document.getElementById('sliderClarity'),
  valClarity: document.getElementById('valClarity'),
  sliderSpeed: document.getElementById('sliderSpeed'),
  valSpeed: document.getElementById('valSpeed'),
  selectFx: document.getElementById('selectFx'),
  accordionToggle: document.getElementById('accordionToggle'),
  accordionBody: document.getElementById('accordionBody'),

  // Player Elements
  playerContainer: document.getElementById('playerContainer'),
  audioCanvas: document.getElementById('audioCanvas'),
  canvasOverlayText: document.getElementById('canvasOverlayText'),
  btnPlayPause: document.getElementById('btnPlayPause'),
  seekBar: document.getElementById('seekBar'),
  currentTime: document.getElementById('currentTime'),
  durationTime: document.getElementById('durationTime'),
  speedSelect: document.getElementById('speedSelect'),
  btnDownloadMp3: document.getElementById('btnDownloadMp3'),

  // History Elements
  historyList: document.getElementById('historyList'),
  btnClearHistory: document.getElementById('btnClearHistory'),

  // Settings Elements
  btnOpenSettings: document.getElementById('btnOpenSettings'),
  settingsModal: document.getElementById('settingsModal'),
  btnCloseModal: document.getElementById('btnCloseModal'),
  inputApiKey: document.getElementById('inputApiKey'),
  btnToggleKeyMask: document.getElementById('btnToggleKeyMask'),
  btnSaveSettings: document.getElementById('btnSaveSettings'),
  btnTestKey: document.getElementById('btnTestKey'),
  testStatusMessage: document.getElementById('testStatusMessage'),
  toastContainer: document.getElementById('toastContainer')
};

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  renderVoiceCards();
  selectVoice('amitabh');
  setupEventListeners();
  renderHistory();
  elements.inputApiKey.value = state.apiKey;
  updateCharCounter();
}

// ==========================================================================
// Voice Cards Rendering & Selection
// ==========================================================================
function renderVoiceCards() {
  elements.voicesGrid.innerHTML = '';
  
  Object.values(BOLLY_VOICES).forEach(voice => {
    // Check gender filter
    if (state.filterGender !== 'all' && voice.gender.toLowerCase() !== state.filterGender) {
      return;
    }

    const card = document.createElement('div');
    card.className = `voice-card ${voice.id === state.currentVoiceId ? 'selected' : ''}`;
    card.id = `card-${voice.id}`;
    card.style.setProperty('--card-accent', voice.color);
    card.style.setProperty('--card-glow', voice.colorGlow);
    
    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="avatar-wrapper">
            <div class="avatar-img-box">
              ${voice.avatarSvg}
            </div>
          </div>
          <span class="gender-badge ${voice.gender.toLowerCase()}">
            ${voice.gender === 'Male' ? '♂ Male' : '♀ Female'}
          </span>
        </div>
        <div class="card-info">
          <div class="actor-name">${voice.name}</div>
          <div class="actor-title">${voice.title}</div>
          <div class="voice-traits">${voice.traits}</div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="sample-chip-btn" onclick="event.stopPropagation(); window.loadSampleDialogue('${voice.id}', 0)">
          <span>▶ Dialogue</span>
        </button>
        <div class="select-indicator">
          ${voice.id === state.currentVoiceId ? '✓' : ''}
        </div>
      </div>
    `;

    card.addEventListener('click', () => selectVoice(voice.id));
    elements.voicesGrid.appendChild(card);
  });
}

function selectVoice(voiceId) {
  const voice = BOLLY_VOICES[voiceId];
  if (!voice) return;

  state.currentVoiceId = voiceId;

  // Update selection UI
  document.querySelectorAll('.voice-card').forEach(card => {
    card.classList.remove('selected');
    const indicator = card.querySelector('.select-indicator');
    if (indicator) indicator.textContent = '';
  });

  const activeCard = document.getElementById(`card-${voiceId}`);
  if (activeCard) {
    activeCard.classList.add('selected');
    const indicator = activeCard.querySelector('.select-indicator');
    if (indicator) indicator.textContent = '✓';
  }

  // Update Active Voice Studio Banner
  document.documentElement.style.setProperty('--current-actor-color', voice.color);
  elements.activeVoiceMiniAvatar.innerHTML = voice.avatarSvg;
  elements.activeVoiceMiniAvatar.style.background = 'transparent';
  elements.activeVoiceTitle.textContent = `${voice.name} (${voice.title})`;
  elements.activeVoiceDesc.textContent = `${voice.traits} • Gender: ${voice.gender}`;

  // Apply default voice slider values
  elements.sliderStability.value = voice.settings.stability * 100;
  elements.valStability.textContent = `${Math.round(voice.settings.stability * 100)}%`;
  
  elements.sliderClarity.value = voice.settings.similarity * 100;
  elements.valClarity.textContent = `${Math.round(voice.settings.similarity * 100)}%`;

  elements.sliderSpeed.value = voice.settings.speed;
  elements.valSpeed.textContent = `${voice.settings.speed}x`;

  // Render dialogue preset chips
  renderDialogueChips(voice);

  // If text is currently empty, load the first signature dialogue
  if (!elements.ttsTextarea.value.trim()) {
    elements.ttsTextarea.value = voice.dialogues[0].text;
    updateCharCounter();
  }
}

function renderDialogueChips(voice) {
  elements.dialogueChipsContainer.innerHTML = '';
  voice.dialogues.forEach((dlg, idx) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'dialogue-chip';
    chip.innerHTML = `<span>💬</span> <span>${dlg.label}</span>`;
    chip.addEventListener('click', () => {
      elements.ttsTextarea.value = dlg.text;
      updateCharCounter();
      showToast(`Loaded dialogue: "${dlg.label}"`, 'info');
    });
    elements.dialogueChipsContainer.appendChild(chip);
  });
}

window.loadSampleDialogue = function(voiceId, dialogueIndex) {
  selectVoice(voiceId);
  const voice = BOLLY_VOICES[voiceId];
  if (voice && voice.dialogues[dialogueIndex]) {
    elements.ttsTextarea.value = voice.dialogues[dialogueIndex].text;
    updateCharCounter();
    showToast(`Loaded: ${voice.name}'s signature line!`, 'success');
  }
};

// ==========================================================================
// Event Listeners
// ==========================================================================
function setupEventListeners() {
  // Gender Filter buttons
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filterGender = btn.getAttribute('data-filter');
      renderVoiceCards();
    });
  });

  // Textarea input count
  elements.ttsTextarea.addEventListener('input', updateCharCounter);

  // Accordion toggle
  elements.accordionToggle.addEventListener('click', () => {
    const isHidden = elements.accordionBody.style.display === 'none';
    elements.accordionBody.style.display = isHidden ? 'grid' : 'none';
    elements.accordionToggle.querySelector('span:last-child').textContent = isHidden ? '▲' : '▼';
  });
  elements.accordionBody.style.display = 'none'; // default collapsed for cleanliness

  // Range Sliders
  elements.sliderStability.addEventListener('input', (e) => {
    elements.valStability.textContent = `${e.target.value}%`;
  });
  elements.sliderClarity.addEventListener('input', (e) => {
    elements.valClarity.textContent = `${e.target.value}%`;
  });
  elements.sliderSpeed.addEventListener('input', (e) => {
    elements.valSpeed.textContent = `${e.target.value}x`;
  });
  elements.selectFx.addEventListener('change', (e) => {
    state.customAudioFx = e.target.value;
  });

  // Generate Button
  elements.btnGenerate.addEventListener('click', generateSpeech);

  // Player controls
  elements.btnPlayPause.addEventListener('click', togglePlayPause);
  elements.seekBar.addEventListener('input', seekAudio);
  elements.speedSelect.addEventListener('change', (e) => {
    state.audioElement.playbackRate = parseFloat(e.target.value);
  });
  elements.btnDownloadMp3.addEventListener('click', downloadCurrentAudio);

  // Audio element events
  state.audioElement.addEventListener('timeupdate', updateAudioProgress);
  state.audioElement.addEventListener('ended', onAudioEnded);
  state.audioElement.addEventListener('play', () => {
    state.isPlaying = true;
    elements.btnPlayPause.innerHTML = '⏸';
    elements.canvasOverlayText.style.display = 'none';
  });
  state.audioElement.addEventListener('pause', () => {
    state.isPlaying = false;
    elements.btnPlayPause.innerHTML = '▶';
  });

  // Settings Modal
  elements.btnOpenSettings.addEventListener('click', () => {
    elements.settingsModal.classList.add('open');
    elements.testStatusMessage.textContent = '';
  });
  elements.btnCloseModal.addEventListener('click', () => {
    elements.settingsModal.classList.remove('open');
  });
  elements.settingsModal.addEventListener('click', (e) => {
    if (e.target === elements.settingsModal) {
      elements.settingsModal.classList.remove('open');
    }
  });

  elements.btnToggleKeyMask.addEventListener('click', () => {
    const type = elements.inputApiKey.getAttribute('type');
    elements.inputApiKey.setAttribute('type', type === 'password' ? 'text' : 'password');
    elements.btnToggleKeyMask.textContent = type === 'password' ? '🔒' : '👁️';
  });

  elements.btnSaveSettings.addEventListener('click', saveSettings);
  elements.btnTestKey.addEventListener('click', testApiKeyConnection);

  elements.btnClearHistory.addEventListener('click', clearHistory);
}

function updateCharCounter() {
  const count = elements.ttsTextarea.value.length;
  elements.charCount.textContent = `${count} characters`;
}

// ==========================================================================
// Speech Generation Engine (ElevenLabs + Multilingual v2)
// ==========================================================================
async function generateSpeech() {
  const text = elements.ttsTextarea.value.trim();
  if (!text) {
    showToast('Please enter some text or dialogue to speak!', 'error');
    elements.ttsTextarea.focus();
    return;
  }

  const voice = BOLLY_VOICES[state.currentVoiceId];
  if (!voice) return;

  setGeneratingState(true);
  elements.actionStatusMsg.textContent = `Connecting with ElevenLabs for ${voice.name}...`;

  const stability = parseFloat(elements.sliderStability.value) / 100;
  const similarity = parseFloat(elements.sliderClarity.value) / 100;
  const speed = parseFloat(elements.sliderSpeed.value);

  try {
    const payload = {
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: stability,
        similarity_boost: similarity,
        style: voice.settings.style || 0.4,
        use_speaker_boost: true
      }
    };

    let response;
    let usedEngine = 'ElevenLabs Multilingual v2';

    // 1. Try direct ElevenLabs API call
    try {
      response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice.voiceId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': state.apiKey
        },
        body: JSON.stringify(payload)
      });
    } catch (networkErr) {
      console.warn('Direct ElevenLabs fetch failed, checking local proxy /api/tts...', networkErr);
      // 2. Try local proxy
      try {
        response = await fetch('/api/tts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': state.apiKey
          },
          body: JSON.stringify({
            ...payload,
            voice_id: voice.voiceId
          })
        });
        if (response.ok) usedEngine = 'BollyVoice Local Server Proxy';
      } catch (proxyErr) {
        console.warn('Local proxy also unavailable:', proxyErr);
      }
    }

    if (!response || !response.ok) {
      let errMsg = response ? `HTTP ${response.status}` : 'Connection blocked';
      if (response) {
        const errJson = await response.json().catch(() => ({}));
        errMsg = errJson?.detail?.message || errJson?.error || errMsg;
      }
      console.warn('ElevenLabs API returned error:', errMsg);

      showToast(`ElevenLabs: ${errMsg}. Using High-Res Live Speech Engine...`, 'error');
      await fallbackWebSpeech(text, voice);
      return;
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    handleSpeechSuccess(audioBlob, audioUrl, text, voice, usedEngine);

  } catch (error) {
    console.error('TTS execution error:', error);
    showToast('Using high-fidelity browser voice fallback.', 'error');
    await fallbackWebSpeech(text, voice);
  } finally {
    setGeneratingState(false);
  }
}

// Browser Web Speech API fallback for guaranteed 100% availability
async function fallbackWebSpeech(text, voice) {
  if (!('speechSynthesis' in window)) {
    showToast('Speech synthesis is not supported on this browser.', 'error');
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  
  // Choose optimal voice & tuning for gender
  const availableVoices = window.speechSynthesis.getVoices();
  const hindiOrIndianVoice = availableVoices.find(v => v.lang.includes('hi') || v.lang.includes('IN') || v.lang.includes('en-IN')) || availableVoices[0];
  if (hindiOrIndianVoice) {
    utterance.voice = hindiOrIndianVoice;
  }

  if (voice.gender === 'Male') {
    utterance.pitch = voice.id === 'amitabh' ? 0.75 : 0.95;
    utterance.rate = 0.92;
  } else {
    utterance.pitch = 1.15;
    utterance.rate = 1.0;
  }

  window.speechSynthesis.speak(utterance);
  showToast(`Speaking as ${voice.name} (Live Voice Engine)`, 'success');
  elements.actionStatusMsg.textContent = `Speaking: ${voice.name}...`;

  utterance.onend = () => {
    elements.actionStatusMsg.textContent = 'Speech finished.';
  };
}

function handleSpeechSuccess(blob, url, text, voice, engineName) {
  state.currentAudioBlob = blob;
  state.currentAudioUrl = url;

  // Configure Audio element
  state.audioElement.src = url;
  state.audioElement.playbackRate = parseFloat(elements.speedSelect.value) || 1.0;
  
  // Show Player
  elements.playerContainer.style.display = 'block';
  elements.playerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Play immediately
  playAudio();
  initVisualizer();

  showToast(`${voice.name}'s voice generated successfully!`, 'success');
  elements.actionStatusMsg.textContent = `Generated with ${engineName} (${Math.round(blob.size / 1024)} KB)`;

  // Add to History
  addToHistory({
    id: Date.now(),
    voiceId: voice.id,
    actorName: voice.name,
    gender: voice.gender,
    text: text,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    url: url
  });
}

function setGeneratingState(isGen) {
  state.isGenerating = isGen;
  elements.btnGenerate.disabled = isGen;
  elements.spinner.style.display = isGen ? 'inline-block' : 'none';
  elements.btnGenerateText.textContent = isGen ? 'Generating Voice...' : 'Generate Bollywood Voice';
}

// ==========================================================================
// Audio Player Controls & Web Audio Visualizer
// ==========================================================================
function playAudio() {
  if (!state.audioElement.src) return;
  
  // Resume AudioContext if suspended (browser autoplay policy)
  if (state.audioCtx && state.audioCtx.state === 'suspended') {
    state.audioCtx.resume();
  }

  state.audioElement.play().catch(e => console.log('Autoplay deferred:', e));
}

function pauseAudio() {
  state.audioElement.pause();
}

function togglePlayPause() {
  if (state.isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
}

function seekAudio() {
  if (!state.audioElement.duration) return;
  const seekTime = (elements.seekBar.value / 100) * state.audioElement.duration;
  state.audioElement.currentTime = seekTime;
}

function updateAudioProgress() {
  const current = state.audioElement.currentTime;
  const duration = state.audioElement.duration;
  
  if (!isNaN(duration) && duration > 0) {
    elements.seekBar.value = (current / duration) * 100;
    elements.currentTime.textContent = formatTime(current);
    elements.durationTime.textContent = formatTime(duration);
  } else {
    elements.currentTime.textContent = formatTime(current);
  }
}

function onAudioEnded() {
  state.isPlaying = false;
  elements.btnPlayPause.innerHTML = '▶';
  elements.seekBar.value = 0;
  elements.currentTime.textContent = '0:00';
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function downloadCurrentAudio() {
  if (!state.currentAudioBlob && !state.currentAudioUrl) {
    showToast('No generated audio to download!', 'error');
    return;
  }
  const voice = BOLLY_VOICES[state.currentVoiceId];
  const filename = `${voice.name.replace(/\s+/g, '_')}_BollyVoice_${Date.now()}.mp3`;

  const a = document.createElement('a');
  a.href = state.currentAudioUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(`Downloaded: ${filename}`, 'success');
}

// ==========================================================================
// HTML5 Canvas Real-Time Waveform Visualizer
// ==========================================================================
function initVisualizer() {
  if (!state.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    state.audioCtx = new AudioContext();
    state.analyser = state.audioCtx.createAnalyser();
    state.analyser.fftSize = 256;

    try {
      state.sourceNode = state.audioCtx.createMediaElementSource(state.audioElement);
      state.sourceNode.connect(state.analyser);
      state.analyser.connect(state.audioCtx.destination);
    } catch (e) {
      console.log('Audio source already connected:', e);
    }
  }

  drawVisualizer();
}

function drawVisualizer() {
  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
  }

  const canvas = elements.audioCanvas;
  const ctx = canvas.getContext('2d');
  const bufferLength = state.analyser ? state.analyser.frequencyBinCount : 64;
  const dataArray = new Uint8Array(bufferLength);

  function renderFrame() {
    state.animationFrameId = requestAnimationFrame(renderFrame);
    
    // Set canvas dimensions
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    if (state.analyser && state.isPlaying) {
      state.analyser.getByteFrequencyData(dataArray);
    } else {
      // Idle gentle subtle sine wave
      for (let i = 0; i < bufferLength; i++) {
        dataArray[i] = Math.sin(Date.now() / 400 + i * 0.1) * 12 + 15;
      }
    }

    const currentVoice = BOLLY_VOICES[state.currentVoiceId] || BOLLY_VOICES.amitabh;
    const barWidth = (width / bufferLength) * 2.2;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * height * 0.9;

      // Gradient color from actor's jewel color to gold/white
      const grad = ctx.createLinearGradient(0, height, 0, height - barHeight);
      grad.addColorStop(0, currentVoice.color);
      grad.addColorStop(1, '#ffffff');

      ctx.fillStyle = grad;
      ctx.shadowBlur = 8;
      ctx.shadowColor = currentVoice.color;

      ctx.fillRect(x, height - barHeight, barWidth - 2, barHeight);
      x += barWidth;
    }
  }

  renderFrame();
}

// ==========================================================================
// History Management
// ==========================================================================
function addToHistory(item) {
  state.history.unshift(item);
  if (state.history.length > 20) state.history.pop(); // keep last 20
  localStorage.setItem('bollyvoice_history', JSON.stringify(state.history.map(h => ({
    ...h,
    url: null // don't serialize blob url into localStorage
  }))));
  renderHistory();
}

function renderHistory() {
  if (!state.history || state.history.length === 0) {
    elements.historyList.innerHTML = `<div class="empty-history">No speech recordings generated yet. Choose an actor and hit Generate!</div>`;
    return;
  }

  elements.historyList.innerHTML = '';
  state.history.forEach((item, index) => {
    const voice = BOLLY_VOICES[item.voiceId] || BOLLY_VOICES.amitabh;
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div class="history-item-left">
        <div class="history-actor-badge" style="background: ${voice.colorGlow}; border: 1px solid ${voice.color}">
          ${voice.gender === 'Male' ? '👑' : '✨'}
        </div>
        <div class="history-item-meta">
          <div class="history-item-title">
            <span>${item.actorName}</span>
            <span style="font-size: 0.72rem; color: #64748b;">${item.timestamp}</span>
          </div>
          <div class="history-item-text" title="${item.text}">"${item.text}"</div>
        </div>
      </div>
      <div class="history-item-actions">
        <button type="button" class="btn-history-play" title="Load text & voice" onclick="window.loadHistoryItem(${index})">
          ▶
        </button>
        <button type="button" class="btn-history-del" title="Delete" onclick="window.deleteHistoryItem(${index})">
          ✕
        </button>
      </div>
    `;
    elements.historyList.appendChild(div);
  });
}

window.loadHistoryItem = function(index) {
  const item = state.history[index];
  if (!item) return;
  selectVoice(item.voiceId);
  elements.ttsTextarea.value = item.text;
  updateCharCounter();
  showToast(`Loaded ${item.actorName}'s line from history!`, 'info');
};

window.deleteHistoryItem = function(index) {
  state.history.splice(index, 1);
  localStorage.setItem('bollyvoice_history', JSON.stringify(state.history));
  renderHistory();
  showToast('Removed from history', 'info');
};

function clearHistory() {
  if (confirm('Are you sure you want to clear your speech history?')) {
    state.history = [];
    localStorage.removeItem('bollyvoice_history');
    renderHistory();
    showToast('Speech history cleared', 'info');
  }
}

// ==========================================================================
// Settings & API Key Verification
// ==========================================================================
function saveSettings() {
  const key = elements.inputApiKey.value.trim();
  if (!key) {
    showToast('API key cannot be empty!', 'error');
    return;
  }
  state.apiKey = key;
  localStorage.setItem('bollyvoice_api_key', key);
  elements.settingsModal.classList.remove('open');
  showToast('API Key saved successfully!', 'success');
}

async function testApiKeyConnection() {
  const key = elements.inputApiKey.value.trim();
  if (!key) {
    elements.testStatusMessage.innerHTML = '<span style="color: #ef4444;">Please enter an API key to test.</span>';
    return;
  }

  elements.testStatusMessage.innerHTML = '<span style="color: #fbbf24;">Testing ElevenLabs connection...</span>';

  try {
    // Test with a quick 1-word TTS synthesis
    const res = await fetch('https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': key
      },
      body: JSON.stringify({
        text: 'Namaste',
        model_id: 'eleven_multilingual_v2'
      })
    });

    if (res.ok) {
      elements.testStatusMessage.innerHTML = '<span style="color: #34d399;">✓ Connection verified! ElevenLabs Multilingual TTS is fully operational.</span>';
    } else {
      const err = await res.json().catch(() => ({}));
      elements.testStatusMessage.innerHTML = `<span style="color: #ef4444;">✗ Error ${res.status}: ${err?.detail?.message || 'Unauthorized'}</span>`;
    }
  } catch (e) {
    elements.testStatusMessage.innerHTML = `<span style="color: #ef4444;">✗ Connection failed: ${e.message}</span>`;
  }
}

// ==========================================================================
// Toast Notification Utility
// ==========================================================================
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Run on page load
document.addEventListener('DOMContentLoaded', init);
