const alarmContainer = document.querySelector('.js-alarm');
const currentTime = alarmContainer.querySelector('h1');
// input태그를 담을 전역변수 추가
const setTime = alarmContainer.querySelector('input');
// 설정한 시간을 가져오고 현재 시간과 비교하여 알람 기능을 할 함수
function getAlarm(){
const setValue = setTime.value; //input에 입력된 값을 변수에 담아줍니다.
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const current = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
if(current === setValue){
    alarmContainer.classList.add('alarmOn');
    } else {
    alarmContainer.classList.remove('alarmOn');
    }
    
}
function getTime(){
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
currentTime.innerText =
`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init(){
getTime();
setInterval(getTime, 1000);
setInterval(getAlarm, 1000);
}
init();
