// event02.js

//? ramdom 함수 정의: 0부터 255까지이 랜덤 숫자 생성
function ramdom(number) {
  return Math.floor(Math.random() * (number + 1))
}

//? randomColorFunc 함수 정의: 랜덤 색상 생성
function randomColorFunc() {
  return `rgb(${ramdom(255)}, ${ramdom(255)}, ${ramdom(255)})`;
}

//! === 이벤트 객체  === //
// : 이벤트 핸들러가 호출될 때
//    , 브라우저가 자동으로 '이벤트 객체'를 생성하여 이벤트 핸들러에게 전달