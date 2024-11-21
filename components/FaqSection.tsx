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
          className="text-5xl font-bold text-center mb-8"
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
                    TomCoin (TOM) is a meme coin that operates on the Ethereum blockchain. It was created as a tribute to the Supreme Leader of the Tom Cult, Mr. Tom Style, who has gained enormous popularity and a cult following amongst the next generation of entrepreneurs around the world through his massively popular show: The Tom Style Show. TomCoin positions itself purely as a meme coin. TOM distinguishes itself by instituting a no-tax policy and being transparent about its lack of utility, keeping things simple as a meme coin.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    How does TomCoin Work?
                  </AccordionTrigger>
                  <AccordionContent>
                    TomCoin works like any other ERC-20 token on the Ethereum
                    blockchain, with no taxes and a simple tokenomics structure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
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
        </motion.div>
      </div>
    </motion.section>
  );
}
