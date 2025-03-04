"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import nbn from "@/public/images/Frame.png";
import { Star, Clock, Shield } from "lucide-react";
import Carousel from "@/components/Carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "@/components/Card";

const texts = ["آینده ای هوشمند", "فناوری", "نوآوری"];

const cardContents = [
  {
    title: "گردشگری هوشمند",
    description: "تجربه‌ای جدید از سفر با فناوری‌های نوین و راهکارهای دیجیتال.",
    bulletPoints: [
      "رزرو هوشمند",
      "راهنمای مجازی",
      "پیشنهادات سفر شخصی‌سازی‌شده",
    ],
    buttonText: "بیشتر بدانید",
  },
  {
    title: "توسعه نرم افزار",
    description: "راهکارهای نوآورانه نرم‌افزاری برای تحول دیجیتال.",
    bulletPoints: ["هوش مصنوعی", "امنیت سایبری", "تحلیل داده"],
    buttonText: "مشاهده پروژه‌ها",
  },
  {
    title: "صنعت برق",
    description: "بهینه‌سازی و اتوماسیون سیستم‌های انرژی برای آینده‌ای پایدار.",
    bulletPoints: ["مدیریت انرژی", "شبکه‌های هوشمند", "پایداری زیست‌محیطی"],
    buttonText: "همکاری با ما",
  },
];

export default function Home() {

  //snap scrolling
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const sections = document.querySelectorAll(".section");
      let currentIndex = Array.from(sections).findIndex(
        (section) => section.getBoundingClientRect().top >= 0
      );
      

      if (event.deltaY > 0 && currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      } else if (event.deltaY < 0 && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  //change text in service section based on the image change
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Adjust interval for appearance duration

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen section flex flex-col md:flex-row items-center justify-between relative pt-16"
      >
        {/* Right Logo */}
        <div className="w-full md:flex-1 h-[30vh] md:h-screen flex flex-col items-center justify-center p-8">
          <Image
            src="/images/home-logo.png" // Replace with your left logo path
            alt="Right Logo"
            className="max-w-full max-h-full object-contain w-[120px] h-[130px] md:w-[283px] md:h-[311px]"
            width={283}
            height={311}
          />
          <p className="font-bold text-xl md:text-4xl p-4 text-center whitespace-nowrap">
            پیشگام پرتو گشت{" "}
            <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
              ویرا
            </span>
          </p>
          <p className="font-bold text-lg md:text-3xl text-center whitespace-nowrap text-gray-500">
            <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
              P
            </span>
            ishgam{" "}
            <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
              P
            </span>
            arto{" "}
            <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
              G
            </span>
            asht{" "}
            <span className="bg-gradient-to-r from-custom-purple to-custom-blue bg-clip-text text-transparent">
              V
            </span>
            ira
          </p>
        </div>
        {/* Left Logo */}
        <div className="w-full md:flex-1 h-[50vh] md:h-screen flex items-center justify-center p-8 relative overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15, // Adjust the duration to control the speed of rotation
              repeat: Infinity, // Repeat the animation infinitely
              ease: "linear", // Use a linear easing function for a constant rotation speed
            }}
            className="absolute w-[80%] h-[80%] flex items-center justify-center"
            style={{ transformOrigin: "center center" }}
          >
            <Image
              src="/images/Frame1.png"
              alt="Left Logo"
              className="w-auto h-auto max-w-full max-h-full object-contain"
              width={768}
              height={778}
            />
          </motion.div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:gap-10 ">
            <h2 className="text-2xl md:text-5xl font-bold text-black mb-4 flex flex-col items-center md:gap-10">
              <span>پیشگام</span>
              <span>در</span>
            </h2>
            <motion.div
              key={currentTextIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className=" bg-gradient-text bg-clip-text text-transparent text-2xl md:text-5xl text-black font-bold"
            >
              {texts[currentTextIndex]}
            </motion.div>
          </div>
        </div>

        {/* <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </a> */}
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen section flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Part 1 */}
            <div className=" p-8 ">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex justify-center md:justify-start">درباره ما</h3>
              <p className="text-lg ">
                هلدینگ پیشگام پرتو گشت ویرا با هدف ایجاد تحول در صنایع مختلف از
                طریق نوآوری و فناوری تاسیس شده است. ما در سه حوزه گردشگری، توسعه
                نرم افزار و صنعت برق فعالیت میکنیم و تلاش داریم با استفاده از
                فناوری های نوین، راهکارهای هوشمند و داده محور ، تجربه ای کارآمد
                تر، هوشمند تر و پایدار تر را برای کسب و کارها و کاربران ایجاد
                کنیم
              </p>
            </div>

            {/* Part 2 */}
            <div className=" p-8 ">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex justify-center md:justify-start">ماموریت ما</h3>
              <p className="text-lg ">
                ما به دنبال ارائه راهکارهای هوشمند و خلاقانه در بخش های
                گردشگری،فناوری و انرژی هستیم تا با بهسته سازی فرآیندها،کاهش
                هزینه ها و افزایش بهره وری،تاثیری مثبت و ماندگار بر صنایع مختلف
                داشته باشیم
              </p>
            </div>

            {/* Part 3 */}
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 flex justify-center md:justify-start">چرا ما؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-100 p-3 md:p-6 rounded-lg flex items-center gap-4">
                  <div className="rounded-lg w-[80px] h-[80px] md:w-[109px] md:h-[109px] flex items-center justify-center aspect-square">
                    <Image
                      src="/images/lamp.png"
                      alt="lamp icon"
                      className="max-w-full max-h-full object-contain"
                      width={109}
                      height={109}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-xl font-bold md:mb-2">نوآوری</h4>
                    <p className="text-gray-600 text-xs md:text-base">
                      استفاده از هوش مصنوعی،داده کاوی و اینترنت اشیا (IOT) برای
                      راهکارهای هوشمند در گردشگری،نرم افزار و صنعت برق
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 p-3 md:p-6 rounded-lg flex items-center gap-4">
                  <div className="rounded-lg w-[80px] h-[80px] md:w-[109px] md:h-[109px] flex items-center justify-center aspect-square">
                    <Image
                      src="/images/rocket.png"
                      alt="rocket icon"
                      className="max-w-full max-h-full object-contain"
                      width={109}
                      height={109}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-xl font-bold md:mb-2">
                      بهینه سازی و بهره وری
                    </h4>
                    <p className="text-gray-600 text-xs md:text-base">
                      کاهش هزینه ها،افزایش سرعت و ارائه راهکارهای مقرون به صرفه
                      و کارآمد
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-100 p-3 md:p-6 rounded-lg flex items-center gap-4">
                  <div className="rounded-lg w-[80px] h-[80px] md:w-[109px] md:h-[109px] flex items-center justify-center aspect-square">
                    <Image
                      src="/images/link.png"
                      alt="link icon"
                      className="max-w-full max-h-full object-contain"
                      width={109}
                      height={109}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-xl font-bold md:mb-2">
                      یکپارچگی و اتوماسیون
                    </h4>
                    <p className="text-gray-600 text-xs md:text-base">
                      توسعه پلتفرم های دیجیتال و سیستم های مدیریت هوشمند برای
                      سهولت در استفاده
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen section flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 flex justify-center md:justify-start">فعالیت ها</h2>
          <Tabs defaultValue="first" className="w-full" dir="rtl">
            <TabsList className="w-full justify-start mb-8 p-7 px-0">
              <TabsTrigger value="first" className="flex-1 p-4">
                گردشگری
              </TabsTrigger>
              <TabsTrigger value="second" className="flex-1 p-4">
                توسعه نرم افزار
              </TabsTrigger>
              <TabsTrigger value="third" className="flex-1 p-4">
                برق
              </TabsTrigger>
            </TabsList>
            <TabsContent value="first">
              <Carousel
                images={[
                  "/images/service-one.png",
                  "/images/atripa-project.png",
                  "/images/service-two.png",
                ]}
                onChange={setCurrentImageIndex} // Pass function
              />
            </TabsContent>
            <TabsContent value="second">
              <Carousel
                images={[
                  "/images/carousel-p2-1.png",
                  "/images/carousel-p2-2.png",
                  "/images/carousel-p2-3.png",
                ]}
                onChange={setCurrentImageIndex}
              />
            </TabsContent>
            <TabsContent value="third">
              <Carousel
                images={[
                  "/images/service-one.png",
                  "/images/atripa-project.png",
                  "/images/service-two.png",
                ]}
                onChange={setCurrentImageIndex}
              />
            </TabsContent>
          </Tabs>

          {/* Card component updates dynamically based on `currentImageIndex` */}
          <Card
            title={cardContents[currentImageIndex].title}
            description={cardContents[currentImageIndex].description}
            bulletPoints={cardContents[currentImageIndex].bulletPoints}
            buttonText={cardContents[currentImageIndex].buttonText}
          />
        </div>
      </section>
    </div>
  );
}
