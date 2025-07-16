gsap.registerPlugin(ScrollTrigger);

// main
// pc
gsap.fromTo(".web01 .img-1", 
  { opacity: 0, x: -300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .img-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .img-2", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .img-2",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .text-1", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .text-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .img-3", 
  { opacity: 0, y: -200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .img-3",
      start: "top 70%",
      end: "top 20%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .text-2", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .text-2",
      start: "top 70%",
      end: "top 20%",
      toggleActions: "play none none none",
    }
  }
);

const tl_pc01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .text-3", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 80%",
    end: "top 70%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

// 첫 번째 이미지 애니메이션
tl_pc01.fromTo(
  ".web01 .text-3",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
  }
);

// 두 번째 이미지 애니메이션
tl_pc01.fromTo(
  ".web01 .text-4",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
  }
);

const tl_pc02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .img-4", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 50%",
    end: "top 40%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

// 첫 번째 이미지 애니메이션
tl_pc02.fromTo(
  ".web01 .img-4",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  }
);

// 두 번째 이미지 애니메이션
tl_pc02.fromTo(
  ".web01 .img-5",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  }
);

const tl_pc03 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .text-5", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

// 첫 번째 이미지 애니메이션
tl_pc03.fromTo(
  ".web01 .text-5",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power3.out"
  }
);

// 두 번째 이미지 애니메이션
tl_pc03.fromTo(
  ".web01 .text-6",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power3.out"
  }
);

const tl_pc04 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .img-6", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 40%",
    end: "top 30%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

// 첫 번째 이미지 애니메이션
tl_pc04.fromTo(
  ".web01 .img-6",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  }
);

// 두 번째 이미지 애니메이션
tl_pc04.fromTo(
  ".web01 .img-7",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  }
);

const tl_pc05 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .text-7", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 70%",
    end: "top 50%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

// 첫 번째 이미지 애니메이션
tl_pc05.fromTo(
  ".web01 .text-7",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power3.out"
  }
);

// 두 번째 이미지 애니메이션
tl_pc05.fromTo(
  ".web01 .text-8",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power3.out"
  }
);

// mo
gsap.fromTo(".web01 .img-1-m", 
  { opacity: 0, x: -300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .img-1-m",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .img-2-m", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .img-2-m",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .text-1-m", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .text-1-m",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .img-3-m", 
  { opacity: 0, y: -200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .img-3-m",
      start: "top 30%",
      end: "top 20%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web01 .text-2-m", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web01 .text-2-m",
      start: "top 40%",
      end: "top 20%",
      toggleActions: "play none none none",
    }
  }
);

const tl_mo01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .text-3-m", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 50%",
    end: "top 30%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

tl_mo01.fromTo(
  ".web01 .text-3-m",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power3.out"
  }
);

tl_mo01.fromTo(
  ".web01 .text-4-m",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 1.4,
    ease: "power3.out"
  }
);
//______________________________
const tl_mo02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".web01 .img-4-m", // 첫 번째 요소를 기준으로 타임라인 트리거 설정
    start: "top 30%",
    end: "top 10%",
    toggleActions: "play none none none",
    // scrub: true
  }
});

tl_mo02.fromTo(
  ".web01 .img-4-m",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .text-5-m",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .img-5-m",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .text-6-m",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .img-6-m",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .text-7-m",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .img-7-m",
  { opacity: 0, y: -200 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);

tl_mo02.fromTo(
  ".web01 .text-8-m",
  { opacity: 0, x: 300 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: "power3.out"
  }
);


// web02 specialStory
gsap.fromTo(".web02 .img-1", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-1",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-1-m", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-1-m",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-2", 
  { opacity: 0, x: -250 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-2",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-2-m", 
  { opacity: 0, x: -300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-2-m",
      start: "top 70%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-3", 
  { opacity: 0, x: 300  }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-3",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web02 .img-3-m", 
  { opacity: 0, x: 300  }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-3-m",
      start: "top 70%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);


gsap.fromTo(".web02 .img-4", 
  { opacity: 0, y: 200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-4",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-4-m", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-4-m",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-5", 
  { opacity: 0, x: -300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-5",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-5-m", 
  { opacity: 0, x: -300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-5-m",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-6", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-6",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-6-m", 
  { opacity: 0, x: 300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-6-m",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-7", 
  { opacity: 0, y: 200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-7",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-7-m", 
  { opacity: 0, y: 200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-7-m",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-8", 
  { opacity: 0, y: 200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-8",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web02 .img-8-m", 
  { opacity: 0, y: 200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web02 .img-8-m",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

// web03 patrons 
gsap.fromTo(".web03 .img-1", 
  { opacity: 0, y: 200 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web03 .img-1",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web03 .img-2", 
  { opacity: 0, x: -300 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web03 .img-2",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web03 .img-3", 
  { opacity: 0, x: 200 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web03 .img-3",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web03 .img-4", 
  { opacity: 0, rotation: 180, scale: 1}, 
  {
    opacity: 1, 
    rotation: 0, 
    scale: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web03 .img-4",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web03 .img-5", 
    { opacity: 0, y: -130 }, 
    {
      opacity: 1, 
      y: 50, 
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".web03 .img-5",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none none",
      }
    }
  );

/* web04 flyingSeagull 높이 나는 갈매기 */
gsap.fromTo(".web04 .img1-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img1-1",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web04 .img1-2", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img1-2",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web04 .img1-3", 
  { opacity: 0, x: 200 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img1-3",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web04 .img2-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img2-1",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web04 .img2-2", 
  { opacity: 0, x: -100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 2,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img2-2",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web04 .img2-3", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img2-3",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web04 .img3-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img3-1",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web04 .img3-3", 
  { opacity: 0, x: 200 }, 
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web04 .img3-3",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

/* web05 specialProgram 기획특집 */
gsap.fromTo(".web05 .img1-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img1-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img1-2", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img1-2",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img1-4", 
  { opacity: 0, x: 200 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img1-4",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web05 .img2-1", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img2-1",
      start: "top 75%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img2-2", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img2-2",
      start: "top 75%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img2-3", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img2-3",
      start: "top 75%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web05 .img3-1", 
  { opacity: 0, x: 50 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img3-1",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img3-3", 
  { opacity: 0, scale: 0.5 }, 
  {
    opacity: 1, 
    scale: 1, 
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img3-3",
      start: "top 65%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web05 .img4-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img4-1",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img4-3", 
  { opacity: 0, x: -100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img4-3",
      start: "top 60%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web05 .img4-4", 
  { opacity: 0, scale: 0.5 }, 
  {
    opacity: 1, 
    scale: 1, 
    duration: 1,
    delay: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img4-4",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web05 .img4-5", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web05 .img4-5",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

/* web06 scene01 현장 이야기1 */
gsap.fromTo(".web06 .img1-1", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img1-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web06 .img1-4", 
  { opacity: 0, y: -100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img1-4",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web06 .img2-2", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img2-2",
      start: "top 65%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web06 .img3-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img3-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web06 .img3-3", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img3-3",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web06 .img3-5", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img3-5",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web06 .img4-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img4-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web06 .img5-1", 
  { opacity: 0, x: -100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img5-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web06 .img5-2", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img5-2",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web06 .img5-3", 
  { opacity: 0, x: -200 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img5-3",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web06 .img5-4", 
  { opacity: 0, x: 200 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 1,
    delay: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web06 .img5-4",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

/* web07 scene02 현장 이야기2 */
gsap.fromTo(".web07 .img1-2", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web07 .img1-2",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web07 .img2-1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web07 .img2-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web07 .img2-3", 
  { opacity: 0, x: -100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web07 .img2-3",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web07 .img2-4", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web07 .img2-4",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web07 .img3-1", 
  { opacity: 0, x: 100 }, 
  {
    opacity: 1, 
    x: 0, 
    duration: 2,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web07 .img3-1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web07 .img3-4", 
  { opacity: 0, y: -100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    delay: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web07 .img3-4",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

/* web08 camp 캠페인 */
gsap.fromTo(".web08 .img1", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .img1",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .img2", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .img2",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .img4", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .img4",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .img5", 
  { opacity: 0, y: 100 }, 
  {
    opacity: 1, 
    y: 0, 
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .img5",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);

gsap.fromTo(".web08 .graph_title", 
  { opacity: 0, x: 200 }, 
  {
    opacity: 1,
    x: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .graph_title",
      start: "top 70%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op01", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op01",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op02", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op02",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op03", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op03",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op04", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op04",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op05", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op05",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op06", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op06",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op07", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op07",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);
gsap.fromTo(".web08 .op08", 
  { opacity: 0, y: 50 }, 
  {
    opacity: 1,
    y: 0, 
    duration: 1,
    delay: 2.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".web08 .op08",
      start: "top 90%",
      end: "top 50%",
      toggleActions: "play none none none",
    }
  }
);