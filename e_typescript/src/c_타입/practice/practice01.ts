// practice01.ts
// export const tmp = '';

//& ============ 유니언 =============//
//! 1. Union 타입을 사용한 변수 선언
// string, number, boolean 중 하나의 타입을 가질 수 있는 MixedType 변수를 선언하고, 각 타입에 해당하는 값을 할당하는 예시 코드를 작성

type MixedType = string | number | boolean;
let value1: MixedType;

value1 = 123;
value1 = true;
value1 = '문자';

//! 2. 함수 매개변수에 Union 타입 적용
// number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성

type double = string | number;

let value2: double;

function doubleOrNothing(value2: double) {

  if (typeof value2 === 'number') {
    value2 = value2 * 2;
    return value2;
  } else {
    return value2;
  }
}

console.log(doubleOrNothing(123));
console.log(doubleOrNothing('1234'));

//! 3. Union 타입과 타입 가드를 활용한 고급 예제
// Admin과 User 타입 명시
// - Admin은 id (number 타입)와 isAdmin (boolean 타입) 속성을, User는 id (number 타입)와 username (string 타입) 속성 포함
type Admin = {
  id: number;
  isAdmin: boolean;
}
type User = {
  id: number;
  username: string;
}

//? - 두 타입의 유니온 타입을 사용하여 Person 타입을 선언하고, id, isAdmin, username 중 적절한 속성을 가진 객체를 생성

type Person = Admin | User;

function createAdminUser(user: User): Person {
  return {...user, isAdmin:true};
}

function createOnlyUser(user: User): Person {
  return {...user, isAdmin:false};
}

let user1: User = {
  id: 1,
  username: 'asdf'
}
let user2: User = {
  id: 2,
  username: 'asdqwe'
}

let adminUser1 = createAdminUser(user1);
console.log(adminUser1);
let adminUser2 = createOnlyUser(user2);
console.log(adminUser2);

//? - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분해 출력하는 함수 identifyPerson을 작성

function identifyPerson(person: Person): void{
  if ('isAdmin' in person && person.isAdmin === true) {
    console.log(`${person.id}는 Admin입니다.`);
  }else {
    console.log(`${person.id}는 일반 User입니다.`);
  }
}

identifyPerson(adminUser1);
identifyPerson(adminUser2);
//& ============ 인터섹션 =============//
//! 문제 1: 기본 Intersection 타입 생성
// - Person 타입과 ContactDetails 타입을 결합하여 Employee 타입을 생성
// - Employee 타입은 Person의 모든 속성(name, age)과 ContactDetails의 모든 속성(email, phone)을 포함

type PersonType = {
  name: string;
  age: number;
}

type ContactDetails = {
  email: string;
  phone: string;
}

type Employee = PersonType & ContactDetails;

let employee01: Employee = {
  name: '최광섭',
  age:35,
  email: 'qwer1234',
  phone: '010-1111-2222'
}
let employee02: Employee = {
  name: '이승아',
  age: 29,
  email: 'qwer321',
  phone: '010-3333-2442'
}

//! 문제 2: 함수 반환 타입으로 Intersection 사용
// - Vehicle 타입과 Engine 타입을 결합하여 Car 타입 생성
// - createCar 함수를 구현하여, 주어진 Vehicle과 Engine 정보를 받아 Car 객체를 반환하도록 구현