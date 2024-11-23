"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Youtube, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";

interface SocialLink {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random(),
        size: Math.random() * 3,
      });
    }

    let animationFrameId: number;

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
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
      icon: (
        <Image
          src="/yt.svg"
          alt="X"
          width={54}
          height={37}
          className="opacity-80"
        />
      ),
    },
    {
      name: "X",
      link: "https://x.com/",
      icon: (
        <Image
          src="/x.svg"
          alt="X"
          width={54}
          height={37}
          className="opacity-80"
        />
      ),
    },
    {
      name: "Telegram",
      link: "https://t.me/",
      icon: (
        <Image
          src="/tg.svg"
          alt="Telegram"
          width={54}
          height={37}
          className="opacity-80"
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
          width={54}
          height={37}
          className="opacity-80"
        />
      ),
    },
    {
      name: "Uniswap",
      link: "https://app.uniswap.org/",
      icon: (
        <Image
          src="/uni.svg"
          alt="Uniswap"
          width={54}
          height={37}
          className="opacity-80"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-theme via-theme/90 to-theme/80 relative overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,251,66,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_100%] animate-shimmer" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-theme/30 rounded-full blur-[120px] pointer-events-none" />
      <header className="fixed top-0 w-full bg-header-yellow z-50">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between relative">
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: "Avenir Next" }}
          >
            TomCoin
          </span>

          <div className="hidden md:flex items-center gap-8">
            {[
              "home",
              "about",
              "how to buy",
              "tokenomics",
              "roadmap",
              "faq",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.split(" ").join("-").toLowerCase())
                }
                className={`${
                  activeSection === item.split(" ").join("-").toLowerCase() &&
                  item !== "home"
                    ? "font-bold"
                    : ""
                } px-2 py-1 hover:bg-black/5 rounded-md transition-colors duration-200`}
              >
                {item}
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
              className="bg-transparent hover:bg-black/5 text-black border-2 border-black rounded-full px-6 py-1 text-sm font-bold transition-colors duration-200"
              onClick={() => scrollToSection("buy-tom")}
            >
              buy tom
            </Button>
          </div>

          <motion.div
            initial={false}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:hidden flex-col gap-2 absolute top-full left-0 right-0 bg-theme/95 backdrop-blur-sm p-3 border-t border-black/10 shadow-lg`}
          >
            {[
              "home",
              "about",
              "how to buy",
              "tokenomics",
              "roadmap",
              "faq",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.split(" ").join("-").toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`text-left py-1.5 ${
                  activeSection === item.split(" ").join("-").toLowerCase() &&
                  item !== "home"
                    ? "font-bold"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        </nav>
      </header>

      <main className="pt-4 md:pt-8">
        <motion.section
          id="home"
          className="flex items-start md:items-center relative -mt-2"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-2 md:gap-8 items-center relative pt-16 pb-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.h1
                className="text-6xl md:text-7xl font-bold mb-3 relative pl-4"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-black via-theme to-black bg-[length:200%_auto]">
                  <span className="font-['Avenir Next'] text-5xl sm:text-6xl md:text-[72px] leading-tight md:leading-[72px] text-center text-black w-full md:w-[305px] block font-bold">
                    TomCoin
                  </span>
                  <div className="absolute -inset-2 bg-theme/30 blur-2xl -z-10" />
                </span>
              </motion.h1>
              <p className="text-base sm:text-lg leading-relaxed md:leading-[26px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] max-w-[480px] px-4 mb-3">
                The most memeable, memorable, ridiculous, and insane meme coin.
                The dogs have had their day, it’s time for humans to take reign
                again - daddy's home!
              </p>
              <div className="flex space-x-1 justify-center md:justify-start mt-2 pl-1">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => window.open(social.link, "_blank")}
                    className="hover:scale-105 transition-transform duration-200 p-2"
                  >
                    {social.icon}
                  </button>
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
                priority
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.section>
        <div className="h-2 bg-white"></div>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="pt-6 pb-12 md:py-20 lg:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center md:items-end md:pr-[calc((100%-960px)/2)]">
                <motion.h2
                  variants={titleVariants}
                  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-8"
                >
                  about
                </motion.h2>
              </div>
              <motion.div variants={cardVariants}>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-24">
                  <div className="flex justify-center w-full md:w-auto">
                    <Image
                      src="/TomCoinWithEth.svg"
                      alt="About TomCoin"
                      width={400}
                      height={400}
                      className="rounded-lg w-full max-w-[280px] h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 space-y-4 md:max-w-[580px]">
                    <p className="text-base sm:text-lg leading-relaxed md:leading-[26px] text-left text-black">
                      TomCoin (TOM) is a meme coin that operates on the Ethereum
                      blockchain. It was created as a tribute to the Supreme
                      Leader of the Tom Cult, Mr. Tom Style, who has gained
                      enormous popularity and a cult following amongst the next
                      generation of entrepreneurs around the world through his
                      massively popular show: The Tom Style Show. TomCoin
                      positions itself purely as a meme coin.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed md:leading-[26px] text-left text-black">
                      TomCoin is here to make meme coins great again. Launched
                      stealth with no presale, zero taxes, LP burnt and
                      ownership renounced, TOM is a coin for the people,
                      forever. Fueled by pure memetic power, let TOM show you
                      the way.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <div className="h-2 bg-white"></div>

        <motion.section
          id="how-to-buy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="min-h-screen flex flex-col items-center justify-center py-10 md:py-16"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={titleVariants}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
            >
              how to buy
            </motion.h2>
            <motion.div variants={cardVariants}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Create a Wallet",
                    description:
                      "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
                    icon: "/metamask.svg",
                    iconSize: 60,
                    iconClass: "w-16 h-16 mb-4",
                  },
                  {
                    title: "Get Some ETH",
                    description:
                      "have ETH in your wallet to swap to TOM. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                    icon: "/ethereum.svg",
                    iconSize: 60,
                    iconClass: "w-16 h-16 mb-4",
                  },
                  {
                    title: "Go to Uniswap",
                    description:
                      "connect to uniswap. Go to app.uniswap.org in google chrome or on the browser inside your metamask app. Connect your wallet. Paste the TOM token address into uniswap, select TomCoin, and confirm. When metamask prompts you for a wallet signature, sign.",
                    icon: "/uniswap.svg",
                    iconSize: 60,
                    iconClass: "w-20 h-20 mb-2",
                  },
                  {
                    title: "Swap ETH to TOM",
                    description:
                      "swap ETH to TOM. We have no taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
                    icon: "/e-t-swap.svg",
                    iconSize: 130,
                    iconClass: "w-32 h-24 -mt-2",
                  },
                ].map((step, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <Card className="bg-white/90 backdrop-blur-md shadow-xl border-2 border-black rounded-3xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-shimmer h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/95 group">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex flex-col items-center text-center h-full">
                          <div
                            className={`flex items-center justify-center ${step.iconClass} transform transition-transform duration-300 group-hover:scale-110`}
                          >
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={step.iconSize}
                              height={step.iconSize}
                              className="opacity-80 object-contain transition-all duration-300 group-hover:opacity-100"
                            />
                          </div>
                          <div className="space-y-2 flex-1">
                            <h3 className="text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-black">
                              {step.title}
                            </h3>
                            <p className="text-base sm:text-lg text-black font-medium text-left">
                              {step.description}
                            </p>
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
        <div className="h-2 bg-white"></div>

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
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
            >
              tokenomics
            </motion.h2>
            <motion.div variants={cardVariants} className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">
                  token supply:
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 break-words">
                  420,690,000,000,000
                </p>
              </div>
              <Card className="bg-white shadow-xl border-2 border-black rounded-[2rem]">
                <CardContent className="py-12 px-4">
                  <p className="text-base sm:text-lg space-y-6 flex flex-col text-black font-medium">
                    <span>No Taxes. Period. It&apos;s that simple.</span>
                    <span>LP tokens burnt. Ownership renounced.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        <div className="h-2 bg-white"></div>

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
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
            >
              roadmap
            </motion.h2>
            <motion.div variants={cardVariants} className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-xl border-2 border-black rounded-[2rem]">
                <CardContent className="py-12 px-8">
                  <motion.div className="space-y-6">
                    {["Meme", "Vibe and HODL", "Meme Takeover"].map(
                      (phase, index) => (
                        <motion.div
                          key={phase}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <p className="text-base sm:text-lg text-black font-medium">
                            Phase {index + 1}: {phase}
                          </p>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        <div className="h-2 bg-white"></div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-10 bg-white/5 backdrop-blur"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={cardVariants} className="max-w-2xl mx-auto">
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
                    className="will-change-transform"
                  >
                    <Image
                      src="/TomCoin-meme.png"
                      alt="TomCoin Meme"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
        <div className="h-2 bg-white"></div>

        <FaqSection />
        <div className="h-2 bg-white"></div>

        <motion.section
          id="buy-tom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-12 bg-theme"
        >
          <div className="container mx-auto px-4 pb-12">
            <motion.div variants={cardVariants}>
              <div className="max-w-3xl mx-auto text-center">
                <Button
                  className="px-16 py-8 bg-black text-white hover:bg-black/90 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mb-12 text-2xl font-bold"
                  onClick={() =>
                    window.open("https://app.uniswap.org/", "_blank")
                  }
                >
                  buy tom
                </Button>

                <div className="text-black text-base sm:text-lg max-w-2xl mx-auto text-left md:text-center px-4">
                  <p>
                    TomCoin is a meme coin with no intrinsic value or
                    expectation of financial return. The coin is for
                    entertainment purposes only.
                  </p>
                  <p className="font-medium">Enjoy responsibly!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="py-6 text-center bg-header-yellow">
        <p className="text-black text-sm">
          &copy;2024 by TomCoin. All rights reserved!
        </p>
      </footer>
    </div>
  );
}
