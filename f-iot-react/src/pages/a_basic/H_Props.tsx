import React, { Children } from 'react'

//! 자식 컴포넌트
// : 부모로부터 사용자에 대한 데이터를 전달(props)받아 UI로 반환
// - props는 객체 형태

type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = { user: User };

// 구조 분해 할당
const UserCard = ({ user }: UserCardProps) => {
  console.log(user.name);
  console.log(user.age);

  const { name, age, email } = user;

  console.log(name);
  console.log(age);
  console.log(email);

  return (
    <>
      <p>{user.name} / {user.age} / {user.email}</p>
      <p>{name} / {age} / {email}</p>
    </>
  )
}

//! Wrapper 컴포넌트
// : 디른 컴포넌트를 가싸는 컴포넌트
// - props 데이터로다른 컴포넌트(ReactNode)를 전달받음
// -자식 컴포넌트를 안전하게 받기 위한 타입
type ChildrenType = {
  // ReactNode: React 내의 HTML 요소들 + 사용자 정의 컴포넌트들의 타입
  children: React.ReactNode;
}


export const Wrapper = ({ children }: ChildrenType) => {

  return (
    <div style={{ border: '2px solid black', padding: '16px'}}>
      {children}
    </div>
  )

}

function H_Props() {
  const userData = {
    name: '이민경',
    age: 30,
    email: 'lmg123'
  }

  return (
    <div>
      {/* 
        == 콘솔창 / 컴포넌트 모두 두 번 실행 ==
          : React18 이후의 StricMode가 개발 모드에서 부작용 탐지를 위햐 두 번 렌더링
          > 실제 배포 환경에서는 한 번만 렌더링
      */}
    <UserCard user={{ name: '최광섭', age: 35, email: 'qwer123'}}/>
    <UserCard user={userData} />

    <Wrapper>
      <div>안녕하세요. 만나서 반갑습니다.</div>
    </Wrapper>
    </div>
  )
}

export default H_Props