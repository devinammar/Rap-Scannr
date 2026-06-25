const processAudio = async ({ source, url }) => {
  if (!url) {
    throw new Error("URL is required");
  }

  // STEP 1 — Normalize input source
  let platform = "unknown";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    platform = "youtube";
  } else if (url.includes("spotify.com")) {
    platform = "spotify";
  } else if (url.includes("soundcloud.com")) {
    platform = "soundcloud";
  }

  // STEP 2 — Simulasi audio extraction
  // nanti ini bakal:
  // youtube → yt-dlp
  // spotify → (API / preview / workaround)
  // soundcloud → scraper / API

  const audioData = {
    success: true,
    source: platform,
    url,

    // core pipeline data
    audioReady: true,

    // ini nanti hasil real extraction
    audioPath: `/tmp/${platform}-audio.wav`,

    duration: 180, // dummy seconds
    format: "wav"
  };

  return audioData;
};

module.exports = {
  processAudio,
};