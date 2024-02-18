const terminalInput = document.getElementById("input");
const terminalOutput = document.getElementById("output");
var files = ["4.8k\t\troot\tnext.html"];
const typingSpeed = 40; // Adjust the typing speed as needed (characters per second)

terminalInput.value = "";

terminalInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleCommand(terminalInput.value);
    terminalInput.value = "";
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// sleep(2000).then(() => { console.log('World!'); });

function handleCommand(command) {
  if (command === "ls") {
    typeText("\nSize\t\tUser\tName\n");
    sleep(typingSpeed * 17).then(() => {
      typeText("", () => listFiles());
    });
  } else if (command.startsWith("cd ")) {
    const filename = command.slice(3);
    redirectWebsite(filename);
  } else if (command === "help") {
    typeText("\nInstalled commands: \nls\ncd\npwd\n");
  } else if (command === "clear") {
    redirectWebsite("index.html");
  } else if (command === "pwd") {
    typeText("/home/root");
  } else {
    typeText(`\nCommand not recognized: ${command}\n`);
  }
}

function listFiles() {
  let index = 0;
  function typeFile() {
    if (index < files.length) {
      typeText(files[index] + "\n", () => {
        index++;
        setTimeout(typeFile, 100); // Adjust typing speed as needed
      });
    }
  }

  typeFile();
}

function redirectWebsite(filename) {
  if (filename === "index.html") {
    window.location.href = "index.html";
  } else if (filename === "next.html") {
    typeText(`Redirecting to ${filename}...\n`, () => {
      window.location.href = filename;
    });
  } else {
    typeText(`File not found: ${filename}\n`);
  }
}

function typeText(text, callback = null) {
  const speed = typingSpeed; // Adjust typing speed
  let index = 0;
  const output = terminalOutput.textContent;

  function type() {
    if (index < text.length) {
      terminalOutput.textContent = output + text.substring(0, index + 1);
      index++;
      setTimeout(type, speed);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  type();
}

var makeItRain = function () {
  //clear out everything
  $(".rain").empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  $(".rain.front-row").append(drops);
  $(".rain.back-row").append(backDrops);
};

makeItRain();
var cssDisabled = false;

function toggleCSS() {
  var stylesheets = document.styleSheets;

  for (var i = 0; i < stylesheets.length; i++) {
    stylesheets[i].disabled = cssDisabled;
  }

  cssDisabled = !cssDisabled;
}

var isBackground1 = true; // Variable to track the current background

function toggleWallpaper() {
  var newImageUrl = isBackground1
    ? "./assets/pretty_sky.gif"
    : "./assets/purplesky.gif";
  document.body.style.backgroundImage = 'url("' + newImageUrl + '")';

  // Toggle the variable for the next click
  isBackground1 = !isBackground1;
}
