import React from 'react'

//! Axios
// : 브라우저나 Node.js 환경에서 HTTP 요청을 쉽게 처리할 수 있게 도와주는
//    Promise 기반의 HTTP 클라이언트 라이브러리

// - 서버와 통신에서 데이터를 가져오거나(GET)
// - 서버에 데이터를 보날 때(POST, PUT, DELETE) Axios를 사용(간결성, 일관성 향상)

//? Axios 설치 명령어
// 1) 기본 설치
//  npm install axios
// 2) 타입스크립트 프로젝트
//  npm install --save-dev @types/axios

//! Axios 사용방법
//@ 1) 기본 HTTP 메서드 (async, await 기반)
// - GET) const response = await axios.get("REST API 경로", { params });
//                         >> params (객체 타입, 쿼리 파라미터 값 { page: 1, size: 10, keyword: 'hamburger'})
//        const users = response.data;
// - POST) const response = await axios.post("REST API 경로", data);
// >> data(서버로 전송할 JSON 데이터)


function B_Axios() {
  return (
    <div>B_Axios</div>
  )
}

export default B_Axios