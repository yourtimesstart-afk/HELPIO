<div align="center">
  <a href="https://www.helpio.online">
    <img src="https://www.helpio.online/favicon.ico" width="72" height="72" alt="Helpio Logo" onerror="this.style.display='none'" />
  </a>

  # Helpio — Global Helpline Directory
  ### Crisis, Suicide Prevention & Mental Health Hotlines in 50+ Countries

  <p align="center">
    <b>Immediate, free, confidential, 24/7 crisis hotlines searchable in 15 languages with one-tap emergency calling and offline PWA capability.</b>
  </p>

  <p align="center">
    <a href="https://www.helpio.online"><b>🌐 Launch Live Web Directory (www.helpio.online)</b></a> •
    <a href="#-open-crisis-helpline-dataset-schema-helplinesschemajson"><b>📦 Open JSON Dataset</b></a> •
    <a href="#-embed-helpio-emergency-button-on-your-website"><b>⚡ Embed Widget</b></a> •
    <a href="#-contributing--verification-protocol"><b>🤝 Contribute a Hotline</b></a>
  </p>
</div>

<p align="center">
  <a href="https://www.helpio.online">
    <img src="https://img.shields.io/badge/LIVE_DIRECTORY-helpio.online-388BFD?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Helpio Live Site" />
  </a>
  <img src="https://img.shields.io/badge/COUNTRIES_VERIFIED-50%2B_NATIONS-238636?style=for-the-badge&logo=globe&logoColor=white" alt="50+ Countries" />
  <img src="https://img.shields.io/badge/LANGUAGES-15_LOCALES-A371F7?style=for-the-badge&logo=translate&logoColor=white" alt="15 Languages Supported" />
  <img src="https://img.shields.io/badge/PWA_OFFLINE-ENABLED-D29922?style=for-the-badge&logo=pwa&logoColor=white" alt="Offline PWA Support" />
  <img src="https://img.shields.io/badge/PRIVACY-ZERO_TELEMETRY-F85149?style=for-the-badge&logo=shield&logoColor=white" alt="Zero Telemetry Privacy" />
  <img src="https://img.shields.io/badge/LICENSE-MIT_OPEN_DATA-30363D?style=for-the-badge" alt="MIT License" />
</p>


> [!IMPORTANT]
> ### 🚨 IMMEDIATE CRISIS EMERGENCY NOTICE
> If you or someone you know is in immediate physical danger or experiencing a life-threatening mental health emergency, **do not wait**. Call your local emergency services right now:
> - 🇺🇸 / 🇨🇦 **North America**: Dial or Text `988` or call `911`
> - 🇬🇧 **United Kingdom**: Dial `111` (NHS mental health) or `999` / Samaritans `116 123`
> - 🇪🇺 **European Union**: Dial `112` or `116 123`
> - 🇮🇳 **India**: Dial `14416` (Tele-MANAS) or `112`
> - 🇦🇺 **Australia**: Dial `13 11 14` (Lifeline) or `000`
> - 🌐 **Instant Country Finder**: Visit **[www.helpio.online](https://www.helpio.online)** for immediate 1-tap call & SMS links in 50+ countries.

## ✨ Why Helpio Exists

When someone is in acute emotional distress, navigating complex search results, paywalls, or outdated phone directories can cost precious minutes. **[Helpio (www.helpio.online)](https://www.helpio.online)** was created by **Cropzeq Technologies** as a high-speed, zero-tracking public good:

- ⚡ **Sub-100ms Instant Search**: Filter by country, city, or crisis type (Suicide Prevention, Youth Support, Domestic Abuse, Veteran Support, LGBTQ+ Crisis Lines).
- 📞 **One-Tap Dialing & SMS**: Direct `tel:`, `sms:`, WhatsApp, and confidential web-chat deep links across desktop and mobile devices.
- 🌐 **15 Native Languages**: Full interface localized in English, Spanish, Hindi, French, Gujarati, German, Portuguese, Arabic, Dutch, Italian, Russian, Chinese, Japanese, Korean, and Turkish.
- 🔒 **Zero Telemetry & Total Privacy**: No user IP addresses, queries, or crisis actions are logged or monetized.
- 📡 **Offline-Ready PWA**: Essential emergency numbers remain cached in browser storage even without cellular data or Wi-Fi.

> *Every verified hotline added can be the phone call that saves a life.*

## 📐 Architecture & Privacy-First Offline Design

Helpio operates as a zero-latency, client-first public service directory. Hotline data is packaged as a cryptographically signed JSON dataset and cached via Service Workers for emergency offline reliability.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        USER IN CRISIS (ANY DEVICE)                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │  1-Tap Call / SMS / WhatsApp / WebChat
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                      HELPIO.ONLINE PWA EDGE SHELL                      │
│  ┌──────────────────────┐  ┌────────────────────┐  ┌────────────────┐  │
│  │ Geo-Locale Detection │  │ Instant Fuzzy Fuse │  │ 15-Language    │  │
│  │ (No IP Logging)      │  │ Search (< 4ms)     │  │ i18n Dictionary│  │
│  └──────────┬───────────┘  └─────────┬──────────┘  └───────┬────────┘  │
└─────────────┼────────────────────────┼─────────────────────┼───────────┘
              │                        │                     │
              ▼                        ▼                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│              OPEN CRISIS HELPLINE DATASET (helplines.json)             │
│  • 50+ Sovereign Nations     • Suicide, Domestic Violence, Youth, LGBTQ│
│  • Verified Quarterly        • JSON-LD Schema.org Compatible           │
└────────────────────────────────────────────────────────────────────────┘
```

## 🌍 Global Helpline Coverage Matrix (Sample of 50+ Countries)

All numbers are verified directly against national health ministries and crisis NGOs. Explore the full dataset at **[www.helpio.online](https://www.helpio.online)**.

| Country | Flag | Primary Crisis Hotline | Free SMS / Text Support | Local Emergency | Coverage Focus |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **United States** | 🇺🇸 | `988 (Lifeline)` | `Text HOME to 741741` | `911` | Suicide & Mental Health |
| **United Kingdom** | 🇬🇧 | `111 / 116 123 (Samaritans)` | `Text SHOUT to 85258` | `999 / 112` | 24/7 Emotional Support |
| **India** | 🇮🇳 | `14416 (Tele-MANAS) / 9152987821 (KIRAN)` | `WhatsApp +91 9999 666 555` | `112` | National Mental Health |
| **Canada** | 🇨🇦 | `988 (Suicide Crisis Helpline)` | `Text 988` | `911` | Bilingual Crisis Line |
| **Australia** | 🇦🇺 | `13 11 14 (Lifeline AU)` | `Text 0477 13 11 14` | `000` | Crisis Support & Prevention |
| **Germany** | 🇩🇪 | `0800 111 0 111 (TelefonSeelsorge)` | `Online Chat Seelsorge` | `112` | Anonym & Kostenfrei |
| **France** | 🇫🇷 | `3114 (Numéro National Prévention Suicide)` | `Chat 3114.fr` | `112 / 15` | 24h/24 Gratuit |
| **Japan** | 🇯🇵 | `0570-064-556 (Inochi no Denwa)` | `LINE Crisis Chat` | `110 / 119` | Suicide Prevention |
| **Brazil** | 🇧🇷 | `188 (CVV - Centro de Valorização da Vida)` | `Chat cvv.org.br` | `192 / 190` | Apoio Emocional 24h |
| **South Africa** | 🇿🇦 | `0800 567 567 (SADAG)` | `SMS 31393` | `10111 / 112` | Depression & Anxiety Group |
| **Spain** | 🇪🇸 | `024 (Línea 024 de Atención a la Conducta Suicida)` | `Chat 024` | `112` | Prevención del Suicidio |
| **Mexico** | 🇲🇽 | `800 911 2000 (Línea de la Vida)` | `WhatsApp +52 55 4904 5900` | `911` | Salud Mental y Adicciones |

> 💡 **Need a country not listed above?** Full coverage for 50+ countries (including Argentina, Nigeria, Kenya, Indonesia, Philippines, Italy, Netherlands, Poland, Turkey, South Korea, Sweden, Switzerland, and New Zealand) is live at **[helpio.online](https://www.helpio.online)**.

## 🗃️ Open Crisis Helpline Dataset Schema (`helplines.schema.json`)

Helpio publishes its helpline directory in an open JSON format so researchers, mental health apps, civic tech organizations, and university portals can reuse verified crisis numbers freely.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "HelpioVerifiedHelpline",
  "type": "object",
  "required": ["id", "countryIso2", "countryName", "organization", "phone", "verifiedAt"],
  "properties": {
    "id": { "type": "string", "example": "US-988-LIFELINE" },
    "countryIso2": { "type": "string", "example": "US" },
    "countryName": { "type": "string", "example": "United States" },
    "organization": { "type": "string", "example": "988 Suicide & Crisis Lifeline" },
    "phone": { "type": "string", "example": "988" },
    "smsShortcode": { "type": "string", "example": "Text HOME to 741741" },
    "whatsappUrl": { "type": "string", "example": "https://wa.me/..." },
    "webChatUrl": { "type": "string", "example": "https://988lifeline.org/chat/" },
    "hours": { "type": "string", "example": "24/7/365" },
    "languages": {
      "type": "array",
      "items": { "type": "string" },
      "example": ["en", "es"]
    },
    "tollFree": { "type": "boolean", "example": true },
    "verifiedAt": { "type": "string", "format": "date", "example": "2026-02-01" }
  }
}
```

## ⚡ Embed Helpio Emergency Button on Your Website

Add a lightweight, non-intrusive **"Need Urgent Help?"** floating emergency button to your university portal, student forum, or health website with a single snippet:

```html
<!-- Helpio Emergency Floating Action Button (Zero Cookies / Zero Tracking) -->
<script
  src="https://www.helpio.online/embed/crisis-button.v1.js"
  data-theme="dark"
  data-position="bottom-right"
  data-label="Immediate Crisis Helpline"
  async
></script>
```

## 🚀 Quickstart & Self-Hosting Guide

Run the Helpio directory locally or mirror it for campus / community networks:

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/cropzeq/helpio-global-helplines.git
cd helpio-global-helplines
npm install
```

### 2. Validate Crisis Numbers & Schema
```bash
npm run validate:helplines
# Validates E.164 phone formats, active HTTP endpoints, and ISO-3166 codes
```

### 3. Launch Development Server
```bash
npm run dev
# Open http://localhost:5173
```

### 4. Production Docker Deployment
```bash
docker build -t helpio-directory:latest .
docker run -p 8080:80 --name helpio helpio-directory:latest
```

## 🤝 Contributing & Verification Protocol

We invite clinicians, crisis line volunteers, translators, and open-source contributors to keep **Helpio** accurate across every country.

1. **Submit an Update**: Open a Pull Request editing `data/helplines.json`.
2. **Provide Official Reference**: Every phone number change requires an official `.gov`, `.org`, or WHO/IASP source link in the PR description.
3. **Multi-Language Translations**: Helpio supports **15 languages** (`en`, `es`, `hi`, `fr`, `gu`, `de`, `pt`, `ar`, `nl`, `it`, `ru`, `zh`, `ja`, `ko`, `tr`). Add translations in `locales/`.

---

## 🏢 Publisher & Attribution

- **Website**: [https://www.helpio.online/](https://www.helpio.online/)
- **Publisher**: **Cropzeq Technologies**
- **Founder & Maintainer**: **Mr. Mukeshkumar Parmar**
- **Contact & Official Hotline Submissions**: [yourtimesstart@gmail.com](mailto:yourtimesstart@gmail.com)
- **Schema.org Classification**: Public Service Directory / Crisis Support Resource

---

<p align="center">
  <sub>Built with compassion and precision by <a href="https://www.helpio.online">Cropzeq Technologies</a> • Open Crisis Data for Humanity ❤️</sub>
</p>
