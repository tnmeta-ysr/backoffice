import React, { useEffect, useState } from 'react'



const Member = () => {
  const[memberList,setMemberList] = useState([]);
  const getMembers=async()=>{
    let url = 'http://localhost:3002/members';
    let response = await fetch(url);
    let data = await response.json();
    setMemberList(data);
  }
    useEffect(()=>{
      getMembers()
    },[])
  return (
    <div>

    
        
        <table width ="100%">
        <colgroup>
        <col width = "5%"></col>
        <col width = "5%"></col>
        <col width = "7%"></col>
        <col width = "10%"></col>
        <col width = "7%"></col>
        <col width = "10%"></col>
        <col width = "3%"></col>
        <col width = "7%"></col>
        <col width = "7%"></col>
        <col width = "7%"></col>
        <col width = "7%"></col>
        </colgroup> 
        <thead>    
        <tr>
          <th>회원번호</th>
          <th>이름</th>
          <th>닉네임</th>
          <th>핸드폰번호</th>
          <th>학교</th>
          <th>학과</th>
          <th>이메일</th>
          <th>인증여부</th>
          <th>인증데이터</th>
          <th>가입일</th>
          <th>기능</th>
        </tr>
        </thead>   
        {memberList.map((item)=><tr className='memberList'>
          <td>{item.id}</td>
          <td></td>
          <td>{item.nickname}</td>
          <td>{item.phonenumber}</td>
          <td>{item.university}</td>
          <td>{item.department}</td>
          <td>{item.email}</td>
          <td>{item.certification === true ? "Y" : "N" }</td>
          <td><button>modal view</button></td>
          <td>{item.membersince}</td>
          <td>
            <button>수정</button>
            <button>삭제</button>
            </td>
        </tr>)}
      </table>
   

    </div>
  )
}

export default Member
