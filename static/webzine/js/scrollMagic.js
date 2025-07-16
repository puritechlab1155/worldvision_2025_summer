  
  
  // ScrollMagic 컨트롤러 생성
  const controller = new ScrollMagic.Controller();

  // GSAP 애니메이션 정의
  const tween = gsap.to(".box", { opacity: 1, duration: 1 });

  // Scene 생성 및 설정
  const scene = new ScrollMagic.Scene({
    triggerElement: ".box",  // 애니메이션 시작 요소
    triggerHook: 0.9,       // 트리거 포인트 설정 (화면의 90% 지점)
  })
  .setTween(tween)          // 애니메이션 적용
  .addIndicators()          // 디버깅용 인디케이터 추가 (개발용)
  .addTo(controller);       // 컨트롤러에 Scene 추가