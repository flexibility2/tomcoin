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
import { Youtube, Menu, X } from "lucide-react";

interface SocialLink {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const socialLinks: SocialLink[] = [
    {
      name: "Youtube",
      link: "https://youtube.com/",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      name: "X",
      link: "https://x.com/",
      icon: (
        <Image
          src="/x.svg"
          alt="X"
          width={20}
          height={20}
          className="opacity-80"
        />
      ),
    },
    {
      name: "Telegram",
      link: "https://t.me/",
      icon: (
        <Image
          src="/telegram.svg"
          alt="Telegram"
          width={20}
          height={20}
          className="opacity-80 invert"
        />
      ),
    },
    {
      name: "Etherscan",
      link: "https://etherscan.io/token/0x71164F2A46ABD32998503E4d69feFC0641EC2c11",
      icon: (
        <Image
          src="/etherscan.svg"
          alt="Etherscan"
          width={20}
          height={20}
          className="opacity-80"
        />
      ),
    },
    {
      name: "Uniswap",
      link: "https://app.uniswap.org/",
      icon: (
        <Image
          src="/unswip.png"
          alt="Uniswap"
          width={20}
          height={20}
          className="opacity-80 brightness-0"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200">
      <header className="fixed top-0 w-full bg-yellow-400/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
          <span className="text-2xl font-bold">TomCoin</span>

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

          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Button
              className="bg-black text-yellow-400 hover:bg-black/80"
              onClick={() => scrollToSection("buy-tom")}
            >
              Buy Tom
            </Button>
          </div>

          <motion.div
            initial={false}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:hidden flex-col gap-4 absolute top-full left-0 right-0 bg-yellow-400/95 backdrop-blur-sm p-4 border-t border-black/10 shadow-lg`}
          >
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
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`capitalize text-left py-2 ${
                  activeSection === item ? "font-bold" : ""
                }`}
              >
                {item.replace("-", " ")}
              </button>
            ))}
            <Button
              className="bg-black text-yellow-400 hover:bg-black/80 w-full"
              onClick={() => {
                scrollToSection("buy-tom");
                setIsMenuOpen(false);
              }}
            >
              Buy Tom
            </Button>
          </motion.div>
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
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(social.link, "_blank")}
                    className="hover:scale-110 transition-transform duration-200 bg-transparent border-black/20 hover:bg-black/5 hover:border-black/30"
                  >
                    {social.icon}
                  </Button>
                ))}
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
                    icon: "/metamask.svg",
                  },
                  {
                    title: "Get Some ETH",
                    description:
                      "Have ETH in your wallet to swap to TOM. If you don't have any ETH, you can buy directly on metamask.",
                    icon: "/etherscan.svg",
                  },
                  {
                    title: "Go to Uniswap",
                    description:
                      "Connect to uniswap. Go to app.uniswap.org in google chrome or on the browser inside your metamask app.",
                    icon: "/unswip.png",
                  },
                  {
                    title: "Swap ETH to TOM",
                    description:
                      "Swap ETH to TOM. We have no taxes so you don't need to worry about buying with a specific slippage.",
                    icon: "/e-t-swap.svg",
                    iconSize: 56,
                  },
                ].map((step, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <Card className="bg-white/80 backdrop-blur transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-white/95">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="shrink-0 flex items-center justify-center w-14 h-14">
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={step.iconSize || 40}
                              height={step.iconSize || 40}
                              className="opacity-80"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-4">
                              {step.title}
                            </h3>
                            <p>{step.description}</p>
                          </div>
                        </div>
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20 bg-white/5 backdrop-blur"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={cardVariants} className="max-w-4xl mx-auto">
              <Card className="bg-white/90 backdrop-blur shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                  >
                    <Image
                      src="/TomCoin-meme.png"
                      alt="TomCoin Meme"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
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
