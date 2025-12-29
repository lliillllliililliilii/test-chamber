// 현재 페이지의 파일명(예: about.html)을 가져옵니다.
const currentPage = window.location.pathname.split("/").pop();

// 내비게이션 바의 모든 링크를 검사
document.querySelectorAll('.nav-bar a').forEach(link => {
    // 링크의 href 속성값이 현재 페이지 파일명과 같다면
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
    
    // 만약 메인페이지(index.html 또는 빈 값)일 때 Home에 불을 켜고 싶다면
    if (currentPage === "" || currentPage === "index.html") {
        if (link.textContent === "Home") link.classList.add('active');
    }
});


// 페이지 로드 후 실행
window.addEventListener('DOMContentLoaded', () => {
    //  특정 클래스(.클래스-이름) 내의 모든 이미지를 찾음 (범위는 적절히 수정하세요)
    const images = document.querySelectorAll('.guide-texts img');

    images.forEach(img => {
        // 1. 새로운 div(창문)를 만듦
        const wrapper = document.createElement('div');
        wrapper.className = 'image-window';
        
        // 2. 이미지의 현재 위치에 div를 삽입하고 이미지를 그 안으로 옮김
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
    });
});

// 랜덤 링크 연결

// 링크 목록
const linkPool = [

    //HOP ON NIGHTREIGN
    "https://youtu.be/4YNrWevvat8?si=bQYEzS3hrRLVMMZW",
    "https://youtu.be/VJ3SjkcRajY?si=kjN1SfoJBmOnQ9V4",

    //HoloEN Mage Arena - what do you mean DOOM!?
    "https://youtu.be/gpTVU0JGzpI?si=7G_ikqmIn6oG2TYS",

    //미러시
    "https://youtu.be/f3PC1VwJsis?si=wrCGCb9hvEeckjQc",
    //미러시2
    "https://youtu.be/Tq3ONIeDglY?si=zRbcVdwn9c1Z4E6P&t=42",
    //미러시 쇼츠
    "https://youtube.com/shorts/Q2yHBY6j_Ok?si=54VKCKi8YBkPbqQP",

    // 림버스 스토리 요약
    "https://youtu.be/KOpRyDa7LaA?si=y7MpjcF2g2tATrj0",

    //아스고어 밈
    "https://youtu.be/u5NqO2v_xnY?si=nymTLknynyK_LZJE",

    // Oiia 고양이 + 케데헌 골든
    "https://youtu.be/IlK42_MFmo4?si=Jm07WZiFKrFwyL6B",
    // 소다팝
    "https://youtu.be/ZbCVS_OgPIc?si=jaOvj4Iy3M9tRmXk",


    //산나비 마리 테마
    "https://youtu.be/5bcC7jtqSkI?si=zev4YrGljjt9S1PH"
    //라오루 테마2
    ,"https://music.youtube.com/watch?v=dn67NYqrtgQ&si=WQ9cR0Tue0yO11R_"


    
];

// 클래스가 "random-link"인 요소를 찾아서 이벤트를 걸어줌
document.querySelector('.random-link').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 이동을 막고

    // 배열에서 랜덤하게 하나를 뽑음
    const randomIndex = Math.floor(Math.random() * linkPool.length);
    const selectedLink = linkPool[randomIndex];

    // 선택된 페이지로 이동
    window.open(selectedLink, '_blank');
});