import React from 'react'
import Index from '.';

/*
# 복습 문제 (1)

문제) 인사 카드 리스트 

- Props를 이용한 데이터 전달
- 배열 렌더링
- 조건부 렌더링 (단락 평가)

=== 요구 사항 ===
1) GreetingCard 컴포넌트 생성
  : 해당 컴포넌트는 name="문자열", message="문자열"를 props로 전달
  : props 타입을 인터페이스로 구현 (GreetingProps)
  + 'message' props는 선택적 프로퍼티

2) message가 있으면 "name: message"를, 없으면 "name: Hello!"를 출력
  : 조건부 렌더링 또는 단락 평가 || 사용

3) Z_Example() 컴포넌트에서 아래의 배열을 렌더링

const users = [
  { name: '곰', message: '오늘도 파이팅!' },
  { name: '호랑이' },
  { name: '사자', message: '리액트 재밌어요!' }
]

*/

interface GreetingProps {
  name: string;
  message?: string;
}

function GreetingCard ({ name, message }: GreetingProps) {
  return (
    <li>{name} 이(가) 말해요. {message || "Hell!"}</li>
  )
}


function Z_Example01() {

  const users = [
  { name: '곰', message: '오늘도 살려주세요!' },
  { name: '호랑이' },
  { name: '사자', message: '리액트 어려워요!' }
]
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <GreetingCard
          key={index}
          name={user.name}
          message={user.message}
          />
        ))}
      </ul>
    </div>
  )
}

export default Z_Example01