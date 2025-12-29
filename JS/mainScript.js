// 현재 페이지의 파일명(예: about.html)을 가져옵니다.
const currentPage = window.location.pathname.split("/").pop();

// 내비게이션 바의 모든 링크를 검사합니다.
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