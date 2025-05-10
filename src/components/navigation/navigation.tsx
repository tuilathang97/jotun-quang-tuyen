'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { cn } from "@/utils/utils";
import React from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import ScrollLink from "../scroll-link";
import { FaCloudSunRain } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TiInfoLargeOutline } from "react-icons/ti";
import Image from 'next/image'
import Alert from "@/components/alert";

function Navigation() {
    return (
        <nav className="fixed z-40 w-full bottom-0 md:top-0 md:bottom-auto">
            <Alert />
            <header className="h-20 px-0 md:px-6 bg-accent">
                <div className="mx-auto px-5 max-w-6xl flex items-center justify-center md:justify-between h-20 py-2 md:py-6">
                    <div className="w-full md:w-auto flex justify-evenly md:justify-center items-center">
                        <Link className="hidden lg:block mr-6" href="/">
                          <Image src="/images/jotun.svg" width={120} height={24} alt="main logo"></Image>
                        </Link>
                        <NavigationMenuDemo></NavigationMenuDemo>
                    </div>
                    <div>
                        <a href="tel:0898271703" className='hidden md:flex gap-2 items-center p-2 border-2 rounded-lg bg-primary text-secondary'>
                            <BsFillTelephoneFill />
                            0898271703
                        </a>
                    </div>
                </div>
            </header>
        </nav>
    );
}

export default Navigation;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem className="md:hidden max-w-[300px] md:max-w-max">
          <ScrollLink to="/">
            <span className={navigationMenuTriggerStyle()}>
              <IoHomeOutline className='h-6 w-6'/>
              Trang chủ
            </span>
          </ScrollLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="max-w-[300px] md:max-w-max">
          <ScrollLink to="/#exterior">
            <span className={navigationMenuTriggerStyle()}>
              <FaCloudSunRain className='h-6 w-6'/>
              Ngoại thất
            </span>
          </ScrollLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="max-w-[300px] md:max-w-max">
          <ScrollLink to="/#interior">
            <span className={navigationMenuTriggerStyle()}>
              <IoBedOutline className='h-6 w-6'/>
              Nội thất
            </span>
          </ScrollLink>
        </NavigationMenuItem>

        <Colors />

        <NavigationMenuItem className="hidden md:block max-w-[300px] md:max-w-max">
          <ScrollLink to="/about">
            <span className={navigationMenuTriggerStyle()}>
              <TiInfoLargeOutline className='h-6 w-6'/>
              Giới thiệu
            </span>
          </ScrollLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="md:hidden max-w-[300px] md:max-w-max">
          <ScrollLink to="tel:0898271703">
            <span className={navigationMenuTriggerStyle()}>
              <BsTelephone className='h-6 w-6'/>
              Gọi điện
            </span>
          </ScrollLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Colors = () => {
  return(
    <NavigationMenuItem className="max-w-[300px] md:max-w-max">
      <ScrollLink to="/colors">
        <span className={navigationMenuTriggerStyle()}>
          <IoColorPaletteOutline className='h-6 w-6'/>
          Bảng màu
        </span>
      </ScrollLink>
    </NavigationMenuItem>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
