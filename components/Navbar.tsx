"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height
      const heroSection = document.getElementById("home");
      const heroHeight = heroSection?.offsetHeight || 0;

      // Show logo when scrolled past hero section
      setShowLogo(window.scrollY > heroHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "صفحه اصلی", href: "#home", id: "home" },
    { name: "درباره ما", href: "#about", id: "about" },
    { name: "فعالیت ها", href: "#services", id: "services" },
    { name: "تماس با ما", href: "#footer", id: "footer" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center ">
        {/* <div className="flex-1 text-2xl font-bold">لوگو</div> */}
        {/* Logo - Right aligned on desktop, centered on mobile */}
        {/* Logo with Text */}
        <div
          className={`
          transition-all duration-300
          absolute left-1/2 md:left-4 
          transform -translate-x-1/2 md:translate-x-0
          ${
            showLogo
              ? "opacity-100 top-1/2 -translate-y-1/2"
              : "opacity-0 -top-full"
          }
          md:relative md:top-auto md:transform-none
        `}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/images/home-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="hidden md:block">
              <h3 className="font-bold text-base">
                {" "}
                پیشگام پرتو گشت{" "}
                <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
                  ویرا
                </span>
              </h3>
              <p className="text-sm text-gray-500">
                <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
                  P
                </span>
                ishgam{" "}
                <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
                  P
                </span>
                arto{" "}
                <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
                  G
                </span>
                asht{" "}
                <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
                  V
                </span>
                ira
              </p>
            </div>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.id)}
              className={`
                relative py-2
                hover:bg-gradient-to-r hover:to-custom-purple hover:from-custom-blue  hover:bg-clip-text hover:text-transparent
                transition-colors
                ${
                  activeItem === item.id
                    ? "bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent"
                    : "text-black"
                }
              `}
            >
              {item.name}
              <span
                className={`
                  absolute bottom-0 left-0 w-full h-0.5
                  bg-gradient-to-r from-custom-purple to-custom-blue
                  transform origin-left scale-x-0 transition-transform duration-300
                  ${activeItem === item.id ? "scale-x-100" : ""}
                `}
              />
            </a>
          ))}
        </div>
        {/* Empty div for spacing on desktop */}
        <div className="hidden md:block w-[200px]" />{" "}
        {/* Adjust width to match logo container width */}
        {/* Mobile Menu */}
        <div className="md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.id);
                      setIsOpen(false);
                    }}
                    className={`
                      relative py-2
                      hover:bg-gradient-to-r hover:from-custom-purple hover:to-custom-blue hover:bg-clip-text hover:text-transparent
                      transition-colors
                      ${
                        activeItem === item.id
                          ? "bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent"
                          : "text-black"
                      }
                    `}
                  >
                    {item.name}
                    <span
                      className={`
                        absolute bottom-0 left-0 w-full h-0.5
                        bg-gradient-to-r from-custom-purple to-custom-blue
                        transform origin-left scale-x-0 transition-transform duration-300
                        ${activeItem === item.id ? "scale-x-100" : ""}
                      `}
                    />
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
