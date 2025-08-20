"use client";

import Image from "next/image";
import Timer from "./components/timer";
import Link from "next/link";
import SectionWrapper from "./components/section-wrapper";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative ">
      <Image
        priority
        alt="Invitation Card"
        src="/images/back.webp"
        width={430}
        height={1000}
        className="fixed w-screen h-screen -z-20 object-cover"
      />
      <div className="relative">
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 text-center text-white z-20">
          <Timer />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <Image
          alt="main-image"
          src="/images/1_copy.webp"
          priority
          width={430}
          height={1000}
          className="h-screen w-screen -z-10 object-cover"
        />
      </div>
      <div className="z-10">
        <div className="flex flex-col items-center gap-4 mt-10 justify-center px-4 text-center">
          <SectionWrapper>
            <p className="text-3xl leading-[140%] font-semibold font-armBoloragir text-center">
              Ընկերներ և բարեկամներ
            </p>
          </SectionWrapper>
          <SectionWrapper>
            <p className="text-xl leading-[140%] font-armItalic font-medium text-center">
              Մենք ցանկանում ենք Ձեզ հետ կիսել Մեր կյանքի կարևորագույն օրերից
              մեկը
            </p>
          </SectionWrapper>
          <SectionWrapper>
            <p className="text-3xl leading-[140%] font-armBoloragir font-semibold text-center">
              Հրավիրում ենք Ձեզ մեր հարսանիքին
            </p>
          </SectionWrapper>
          <SectionWrapper>
            <p className="text-4xl mt-6 leading-[140%] font-armBoloragir text-center">
              02․10․2025
            </p>
          </SectionWrapper>
        </div>
        <div className="flex flex-col mt-10 w-screen">
          <div className="w-full flex justify-start">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Image
                alt="couple"
                src="/images/3.webp"
                priority
                width={270}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full flex justify-end -mt-28">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Image
                alt="couple"
                src="/images/3.webp"
                priority
                width={270}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:px-10 lg:px-20">
          <SectionWrapper>
            <p className="text-6xl mt-20 leading-[140%] font-medium font-allegro text-center">
              Օրվա Ծրագիրը
            </p>
          </SectionWrapper>
          <div className="flex flex-col items-center gap-6 mt-6">
            <SectionWrapper>
              <Image
                alt="image"
                src="/images/matani.svg"
                priority
                height={150}
                width={150}
              />
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-3xl font-armBoloragir">Պսակադրություն</p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-2xl font-armBoloragir font-semibold">14։00</p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-3xl font-armBoloragir font-semibold">
                Խոր Վիրապ եկեղեցի
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <Link
                href="https://yandex.com/maps/-/CHxuZH2a"
                className="cursor-pointer"
                target="_blank"
              >
                <button className="px-10 py-4 cursor-pointer text-xl rounded-2xl bg-black text-white">
                  Ինչպես հասնել
                </button>
              </Link>
            </SectionWrapper>
          </div>
          <div className="flex flex-col items-center gap-6 mt-32">
            <SectionWrapper>
              <Image
                priority
                alt="image"
                src="/images/bazhak.svg"
                height={150}
                width={150}
              />
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-3xl text-center font-armBoloragir">
                Հարսանյաց հանդիսություն
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-2xl font-armBoloragir font-semibold">18։00</p>
            </SectionWrapper>
            <SectionWrapper>
              <p className="text-3xl font-armBoloragir font-semibold">
                Վահագնի հոլլ
              </p>
            </SectionWrapper>
            <SectionWrapper>
              <Link
                href="https://yandex.com/maps/-/CHxufK4l"
                className="cursor-pointer"
                target="_blank"
              >
                <button className="px-10 py-4 cursor-pointer text-xl rounded-2xl bg-black text-white">
                  Ինչպես հասնել
                </button>
              </Link>
            </SectionWrapper>
          </div>
        </div>
        <div className="flex justify-center gap-4 my-20">
          <p className="text-4xl font-semibold text-center font-armItalic">
            Սիրով սպասում ենք Ձեզ
          </p>
        </div>
      </div>
    </div>
  );
}
