export const fetchLogin = async({ id, password }) => {
  const response = await fetch("http://localhost:8888/users/" + id);

  if(response.ok) {
    // 서버통신이 성공적으로 이루어지면 users에 json값 대입
    const users = await response.json();

    // console.log("[fetchLogin] response Data ===> ", users.password);
    // console.log("[fetchLogin] input Login data ===> ", password);
    // console.log("[fetchLogin] Object Check ===> ", isEmpty(users));

    if(isEmpty(users) || users.password !== password) {
      throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }

    return users;
  }

  throw new Error("서버 통신이 원할하지 않습니다.");
}

// object empty check method
export const isEmpty = (param) => {
  return Object.keys(param).length === 0;
}