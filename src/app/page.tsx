"use client";

import Image from "next/image";
import Timer from "./components/timer";
import Link from "next/link";
import SectionWrapper from "./components/section-wrapper";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative ">
      {/* <Image
        priority
        alt="Invitation Card"
        src="/images/back.webp"
        width={430}
        height={1000}
        className="fixed w-screen h-screen -z-20 object-cover"
      /> */}
      <div className="relative">
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 text-center text-white z-20">
          <Timer />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <Image
          alt="main-image"
          src="/images/wedding-image-3.jpeg"
          priority
          width={430}
          height={1000}
          className="h-screen w-screen -z-10 object-cover"
        />
      </div>
      <div className="z-10">
        <div className="md:flex md:px-8 gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-10 mt-10 justify-center px-4 md:px-0 text-center">
            <SectionWrapper>
              <p className="text-text28 md:text-text40 sm:text-text32 leading-[140%] font-semibold font-armBoloragir text-center">
                Ընկերներ և բարեկամներ
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text20 leading-[140%] sm:text-text24 md:text-text28 font-armItalic font-medium text-center">
                Մենք ցանկանում ենք Ձեզ հետ կիսել Մեր կյանքի կարևորագույն օրերից
                մեկը
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text28 leading-[140%] sm:text-text32 md:text-text40 font-armBoloragir font-semibold text-center">
                Հրավիրում ենք Ձեզ մեր հարսանիքին
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text40 mt-6 leading-[140%] sm:text-text48 md:text-text50 font-armBoloragir text-center">
                02․10․2025
              </p>
            </SectionWrapper>
          </div>
          <div className="flex flex-col mt-10 w-screen sm:max-w-[570px] sm:justify-self-center ">
            <div className="w-full flex justify-start">
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  alt="couple"
                  src="/images/wedding-image-1.jpeg"
                  priority
                  width={270}
                  height={400}
                  className="object-cover xs:w-[330px]"
                />
              </motion.div>
            </div>

            <div className="w-full flex justify-end -mt-20">
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Image
                  alt="couple"
                  src="/images/wedding-image-2.jpeg"
                  priority
                  width={270}
                  height={400}
                  className="object-cover xs:w-[300px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-10 lg:px-20">
          <SectionWrapper>
            <p className="text-text64 sm:text-text80 md:text-text100 mt-20 leading-[140%] font-medium font-allegro text-center">
              Օրվա Ծրագիրը
            </p>
          </SectionWrapper>
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 mt-6">
            <SectionWrapper>
              <Image
                alt="image"
                src="/images/matani.svg"
                priority
                height={150}
                width={150}
                className="sm:h-[200px] sm:w-[200px] md:w-[250px] md:h-[250px]"
              />
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text32 sm:text-text40 md:text-text50 font-armBoloragir">
                Պսակադրություն
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text24 sm:text-text32 md:text-text40 font-armBoloragir font-semibold">
                14։00
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text32 sm:text-text40 md:text-text50 font-armBoloragir font-semibold">
                Խոր Վիրապ եկեղեցի
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <Link
                href="https://yandex.com/maps/-/CHxuZH2a"
                className="cursor-pointer"
                target="_blank"
              >
                <button className="px-10 py-4 sm:px-14 sm:py-6 cursor-pointer text-text20 sm:text-text28 md:text-text32 rounded-2xl bg-black text-white">
                  Ինչպես հասնել
                </button>
              </Link>
            </SectionWrapper>
          </div>
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-12 mt-32 sm:mt-44 md:mt-60">
            <SectionWrapper>
              <Image
                priority
                alt="image"
                src="/images/bazhak.svg"
                height={150}
                width={150}
                className="sm:h-[200px] sm:w-[200px] md:w-[250px] md:h-[250px]"
              />
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text32 sm:text-text40 md:text-text50 text-center font-armBoloragir">
                Հարսանյաց հանդիսություն
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text24 sm:text-text32 md:text-text40 font-armBoloragir font-semibold">
                18։00
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-text32 sm:text-text40 md:text-text50 font-armBoloragir font-semibold">
                Վահագնի հոլլ
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <Link
                href="https://yandex.com/maps/-/CHxufK4l"
                className="cursor-pointer"
                target="_blank"
              >
                <button className="px-10 py-4 sm:px-14 sm:py-6 cursor-pointer text-text20 sm:text-text28 md:text-text32 rounded-2xl bg-black text-white">
                  Ինչպես հասնել
                </button>
              </Link>
            </SectionWrapper>
          </div>
        </div>
        <div className="flex justify-center gap-4 my-20 px-4">
          <p className="text-text40 sm:text-text48 md:text-text56 font-semibold text-center font-armItalic">
            Սիրով սպասում ենք Ձեզ
          </p>
        </div>
      </div>
    </div>
  );
}
