# import required modules
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

# explicit function to turn off mic and cam
def turnOffMicCam():

    time.sleep(5)

    # Turn off Microphone
    driver.find_element(By.XPATH, '//div[@aria-label="Turn off microphone"]').click()
    driver.implicitly_wait(3000)

    # turn off camera
    driver.find_element(By.XPATH, '//div[@aria-label="Turn off camera"]').click()
    driver.implicitly_wait(3000)
    
# Function to handle guest name entry
def enterGuestName(name):
    time.sleep(2)
    name_input = driver.find_element(By.XPATH, '//input[@id="identifierId" or contains(@aria-label, "Your name")]')
    name_input.clear()
    name_input.send_keys(name)
    time.sleep(1)

# Ask to join
def AskToJoin():
	# Ask to Join meet
	time.sleep(2)
	driver.implicitly_wait(2000)
    
    # Click "Ask to join" or similar button
	driver.find_element(By.XPATH, '//span[contains(text(), "Ask to join") or contains(text(), "Join")]').click()
	time.sleep(2)
    
# Click on join now
def joinNow():

    # Join meet
    print(1)
    time.sleep(5)
    driver.implicitly_wait(2000)
    driver.find_element(By.CSS_SELECTOR,
        'div.uArJ5e.UQuaGc.Y5sE8d.uyXBBb.xKiqt').click()
    print(1)
	

    # creating chrome instance

# Inject custom JavaScript and start screen capturing
def startScreenCapturing():
    driver.implicitly_wait(10000)
  
    print('Trying to execute script')
   
    driver.execute_cdp_cmd("Runtime.evaluate", {
         "expression":"""
(async () => {
   try {
    const stream = await navigator.mediaDevices.getDisplayMedia( {video: {
displaySurface: "browser",
},
audio: {
suppressLocalAudioPlayback: false,
},
preferCurrentTab: true});
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
  const mediaRecorder = new MediaRecorder(stream);
            const chunks = [];

            mediaRecorder.ondataavailable = (event) => {
                chunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'video/webm' });
                
                // Send the video blob to the backend
                const formData = new FormData();
                formData.append("video", blob);
                
                // Make an HTTP request to your backend
                fetch("http://localhost:3000/upload", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(data => console.log("Video uploaded", data))
                .catch(err => console.error("Error uploading video", err));
            };

            mediaRecorder.start(1000); // Record video in chunks every 1 second

            // Stop recording after a certain time, e.g., after 10 seconds
            setTimeout(() => {
                mediaRecorder.stop();
            }, 10000); // Stop after 10 seconds

        } catch (err) {
            console.error('Error starting screen capture:', err);
        }
})();
"""})
    
    print("Injected JavaScript for screen capturing")
    driver.implicitly_wait(5)

opt = Options()
opt.add_argument('--disable-blink-features=AutomationControlled')
opt.add_argument("--use-fake-ui-for-media-stream")
opt.add_argument('--start-maximized')
opt.add_experimental_option("prefs", {
	"profile.default_content_setting_values.media_stream_mic": 1,
	"profile.default_content_setting_values.media_stream_camera": 1,
	"profile.default_content_setting_values.geolocation": 0,
	"profile.default_content_setting_values.notifications": 1
})

driver = webdriver.Chrome(options=opt)

# go to google meet
driver.get('https://meet.google.com/amb-zmxy-omu')
# driver.get('https://meet.google.com/uvz-wdyc-qgd')

guest_name= "I am Fathom"

turnOffMicCam()
enterGuestName(guest_name)
AskToJoin()
# joinNow()
startScreenCapturing()
input('HELLO')

