"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "How to Buy", href: "how-to-buy" },
  { name: "Tokenomics", href: "tokenomics" },
  { name: "Roadmap", href: "roadmap" },
  { name: "FAQ", href: "faq" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              className="block px-2 py-1 text-lg"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
