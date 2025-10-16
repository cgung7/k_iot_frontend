// event01.js

//! === 이벤트(event) === //
// : 웹 페이지에서 발생하는 대부분의 일(사전)을 의미

//! === 이벤트 핸들링 (handle: 다루다) ===
// : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미

//? > 이벤트 핸들러(리스너)
// : 특정 이벤트가 발생하면 호출되는 함수(= 콜백 함수)

//! === 이벤트 종류 === //



//! === 이벤트 핸들러 '등록' 방법 === //

// cf) 이벤트 핸들러 함수 정의
// > 이벤트에 반응하여 실행될 함수 (콜백 함수)
// > "랜덤 색상 생성 함수"
//    : rgb(r, g, b) - 0부터 255까지의 정수가 각각 지정

//? ramdom 함수 정의: 0부터 255까지이 랜덤 숫자 생성
function ramdom(number) {
  // 1) Math.random()
  // : 0이상 1미만의 부동 소수점 난수(실수의 무작위 값)를 생성하고 반환
  // EX) Math.random() * 256: 0이상 256미만의 부동 소수점 난수

  // 2) Math.floor()
  // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성하고 변환
  
  return Math.floor(Math.random() * (number + 1))
}

// EX) 0이상 101미만의 정수 생성
// : 0부터 N까지의 정수 생성 === Math.random() * (N + 1);
Math.random()           // 0 <= x < 1
Math.random() * 100     // 0 <= x <100
Math.random() * 101     // 0 <= x <101

//? randomColorFunc 함수 정의: 랜덤 색상 생성
function randomColorFunc() {
  return `rgb(${ramdom(255)}, ${ramdom(255)}, ${ramdom(255)})`;
}

//! 1) HTML 이벤트 핸들러 속성 (프로퍼티)
// : HTML 요소에 직접 이벤트 핸들러 속성 지정
// - HTML 요소를 JS 객체로 가져와 핸들러 속성을 지정

//? HTML 요소를 '참조(가져오는)'
// : 웹문서.선택자질문('선택자');
// > 선택자와 일치하는 문저 내에 첫 번째 Element를 반환
const bgButton = document.querySelector("#bgChange");

// cf) 해당 선택자 요소를 모두 반환
// : document.querySelectorAll("선택자");

// cf) on-키워드
// : 이벤트 종류를 웹 문서의 요소에 연결시켜주는 키워드
// - HTML 이벤트 핸들러 속성은 on키워드와 이벤트 사이에 대문자 변환이 발생하지 않는다.
bgButton.onclick = function() {
  const ramdomColor = randomColorFunc();

  // bg Button: 웹 요소(객체)
  // > HTML 요소 내의 속성을 객체의 속성처럼 사용
  // > JS에서는 스타일규칙을 lowerCamelCase로 사용
  bgButton.style.backgroundColor = ramdomColor;
  bgButton.style.border = '10px solid black';
}

const keydownPara = document.querySelector("#keydown");

// +) 키보드 이벤트는 요소에 직접적인 등록 X, 브라우저 전체 이벤트로 실행
//    >> 해당 요소의 디자인 변화는 직접 등록
window.onkeydown = function() {
  keydownPara.textContent = "안녕하세요 반갑습니다. :)";
}

//! 2) 인라인 이벤트 핸들러
// : HTML 태그에 직접 onclick, onkeydown 등의 이벤트 속성을 사용하여 함수 지정
// - 사용하지 않는 것을 권장 (유지보수/코드 파싱 어려움)
// >> 리액트에서 사용하는 방식

const textButton = document.querySelector('#textChange');

function textChangeColor() {
  const randomColor = randomColorFunc();
  textButton.style.color = randomColor;
}

//! 3) addEventListener 메서드
// : 표준 이벤트 모델
// : HTML 요소에 addEventListener 메서드를 사용하여 이벤트 등록
// - 한 요소에 여러 개의 이벤트 핸들러 등록 가능

const buttons = document.querySelectorAll('.buttonsChange');

// buttons: 동일한 선택자의 요소들이 배열로 반환
buttons.forEach(btn => {
  // HTML요소.addEventListener('이벤트', 콜백함수);
  // > HTML요소에 해당 이벤트가 발생하면 콜백함수를 실행
  btn.addEventListener('click', function() {
    const randomColor = randomColorFunc();
    btn.style.backgroundColor = randomColor;
  });
})

//! +) 이벤트 제거하는 방법
// : removeEventListener() 메서드 사용

const removeButton = document.querySelector('#remove');

let removeChange = () => {
  const ramdomColor = randomColorFunc();
  removeButton.style.backgroundColor = ramdomColor;
}

// 이벤트 리스너 등록
removeButton.addEventListener('click', removeChange);

// 이벤트 리스너 제거
removeButton.removeEventListener('click', removeChange);
