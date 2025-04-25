"use client";
import HeaderLinks from "@/components/header/HeaderLinks";
import { LangSwitcher } from "@/components/header/LangSwitcher";
import { siteConfig } from "@/config/site";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ThemedButton } from "../ThemedButton";

const links = [
  // { label: "Cats", href: "#Cats" },
  // { label: "Features", href: "#Features" },
  // { label: "Pricing", href: "#Pricing" },
  // { label: "Testimonials", href: "#Testimonials" },
  // { label: "FAQ", href: "#FAQ" },
];

const Header = () => {
  const params = useParams();
  const lang = params.lang;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center md:gap-x-12 flex-1">
          <Link
            href="/"
            aria-label="武工大的猫"
            title="武工大的猫"
            className="flex items-center space-x-1 font-bold"
          >
            {/* <Image
              alt="Logo"
              src="/cat.png"
              className="w-8 h-8"
              width={32}
              height={32}
            /> */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 150 153"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 -rotate-45 dark:fill-white fill-black"
            >
              <path d="M123.161 119.433C110.208 117.824 100.813 107.621 102.177 96.6446C103.54 85.6682 115.146 78.0744 128.099 79.6835C141.052 81.2925 150.448 91.4951 149.084 102.472C147.721 113.448 136.115 121.042 123.161 119.433Z">
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M127.885 73.2737C114.978 75.2193 103.179 67.9302 101.53 56.993C99.8812 46.0557 109.008 35.612 121.915 33.6663C134.821 31.7207 146.621 39.0098 148.27 49.947C149.919 60.8843 140.792 71.328 127.885 73.2737Z">
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  begin="0.4s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M103.149 30.7562C94.9877 37.3881 83.8162 37.1582 78.1963 30.2426C72.5764 23.327 74.6363 12.3446 82.7972 5.71269C90.9581 -0.919233 102.13 -0.689281 107.75 6.2263C113.37 13.1419 111.31 24.1243 103.149 30.7562Z">
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  begin="0.8s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M92.0908 151.865C81.6912 148.723 75.4191 139.032 78.0815 130.22C80.7439 121.407 91.3328 116.81 101.732 119.952C112.132 123.094 118.404 132.785 115.742 141.597C113.079 150.41 102.49 155.007 92.0908 151.865Z">
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M62.2944 128.113C39.5217 141.573 7.95234 122.314 1.57159 98.743C-4.80916 75.1715 13.0424 43.1416 39.1877 42.753C68.1753 44.1807 93.5298 48.5513 99.9105 72.1227C106.291 95.6942 89.5193 112.021 62.2944 128.113Z">
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  begin="1.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
            <span className="text-gray-950 dark:text-gray-300 hidden md:block">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        {/* Center section - Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-1">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={`/${lang === "en" ? "" : lang}${link.href}`}
                aria-label={link.label}
                title={link.label}
                className="tracking-wide transition-colors duration-200 font-normal"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
          <HeaderLinks />
          <ThemedButton />
          <LangSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Landing Page Boilerplate"
                      title="Landing Page Boilerplate"
                      className="inline-flex items-center"
                    >
                      <Image
                        alt={siteConfig.name}
                        src="/logo.svg"
                        className="w-8 h-8"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        {siteConfig.name}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="tracking-wide transition-colors duration-200 font-normal"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          aria-label={link.label}
                          title={link.label}
                          className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="pt-4">
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
