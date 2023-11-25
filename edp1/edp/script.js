let timerInterval;
    let remainingTime = 12 * 60 * 1000; // 12 minutes in milliseconds
    let isTimerRunning = false;

    function startStopTimer() {
      if (isTimerRunning) {
        // Stop the timer
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById("startStopButton").innerText = "Start";
      } else {
        // Start the timer
        timerInterval = setInterval(updateTimer, 10);
        isTimerRunning = true;
        document.getElementById("startStopButton").innerText = "Stop";
      }
    }

    function updateTimer() {
      remainingTime -= 10;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        document.getElementById("startStopButton").innerText = "Start";
        document.getElementById("timer").innerText = "00:00.00";
        playHornSound();
        return;
      }

      const minutes = Math.floor(remainingTime / 60000);
      const seconds = Math.floor((remainingTime % 60000) / 1000);
      const milliseconds = remainingTime % 1000;

      const formattedTime = `${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 3)}`;
      document.getElementById("timer").innerText = formattedTime;
    }

    function padZero(number, length = 2) {
      return number.toString().padStart(length, "0");
    }

    function playHornSound() {
      const hornSound = document.getElementById("hornSound");
      hornSound.play();
    }

    document.addEventListener('keydown', function(event) {
      if (event.code === 'Space' && event.target === document.body) {
        event.preventDefault();
        startStopTimer();
      }
    });


    // teamname//
     function changename() {
      const newHeading = document.getElementById("textInput").value;
      document.getElementById("teamname").innerText = newHeading;
    }


    // teamname2//
     function changename2() {
      const newHeading = document.getElementById("textInput2").value;
      document.getElementById("teamname2").innerText = newHeading;
    }



    // quarter//
     function changeHeading() {
      const selectedOption = document.getElementById("selectOption");
      const newHeading = selectedOption.options[selectedOption.selectedIndex].value;
      document.getElementById("dynamicHeading").innerText = newHeading;
    }


    // Score1//
let score = 0;

function increaseScore(value) {
  score += value;
  document.getElementById("score").innerText = score;
}

function decreaseScore() {
  score--;
  document.getElementById("score").innerText = score;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "a") {
    increaseScore(1);
  } else if (event.key === "s") {
    increaseScore(2);
  } else if (event.key === "d") {
    increaseScore(3);
  } else if (event.key === "f") {
    decreaseScore();
  }
});



    // Score2//

      let score2 = 0;

function increaseScore2(value) {
  score2 += value;
  document.getElementById("score2").innerText = score2;
}

function decreaseScore2() {
  score2--;
  document.getElementById("score2").innerText = score2;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "j") {
    increaseScore2(1);
  } else if (event.key === "k") {
    increaseScore2(2);
  } else if (event.key === "l") {
    increaseScore2(3);
  } else if (event.key === "h") {
    decreaseScore2();
  }
});

    // pop up//
    function showTimeoutPopup() {
      const popup = document.getElementById("timeoutPopup");
      popup.style.display = "block";
    }

    function hideTimeoutPopup() {
      const popup = document.getElementById("timeoutPopup");
      popup.style.display = "none";
    }


    // timeout

     let countdown;

function showTimeoutPopup() {
  const popup = document.getElementById("timeoutPopup");
  popup.style.display = "block";
  startCountdown();
}

function hideTimeoutPopup() {
  const popup = document.getElementById("timeoutPopup");
  popup.style.display = "none";
  stopCountdown();
}

function startCountdown() {
  let time = 30;
  const timerElement = document.getElementById("time");
  timerElement.innerText = time;

  countdown = setInterval(function() {
    time--;
    timerElement.innerText = time;
    if (time === 0) {
      stopCountdown();
      playNotificationSound();
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdown);
}

function playNotificationSound() {
  const audio = new Audio('timeot.mp3');
  audio.play();
}

document.addEventListener("keydown", function(event) {
  if (event.key === "c") {
    showTimeoutPopup();
  }
});


    // timeout2

    let countdown2;

function showTimeoutPopup2() {
  const popup2 = document.getElementById("timeoutPopup2");
  popup2.style.display = "block";
  startCountdown2();
}

function hideTimeoutPopup2() {
  const popup2 = document.getElementById("timeoutPopup2");
  popup2.style.display = "none";
  stopCountdown2();
}

function startCountdown2() {
  let time2 = 30;
  const timerElement2 = document.getElementById("time2");
  timerElement2.innerText = time2;

  countdown2 = setInterval(function() {
    time2--;
    timerElement2.innerText = time2;
    if (time2 === 0) {
      stopCountdown2();
      playNotificationSound2();
    }
  }, 1000);
}

function stopCountdown2() {
  clearInterval(countdown2);
}

function playNotificationSound2() {
  const audio = new Audio('timeot.mp3');
  audio.play();
}

document.addEventListener("keydown", function(event) {
  if (event.key === "n") {
    showTimeoutPopup2();
  }
});


function resizeToFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}

const fullscreenButton = document.createElement("button");
fullscreenButton.innerText = "Full Screen";
fullscreenButton.addEventListener("click", resizeToFullScreen);

document.body.appendChild(fullscreenButton);



// logo
function handleFileInputChange(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      // When the file is loaded, set the src attribute of the img tag to the image data
      reader.onload = function(e) {
        const img = document.getElementById('uploaded-image');
        img.src = e.target.result;
      }
      
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }



function handleFileInputChange2(event) {
      const file2 = event.target.files[0];
      const reader2 = new FileReader();
      
      // When the file is loaded, set the src attribute of the img tag to the image data
      reader2.onload = function(e) {
        const img2 = document.getElementById('uploaded-image2');
        img2.src = e.target.result;
      }
      
      // Read the file as a data URL
      reader2.readAsDataURL(file2);
    }