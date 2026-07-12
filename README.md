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
![SDLC](https://github.com/devinammar/Rap-Scannr/blob/3231a28d6b1c90460466f55b89f47442d5d62986/Agile%20(SDLC).png)
Rap Scannr was developed using an iterative Agile approach. Each stage involves a continuous cycle comprising implementation, testing, evaluation, and refinement whenever improvements are required. This iterative workflow allows both the system architecture and application features to evolve effectively throughout the development process, rather than following a strictly linear path.
1. **Problem Identification and Requirements Analysis**

   At the beginning of the project, an analysis was conducted to identify the problems experienced by potential users, particularly rap music enthusiasts who wanted to explore rap performance beyond simply listening to songs. The application also aims to accept music links from multiple streaming platforms, process audio automatically, analyze rap performance using measurable metrics, visualize the analysis results, and provide comparison capabilities between two different tracks while maintaining a responsive and user-friendly web interface.

2. **UI/UX & System Design**

   During this stage, the User Interface (UI) and User Experience (UX) were designed, including the website layout, typography, color palette, and visual hierarchy using Figma. In addition, the Rap Scannr logo was designed using Adobe Photoshop to establish the website's visual identity. Concurrently with that process, the architecture and processing workflow for music links from various platforms are being designed to generate the data that will be displayed to the user. Furthermore, the technologies, libraries, APIs, and visual assets required throughout the development process were identified and selected.

3. **Frontend Development**

   The frontend application was developed using React.js, Vite, and Tailwind CSS with an emphasis on component reusability, responsive design, and maintainable project structure. Throughout development, the interface was continuously refined to improve responsiveness, user interaction, visual consistency, and overall usability across different screen sizes and devices

4. **Backend Development**
   
   The backend was developed using Node.js and Express, employing a modular architecture to facilitate system development and maintenance. The song analysis process encompasses audio transcription using OpenAI’s Whisper Large v3 Turbo AI model, timestamp extraction, syllable counting, calculation of Syllables Per Second (SPS), and the generation of graph data. Throughout development, the backend architecture was continuously refined by implementing the Provider Factory Pattern, Source Handlers, and platform-specific providers. This enables the system to support YouTube, Spotify, SoundCloud, Apple Music, and Deezer while adhering to software engineering best practices regarding code structure and workflows

5. **API Testing**
   
   Before integrating the frontend with the backend, all API endpoints were thoroughly tested using Postman to verify their correctness and reliability. Each endpoint was validated to ensure it returned accurate responses, handled invalid requests appropriately, and successfully processed music links from every supported streaming platform. Additional testing was performed to verify response consistency, error handling, timeout behavior, and overall communication between the API Gateway and the SPS Service, ensuring the backend was stable before frontend integration began

6. **Frontend–Backend Integration**
    
   After the backend services had been validated, the frontend application was integrated with the API Gateway using Axios. User interactions, including submitting music URLs for Track Analysis and Rap Battle, were connected to the backend processing pipeline. The returned analysis data, including song metadata, SPS statistics, charts, and comparison results was then rendered dynamically using reusable frontend components. This stage also involved verifying data synchronization, loading states, error handling, and the overall user experience throughout the integration process

7. **Feature Testing**
    
   Comprehensive testing was conducted on all implemented features to ensure the application functioned as expected under different scenarios. Both the Track Analysis and Rap Battle features were tested using music links from YouTube, Spotify, SoundCloud, Apple Music, and Deezer. Testing covered API communication, analysis accuracy, UI rendering, loading behavior, responsive layouts, and error handling. Any issues discovered during testing were immediately evaluated and resolved through iterative improvements before proceeding to the final deployment stage

8. **Deployment**


## 🏗️ System Architecture
![Software Architecture](https://github.com/devinammar/Rap-Scannr/blob/de59ece731c5b808a8cf0144519414badc43145f/Software%20Architecture%202.jpg)

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
- Postman
- Docker

### CMS
- Sanity.io

### API & Library
- Whisper Large v3 Turbo AI model from OpenAI ([Groq.com](https://groq.com/))
- YouTube MP3 API ([RapidAPI](https://rapidapi.com/ytjar/api/YouTube%20MP3))
- spotify-url-info ([NPM](https://www.npmjs.com/))
- iTunes public API
- Deezer API
- soundcloud-scraper ([NPM](https://www.npmjs.com/))
- ffmpeg (Audio Processing)
- cmu-pronouncing-dictionary-cjs ([NPM](https://www.npmjs.com/))
- syllable ([NPM](https://www.npmjs.com/))
- Recharts (Data Visualization)

### Deployment

### Design
- Figma (UI/UX) ([Wireframe](https://www.figma.com/design/ECInGwBuF689zUZwcwnTu5/Rap-Scannr?m=auto&t=lCAtNV5CoYEmhxdH-1))
- Adobe Photoshop (Create Logo)

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
