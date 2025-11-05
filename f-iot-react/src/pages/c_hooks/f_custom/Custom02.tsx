import React, { useState } from 'react'
import type { User } from '../a_useState/State06';
import { useInput } from '@/hooks/useInput';

type UserInfo = {
  name: string;
  email: string;
}

function Custom02() {
  // const [useInfo, setUserInfo] = useState<UserInfo>({
  //   name: '',
  //   email: ''
  // });


  // const handleInputChange = () => {}
  const example01 = useInput('');
  const { 
    //@ value 속성을 name이라는 변수에 저장
    value: name, 
    handleReset: nameReset, 
    bind: nameBind 
  } = example01;

  const {
    value: email,
    handleReset: emailReset,
    bind: emailBind
  } = useInput('');


  return (
    <div>
      <p>Name: {name}</p>
      <input type="text" name='name' placeholder='사용자 이름' {...nameBind}/>

      <p>Email: {email}</p>
      <input type="text" name='email' placeholder='사용자 이메일' {...emailBind}/>
    </div>
  )
}

export default Custom02