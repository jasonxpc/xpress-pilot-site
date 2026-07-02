# Xpress Printing — 파일럿 사이트 제작 브리프
**Claude Code 작업 지시서**
작성일: 2026년 6월

---

## 1. 프로젝트 개요

**목표:** 완성도 높은 파일럿 웹사이트를 제작하여 사장님께 보여드린 후 Shopify로 migration

**기존 파일 (재사용):**
- `xpress_homepage.html`
- `xpress_services.html`
- `xpress_pricing_noprice.html` (가격 비공개 버전)
- `xpress_contact.html`
- `xpress_pricing.html`

**배포:** GitHub Pages (무료 URL로 사장님께 공유)

---

## 2. 디자인 시스템 (확정)

### 컬러
| 역할 | 색상 | HEX |
|---|---|---|
| Nav · Hero · Footer · 다크 섹션 | Warm Charcoal | `#2A2E25` |
| 브랜드 주색 · 버튼 · 강조 | True Green | `#48A020` |
| CTA 버튼 · 액션 | Coral Peach | `#FF8B6B` |
| 페이지 배경 | Soft Ivory | `#F7F5F0` |
| Green Light | 배지 · hover | `#A8D870` |
| Green Tint | 카드 배경 | `#EAF5D8` |
| Peach Light | 배지 border | `#FFCAB8` |
| Peach Tint | 섹션 배경 | `#FFE8DF` |

### 폰트
- 영문: **DM Sans** (Google Fonts)
- 한글: **Pretendard** (jsDelivr CDN)
- `font-family: 'DM Sans', 'Pretendard', sans-serif`

### Hero 카피
> **"Print Fast. Look Sharp. Stay Local."**

---

## 3. 페이지 구성

### 완성 필요 페이지
| 페이지 | 기존 파일 | 작업 |
|---|---|---|
| Home | xpress_homepage.html | 네비 링크 연결 |
| Services | xpress_services.html | 네비 링크 연결 |
| Pricing | xpress_pricing_noprice.html | 가격 비공개 버전 사용 |
| Contact / Order | xpress_contact.html | 견적 폼 고도화 (핵심) |
| About | 없음 | 새로 제작 필요 |
| Portfolio | 없음 | 새로 제작 필요 (사진 없으면 플레이스홀더) |

---

## 4. 핵심 구현 — 견적 요청 폼 (Contact 페이지)

### 4.1 기본 원칙
- **가격 완전 비공개** — 웹에 가격 표시 없음
- **30분 내 견적 회신** — 강하게 전달
- **세심한 UX** — 모르면 도와주는 구조

### 4.2 폼 흐름

```
Step 1. 제품 선택
Step 2. 옵션 선택 (세심한 UI)
Step 3. 수량 선택 (다중 선택 가능)
Step 4. 연락처 + 파일 업로드
Step 5. 제출 → 30분 내 견적 이메일
```

### 4.3 수량 선택 — 다중 선택

```
[수량] — 여러 개 선택 시 각 수량별 견적을 함께 보내드립니다

☑ 250장
☑ 500장
☑ 1,000장
□ 2,000장
□ 직접 입력: ____장

안내문: "여러 수량을 선택하시면 수량별 견적을 한 번에 받아보실 수 있습니다"
```

### 4.4 옵션 선택 — 3가지 경로

**경로 A: XP 추천 패키지 (모르는 고객용)**
```
┌─────────────────────┐  ┌─────────────────────┐
│  🥈 XP 스탠다드 추천  │  │  🥇 XP 프리미엄 추천  │
│                     │  │                     │
│  14PT Gloss UV      │  │  16PT Soft Touch     │
│  가장 많이 선택되는  │  │  고급스러운 질감      │
│  표준 명함           │  │  첫인상을 높이고 싶을 때│
│                     │  │                     │
│  [이걸로 견적 받기]  │  │  [이걸로 견적 받기]  │
└─────────────────────┘  └─────────────────────┘
```
클릭 시 아래 옵션이 자동 선택됨

**경로 B: 직접 선택 (아는 고객용)**
```
[종이]
○ 14PT 스탠다드 (가장 일반적)
○ 16PT 프리미엄 (더 두껍고 고급)
○ 잘 모르겠어요 →

[코팅]
○ Gloss UV (광택, 선명한 색감)
○ Matte (무광, 고급스러운 느낌)
○ Soft Touch (벨벳 질감, 프리미엄)
○ 코팅 없음
○ 잘 모르겠어요 →

[사이즈]
○ 3.5 × 2" 스탠다드
○ 다른 사이즈 필요 → 직접 입력
```

**"잘 모르겠어요" 선택 시:**
```
걱정 마세요 😊
용도를 간단히 알려주시면
저희가 가장 적합한 옵션을 추천드립니다.

[용도 입력창]
예: "일반 비즈니스 미팅용", "고급 레스토랑 명함" 등
```

**경로 C: 납기 선택**
```
[납기]
○ ⚡ 오늘 필요해요 (당일 — 오전 10시 이전 접수 시)
○ 🚀 최대한 빨리 (1~2일)
○ 📅 날짜 지정: [날짜 선택]
○ 여유 있음 (3~5일)
```

### 4.5 제출 후 경험
```
제출 즉시 화면:
"✓ 견적 요청이 접수되었습니다
 30분 내로 정확한 견적을 이메일로 보내드립니다.
 궁금한 점은 949-851-9710으로 연락주세요."

자동 확인 이메일 (고객):
"안녕하세요 [이름]님,
 견적 요청이 접수되었습니다.
 30분 내 담당자가 연락드리겠습니다.
 — Xpress Printing"
```

### 4.6 Jason이 받는 알림 이메일 형식
```
[새 견적 요청] 명함 — 홍길동

고객: 홍길동 (hong@company.com)
제품: 명함
종이: 14PT Gloss UV
코팅: Matte
사이즈: 3.5×2" 스탠다드
납기: 최대한 빨리

요청 수량:
✓ 250장
✓ 500장
✓ 1,000장

메모: (고객 입력 내용)
파일: [다운로드 링크]

접수: 2026-06-26 14:32
```

---

## 5. 가격 비공개 전략 — UX 카피

### 가격 표시 대신 신뢰 메시지
```
"가격이 궁금하신가요?

인쇄 가격은 종이·수량·코팅·납기에 따라
달라집니다. 옵션을 선택해주시면
30분 내 정확한 견적을 보내드립니다.

숨겨진 비용 없이, 딱 그 가격입니다."
```

### 30분 보장 배지 — 전 페이지 노출
```
⚡ 30분 내 견적 보장
```

---

## 6. 파일 업로드

**1단계:** FilesAnywhere 버튼 링크 유지
```
https://personal.filesanywhere.com/guest/fr?v=8b69638d6163a37ba69a
```
**Shopify 이전 후:** Uploadery 앱으로 전환 ($9.99~39.99/월)

---

## 7. 폼 이메일 발송 (파일럿용)

**Formspree** 무료 플랜 사용
- 월 50건 무료
- 설정: `<form action="https://formspree.io/f/[ID]">`
- Jason 이메일(info@xpressprinting.com)로 자동 발송
- Shopify 이전 후: Shopify 기본 폼으로 교체

---

## 8. About 페이지 (필요 정보)

사장님께 확인 필요:
- [ ] 오너 이름
- [ ] 창업 연도 확인 (1989년?)
- [ ] 보유 장비 리스트
- [ ] 회사 소개 문구

**임시:** 플레이스홀더로 구성 후 정보 입력 시 교체

---

## 9. Shopify Migration 계획

파일럿 완성 후:
1. Shopify 가입 ($1 프로모션, 3개월)
2. HTML → Liquid 테마 변환 (Claude Code, 1~2일)
3. Formspree → Shopify 폼으로 교체
4. FilesAnywhere → Uploadery 앱으로 교체
5. Shopify Payments 활성화
6. Draft Order로 견적 이메일 + 결제 링크 발송
7. 도메인 연결 → 공개

---

## 10. 파일럿 공유 방법

**GitHub Pages (무료)**
- URL: `https://[username].github.io/xpress-pilot`
- 사장님이 모바일에서 바로 확인 가능
- 설정 시간: 10분

---

*이 브리프를 Claude Code에 공유하고 작업을 시작하세요.*
