// index.tsx
// : index 파일명은 해당 폴더의 메인 파일로 인식
// - 임포트 시 폴더명만으로 가져오기 가능
import React from "react";
import B_Counter from "./B_React_Counter";
import C_Component, { Img } from "./C_Component";
import D_JSX from "./D_JSX";
import E_JSX from "./E_JSX";
import G_Props from "./G_Props";
import H_Props from "./H_Props";
import I_Rendering from "./I_Rendering";
import J_Handler from "./J_Handler";
import Z_Example01 from "../../_practice/a_basic/Z_Example01";
import Z_Example02 from "../../_practice/a_basic/Z_Example02";
import ToggleSection from "@/components/ToggleSection";

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

// React는 반드시 컴포넌트명이 대문자
function Index() {
  // 해당 함수형 컴포넌트의 리턴값: HTML코드 요소
  return (
    <div>
      <h1
        style={{ 
          backgroundColor: "black", 
          padding: '20px',
          color: "white", 
          borderRadius: '4px',
          textAlign: 'center'
          }}>
        === 리액트 기본 문법 ===
      </h1>
      <ToggleSection title='1. 리액트 VS 타입스크립트 (카운터 예제)'>
      {/* 컴포넌트는 주로 단일 태그로 사용 */}
      <B_Counter />
      </ToggleSection>

      <ToggleSection title='2. Component: 리액트를 구성하는 기본 구조'>
      <C_Component />
      {/* 컴포넌트: 재사용 가능한 UI 집합 */}
      <div style={{ backgroundColor: "pink" }}>
        <Img />
        {Img()}
      </div>
      </ToggleSection>

      <ToggleSection title='3. JSX(TSX): 리액트의 기본 문법'>
      <D_JSX />
      <E_JSX />
      </ToggleSection>

      <ToggleSection title='4. Props: 리액트의 데이터 전달 (부모/자식)'>
      <G_Props />
      <H_Props />
      </ToggleSection>

      <ToggleSection title='5. Reandering: 조건부 렌더링'>
      <I_Rendering />
      </ToggleSection>

      <ToggleSection title='6. Handler: 리엑트의 이벤트 핸들러'>
      <J_Handler />
      </ToggleSection>

      <ToggleSection title='Example01'>
      <Z_Example01 />
      </ToggleSection>

      <ToggleSection title='Example02'>
      <Z_Example02 />
      </ToggleSection>
    </div>
  );
}

export default Index;
