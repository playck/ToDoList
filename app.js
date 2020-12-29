const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
let list = document.querySelector('.notCompleted');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.keyCode === 13 ? addList() : null)
});

// todolist 라인 및 내용 추가
function addList() {
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');
    const newLi = document.createElement('li');

    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const returnBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    returnBtn.innerHTML = '<i class="fas fa-undo-alt"></i>';


    if(input.value !== ''){
        newLi.textContent = input.value;
        notCompleted.appendChild(newLi);
        newLi.appendChild(returnBtn);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
        returnBtn.style.display = 'none'
        input.value = ""
    }

    // 완료 구간으로 보내기
    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
        returnBtn.style.display = "block";
    });

    // 삭제
    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    })

    // 미완료 구간으로 보내기
    returnBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        notCompleted.appendChild(parent); 
        returnBtn.style.display = "none";
        checkBtn.style.display = "block"; 
    })

    saveLocalTodos();
}

// localStroage 저장하기
function saveLocalTodos () {
    window.localStorage.todos = list.innerHTML;
}

// localStroage 값 가져오기
function init() {
    let todos = window.localStorage.todos;
    if(todos){
        list.innerHTML = todos;
    }
}

init();