export const frontTagArr: string[] = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "NextJS",
  "Recoil",
  "StyledComponents",
  "TailwindCSS",
  "SCSS",
];

export const BackTagArr: string[] = ["Express", "Mongo", "Mongoose"];

export const EtcTagArr: string[] = ["Figma", "Github"];

export const imgSrc: string[] = [];

type TProjectData = {
  header: string;
  date: string;
  skill: string[];
  imgSrc: string[];
  introText: string[];
  team: string;
  modalP?: string;
  modalFirstli?: string[];
  modalSecondli?: { troble: string; fix: string }[];
  Link: {
    gitLink: string;
    figmaLink?: string;
    siteLink: string;
  };
  modalTag: string[];
};

export const projectData: TProjectData[] = [
  {
    header: "My_Todo_Calender",
    date: "2024.02 ~ 2024.03 (5주)",
    team: "개인",
    skill: [
      "React",
      "Figma",
      "TypeScript",
      "Redux-toolkit",
      "Styled-Components",
      "Node.js",
      "Express.js",
      "Mongo DB",
    ],
    imgSrc: [
      "https://github.com/nile27/My-Calender/assets/114140840/97d04e13-d75a-460d-b4ef-b424cb442a6e",
      "https://github.com/nile27/My-Calender/assets/114140840/1f56e936-25ae-4ee2-8f06-025d6f3818a6",
      "https://github.com/nile27/My-Calender/assets/114140840/ec3691f3-0145-4f1f-8c83-d973c665fcb9",
      "https://github.com/nile27/My-Calender/assets/114140840/3c667c13-a69a-4642-b582-49c18566a437",
    ],
    introText: [
      "일정 CRUD와 태그 기능을 통해 일정을 관리할 수 있습니다.",
      "일정을 시간 별, 월 별로 한눈에 볼 수가 있습니다.",
      "검색 기능을 통해 일정 이름과 태그를 검색할 수 있습니다.",
    ],
    modalP:
      "포트폴리오를 제작하기 위해 Notion 같은 플랫폼을 사용하다 저 만의 포트폴리오를 만들어 보기 위해서 제작을 하였습니다. css 라이브러리인 styled-component만 사용하다가 다른 css 툴을 사용해 보기 위해서 ScSS를 사용하여 제작하였습니다. 애니메이션 효과를 줄 수 있는 Keyframe을 사용하고, Fade-in/out, DropDown 등 다양한 애니메이션을 제작 하였고, react-responsive라는 라이브러리를 통해 Dom Selector들 보다 쉽게 box의 사이즈 조절을 하여 반응형 웹을 제작하였습니다.",
    modalFirstli: [
      "figma를 이용한 화면 설계",
      "Date-fns와 Date-picker 라이브러리를 이용한 날짜 선택 기능",
      "Redux-tookit을 이용한 전역상태관리 및  태그별 필터링 기능",
      "반응형 웹",
      "공공데이터포털의 공휴일 OPEN API를 이용하여 공휴일 처리",
      "Date 객체를 이용하여 월 별 일정을 확인 할 수 있는 달력 개발",
      "Mongoose 라이브러리를 통해 CRUD 구현",
      "ExpressJS를 이용하여 일정, 검색 API 개발",
    ],
    modalSecondli: [
      {
        troble:
          "Todo-list 페이지에서 새로 고침 시 메인 페이지로 바뀌는 현상 (컴포넌트 재사용 버그 - 오늘의 Todo-list page & day’s Todo-list page)",
        fix: "useParams와 useEffect를 이용하여 특정 일의 Todo-list 페이지로 들어왔을 때에 엔드 포인트를 통해 해당되는 날짜의 Todo-list만 보일 수 있도록 수정",
      },
      {
        troble:
          "한 태그의 모든 일정이 삭제되었을 때, 태그가 아직 남는 버그 현상",
        fix: "태그 자체에 일정 count 객체를 추가하여 count가 0이 되면 태그 삭제 ",
      },
    ],
    Link: {
      gitLink: "https://github.com/nile27/My-Calender",
      figmaLink:
        "https://www.figma.com/design/qZze2sAfNDqL95ranIaSfr/Untitled?node-id=0-1&t=z6gtCMg1NVzu32Ac-0",
      siteLink: "https://next-portfolio-black-sigma.vercel.app/",
    },
    modalTag: ["솔로", "사이드 프로젝트"],
  },
  {
    header: "Portfolio_(구 버전)",
    date: "2023.08 ~ 2023.08 (2주)",
    team: "개인",
    skill: [
      "React",
      "Figma",
      "TypeScript",
      "Recoil",
      "SCSS",
      "react-responsive",
    ],
    imgSrc: [
      "https://user-images.githubusercontent.com/114140840/275229229-ffcd075f-c8bd-4525-8c16-bf36a4e6fa1d.gif",
      "https://user-images.githubusercontent.com/114140840/275229447-d65d0a1f-830c-468c-aa14-e8e5383065fb.gif",
      "https://user-images.githubusercontent.com/114140840/275229641-1fea8946-26bc-4322-9c9b-90d8e15d489c.gif",
    ],
    introText: [
      "반응형 웹 사이트 입니다.",
      "Tap, Modal 등의 UI을 구현하였습니다.",
      "메뉴를 통해 해당 위치로 Scroll이 가능합니다.",
    ],
    modalP:
      "이전 버전의 포트폴리오 사이트이고, 가독성과 좀 더 나은 UX를 제공하기 위해 지금 보시는 페이지로 리펙토링 하였습니다.",
    modalFirstli: [
      "figma를 이용한 화면 설계",
      "나만의 포트폴리오를 만들어 보기 위해서 제작",
      "새로운 css 툴을 사용해보기 위해 SCSS를 이용하여 제작",
      "keyframe을 통해 애니메이션 효과 제작 (Fade-in/out, DropDown 등)",
      "react-responsive 라이브러리를 통해 Dom Selector들 보다 쉽게 box의 사이즈 조절을 하여 반응형 웹 제작",
      "글, 이미지 등을 따로 관리하여 유지보수를 쉽게 제작",
    ],

    Link: {
      gitLink: "https://github.com/nile27/My-Calender",
      figmaLink:
        "https://www.figma.com/design/qZze2sAfNDqL95ranIaSfr/Untitled?node-id=0-1&t=z6gtCMg1NVzu32Ac-0",
      siteLink: "https://next-portfolio-black-sigma.vercel.app/",
    },
    modalTag: ["솔로", "Portfolio_Old-version"],
  },
  {
    header: "Eaaaaaaats (맛집 탐색 사이트)",
    date: "2023.05 ~ 2024.05 (4주)",
    team: "팀 (FE: 4명 BE: 3명)",
    skill: [
      "React",
      "styled-component",
      "Recoil",
      "Axios",
      "Kakao Map API",
      "Figma",
    ],
    imgSrc: [
      "https://user-images.githubusercontent.com/118884127/240876205-8526ffcd-84a9-48aa-a49e-7f36252d5e2a.gif",
      "https://user-images.githubusercontent.com/118884127/240876213-8a1fc9cd-ac09-4efe-baf8-0c6035199baf.gif",

      "https://user-images.githubusercontent.com/118884127/240876220-2d012f0b-fb86-4f9d-8242-1c225cc88eb9.gif",
    ],
    introText: [
      "사용자 주변에 어떤 식당들이 있는지 지도를 통해 알려줍니다.",
      "가게 이름, 태그 등을 통해 맛집들을 검색을 할 수가 있습니다.",
      "리뷰, 평점을 통해 가게의 평가 및 평점을 매길 수 있습니다.",
      "사장님 계정을 통해 자신의 가게 등록 및 수정 등을 할 수가 있습니다.",
    ],
    Link: {
      gitLink: "https://github.com/nile27/Eaaaaaaats_refectoring",
      figmaLink: undefined,
      siteLink: "http://main22.s3-website.ap-northeast-2.amazonaws.com/",
    },
    modalP:
      "Front-end & Back-end 협업 프로젝트이며, 한 달정도의 시간을 걸쳐 제작을 하였고, 첫 OpenApi를 사용하여 만든 프로젝트입니다.",
    modalFirstli: [
      "Front-end & Back-end 협업 프로젝트",
      "figma를 이용한 화면 설계",
      "카카오 지도 API와 가게 위치 자체 API를 이용하여 내 주변 가게 위치 지도 개발",
      "JWT를 이용한 회원 관련 기능 담당 (로그인/ 회원가입/ 회원정보 CRUD/ 사장님 계정, 일반 회원 계정)",
      "Recoil을 이용하여 전역상태관리",
      "ReactJS 개발환경부터 S3 Bucket 환경까지 구성 및 개발 진행",
    ],
    modalSecondli: [
      {
        troble:
          "AWS 과금이 예상보다 많아, 데이터 흐름을 재조정하는 리펙토링 진행 ",
        fix: "어떤 정보를 불러올 때, 데이터를 여러번 불러오는 현상 때문에 과금이 많이 발생이 되어서, 데이터 호출 함수를 기존 보다 상단 위치의 컴포넌트에 작성하여 데이터 호출을 줄이고, 재사용한 데이터을 세션 스토리지에 저장하여 중복 호출을 줄인 경험이 있습니다.",
      },
    ],
    modalTag: ["협업 프로젝트", "맛집 탐색 사이트"],
  },
];
