// main.ts
/*
  ! JS의 canvas 요소
  : HTML5의 <canvas> 태그를 이용하여 JavaScript로 동적인 그래픽을 그리는 기술
  - 웹 페이지에 도화지 같은 영역을 생성
  - 2D & 3D 그래픽, 애니메이션, 데이터 시각화 등의 시각적 효과 구현 가능
*/
var app = document.getElementById('app');
//! 2) 기본 상태 설정
var toolStatus = {
    color: '#000000', // 기본 검정색
    size: 5, // 기본 굵기
    isEraser: false // 기본 펜 모드
};
//! 3) 상태 변경 함수
// cf) keyof 연산자
// : 객체의 키값들을 숫자나 문자열 리터럴 유니언 값으로 생성
// EX) 'color' | 'size' | 'isEraser'
//? @Param: ToolStatus 타입의 키와 해당 키의 타입을 제네릭을 통해 설정
// EX) key: 'color', value: string (ToolStatus color의 타입)
// EX) key: 'size', value: number 
// EX) key: 'isEraser', value: boolean 
function setTool(key, value) {
    // key: 'color' | 'size' | 'isEraser'
    // value: 각 속성값에 맞는 타입을 가진 데이터
    toolStatus[key] = value; // 상태 업데이트
}
//! 4) 툴바를 만드는 함수
function createToolbar() {
    //& 색상 선택
    var colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = toolStatus.color; // 초기값 설정
    colorInput.oninput = function () { return setTool('color', colorInput.value); };
    //& 브러시 크기 조절
    var sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.min = '1';
    sizeInput.max = '10';
    // cf) input 태그의 value 값은 string
    sizeInput.value = toolStatus.size.toString();
    sizeInput.oninput = function () { return setTool('size', parseInt(sizeInput.value)); };
    //& 지우개 버튼
    var eraserButton = document.createElement('button');
    eraserButton.textContent = '지우개🧽';
    eraserButton.onclick = function () {
        // 상태 토글: 지우개 >> 펜, 펜 >> 지우개
        toolStatus.isEraser = !toolStatus.isEraser;
        eraserButton.textContent = toolStatus.isEraser ? '펜✒️' : '지우개🧽';
    };
    //& 캔버스 초기화 버튼
    var clearButton = document.createElement('button');
    clearButton.textContent = '초기화🗑️';
    // 지정된 사각형 영역을 지워 투명하게 만드는 기능(x시작, y시작, x끝, y끝);
    clearButton.onclick = function () { return ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height); };
    //& 그림 저장 버튼
    var saveButton = document.createElement('button');
    saveButton.textContent = '저장💾';
    saveButton.onclick = function () {
        var link = document.createElement('a');
        link.download = 'drowing.png'; // 저장 파일명
        link.href = canvas.toDataURL(); // 이미지 URL 생성
        link.click(); // 자동 다운로드 실행
    };
    //& 툴바 한 곳에 저장
    var toobar = document.createElement('div');
    toobar.className = 'toolbar🛠️';
    toobar.append(colorInput, sizeInput, eraserButton, clearButton, saveButton);
    //& 툴바 반환: HTMLElement
    return toobar;
}
//! 5) 캔버스 생성
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 500;
//! 6) 2D 그리기 컨텍스트 가져오기 (캔버스 영역을 JS로 가져오기)
var ctx = canvas.getContext('2d');
if (ctx) {
    ctx.lineCap = 'round'; // 선 끝 둥글게
}
//! 7) 마우스 이벤트 상태
var isDrowing = false;
//? 마우스 눌렀을 때
canvas.addEventListener('mousedown', function (e) {
    isDrowing = true;
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath(); // 경로 시작 - 그리기 시작
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(e.offsetX, e.offsetY); // 그리기 시작점 설정
});
//? 마우스 이동 시 (그림을 그리고 있을 때)
canvas.addEventListener('mousemove', function (e) {
    if (!isDrowing)
        return;
    if (ctx) {
        ctx.strokeStyle = toolStatus.isEraser ? '#ffffff' : toolStatus.color;
        ctx.lineWidth = toolStatus.size;
        ctx.lineTo(e.offsetX, e.offsetY); // 선을 그릴 좌표
        ctx.stroke(); // 선 그리기
    }
});
//? 마우스를 뗐을 때
canvas.addEventListener('mouseup', function () {
    isDrowing = false; // 그리기 종료
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath(); // 경로 종료
});
//? 캔버스를 벗어난 경우 (뗀 경우와 마찬가지로 종료)
canvas.addEventListener('mouseleave', function () {
    isDrowing = false; // 그리기 종료
    ctx === null || ctx === void 0 ? void 0 : ctx.closePath(); // 경로 종료
});
app === null || app === void 0 ? void 0 : app.appendChild(createToolbar());
app === null || app === void 0 ? void 0 : app.appendChild(canvas);
