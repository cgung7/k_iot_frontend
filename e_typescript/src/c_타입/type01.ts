//type01.ts

//! == 타입스크립트 '타입' ==
// : 타입 명시(작성)가 필수 사항 X
// - 프로그램 안정성 향상과 가독성 높이는 역할

//? 타입 명시 방법
// : 타입 어노테이션(type annotation - 타입 주석)
// - 변수명 뒤에 콜론을 사용하여 타입 지정
// >> 앞의데이터: 뒤의 데이터

//? 타입 종류
//& 1. 기본 타입(원시타입 - string, number, boolean 등)
// typeof 연산자 (문자열로 타입 반환)

let name: string = '최광섭';
let age: number = 35;
let isStudent: boolean = false;
// 권장) 변수종류 변수명: 타입명 = 값;

let anyData = '문자열'; // 타입 작성 생략 가능: 타입 체킹을 생략 X
// anyData = 123; //? 타입을 명시하지 않아도 초기화 데이터 타입 지정 
// //Type 'number' is not assignable to type 'string'.ts(2322)

//& 2. 배열 타입
// 1) 기본 타입명 뒤에 []로 첨부
let list1: string[] = ['1', '2', '3'];

// 2) 제네릭 타입: Array<타입명>
let list2: Array<number> = [1, 2, 3];

//& 3. void 타입
// : 아무런 값이 없음을 나타냄
// - 주로 함수의 반환값이 없거나, return 키워드 뒤에 값이 없는 경우

//? 함수 타입 지정 방법
// function 함수명 (파라미터: 타입): 반환타입 { ... }

// Parameter 'parameter' implicitly has an 'any' type.ts
// >> TS에서는 파라미터 타입 미지정 시 오류 발생
function voidType(parameter: number): void {
  console.log(parameter);
  return;
}

voidType(10);

function stringReturn(str1: string, str2: string): string {
  return str1 + str2;
}

console.log(stringReturn('최', '광섭'));

//& 4. null & undefined
// null: 아무것도 없음, 데이터가 잘못된 경우
// undefined: 변수 생성은 했지만, 안에 값이 없을 경우

//? JS와의 차이점
// : JS는 각각의 타입에 다른 타입의 데이터 지정 가능
// > TS는 각각의 타입으로 지정된 변수는 각 타입만 할당 가능

let nullTyle: null = null; // 타입 주석을 사용한 타입 강화 시
// nullTyle = 'hello'; 
//Type '"hello"' is not assignable to type 'null'.ts(2322)
nullTyle = null;

let undefinedType: undefined;
// undefinedType = 'hello';
// undefinedType = 123;

//& any 타입 (모든)
// : 모든 타입에 대해 허용하는 타입
// - 타입 검사 오류 방지를 위해 사용 (모든 타입과 호환 가능)
// - 사전에 오류 타입 계산 불가! (ts를 js처럼 사용)

let anyType: any = 3;
anyType = 'hello';
anyType = 123;
anyType = {};
anyType = [];

let unknownData;
// : 선언 시 직접적인 타입 명시를 하지 않을 경우
//    >> 값이 할당되기 전까지 자동으로 any 타입으로 간주

//& 6. never 타입
// : 절대 발생하지 않는 값의 타입
// - 함수가 예외를 발생시키거나, 끝나지 않을 때 사용
function error (message: string): never {
  throw new Error(message);
}

// error('에러 발생');

//! 타입 어노테이션 사용 ==
//? 문제 1: 기본타입 정의
// username은 문자열, userAge는 숫자, isSubscribed는 불리언 값으로 타입을 정의
let username: string = '최광섭';
let userAge:number = 35;
let isSubscribed:boolean = true;

//? 문제 2: 배열 타입 정의하기
// 문자열 배열 fruits와 숫자배열 numbers를 정의
let fruits:string[] = ['사과', '바나나'];
let numbers: Array<number> = [1, 2, 3];

//? 문제 3: void타입을 사용하는 함수 정의하기
// 아무런 값을 반환하지 않고, 매개변수로 받은 메세지를 콘솔에 출력하는 함수 printMassage를 정의
let printMassage:void;