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
};

export const projectData: TProjectData[] = [
  {
    header: "My_Todo_Calender",
    date: "2024.02 ~ 2024.03 (5주) - 개인",
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
  },
  {
    header: "Portfolio_(구 버전)",
    date: "2023.08 ~ 2023.08 (2주) - 개인",
    skill: [
      "React",
      "Figma",
      "TypeScript",
      "Recoil",
      "SCSS",
      "react-responsive",
    ],
    imgSrc: [
      "https://user-images.githubusercontent.com/114140840/275229014-0fde6d2a-1ed9-4b52-ab7b-d2a66d14926c.gif",
      "https://user-images.githubusercontent.com/114140840/275229229-ffcd075f-c8bd-4525-8c16-bf36a4e6fa1d.gif",
      "https://user-images.githubusercontent.com/114140840/275229447-d65d0a1f-830c-468c-aa14-e8e5383065fb.gif",
      "https://user-images.githubusercontent.com/114140840/275229641-1fea8946-26bc-4322-9c9b-90d8e15d489c.gif",
    ],
    introText: [
      "반응형 웹 사이트 입니다.",
      "Tap, Modal 등의 UI을 구현하였습니다.",
      "메뉴를 통해 해당 위치로 Scroll이 가능합니다.",
      "이전 버전의 포트폴리오 사이트이고, 가독성과 좀 더 나은 UX를 제공하기 위해 리펙토링 하였습니다.",
    ],
  },
  {
    header: "Eaaaaaaats (맛집 탐색 사이트)",
    date: "2023.05 ~ 2024.05 (4주) - 팀 (FE: 4명 BE: 3명)",
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
      "https://user-images.githubusercontent.com/118884127/241088286-99f4ff31-8496-489e-bb63-96388298cc00.gif",
      "https://user-images.githubusercontent.com/118884127/240876220-2d012f0b-fb86-4f9d-8242-1c225cc88eb9.gif",
    ],
    introText: [
      "사용자 주변에 어떤 식당들이 있는지 지도를 통해 알려줍니다.",
      "가게 이름, 태그 등을 통해 맛집들을 검색을 할 수가 있습니다.",
      "리뷰, 평점을 통해 가게의 평가 및 평점을 매길 수 있습니다.",
      "사장님 계정을 통해 자신의 가게 등록 및 수정 등을 할 수가 있습니다.",
    ],
  },
];
