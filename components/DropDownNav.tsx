"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { projectData } from "@/lib/dummyData";
import NavBtn from "./NavBtn";
import { useRecoilValue } from "recoil";
import { contentRefsState } from "@/app/state/ContentRefs";
import { isDarkAtom } from "@/app/state/isDarkAtom";
import { Button, Background, MenuIcon } from "./ui/StyledBtn";
import { useState, useEffect, useRef } from "react";

export default function DropDownNav() {
  const navText = [
    { text: "Skill" },
    { text: "Project", length: `${projectData.length}` },
    { text: "Experience" },
    { text: "Price", length: "3" },
    { text: "Contact" },
  ];
  const contentRefs = useRecoilValue<(HTMLElement | null)[]>(contentRefsState);
  const isDark = useRecoilValue(isDarkAtom);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function scrollFunc(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ): void {
    const event: HTMLElement = e.target as HTMLButtonElement;
    const name: string = text;
    const menu: { [key: string]: number } = {
      Skill: 0,
      Project: 1,
      Experience: 2,
      Contact: 3,
    };

    const targetIndex = menu[name];
    if (typeof targetIndex === "number" && contentRefs[targetIndex]) {
      const targetElement = contentRefs[targetIndex];
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);
  return (
    <section className="  tablet:flex hidden w-[50px]   flex-col tablet:left-[90%]  tablet:top-[10px] relative table900:flex h-auto ">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button onClick={() => setIsOpen(!isOpen)}>
            <Background isActive={isOpen} isDark={isDark}>
              <MenuIcon isActive={isOpen} isDark={isDark}>
                <span></span>
                <span></span>
                <span></span>
              </MenuIcon>
            </Background>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" ref={dropdownRef}>
          <DropdownMenuSeparator />

          {navText.map((item, idx) => (
            <DropdownMenuItem key={idx}>
              <NavBtn
                text={item.text}
                length={item.length}
                isActive={idx === 0}
                onClick={(e) => {
                  scrollFunc(e, item.text);
                  setIsOpen(false);
                }}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}
