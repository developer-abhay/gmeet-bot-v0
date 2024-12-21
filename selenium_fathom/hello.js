
try {
    const stream = await navigator.mediaDevices.getDisplayMedia( {video: {
displaySurface: "browser",
},
audio: {
suppressLocalAudioPlayback: false,
},
preferCurrentTab: true,});
    console.log('Screen capturing started:', stream);

    const video = document.createElement('video');
    video.style.position = 'absolute';
    video.style.top = '10px';
    video.style.right = '10px';
    video.style.width = '300px';
    video.style.zIndex = '9999';
    document.body.appendChild(video);

    video.srcObject = stream;
    video.play();
} catch (err) {
    console.error('Error starting screen capture:', err);
}
