"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Youtube,
  Twitter,
  TextIcon as Telegram,
  MessageCircle,
  Gitlab,
} from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400">
      <header className="fixed top-0 w-full bg-yellow-400/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold">TomCoin</span>
          <div className="hidden md:flex space-x-6">
            {[
              "home",
              "about",
              "how-to-buy",
              "tokenomics",
              "roadmap",
              "faq",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item ? "font-bold" : ""
                }`}
              >
                {item.replace("-", " ")}
              </button>
            ))}
          </div>
          <Button className="bg-black text-yellow-400 hover:bg-black/80">
            buy tom
          </Button>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold mb-6">TomCoin</h1>
              <p className="text-xl mb-8">
                The most memeable, memorable, ridiculous, and insane meme coin.
                The dogs have had their day, it's time for humans to take reign
                again - daddy's home!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Telegram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Gitlab className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square"
            >
              <Image
                src="/tomcoin-hero.png"
                alt="TomCoin Hero"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <h2 className="text-4xl font-bold mb-6">About</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Image
                    src="/about-tomcoin.png"
                    alt="About TomCoin"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-lg mb-4">
                      TomCoin (TOM) is a meme coin that operates on the Ethereum
                      blockchain. It was created as a tribute to the Supreme
                      Leader of the Tom Cult, Mr. Tom Style, who has gained
                      enormous popularity and a cult following amongst the next
                      generation of entrepreneurs around the world through his
                      massively popular show: The Tom Style Show. TomCoin
                      positions itself purely as a meme coin.
                    </p>
                    <p className="text-lg">
                      TomCoin is here to make meme coins great again. Launched
                      stealth with no presale, zero taxes, LP burnt and contract
                      renounced, TOM is a coin for the people, forever. Fueled
                      by pure memetic power, let TOM show you the way.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="how-to-buy" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">How to Buy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Create a Wallet",
                  description:
                    "Download metamask or your wallet of choice from the app store or google play store for free.",
                },
                {
                  title: "Get Some ETH",
                  description:
                    "Have ETH in your wallet to swap to TOM. If you don't have any ETH, you can buy directly on metamask.",
                },
                {
                  title: "Go to Uniswap",
                  description:
                    "Connect to uniswap. Go to app.uniswap.org in google chrome or on the browser inside your metamask app.",
                },
                {
                  title: "Swap ETH to TOM",
                  description:
                    "Swap ETH to TOM. We have no taxes so you don't need to worry about buying with a specific slippage.",
                },
              ].map((step, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p>{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tokenomics" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Tokenomics</h2>
            <Card className="bg-white/80 backdrop-blur max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">Token Supply:</h3>
                <p className="text-4xl font-bold mb-6">420,690,000,000,000</p>
                <div className="text-left">
                  <p className="mb-2">No Taxes. Period. It's that simple.</p>
                  <p>
                    LP tokens are burnt, and contract ownership is renounced.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="roadmap" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">Roadmap</h2>
            <Card className="bg-white/80 backdrop-blur max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Phase 1: Meme</h3>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Phase 2: Vibe and HODL
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Phase 3: Meme Takeover
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12">FAQ</h2>
            <Card className="bg-white/80 backdrop-blur max-w-2xl mx-auto">
              <CardContent className="p-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is TomCoin?</AccordionTrigger>
                    <AccordionContent>
                      TomCoin (TOM) is a meme coin that operates on the Ethereum
                      blockchain. It was created as a tribute to the Supreme
                      Leader of the Tom Cult, Mr. Tom Style.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How does TomCoin Work?</AccordionTrigger>
                    <AccordionContent>
                      TomCoin works like any other ERC-20 token on the Ethereum
                      blockchain, with no taxes and a simple tokenomics
                      structure.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      What are the potential use cases of TomCoin?
                    </AccordionTrigger>
                    <AccordionContent>
                      TomCoin is purely a meme coin for entertainment purposes
                      only, with no intrinsic value or expectation of financial
                      return.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center">
        <p>&copy; 2024 by TomCoin. All rights reserved!</p>
      </footer>
    </div>
  );
}
