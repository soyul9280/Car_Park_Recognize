/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function: 익명함수로 바의 크기를 조절
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        //네비게이션 바 요소가 존재하지 않는 경우 종료
        if (!navbarCollapsible) {
            return;
        }
        // 바 맨위에 있을때 
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } 
        else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // 페이지가 스크롤될 때 함수호출 (바 크기 조절)
    document.addEventListener('scroll', navbarShrink);

    //html에서 mainNav찾아서 할당
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        // 페이지의 스크롤 위치에 따라 네비게이션 메뉴 항목을 하이라이트
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            //스크롤 위치가 해당 바 아래로 40%이하로 이동시 항목 강조
            rootMargin: '0px 0px -40%',
        });
    };

    //html에서 navbar-toggler요소찾아서 할당
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    //nav-link클래스를 가진 요소들을 navbarresponsive내에서 배열로 저장
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
});

const parkingSlots = document.querySelectorAll('.parking-slot');
let emptySlots = 0;
parkingSlots.forEach(slot =>{
	 if(slot.classList.contains('occupied')){
	        slot.style.backgroundColor = 'red';}
    else if(slot.classList.contains('empty')){
		     slot.style.backgroundColor = 'green';
		     emptySlots++;
    }
});
const emptySlotsCount = document.querySelector('#emptySlotsCount');
 emptySlotsCount.textContent = emptySlots;