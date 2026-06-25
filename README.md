on progress - di service/sps-service ini yg blm diisi: audio.service.js, lyric.service.js, timestamp.service.js, syllable.service.js, sps.service.js, chart.service.js (23 juni 2026) - ini ga tau udh apa blm, nanti perlu dicek aja

syllable service done, udh di test di postman pake (POST) blablabla.../api/analyze, dan menuliskan body begini:
```json
{
  "url": "https://youtube.com/watch?v=test"
}
```

Hasil:
```json
{
  "success": true,
  "source": "youtube",
  "url": "https://youtube.com/watch?v=test",

  "audioReady": true,
  "audioPath": "/tmp/youtube-audio.wav",

  "lyricReady": true,
  "lyric": "dummy lyric data",

  "timestampReady": true,
  "timestamps": [
    { "word": "dummy", "start": 0,   "end": 0.4 },
    { "word": "lyric", "start": 0.5, "end": 0.9 },
    { "word": "data",  "start": 1,   "end": 1.3 }
  ],

  "spsReady": true,
  "averageSPS": 2.31,
  "peakSPS": 3.33,
  "peakTime": 1,
  "totalSyllables": 3,
  "spsTimeline": [
    { "time": 0,   "sps": 2.5  },
    { "time": 0.5, "sps": 2.5  },
    { "time": 1,   "sps": 3.33 }
  ]
}
```
(25 juni 2026) - next step: chart service

# Rap Scannr

Lorem ipsum.

Click this to open the website :

[![Flant](https://img.shields.io/badge/Rap%20Scannr%20-Visit-white)](https:)

Or you can copy this link and paste it into your browser:

```
https:/
```

## ✨ Features

## 🧩 Problem

## 💡 Solution

## 📋 Software Development Life Cycle (SDLC)

## 🏗️ System Architecture Diagram
![Software Architecture](https://github.com/devinammar/Rap-Scannr/blob/cb4d6edaa730a9c35edfb3887276a60ce019631d/Software%20Architecture.jpg)

## 🛠️ Tech Stack

- ### HTML, Tailwind CSS, ReactJS + Vite
- ### Node.js, Express.js & Docker
- ### Sanity.io (CMS)
- ### API:
- ### Figma
  [Wireframe](https://www.figma.com/design/ECInGwBuF689zUZwcwnTu5/Rap-Scannr?m=auto&t=lCAtNV5CoYEmhxdH-1)
  
- ### Adobe Photoshop

All stock photos used for this project are from Pexels and Unsplash

<i> Copyright © 2026 devinammar. All rights reserved.

This repository is publicly visible. You are free to view the source code and use the live website as an end user.

However, no part of this codebase may be copied, modified, distributed, sublicensed, or used to create derivative works without explicit written permission from the copyright holder.</i>
