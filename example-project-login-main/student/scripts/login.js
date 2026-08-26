//login.js
//목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화) 내용 초반 숨기기
//2. 각 탭 제목 클릭 시
//3. 기존회원 클릭 -> 기존회원 내용 보이기/비회원 내용 숨기기
//4. 비회원 클릭 -> 기존회원 내용 숨기기/비회원 내용 보이기
const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul');

console.log(loginTabTitle, loginTabContent);
loginTabContent[1].classList.add('display-hide'); //초기 숨기기

//비회원 주문 조회 클릭 시(초기 모습과 반대되는 상황 먼저 테스트)
loginTabContent[1].addEventListener('click',()=>{ loginTabContent(1); })
loginTabContent[0].addEventListener('click',()=>{ loginTabContent(0); })

//반복 함수 별도 생성(함수 안에 달라지는건 매개변수로 미리 저장)
function loginTabFunc(index){
    //0(숨기기). 1(보이기) == X
    //0,1(모두 숨기기), 1(보이기) == O
    loginTabContent[0].classList.add('display-hide');//모두 숨기기
    loginTabContent[1].classList.add('display-hide');//모두 숨기기
    loginTabContent[1].classList.remove('display-hide');//클릭대상과 일치하는 대상만 보이기

    loginTabTitle[0].classList.remove('active');//모두 비활성화
    loginTabTitle[1].classList.remove('active');//모두 비활성화
    return loginTabTitle[index].classList.add('active');//클릭한 대상만 활성화
    //return;
}

//목표2) 기존회원-아이디를 입력 안하고 기존회원로그인 버튼 클릭 시 '아이디 입력하세요' 경고창 출력
const userId = document.querySelector('#usdr-id');
const memberLoginBtn = document.querySelector('#member-login');
const userOrder = document.querySelector()

//기존회원 - 아이디, 비밀번호, 로그인 버튼 변수
const userIdInput = document.querySelector('#user-id');
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');

//비회원 - 주문자명, 주문번호, 비회원 주문비밀번호, 주문조회 버튼 변수
const non_userId = document.querySelector('#non-user-id');
const non_userOrder = document.querySelector('#non-user-order');
const non_userPW = document.querySelector('#non-user-pw');

const nonMemberLoginBtn = document.querySelector('#non-user-login');
const pwVisibleBtn = document.querySelector('#non-member-pw-visible');
const non_pwVisibleBtn = document.querySelector('#non-member-pw-visible');

console.log(userId, memberLoginBtn);//변수 테스트

// non-memberLoginBtn.addEventListener('click',()=>{
//     loginErrFunc(non_userId, '주문자명');
//     loginErrFunc(non_userOrder, '주문번호');
//     loginErrFunc(non_userPw, '비회원 주문 비밀번호');
// })

// memberLoginBtn.addEventListener('click',()=>{ //기존 회원 로그인 버튼 이벤트
//     loginTabFunc(userId, '아이디'); //아이디 검사 함수 호출
//     loginErrFunc(userPw, '비밀번호'); //비밀번호 검사 함수 호출
// })

function loginErrFunc(dom, str){
    if(dom.value == ''){ alert(`$(str)를(을) 입력하세요`);}
}

//기존회원) 논리연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트 + 함수
//목표1) 아이디, 비밀번호 중 하나라도 안적으면 'ooo을 입력하세요.'
//목표2) 아이디, 비밀번호를 모두 적으면 'ooo님 환영합니다.'
memberLoginBtn.addEventListener('click',()=>{
    //목표1) 아이디, 비밀번호 중 하나라도 안적으면 'ooo을 입력하세요.'
    // if(userId.value == '' && userPw.value == ''){}
    if(userId.value == '' || userPw.value == ''){
        if(userId.value == '' && userPw.value == ''){//조건세트의 시작
            alert('아이디와 비밀번호를 입력하세요');
        }
        if(userId.value == ''){//하나의 조건세트에서 두번째 조건식이 필요할때(두개 이상 작성가능)
            alert('아이디를 입력하세요');
        }else{//조건세트 안에 거짓을 처리할때(마지막에 한번만 작성 가능)
            alert('비밀번호를 입력하세요');
        }
    }
    //목표2) 아이디, 비밃번호를 모두 적으면 'ooo님 환영합니다.'
    /* if(userId.value != '' && userPw.value != ''){
        alert('$(userId.value)님 환영합니다.');
    } */
    //상향조건 ? 참 : 거짓;
    userId.value !=''&& userPw.value !=''?
        alert('$(userId.value)님 환영합니다.'):null;
})

//비회원 이벤트 함수
nonMemberLoginBtn.addEventListener('click',()=>{
    //목표1) 주문자명, 주문번호, 비회원 주문 비번을 모두 썼을 때 'ooo님 주문은 배송중입니다.'
    if(non_userId.value !='' && nonUserPw.value !=''){
        alert('$(non_userId.value)님 주문은 배송중입니다.');
    }
    // if(non_userId.value !='' && nonUserPw.value !=''){
    //     alert('$(non_userId.value)님 주문은 배송중입니다.');
    // }

    //목표2) 주문자명, 주문번호, 비회원 주문 비번 중 하나라도 안썼을 때 상황
    if(non_userId.value == '' || nonUserPw.value == '' || nonUserPw.value == ''){
        if(non_userId.value == '' && non_userOrder.value == ''&& nonUserPw.value == ''){
            alert('주문자명, 주문번호, 주문 비밀번호를 입력해주세요.');
        }else if(non_userId.value == ''){
            alert('주문자명을 입력해주세요.');
        }else if(non_userOrder.value == ''){
            alert('주문번호를 입력해주세요.');
        }else {
            alert('주문비밀번호를 입력해주세요.');
        }
    }
})

//기존회원) 눈 아이콘 클릭 시 비밀번호 보이기/다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; //비번 숨김상태(****) 초기값
pwVisibleBtn.addEventListener('click',()=>{
    pwVisibleStatus == 0 ?
        userPw.type='text' 
        :   userPw.type = 'password'; 
    pwVisibleStatus = !pwVisibleStatus;
});

//비회원 주문 비밀번호
let non_pwVisiblesStatus = 0; //초기 숨김상태
non_pwVisibleBtn.addEventListener('click',()=>{
    non_pwVisiblesStatus == 0 ?
        non_userPW.type = 'text'
        : non_userPW.type = 'password';
    non_pwVisiblesStatus = !non_pwVisiblesStatus;
})
