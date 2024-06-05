"use client";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "@/app/state/isDarkAtom";

type TMainButton = React.ComponentProps<"button"> & {
  children: string;
  style: "link" | "git" | "figma";
};
type TBtnStyle = {
  [key: string]: string;
};

const GitSvg = (props: TMainButton) => {
  const { children, style, ...restBtnProps } = props;
  const isDark = useRecoilValue(isDarkAtom);
  const btnStyle: TBtnStyle = {
    link: "M9.15479 14.7453C9.24219 14.8324 9.31154 14.9359 9.35886 15.0498C9.40617 15.1638 9.43053 15.286 9.43053 15.4094C9.43053 15.5327 9.40617 15.6549 9.35886 15.7689C9.31154 15.8828 9.24219 15.9863 9.15479 16.0734L8.75479 16.4734C8.33018 16.8996 7.82529 17.2374 7.26932 17.4672C6.71335 17.6971 6.11733 17.8144 5.51573 17.8125C4.60974 17.8128 3.72402 17.5443 2.97062 17.0411C2.21723 16.5379 1.63001 15.8226 1.28326 14.9856C0.936516 14.1486 0.84582 13.2275 1.02265 12.3389C1.19948 11.4504 1.63589 10.6342 2.27667 9.99374L4.99151 7.27889C5.56896 6.70153 6.29023 6.289 7.08066 6.08401C7.87109 5.87902 8.70194 5.88903 9.4872 6.11299C10.2725 6.33695 10.9836 6.76673 11.547 7.35784C12.1104 7.94894 12.5055 8.67988 12.6915 9.47499C12.7223 9.59588 12.7287 9.7217 12.7102 9.84509C12.6918 9.96847 12.6489 10.0869 12.5841 10.1935C12.5193 10.3001 12.4338 10.3927 12.3328 10.4659C12.2317 10.539 12.1171 10.5913 11.9956 10.6196C11.8741 10.6479 11.7482 10.6516 11.6252 10.6306C11.5022 10.6096 11.3847 10.5643 11.2794 10.4972C11.1742 10.4302 11.0834 10.3429 11.0124 10.2403C10.9413 10.1378 10.8915 10.0221 10.8657 9.89999C10.7554 9.43063 10.5216 8.99928 10.1887 8.65052C9.85577 8.30175 9.43574 8.04824 8.97202 7.91618C8.5083 7.78412 8.01773 7.77831 7.55101 7.89935C7.0843 8.02039 6.65838 8.26389 6.31729 8.60467L3.60245 11.3195C3.22402 11.6976 2.96622 12.1795 2.86165 12.7041C2.75709 13.2288 2.81046 13.7727 3.01501 14.267C3.21955 14.7613 3.5661 15.1838 4.01081 15.4812C4.45552 15.7785 4.97842 15.9373 5.51339 15.9375C5.86884 15.9385 6.22097 15.8691 6.54939 15.7331C6.87781 15.5971 7.17599 15.3973 7.42667 15.1453L7.82589 14.7453C7.913 14.6578 8.01654 14.5883 8.13057 14.5409C8.24459 14.4936 8.36686 14.4692 8.49034 14.4692C8.61382 14.4692 8.73609 14.4936 8.85011 14.5409C8.96414 14.5883 9.06768 14.6578 9.15479 14.7453ZM17.7212 3.52889C16.8619 2.66992 15.6967 2.18738 14.4817 2.18738C13.2668 2.18738 12.1015 2.66992 11.2423 3.52889L10.8431 3.92811C10.667 4.10423 10.568 4.3431 10.568 4.59217C10.568 4.84124 10.667 5.08011 10.8431 5.25624C11.0192 5.43236 11.2581 5.5313 11.5071 5.5313C11.7562 5.5313 11.9951 5.43236 12.1712 5.25624L12.5712 4.85624C13.0788 4.34859 13.7673 4.0634 14.4853 4.0634C15.2032 4.0634 15.8917 4.34859 16.3993 4.85624C16.907 5.36388 17.1922 6.05239 17.1922 6.7703C17.1922 7.48821 16.907 8.17672 16.3993 8.68436L13.6798 11.3953C13.4291 11.6473 13.1309 11.8471 12.8025 11.9831C12.4741 12.1191 12.122 12.1885 11.7665 12.1875C11.1567 12.1871 10.565 11.9806 10.0872 11.6017C9.6095 11.2228 9.27376 10.6936 9.13448 10.1C9.07812 9.85777 8.92785 9.64786 8.71672 9.51644C8.5056 9.38502 8.25092 9.34285 8.0087 9.3992C7.76648 9.45556 7.55657 9.60583 7.42515 9.81696C7.29373 10.0281 7.25156 10.2828 7.30792 10.525C7.54316 11.5304 8.11112 12.4268 8.91971 13.0689C9.72829 13.711 10.7301 14.0611 11.7626 14.0625H11.7665C12.3684 14.0641 12.9646 13.9464 13.5207 13.7162C14.0769 13.4859 14.5818 13.1477 15.0064 12.7211L17.7212 10.0062C18.1466 9.58096 18.484 9.07605 18.7142 8.52036C18.9444 7.96466 19.0629 7.36906 19.0629 6.76756C19.0629 6.16607 18.9444 5.57047 18.7142 5.01477C18.484 4.45907 18.1466 3.95417 17.7212 3.52889Z",
    git: "M15 3C13.3585 3 11.733 3.32332 10.2165 3.95151C8.69989 4.57969 7.3219 5.50043 6.16117 6.66116C3.81696 9.00537 2.5 12.1848 2.5 15.5C2.5 21.025 6.0875 25.7125 11.05 27.375C11.675 27.475 11.875 27.0875 11.875 26.75V24.6375C8.4125 25.3875 7.675 22.9625 7.675 22.9625C7.1 21.5125 6.2875 21.125 6.2875 21.125C5.15 20.35 6.375 20.375 6.375 20.375C7.625 20.4625 8.2875 21.6625 8.2875 21.6625C9.375 23.5625 11.2125 23 11.925 22.7C12.0375 21.8875 12.3625 21.3375 12.7125 21.025C9.9375 20.7125 7.025 19.6375 7.025 14.875C7.025 13.4875 7.5 12.375 8.3125 11.4875C8.1875 11.175 7.75 9.875 8.4375 8.1875C8.4375 8.1875 9.4875 7.85 11.875 9.4625C12.8625 9.1875 13.9375 9.05 15 9.05C16.0625 9.05 17.1375 9.1875 18.125 9.4625C20.5125 7.85 21.5625 8.1875 21.5625 8.1875C22.25 9.875 21.8125 11.175 21.6875 11.4875C22.5 12.375 22.975 13.4875 22.975 14.875C22.975 19.65 20.05 20.7 17.2625 21.0125C17.7125 21.4 18.125 22.1625 18.125 23.325V26.75C18.125 27.0875 18.325 27.4875 18.9625 27.375C23.925 25.7 27.5 21.025 27.5 15.5C27.5 13.8585 27.1767 12.233 26.5485 10.7165C25.9203 9.19989 24.9996 7.8219 23.8388 6.66116C22.6781 5.50043 21.3001 4.57969 19.7835 3.95151C18.267 3.32332 16.6415 3 15 3Z",
    figma:
      "M3.67492 0.333374H7.3351V6.81501H3.67496C-1.15195 6.64794 -1.2007 0.508843 3.67492 0.333374ZM3.67492 13.5739H7.3351V7.09224H3.67496C-1.20065 7.26771 -1.15195 13.4068 3.67492 13.5739ZM11.3085 0.333374H7.6482V6.81501H11.3085C16.2003 6.58322 16.1393 0.465679 11.3085 0.333374ZM7.3351 17.092V13.8511H3.67496C0.688111 13.8511 -1.20065 16.9517 0.876626 19.1788C2.85716 21.3861 7.33514 20.2856 7.33514 17.092M14.9761 10.3331C14.9761 7.84244 11.9101 6.2774 9.47048 7.52271C7.03091 8.76802 7.03086 11.8981 9.47048 13.1435C11.9101 14.3888 14.9761 12.8237 14.9761 10.3331Z",
  };

  return (
    <button
      {...restBtnProps}
      className={` min-w-[100px]
      bg-DMainPurple hover:bg-white hover:text-DMainPurple hover:border-DMainPurple
      w-auto px-1 h-[40px] text-Sm cursor-pointer flex justify-center items-center rounded-lg text-white tracking-wider shadow-xl hover:border-[1px] hover:scale-105 duration-300 hover:ring-1 font-mono
       ${isDark ? "text-DText" : "text-LText"}  border-b-[1px] ${
        isDark ? "border-gray-200" : "border-gray-900"
      } rounded-lg shadow-sm gap-x-2 ${
        isDark ? "text-DBg" : "text-LBg"
      } disabled:opacity-50 disabled:pointer-events-none`}
    >
      <svg
        width="20"
        height="20"
        viewBox={`${style === "git" ? "0 0 30 30" : "0 0 20 20"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={btnStyle[style]} fill={`currentColor`} />
      </svg>
      <span
        className={` text-center flex justify-center items-center h-full ${
          isDark
            ? "text-DText hover:text-DMainPurple"
            : "text-LText hover:text-LMainPurple"
        } tablet:hidden`}
      >
        {children}
      </span>
    </button>
  );
};

export default GitSvg;
