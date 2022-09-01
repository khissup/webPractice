document.getElementById("regist-submit-button").addEventListener("click", regist);
// register.html 의 form 에 있는 버튼을 눌렀을때 실행되는 함수
function regist() {
    // 각 form 의 input 에 입력된 값들을 css 선택자를 이용하여 가져오기
    let id = document.getElementById("id");
    let password = document.getElementById("password");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
  
    // user 생성
    const user = {
      id: id,
      password: password,
      name: name,
      email: email,
      age: age,
    };
  
    // user 정보 출력
    for(let key in user){
      console.log(key, user[key])
    }
  }