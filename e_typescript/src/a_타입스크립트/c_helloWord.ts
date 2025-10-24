// c_helloWord.ts

console.log('Hello TypeScript!');

let num: number = 3;
// num = '안녕하세요';

console.log(num);

//! cf) ts 코든느 실시간으로 js 컴파일 반영 x
//  +) TS 파일은 node 파일명.ts로 실행되지 X

// >> ts.node를 사용한 실시간 번역 및 실행
// : js 파일 생성 X
// : npm install ts-node --save-dev (프로젝트 최상단)
// : npm install -g ts-node (경로 상관X)
//? 설치 후 반드시 package.json 파일 확인
// (버전 확인) npx ts-node -v