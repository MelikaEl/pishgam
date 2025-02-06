"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "صفحه اصلی", href: "#home" },
    { name: "درباره ما", href: "#about" },
    { name: "فعالیت ها", href: "#services" },
    { name: "تماس با ما", href: "#footer" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between ">
        {/* <div className="flex-1 text-2xl font-bold">لوگو</div> */}
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 mx-auto">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
      
        </div>


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
                    className="text-foreground/60 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4">تماس با ما</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      
    </nav>
  );
};

export default Navbar;