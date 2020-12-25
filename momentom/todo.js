const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li) /*html 에서 지우기*/

    /*필터링(클릭한거 빼고 선택되도록)*/
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id) /*파라미터에 대한 조건*/;
    });

    toDos = cleanToDos; /* toDos를 새로 정의*/
    saveToDos(); /*새로 정의해서 바뀐 toDos를 local storage에 저장*/

   /*local storage 에서 지우기*/
};

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

let idNumbers = 1;

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    const input = document.createElement("input");

    const newId =  idNumbers;
    idNumbers += 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    input.type = 'time';
    input.min = '00:00';
    input.max = '23:59';
    input.className = 'WakeUpTime';
    input.value = '00:00';

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
    
function init() {
    loadToDos();
    toDoform.addEventListener("submit", handleSubmit);
}

init();