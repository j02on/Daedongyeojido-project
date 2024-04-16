const input = document.querySelector(".text");
const addBtn = document.querySelector(".btn4");
const wrapper = document.querySelector(".listadd");
const correction = "";
const del = "";

//날짜&요일
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();

const dayName = function () {
  switch (date.getDay()) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
  }
};
today_date.innerHTML = `${year}년 ${month}월 ${day}일 ${dayName()}`;

function addTodo() {
  const a = document.createElement("li");
  const message = document.createElement("div");
  message.innerHTML = input.value;
  a.appendChild(message);
  input.value = "";
  a.classList.add("inputText"); // 입력창에 클래스 추가

  const correction = document.createElement("button");
  correction.classList.add("fixBtn"); // 수정 버튼에 클래스 추가
  correction.textContent = "수정";

  const del = document.createElement("button");
  del.classList.add("delBtn"); // 삭제 버튼에 클래스 추가
  del.textContent = "삭제";

  wrapper.appendChild(a);

  const btnWrapper = document.createElement("div");
  btnWrapper.style.marginRight = "10px";
  btnWrapper.appendChild(correction);
  btnWrapper.appendChild(del);
  a.appendChild(btnWrapper);

  correction.addEventListener("click", function () {
    const editValue = prompt("수정할 내용을 적어주세요.");
    editValue && (message.innerText = editValue);
  });

  del.addEventListener("click", function () {
    wrapper.removeChild(a);
  });
}

addBtn.addEventListener("click", function () {
  addTodo();
});

input.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    addTodo();
  }
});
