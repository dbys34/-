
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
  const link = document.createElement("a");
  link.href = "popup.html";
  link.target ="_blank"
  link.innerText = "알람 미리보기";
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `안녕하세요, ${text} 님,\n 
  먼저 알람 이름을 입력하고 Enter 또는 알람 생성 버튼으로 알람을 만들고, 시간을 설정해주세요.\n
  설정한 시간이 되면 자동으로 깜빡이는 팝업창이 뜹니다.\n
  다른 페이지를 탐색하거나, 최소화(-) 시켜도 잘 작동합니다. \n
  새로고침하면 입력한 시간은 사라지니 주의해주세요. `;
  greeting.appendChild(link);

}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();