const GITHUB_URL = "https://api.github.com/users/DovidBaars";

fetch(GITHUB_URL) 
  .then(function(response) {
    return response.json();
  })
  
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const myName = document.getElementById("my-name");
    myName.textContent = data.name;
    });
  
var codingLanguages = ["HTML", "CSS", "JavaScript"];
var codingLanguagesAsString = codingLanguages.join(', ');
document.getElementById("codinglanguages").innerHTML = codingLanguagesAsString;
    
    console.log(codingLanguagesAsString);  


let firstName = document.querySelector('#firstname');
let lastName = document.querySelector('#lastname');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let howtToReply = document.querySelector('input[name="replytype"]:checked');
let comments = document.querySelector('#comments');
let subscribe = document.querySelector('#subscribe'); 
let form       = document.querySelector('.form');

form.onsubmit = function(){
  console.log('First Name:' , firstName.value , ',' , 'Last Name:' , lastName.value , ',' , 'Email:' , email.value , ',' , 'Phone Number:' , phone.value , ',' , 'How To Contact:' , howtToReply.value , ',' , 'Comments:' , comments.value);
}


  let currentlySelected = 0;
  const nodes = document.querySelectorAll(".gallery-map");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  
  function previous() {
    nextBtn.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected--;
    nodes[currentlySelected].classList.add("active");
  
    if (currentlySelected === 0) {
      prevBtn.disabled = true;
    }
  }
  
  function next() {
    prevBtn.disabled = false;
    nodes[currentlySelected].classList.remove("active");
    currentlySelected++;
    nodes[currentlySelected].classList.add("active");
  
    if (currentlySelected + 1 === nodes.length) {
      nextBtn.disabled = true;
    }
  }
  
  function init() {
    prevBtn.addEventListener("click", function() {
      previous();
    });
  
    nextBtn.addEventListener("click", function(e) {
      next();
    });
  }
  
  init();

