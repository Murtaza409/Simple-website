//open speech api for our English course
document.getElementById("open-speech").addEventListener("click", open_speech);

function open_speech() {
  const value = document.getElementById("email-speech").value;
  const result = value.endsWith("@gmail.com");
  if (result) {
    window.location.href = "speech/main.html";
  } else {
    window.alert("somthing went wrong");
  }
  cleanEmail();
}
function cleanEmail() {
  document.getElementById("email-speech").value = "";
}

// writing text about our group
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;

      this.wordIndex++;

      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}

//learn more about this project
document.querySelector("#button-image").addEventListener("click", button_image);

function button_image() {
  window.location.href = "showImage/index.html";
  // console.log(123);
}

// go w3school website
document.getElementById("w3school").addEventListener("click", () => {
  window.location.href = "https://www.w3schools.com/";
});

// react online
document.getElementById("react-online").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/@programmingwithmosh";
});

// React image go online
document.getElementById("react-image").addEventListener("click", () => {
  window.location.href = "https://react.dev/";
});

// jump to face book
document.getElementById("murtaza-facebook").addEventListener("click", () => {
  window.location.href =
    "https://www.facebook.com/profile.php?id=100088905761282";
});

// see our student
document.getElementById("button-user").addEventListener("click", () => {
  window.location.href = "student/user.html";
});

//course i con
document.getElementById("course-icon").addEventListener("click", () => {
  window.location.href = "showImage/university.jpeg";
});

//student icon
document.getElementById("student-icon").addEventListener("click", () => {
  window.location.href = "student/course.jpeg";
});

//open python code for python
document.getElementById("python-code").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/@coreyms";
});

//learn python from tutorialpoint website
document.getElementById("python-website").addEventListener("click", () => {
  window.location.href = "https://www.tutorialspoint.com/python/index.htm";
});

//open javascript code
document.getElementById("javascript-code").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=W6NZfCO5SIk";
});

// learn ai with this website
document.getElementById("ai-code").addEventListener("click", () => {
  window.location.href =
    "https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU";
});

document.getElementById("ai-website").addEventListener("click", () => {
  window.location.href =
    "https://www.coursera.org/courses?query=artificial%20intelligence";
});

function AI_image() {
  let random = Math.floor(Math.random() * 6) + 1;
  document.getElementById("ai-website").src = `AI/${random}.jpg`;
}
setInterval(AI_image, 1000);

// Student Rigestration or model
document
  .getElementById("student-rigestration")
  .addEventListener("click", () => {
    const name = document.getElementById("first-name").value;
    const last = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    if (name === "" || last === "" || email === "" || phone === "") {
      alert("please fill all information");
    } else if (email.endsWith("gmail.com")) {
      window.location.href = "student/RegistrationTable.html";
    } else {
      alert("your email is not correct");
    }
    clearInformation();
  });
function clearInformation() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

// Start free with our course
document.getElementById("free-start").addEventListener("click", () => {
  const email = document.getElementById("free-email-start").value;
  if (email.endsWith("@gmail.com")) {
    window.location.href = "student/javaScriptDomProject.html";
  } else {
    alert("your email is not correct");
  }
  clearFreeModal();
});

// clear infromation from free start
function clearFreeModal() {
  document.getElementById("free-email-start").value = "";
  document.getElementById("free-first-name").value = "";
}

// write very easy software engineer
let index = 0;
let text = "Software Engineer";
let time = 200;
function TypeWriterEngineer() {
  if (index < text.length) {
    document.getElementById("textWriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(TypeWriterEngineer, time);
  }
}
document.addEventListener("DOMContentLoaded", TypeWriterEngineer);
