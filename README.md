# 🎙️ BollyVoice AI - Bollywood Text-to-Speech Studio

An AI-powered web studio that transforms any text into speech styled after iconic Bollywood actors and actresses across genders, powered by **ElevenLabs Multilingual v2** high-fidelity speech synthesis.

---

## 🌟 Featured Bollywood Star Voices

| Star | Gender | Persona & Traits | Base ElevenLabs Voice | Signature Style |
| :--- | :---: | :--- | :--- | :--- |
| **Amitabh Bachchan** | ♂ Male | The Shahenshah / Legend | `pNInz6obpgDQGcFmaJgB` (Adam) | Deep Baritone, Poetic, Authoritative |
| **Shah Rukh Khan** | ♂ Male | King Khan / Badshah | `ErXwobaYiN019PkySvjV` (Antoni) | Emotive, Romantic, Charismatic |
| **Deepika Padukone** | ♀ Female | The Graceful Queen | `EXAVITQu4vr4xnSDxMaL` (Bella) | Elegant, Melodic, Poised |
| **Priyanka Chopra** | ♀ Female | The Global Desi Icon | `Xb7hH8MSUJpSbSDYk0k2` (Alice) | Confident, Bold, Modern, Punchy |
| **Salman Khan** | ♂ Male | Bhaijaan / Megastar | `VR6AewLTigWG4xSOukaG` (Arnold) | Powerful, Rugged, High-Impact Swagger |

---

## ✨ Features

- **Iconic Character Cards**: Visual cards with badges, vocal personality descriptions, and one-click signature dialogue samples.
- **Gender Filter**: Toggle between **All Stars (5)**, **Male Actors (3)**, and **Female Actresses (2)**.
- **Hindi & English Multilingual**: High-accuracy natural pronunciation for Hindi (Devanagari), Hinglish, and English scripts.
- **One-Click Dialogues**: Instant sample buttons for legendary dialogues (*"Rishtey mein toh hum..."*, *"Bade bade deshon mein..."*, *"Ek chutki sindoor..."*, *"Don ko pakadna..."*, *"Commitment kar di toh..."*).
- **Studio Audio Tuning**: Sliders for Stability (emotion vs steady), Clarity / Similarity boost, and Speaking Pace (0.7x – 1.4x).
- **Real-Time Audio Waveform Visualizer**: HTML5 Canvas audio spectrum visualizer pulsing with neon jewel gradients matching each star's theme.
- **Custom Audio Player**: Play, Pause, Interactive Seek bar, Time elapsed / duration, Playback speed (0.75x, 1x, 1.25x, 1.5x).
- **Direct MP3 Download**: Instant one-click download of generated high-res audio files.
- **Local Speech History**: Automatically saves previous generations in the browser for replay and redownload.
- **Resilient Fallback Engine**: If internet or API limits are hit, seamlessly falls back to high-res browser speech synthesis with actor pitch tuning.
- **Configurable Settings**: In-app modal to test, update, or view your ElevenLabs API key.

---

## 🚀 How to Run Locally

You can run the application anytime using the included zero-dependency Python server:

```bash
# In the project directory:
python server.py
```

Then open your browser at:
👉 **[http://localhost:8000](http://localhost:8000)**

*(Alternatively, you can open `index.html` directly in any modern browser!)*

---

## 🔑 API Configuration
- Pre-configured with the ElevenLabs API key: `sk_774f621bb8d7c89e6a2b682761b2da01681bec964ff02e3f`
- You can change or verify your API key anytime via the **API Settings (⚙️)** button in the top navigation bar.
