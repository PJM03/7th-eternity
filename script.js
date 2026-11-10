/**
 * =========================================================
 * 선거 운동본부 통합 데이터 객체
 * =========================================================
 */
const ELECTION_DATA = {
  // 1. 선거 운동본부 기본 정보 (학생회 명칭 지칭 시 "입후보" 사용)
  organization: {
    name: '제 7대 인공지능융합대학 학생회 입후보 [영원]',
    shortName: '영원',
    slogan: '스쳐가는 찰나가 영원히 기억될 순간으로',
  },

  // 2. 로컬 에셋 경로
  assets: {
    logo: './logo.svg',
    candidateStand: './mj-stand.png', // 공수자세 정면 누끼
    candidatePoint: './mj-yogi.png',  // 화면 왼쪽 가리키는 누끼
  },

  // 3. 단독 입후보자 정보 (사람 지칭 시 "입후보자" 사용 / 전공 및 학번 표기 규칙 준수: "사이버보안 22")
  candidate: {
    role: '인공지능융합대학 학생회장 입후보자',
    name: '임명진',
    majorAndId: '사이버보안 22',
    historyByYear: {
      2022: ['소프트웨어융합대학 컴퓨터소프트웨어학부 입학'],
      2023: ['육군 제9보병사단 백마부대 신병교육대대 자원 입대'],
      2025: [
        '육군 제9보병사단 백마부대 수색대대 병장 만기 전역',
        "제 5대 'END:ING' 소프트웨어융합대학 학생회 기획국장 역임",
        "제 5대 'END:ING' 소프트웨어융합대학X사회과학대학 신입생 환영행사 준비위원",
        "제 5대 'END:ING' 소프트웨어융합대학 개강총회 준비위원",
        "제 5대 'END:ING' 소프트웨어융합대학 풋살대회 '엔딩일레븐' 준비위원",
        "제 5대 'END:ING' 소프트웨어융합대학X글로벌비즈니스대학 농촌봉사활동 준비위원",
        "제 5대 'END:ING' 소프트웨어융합대학 중간고사 간식배부 준비위원",
        "제 5대 'END:ING' 소프트웨어융합대학 단체잠바 제작 및 배부 준비위원",
      ],
      2026: [
        "제 6대 'E:UM' 소프트웨어융합대학 학생회 총괄위원장 역임",
        "제 6대 'E:UM' 소프트웨어융합대학 신입생 환영행사 총괄위원장",
        "제 6대 'E:UM' 소프트웨어융합대학 개강총회 총괄위원장",
        "제 6대 'E:UM' 소프트웨어융합대학X공과대학 풋살대회 'D2일레븐' 준비위원",
        "제 6대 'E:UM' 소프트웨어융합대학X음악공연예술대학 농촌봉사활동 총괄위원장",
        "제 6대 'E:UM' 소프트웨어융합대학 1학기 기말고사 간식배부 총괄위원장",
        "제 6대 'E:UM' 소프트웨어융합대학 2학기 중간고사 간식배부 총괄위원장",
        "제 6대 'E:UM' 소프트웨어융합대학X공과대학 E-Sports대회 준비위원",
      ],
    },
  },

  // 4. 11대 핵심 공약 데이터 (부가설명 제외)
  pledges: [
    '타 단과대학 교류 확대',
    '시험기간 간식 배부',
    '인공지능융합대학 개강총회 진행',
    '인공지능융합대학 MT 진행',
    '인공지능융합대학 단합회 개최',
    '인공지능융합대학 단체 봉사활동 진행',
    '인공지능융합대학 E-Sports 대회 진행',
    '인공지능융합대학 풋살대회 진행',
    '인공지능융합대학 단대인의 밤 행사 진행',
    'D2 작은도서관 전공서적 최신화 및 추가 구비',
    'D5 작은도서관 개설',
  ],

  // 5. 투표 참여 방법 안내 데이터
  voting: {
    steps: [
      {
        step: 'STEP 01',
        title: '학생 포털 우측 상단 메뉴 클릭',
        description:
          '학생 포털(DCU e-Advisor) 메인 화면 우측 상단의 햄버거 메뉴(≡)를 클릭해 주세요.',
        image: './e-advisor-vote-main-circle-01.png',
      },
      {
        step: 'STEP 02',
        title: '부가서비스 → 학생 선거 접속',
        description:
          '[부가서비스] → [학생 선거] → [학생자치기구장 총선거] 메뉴로 접속하여 투표해 주세요.',
        image: './e-advisor-vote-menu-circle-01.png',
      },
    ],
    voteUrl: 'https://red.cu.ac.kr',
  },
};

/**
 * =========================================================
 * 1. 테마 제어 유틸리티
 * =========================================================
 */
function applyBodyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.remove('theme-dark');
  }
}

/**
 * =========================================================
 * 2. Lenis (부드러운 스크롤) & GSAP ScrollTrigger 연동 초기화
 * =========================================================
 */
function initSmoothScrollAndGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.0,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.05,
    touchMultiplier: 1.5,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // 상단 네비게이션 앵커 클릭 시 Lenis 부드러운 스크롤 이동
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: 0 });
      }
    });
  });

  return lenis;
}

/**
 * =========================================================
 * 3. 섹션 1: 인트로 애니메이션 (Intro / Hero)
 * =========================================================
 */
function initIntroAnimation() {
  const logoWrap = document.getElementById('intro-logo-wrap');
  const subtitle = document.getElementById('intro-subtitle');
  const mainTitle = document.getElementById('intro-main-title');
  const scrollIndicator = document.getElementById('intro-scroll-indicator');

  if (!logoWrap || !subtitle || !mainTitle) return;

  gsap.set(logoWrap, { opacity: 0, scale: 0.86, y: 20 });
  gsap.set(subtitle, { opacity: 0, yPercent: 110 });
  gsap.set(mainTitle, { opacity: 0, yPercent: 110, scale: 0.96 });
  gsap.set(scrollIndicator, { opacity: 0, y: 10 });

  const introTl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 });

  introTl
    .to(logoWrap, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
    })
    .to(
      subtitle,
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.85,
      },
      '-=0.65'
    )
    .to(
      mainTitle,
      {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        duration: 1.0,
        ease: 'expo.out',
      },
      '-=0.55'
    )
    .to(
      scrollIndicator,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
      },
      '-=0.45'
    );

  gsap.to('.intro-inner', {
    yPercent: -12,
    opacity: 0.15,
    scale: 0.97,
    ease: 'none',
    scrollTrigger: {
      trigger: '#sec-intro',
      start: '35% top',
      end: 'bottom top',
      scrub: true,
    },
  });

  gsap.to(scrollIndicator, {
    opacity: 0,
    y: -12,
    ease: 'none',
    scrollTrigger: {
      trigger: '#sec-intro',
      start: 'top top',
      end: '20% top',
      scrub: true,
    },
  });
}

/**
 * =========================================================
 * 4. 반응형 스크롤리텔링 통합 초기화 (gsap.matchMedia() 활용)
 * =========================================================
 */
function initResponsiveScrollytelling() {
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: '(min-width: 769px)',
      isMobile: '(max-width: 768px)',
    },
    (context) => {
      const { isMobile } = context.conditions;

      // -------------------------------------------------------
      // [섹션 2] 슬로건 스크롤리텔링 (#FFFFFF -> #0A0A0A 배경 전환 + Pin)
      // -------------------------------------------------------
      const sloganSection = document.getElementById('sec-slogan');
      const sloganPinStage = document.getElementById('slogan-pin-stage');
      const ambientGlow = document.getElementById('slogan-ambient-glow');
      const phrase1 = document.getElementById('slogan-phrase-1');
      const phrase2 = document.getElementById('slogan-phrase-2');
      const glowWord = document.getElementById('slogan-glow-word');
      const progressBar = document.getElementById('slogan-progress-bar');

      if (sloganSection && sloganPinStage && phrase1 && phrase2 && glowWord) {
        gsap.set(sloganPinStage, { backgroundColor: '#FFFFFF' });
        gsap.set(ambientGlow, { opacity: 0, scale: 0.85 });
        gsap.set(phrase1, { opacity: 0, y: isMobile ? 20 : 28, filter: 'blur(6px)' });
        gsap.set(phrase2, { opacity: 0, y: isMobile ? 20 : 28, scale: 1, filter: 'blur(8px)' });
        gsap.set(glowWord, {
          textShadow: '0 0 0px rgba(255, 255, 255, 0), 0 0 0px rgba(255, 255, 255, 0)',
        });

        gsap.fromTo(
          sloganPinStage,
          { backgroundColor: '#FFFFFF' },
          {
            backgroundColor: '#0A0A0A',
            ease: 'none',
            scrollTrigger: {
              trigger: sloganSection,
              start: 'top 85%',
              end: 'top top',
              scrub: true,
              onEnter: () => applyBodyTheme('dark'),
              onLeaveBack: () => applyBodyTheme('light'),
            },
          }
        );

        const sloganTl = gsap.timeline({
          scrollTrigger: {
            trigger: sloganSection,
            pin: sloganPinStage,
            start: 'top top',
            end: isMobile ? '+=120%' : '+=145%',
            scrub: 0.5,
            onUpdate: (self) => {
              if (progressBar) {
                gsap.set(progressBar, { scaleX: self.progress });
              }
              if (self.progress < 0.96) {
                applyBodyTheme('dark');
              } else {
                applyBodyTheme('light');
              }
            },
            onLeave: () => applyBodyTheme('light'),
            onEnterBack: () => applyBodyTheme('dark'),
          },
        });

        sloganTl.to(
          ambientGlow,
          {
            opacity: 1,
            scale: 1.05,
            duration: 15,
            ease: 'power1.out',
          },
          0
        );

        // [1단계: 0% ~ 45%] "스쳐가는 찰나가"
        sloganTl.to(
          phrase1,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 16,
            ease: 'power2.out',
          },
          0
        );

        sloganTl.to(
          phrase1,
          {
            opacity: 0,
            y: isMobile ? -32 : -44,
            filter: 'blur(8px)',
            duration: 15,
            ease: 'power2.in',
          },
          30
        );

        // [2단계: 48% ~ 92%] "영원히 기억될 순간으로"
        sloganTl.to(
          phrase2,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 16,
            ease: 'power3.out',
          },
          48
        );

        sloganTl.to(
          phrase2,
          {
            scale: 1.08,
            duration: 44,
            ease: 'none',
          },
          48
        );

        sloganTl.to(
          glowWord,
          {
            textShadow:
              '0 0 16px rgba(255, 255, 255, 0.9), 0 0 38px rgba(255, 255, 255, 0.55), 0 0 76px rgba(255, 255, 255, 0.3)',
            duration: 32,
            ease: 'power2.out',
          },
          54
        );

        sloganTl.to(
          phrase2,
          {
            opacity: 0,
            y: -18,
            filter: 'blur(4px)',
            duration: 7,
            ease: 'power2.in',
          },
          93
        );
      }

      // -------------------------------------------------------
      // [섹션 3] 단독 입후보자 소개 패럴랙스 & 연도별 약력 Stagger
      // -------------------------------------------------------
      const candidateSection = document.getElementById('sec-candidate');
      const watermark = document.getElementById('candidate-bg-watermark');
      const photoFrame = document.getElementById('candidate-photo-frame');
      const standImg = document.getElementById('candidate-stand-img');
      const staggerItems = gsap.utils.toArray('#sec-candidate .candidate-stagger-item');
      const yearGroups = gsap.utils.toArray('#sec-candidate .timeline-year-group');

      if (candidateSection) {
        if (watermark) {
          gsap.fromTo(
            watermark,
            { xPercent: 4 },
            {
              xPercent: isMobile ? -8 : -15,
              ease: 'none',
              scrollTrigger: {
                trigger: candidateSection,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            }
          );
        }

        if (photoFrame && standImg) {
          gsap.set(photoFrame, { opacity: 0.15, y: isMobile ? 36 : 55 });
          gsap.set(standImg, { scale: 0.96, y: isMobile ? 12 : 20 });

          const photoTl = gsap.timeline({
            scrollTrigger: {
              trigger: candidateSection,
              start: 'top 95%',
              end: 'top 35%',
              scrub: 0.5,
            },
          });

          photoTl
            .to(
              photoFrame,
              {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
              },
              0
            )
            .to(
              standImg,
              {
                scale: 1,
                y: 0,
                ease: 'power2.out',
              },
              0
            );
        }

        if (staggerItems.length) {
          gsap.set(staggerItems, { opacity: 0, y: isMobile ? 20 : 30 });

          gsap.to(staggerItems, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#candidate-info-col',
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          });
        }

        if (yearGroups.length) {
          gsap.set(yearGroups, { opacity: 0, y: 24 });

          gsap.to(yearGroups, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#candidate-bio-list',
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      }

      // -------------------------------------------------------
      // [섹션 4] 11대 핵심 공약 한눈에 표시 (전체 동시 노출 + Stagger 등장)
      // -------------------------------------------------------
      const pledgesSection = document.getElementById('sec-pledges');
      const pledgeItems = gsap.utils.toArray('#pledges-container .pledge-item');
      const candidateFigure = document.getElementById('pledges-candidate-figure');

      if (pledgesSection && pledgeItems.length) {
        gsap.set(pledgeItems, { opacity: 0, y: 24 });

        gsap.to(pledgeItems, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#pledges-container',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });

        // 데스크톱 환경에서만 우측 인물(./mj-yogi.png) 등장 연출
        if (candidateFigure && !isMobile) {
          gsap.fromTo(
            candidateFigure,
            { opacity: 0, x: 32, y: 18 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.75,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: pledgesSection,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }

      // -------------------------------------------------------
      // [섹션 5] 클로징 및 투표 안내 (블랙 #111111 -> 화이트 #FFFFFF 전환)
      // -------------------------------------------------------
      const footerSection = document.getElementById('sec-footer');
      const closingLogo = document.getElementById('closing-logo-wrap');
      const closingSlogan = document.getElementById('closing-slogan');
      const votingCard = document.getElementById('voting-guide-card');
      const votingSteps = gsap.utils.toArray('#sec-footer .voting-step-card');
      const footerCopy = document.getElementById('footer-copyright');

      if (footerSection && closingLogo && closingSlogan && votingCard) {
        gsap.set(closingLogo, { opacity: 0, scale: 0.9, y: 18 });
        gsap.set(closingSlogan, { opacity: 0, y: 20, filter: 'blur(4px)' });
        gsap.set(votingCard, { opacity: 0, y: isMobile ? 24 : 32 });
        if (votingSteps.length) gsap.set(votingSteps, { opacity: 0, y: 22 });
        if (footerCopy) gsap.set(footerCopy, { opacity: 0, y: 14 });

        const closingTl = gsap.timeline({
          scrollTrigger: {
            trigger: footerSection,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });

        closingTl
          .to(closingLogo, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
          })
          .to(
            closingSlogan,
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.7,
              ease: 'power3.out',
            },
            '-=0.45'
          )
          .to(
            votingCard,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'expo.out',
            },
            '-=0.45'
          );

        if (votingSteps.length) {
          closingTl.to(
            votingSteps,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.14,
              ease: 'power3.out',
            },
            '-=0.45'
          );
        }

        if (footerCopy) {
          closingTl.to(
            footerCopy,
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              ease: 'power2.out',
            },
            '-=0.4'
          );
        }
      }
    }
  );
}

/**
 * =========================================================
 * 5. 섹션별 다크/라이트 배경 테마 전환 (ScrollTrigger)
 * =========================================================
 */
function initThemeTransitions() {
  const sections = document.querySelectorAll(
    '.scroll-section[data-theme]:not(#sec-slogan)'
  );

  sections.forEach((section) => {
    const theme = section.getAttribute('data-theme');

    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onEnter: () => applyBodyTheme(theme),
      onEnterBack: () => applyBodyTheme(theme),
    });
  });
}

/**
 * =========================================================
 * 6. 앱 초기화 실행
 * =========================================================
 */
window.addEventListener('DOMContentLoaded', () => {
  initSmoothScrollAndGSAP();
  initIntroAnimation();
  initResponsiveScrollytelling();
  initThemeTransitions();
});
