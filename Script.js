let menuBttn = document.getElementById('menuBttn')
let sideBar = document.getElementById('sideBar')
let searchBtn = document.getElementById('clickBttn')
let content = document.getElementById('main')

menuBttn.onclick = function(){
  sideBar.classList.toggle("active");
  content.classList.toggle("active");
}


searchBtn.onclick = function(){
  sideBar.classList.toggle("active");
  content.classList.toggle("active");
}