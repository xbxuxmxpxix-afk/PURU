const container = document.getElementById("videoContainer");

const videos = JSON.parse(localStorage.getItem("videos")) || [];

if (videos.length === 0) {
    container.innerHTML = "<p>No videos uploaded yet.</p>";
}

videos.forEach(video => {
    const card = document.createElement("div");
    card.classList.add("video-card");

    card.innerHTML = `
        <img src="${video.thumbnail}" class="thumb">
        <h3>${video.title}</h3>
        <button class="playBtn">Play</button>
    `;

    card.querySelector(".playBtn").addEventListener("click", () => {
        const videoPlayer = document.createElement("video");
        videoPlayer.src = video.videoURL;
        videoPlayer.controls = true;
        videoPlayer.autoplay = true;
        videoPlayer.style.width = "100%";

        card.innerHTML = "";
        card.appendChild(videoPlayer);
    });

    container.appendChild(card);
});
