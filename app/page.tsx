"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200">
      <header className="fixed top-0 w-full bg-yellow-400/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold">TomCoin</span>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
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
            <Button
              className="bg-black text-yellow-400 hover:bg-black/80"
              onClick={() => scrollToSection("buy-tom")}
            >
              Buy Tom
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <motion.section
          id="home"
          className="min-h-screen flex items-center relative"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                TomCoin
              </h1>
              <p className="text-xl mb-8">
                The most memeable, memorable, ridiculous, and insane meme coin.
                The dogs have had their day, it's time for humans to take reign
                again - daddy's home!
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
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
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={titleVariants}
              className="text-5xl font-bold text-center mb-12 relative"
            >
              <span className="relative">
                About
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-black/10 rounded-full" />
              </span>
            </motion.h2>
            <motion.div variants={cardVariants}>
              <Card className="bg-white/90 backdrop-blur shadow-xl">
                <CardContent className="p-6">
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
                        TomCoin (TOM) is a meme coin that operates on the
                        Ethereum blockchain. It was created as a tribute to the
                        Supreme Leader of the Tom Cult, Mr. Tom Style, who has
                        gained enormous popularity and a cult following amongst
                        the next generation of entrepreneurs around the world
                        through his massively popular show: The Tom Style Show.
                        TomCoin positions itself purely as a meme coin.
                      </p>
                      <p className="text-lg">
                        TomCoin is here to make meme coins great again. Launched
                        stealth with no presale, zero taxes, LP burnt and
                        contract renounced, TOM is a coin for the people,
                        forever. Fueled by pure memetic power, let TOM show you
                        the way.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="how-to-buy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20 bg-white/5 backdrop-blur"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={titleVariants}
              className="text-5xl font-bold text-center mb-16 relative"
            >
              <span className="relative">
                How to Buy
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-black/10 rounded-full" />
              </span>
            </motion.h2>
            <motion.div variants={cardVariants}>
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
                  <motion.div key={index} variants={cardVariants}>
                    <Card className="bg-white/80 backdrop-blur transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-white/95">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                        <p>{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="tokenomics"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20 bg-white/5 backdrop-blur"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={titleVariants}
              className="text-5xl font-bold text-center mb-16 relative"
            >
              <span className="relative">
                Tokenomics
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-black/10 rounded-full" />
              </span>
            </motion.h2>
            <motion.div variants={cardVariants}>
              <Card className="bg-white/90 backdrop-blur shadow-xl max-w-2xl mx-auto transform hover:scale-105 hover:shadow-2xl hover:bg-white/95 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl mb-4">Token Supply:</h3>
                  <p className="text-4xl font-bold mb-6">420,690,000,000,000</p>
                  <div className="text-left">
                    <p className="mb-2">
                      No Taxes. Period. It&apos;s that simple.
                    </p>
                    <p>
                      LP tokens are burnt, and contract ownership is renounced.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="roadmap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={titleVariants}
              className="text-5xl font-bold text-center mb-16 relative"
            >
              <span className="relative">
                Roadmap
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-black/10 rounded-full" />
              </span>
            </motion.h2>
            <motion.div variants={cardVariants}>
              <Card className="bg-white/90 backdrop-blur shadow-xl max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <motion.div className="space-y-4">
                    {["Meme", "Vibe and HODL", "Meme Takeover"].map(
                      (phase, index) => (
                        <motion.div
                          key={phase}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <h3 className="text-xl font-bold">
                            Phase {index + 1}: {phase}
                          </h3>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20 bg-white/5 backdrop-blur"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={titleVariants}
              className="text-5xl font-bold text-center mb-16 relative"
            >
              <span className="relative">
                FAQ
                <div className="absolute -bottom-4 left-0 right-0 h-2 bg-black/10 rounded-full" />
              </span>
            </motion.h2>
            <motion.div variants={cardVariants}>
              <Card className="bg-white/90 backdrop-blur shadow-xl max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is TomCoin?</AccordionTrigger>
                      <AccordionContent>
                        TomCoin (TOM) is a meme coin that operates on the
                        Ethereum blockchain. It was created as a tribute to the
                        Supreme Leader of the Tom Cult, Mr. Tom Style.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        How does TomCoin Work?
                      </AccordionTrigger>
                      <AccordionContent>
                        TomCoin works like any other ERC-20 token on the
                        Ethereum blockchain, with no taxes and a simple
                        tokenomics structure.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>
                        What are the potential use cases of TomCoin?
                      </AccordionTrigger>
                      <AccordionContent>
                        TomCoin is purely a meme coin for entertainment purposes
                        only, with no intrinsic value or expectation of
                        financial return.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="buy-tom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={cardVariants}>
              <Card className="bg-white/90 backdrop-blur shadow-xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-8">
                    <Button
                      className="text-4xl font-bold px-12 py-8 bg-black text-yellow-400 hover:bg-black/80 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open("/buy-tom", "_blank")}
                    >
                      Buy Tom
                    </Button>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800 font-medium">
                      TomCoin is a meme coin with no intrinsic value or
                      expectation of financial return. The coin is for
                      entertainment purposes only.
                    </p>
                    <p className="text-yellow-700 mt-2">Enjoy responsibly!</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="py-8 text-center bg-black/5 backdrop-blur">
        <p className="text-black/60">
          &copy; 2024 by TomCoin. All rights reserved!
        </p>
      </footer>
    </div>
  );
}
