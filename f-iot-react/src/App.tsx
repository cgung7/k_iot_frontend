import './App.css'
import Basic from '@/pages/a_basic';
import { Navigate, Route, Routes } from 'react-router-dom';
import RoutePages from '@/pages/b_Route';
import Hooks from '@/pages/c_hooks';
import HTTP from '@/pages/d_http';
import GlobalState from '@/pages/d_http/e_global_state';

import Navibar from './components/Navibar';
import PostList from './_practice/a_basic/PostList';
import PostDetail from './components/PostDetail';
import SearchApp from './_practice/c_hooks/SearchApp';
import Z_Products from './pages/b_Route/Z_Products';
import Z_ProductDetail from './pages/b_Route/Z_ProductDetail';
import Z_ProductInfo from './pages/b_Route/Z_ProductInfo';
import Z_ProductReviews from './pages/b_Route/Z_ProductReviews';
import Z_Dashboard from './pages/b_Route/Z_Dashboard';
import { useCountStore } from './pages/d_http/e_global_state/B_Zustand';
// 파일명 없으면 무조건 해당 파일의 index 라는 이름이 파일을 가져옴

function App() {
  return (
    <>
      {/* 경로와 상관없이 렌더링 */}
      <h1>Korea IoT React</h1>
      <Navibar />

      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path='/basic' element={<Basic />} />
        {/* 중첩 라우팅 사용을 위해 반드시 부모 React의 path끝에 /*가 필수
        - 중첩된 자식 라우트 인식 */}
        <Route path='/route/*' element={<RoutePages />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/http' element={<HTTP />} />
        <Route path='/global-state' element={<GlobalState />} />

        {/* //@ _practice 실습 코드 */}
        <Route path='/practice/post' element={<PostList />} />
        <Route path='/practice/post/:id' element={<PostDetail />}/>
        <Route path='/practice/search' element={<SearchApp />} />

        {/* //@ pages/b_Route - Z_실습코드 */}
        <Route path='/' element={<Navigate to="/products"/>} />
        <Route path='/products' element={<Z_Products />} />
        <Route path='/products/:id' element={< Z_ProductDetail/>}>
        {/* 중첩 라우트: 상대 경로 */}
        <Route path='info' element={<Z_ProductInfo />}/>
        <Route path='review' element={<Z_ProductReviews />}/>
        </Route>
        <Route path='/dashboard' element={<Z_Dashboard />}/>
      </Routes>
      
    </>
  )
}

export default App
