# 🌄 Spada Reale — Ristorante · Camere · Piccola Bottega

Sito ufficiale del **Ristorante Spada Reale**, nel cuore del Parco delle Alpi Marittime (Roaschia, CN).  
Camere accoglienti, cucina locale e una piccola bottega artigianale: un rifugio tra natura, silenzio e tradizione.

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bde555c-2077-4452-87c5-5d88960f2610/deploy-status)](https://app.netlify.com/projects/demospada-reale/deploys)

---

## 🔧 Stack Tecnico

- **Generator:** [Hugo](https://gohugo.io/) `v0.125.6`
- **Hosting/CDN:** [Netlify](https://www.netlify.com)
- **Repo:** [GitHub](https://github.com/emalinux/spadareale)
- **Lingue supportate:** 🇮🇹 IT · 🇬🇧 EN · 🇫🇷 FR
- **Tema:** Custom sviluppato da zero (`layouts/`, `partials/`, `style.css`)

---

## ⚙️ Deploy automatico

- Trigger: ogni `git push` su `main`
- Configurato tramite `netlify.toml`
- Dominio demo: [https://demospada-reale.netlify.app](https://demospada-reale.netlify.app)


# netlify.toml (estratto)
[build]
  publish = "public"
  command = "hugo"

[context.production.environment]
  HUGO_VERSION = "0.125.6"

[context.deploy-preview]
  command = "hugo --buildFuture"

---

## 📁 Struttura progetto

```plaintext
spadareale/
├── assets/         # Risorse statiche (font, custom styles, ecc.)
├── content/        # Contenuti multilingua
│   ├── it/
│   ├── en/
│   └── fr/
├── layouts/        # Template Hugo
├── static/         # Immagini e file statici (favicon, css, img/)
├── config.toml     # Configurazione principale Hugo
├── netlify.toml    # Configurazione deploy Netlify
└── README.md
```

---

## 🧑‍💻 Autore

Realizzato con ❤️ da [Manuel – Assembler Computer](https://studio.assemblercomputer.net/)

Contatti diretti? [📧 emalinux77@gmail.com](mailto:emalinux77@gmail.com)


⸻
```plaintext
📝 Note tecniche
	•	✅ Tema custom responsive e leggero (senza framework)
	•	✅ Multilingua gestito via struttura /content/
	•	✅ Ottimizzato per SEO e prestazioni
	•	✅ Favicon personalizzata
	•	🚀 Deploy preview per testing su Netlify
```
