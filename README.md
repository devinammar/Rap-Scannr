on progress

# Rap Scannr

Rap Scannr is an AI-powered web platform designed to analyze rap speed, allowing anyone to analyze and compare rap songs using music links from various streaming platforms. Users can explore detailed information about each track, including rap speed statistics, flow visualization, and performance comparisons through an intuitive and user-friendly interface. By combining artificial intelligence (AI) with interactive data visualization, Rap Scannr provides a modern and accessible way to explore rap music from a more objective and analytical perspective.

Click this to open the website :

[![RapScannr](https://img.shields.io/badge/Rap%20Scannr%20-Visit-white)](https:)

Or you can copy this link and paste it into your browser:

```
https:/
```

## ✨ Features

This platform provides 2 features that users can utilize. Below is an explanation of both features and their functionalities.

### 1. Track Analysis
Track Analysis allows users to analyze a single rap song simply by entering the song link from a music streaming platform. Once the analysis process is complete, the system will display various information regarding the rap performance in that song, enabling users to understand the characteristics of the flow, tempo, and rap dynamics more objectively.
<br><br>
The displayed information includes:
- Song title & artist name
- SPS Over Time graph
- Average SPS (Syllables Per Second)
- Peak SPS
- Total syllable count
- Total word count
- Time of Peak SPS occurrence

### 2. Rap Battle
Rap Battle allows users to compare two rap songs directly simply by entering two song links from a supported music streaming platform. Once both songs have been analyzed, the system will display the analysis results for each song along with a performance comparison, making it easier for users to see the differences in rap techniques.
<br><br>
In addition to the analysis results for each song, Rap Battle provides an Overall Comparison that helps users see the differences between the two songs based on their Average SPS and Peak SPS.

## 🎯 Goals & Objectives

Rap Scannr was developed to provide a platform that helps users analyze and compare the performance of rap songs (especially the speed of rap songs) more objectively through easy-to-understand data visualizations.
<br><br>
The platform is designed for a wide range of users, including:

- Rap music enthusiasts who want to track the performance of their favorite songs or rappers
- Rappers looking to evaluate their own rap techniques and performance
- Content creators who produce content focused on music or rap analysis
- Researchers interested in music and audio analysis

## 📋 Software Development Life Cycle (SDLC)

## 🏗️ System Architecture
![Software Architecture](https://github.com/devinammar/Rap-Scannr/blob/cb4d6edaa730a9c35edfb3887276a60ce019631d/Software%20Architecture.jpg)

### File Structure
```
Rap-Scannr
│
├── README.md
├── .gitignore
│
├── backend
│   │
│   ├── .gitignore
│   ├── docker-compose.yml
│   │
│   ├── gateway
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── app.js
│   │   ├── server.js
│   │   │
│   │   └── routes
│   │       └── gateway.routes.js
│   │
│   └── services
│       │
│       └── sps-service
│           │
│           ├── package.json
│           ├── package-lock.json
│           ├── server.js
│           ├── app.js
│           ├── result.json
│           │
│           ├── test-audio.js
│           ├── test-download.js
│           ├── test-lyric.js
│           ├── test-sps.js
│           ├── test-syllable.js
│           └── test-whisper.js
│           │
│           ├── routes
│           │   └── analysis.routes.js
│           │
│           ├── modules
│           │   │
│           │   ├── chart
│           │   │   ├── chart.controller.js
│           │   │   └── chart.service.js
│           │   │
│           │   ├── get-audio
│           │   │   ├── audio.controller.js
│           │   │   ├── audio.service.js
│           │   │   └── audio.utils.js
│           │   │
│           │   ├── get-lyric
│           │   │   ├── lyric.controller.js
│           │   │   ├── lyric.service.js
│           │   │   └── whisper.client.js
│           │   │
│           │   ├── source-handler
│           │   │   ├── providerFactory.js
│           │   │   ├── sourceHandler.controller.js
│           │   │   ├── sourceHandler.service.js
│           │   │   │
│           │   │   └── providers
│           │   │       ├── appleMusic.provider.js
│           │   │       ├── deezer.provider.js
│           │   │       ├── generic.provider.js
│           │   │       ├── soundcloud.provider.js
│           │   │       ├── spotify.provider.js
│           │   │       └── youtube.provider.js
│           │   │
│           │   ├── sps
│           │   │   ├── metric.service.js
│           │   │   ├── sps.controller.js
│           │   │   └── sps.service.js
│           │   │
│           │   ├── syllable
│           │   │   ├── syllable.controller.js
│           │   │   ├── syllable.service.js
│           │   │   └── syllable.utils.js
│           │   │
│           │   └── timestamp
│           │       ├── timestamp.controller.js
│           │       └── timestamp.service.js
│           │
│           ├── utils
│           │   ├── appleMusicMetadata.js
│           │   ├── deezerMetadata.js
│           │   ├── soundcloudMetadata.js
│           │   ├── spotifyMetadata.js
│           │   ├── spsCalculator.js
│           │   ├── syllableCounter.js
│           │   ├── whisperJsonParser.js
│           │   ├── whisperParser.js
│           │   ├── whisperRunner.js
│           │   ├── youtubeDownloader.js
│           │   └── youtubeSearch.js
│           │
│           └── whisper.cpp
│               └── (external Whisper.cpp source code)
│
│
├── public ── (media assets)
│   │
│   ├── ashok-chakravarthi-WwhQ9u8EhkI-unsplash.jpg
│   ├── banner1.png
│   ├── facebook.png
│   ├── github.png
│   ├── hamburgericonblack.png
│   ├── hamburgericonwhite.png
│   ├── imagearea2.jpg
│   ├── imagearea3-1.png
│   ├── imagearea3-2.png
│   ├── imagearea3-3.png
│   ├── instagram.png
│   ├── linkedin.png
│   ├── next.png
│   ├── nextgrey.png
│   ├── pexels-din-127253222-14853507.jpg
│   ├── pexels-erick-richards-2112514569-30316347.jpg
│   ├── pexels-introspectivedsgn-7464823.jpg
│   ├── pexels-zachtheshoota-2067689.jpg
│   ├── previous.png
│   └── previousgrey.png
│
│
├── src
│   │
│   ├── main.jsx
│   ├── main.css
│   │
│   ├── assets
│   │   └── react.svg
│   │
│   ├── cms
│   │   └── sanityClient.js
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── hooks
│   │   ├── useHideOnScroll.js
│   │   ├── useRapBattle.js
│   │   └── useTrackAnalysis.js
│   │
│   ├── pages
│   │   ├── about.jsx
│   │   ├── home.jsx
│   │   ├── profile.jsx
│   │   ├── rapbattle.jsx
│   │   └── trackanalysis.jsx
│   │
│   └── components
│       │
│       ├── OverallComparison.jsx
│       ├── PeakSpeedInfo.jsx
│       ├── SPSOverTimeChart.jsx
│       ├── StatisticTable.jsx
│       ├── TitleAndArtist.jsx
│       ├── button.jsx
│       ├── searchbar.jsx
│       ├── sidebar.jsx
│       ├── staticbanner.jsx
│       ├── topbar.jsx
│       │
│       ├── home
│       │   ├── area1.jsx
│       │   ├── area2.jsx
│       │   ├── area3.jsx
│       │   ├── area4.jsx
│       │   ├── area5.jsx
│       │   └── area6.jsx
│       │
│       ├── rapbattle
│       │   ├── area1.jsx
│       │   └── area2.jsx
│       │
│       └── trackanalysis
│           ├── area1.jsx
│           └── area2.jsx
│
└── vite.config.js
```

## 🛠️ Tech Stack

### Frontend
- HTML
- Tailwind CSS
- ReactJS + Vite

### Backend
- Node.js
- Express.js
- Docker

### CMS
- Sanity.io

### API & Library
- Groq; model whisper-large-v3-turbo from OpenAI ([Groq.com](https://groq.com/))
- YouTube MP3 API ([RapidAPI](https://rapidapi.com/ytjar/api/YouTube%20MP3))
- iTunes public API
- Deezer API
- soundcloud-scraper (from NPM)
- Recharts (Data Visualization)

### Deployment

### Design
- Figma (UI/UX) ([Wireframe](https://www.figma.com/design/ECInGwBuF689zUZwcwnTu5/Rap-Scannr?m=auto&t=lCAtNV5CoYEmhxdH-1))
- Adobe Photoshop (Create Logo)

## ⚙️ Implementation Details

## ❓ What is SPS (Syllable per Second)?

SPS (Syllables Per Second) is a measurement used to calculate how many syllables are delivered within one second of vocal performance. In rap analysis, SPS is commonly used to evaluate rap delivery speed, where a higher SPS value indicates that a rapper is articulating more syllables in a shorter amount of time. The calculation is performed by dividing the total number of syllables by the duration of the rap section in seconds: SPS = Total Syllables ÷ Duration (seconds). While speed is not the only factor that determines rap quality, SPS provides a quantitative way to analyze technical aspects of flow, cadence, and vocal intensity.
<br><br>
Syllables Per Second is a metric that is used in rap analysis and research to describe the rate at which syllables appear during a verse. Studies of rap flow have used syllable rate as one of the measurements to analyze rhythmic patterns and delivery speed across different artists and songs. However, SPS is not an official industry-wide standard like BPM (Beats Per Minute); instead, it is a commonly used analytical metric among rap enthusiasts, researchers, and music analysis tools for comparing vocal speed and flow complexity.
<br><br>
In Rap Scannr, SPS is used as one of the main metrics to visualize rap performance by showing changes in syllable delivery speed throughout a song. This allows users to identify sections with faster flows, measure peak rap speed, and compare delivery techniques between different songs through features such as Track Analysis and Rap Battle.
<br><br>
Source:
- https://paperzz.com/doc/8811954/mcflow--a-digital-corpus-of-rap-transcriptions
- https://emusicology.org/article/id/4737/
- https://worldcrunch.com/culture-society/syllable-counting-and-the-secret-to-the-39speed39-of-languages
- https://www.musictimes.com/articles/107117/20241224/10-fastest-rappers-world-syllable-speedsters-you-cant-miss-eminem-crucified.htm

## 📝 Notes
All stock photos used for this project are from Pexels and Unsplash

<i> Copyright © 2026 devinammar. All rights reserved.

This repository is publicly visible. You are free to view the source code and use the live website as an end user.

However, no part of this codebase may be copied, modified, distributed, sublicensed, or used to create derivative works without explicit written permission from the copyright holder.</i>
