import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

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

export default function FaqSection() {
  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-12 bg-white/5 backdrop-blur"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={titleVariants}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center mb-8 text-black"
        >
          faq
        </motion.h2>
        <motion.div variants={cardVariants}>
          <Card className="bg-white/90 backdrop-blur border-2 border-black rounded-3xl max-w-2xl mx-auto">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is TomCoin?
                  </AccordionTrigger>
                  <AccordionContent>
                    TomCoin (TOM) is a meme coin that operates on the Ethereum
                    blockchain. It was created as a tribute to the Supreme
                    Leader of the Tom Cult, Mr. Tom Style, who has gained
                    enormous popularity and a cult following amongst the next
                    generation of entrepreneurs around the world through his
                    massively popular show: The Tom Style Show. TomCoin
                    positions itself purely as a meme coin. TOM distinguishes
                    itself by instituting a no-tax policy and being transparent
                    about its lack of utility, keeping things simple as a meme
                    coin.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How does TomCoin Work?
                  </AccordionTrigger>
                  <AccordionContent>
                    TOM operates on the Ethereum blockchain as an ERC-20 token.
                    It employs a redistribution system that rewards long-term
                    stakers, providing them with benefits to remain committed to
                    the project. This approach aims to encourage coin stability
                    by rewarding users for holding the token rather than selling
                    it quickly. Additionally, TOM features a burning mechanism
                    whereby a portion of the coins are permanently removed from
                    circulation on a regular basis. This strives to maintain
                    scarcity despite the coin's maximum supply. The Ethereum
                    blockchain supports TOM through the Proof-of-Stake (PoS)
                    consensus mechanism, where decentralized validators stake 32
                    ETH to process transactions and support the network.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    What are the potential use cases of TomCoin?
                  </AccordionTrigger>
                  <AccordionContent>
                    As a meme coin, TOM's primary use case is as a digital asset
                    that can be acquired, held, and exchanged. It strives to
                    appeal to the cryptocurrency community by keeping things
                    pure and simple as a meme coin. The project's no-tax policy
                    and transparency about its lack of utility are part of its
                    appeal. Additionally, TOM employs a redistribution system
                    that rewards long-term stakers, providing them with benefits
                    to remain committed to the project. This system aims to
                    encourage coin stability and could potentially attract users
                    interested in holding the token for longer periods.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What is the history of TomCoin?
                  </AccordionTrigger>
                  <AccordionContent>
                    TomCoin was launched as a tribute to the Supreme Leader of
                    the Tom Cult, Mr. Tom Style, who has gained enormous
                    popularity and a cult following amongst the next generation
                    of entrepreneurs around the world through his massively
                    popular show: The Tom Style Show. The project aimed to
                    leverage the popularity of meme coins and position itself as
                    a notable meme-based digital asset. TOM is speculated to
                    experience a significant increase in its market cap,
                    attracting a strong community of like-minded followers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
