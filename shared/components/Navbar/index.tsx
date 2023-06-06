"use client";
import { useState, useEffect } from "react";
import { useTheme } from "@material-tailwind/react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Logo from "@/shared/assets/svgs/Logo";
import { PAGES } from "@/shared/constants";
import Button from "../Button";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {PAGES.map((item, idx) => {
        if (item.id !== 3 && item.id !== 4) {
          return (
            <Typography
              as="li"
              key={idx}
              variant="medium"
              color="deep-purple"
              className="p-5 font-bold"
            >
              <a href={item.route} className="flex items-center">
                {item.title}
              </a>
            </Typography>
          );
        } else {
          return item.id === 3 ? (
            <Button
              variant="outlined"
              key={item.id}
              color="deep-purple"
              className="capitalize"
            >
              <Typography className="capitalize font-bold">
                {item.title}
              </Typography>
            </Button>
          ) : (
            <Button variant="filled" key={item.id} color="deep-purple">
              <Typography className="capitalize font-bold">
                {item.title}
              </Typography>
            </Button>
          );
        }
      })}
    </ul>
  );

  return (
    <Navbar
      className="mx-auto py-2 px-4 lg:px-8 lg:py-4 shadow-none border-none"
      style={{ background: theme.palette.primary.light }}
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Logo />
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default Nav;
