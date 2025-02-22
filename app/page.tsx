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

const texts = ["فناوری", "آینده ای هوشمند", "نوآوری"];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between relative bg-gradient-to-b from-primary/10 to-background pt-16"
      >
        {/* Right Logo */}
        <div className="w-full md:flex-1 h-[50vh] md:h-screen flex items-center justify-center p-8">
          <Image
            src="/images/Frame.png" // Replace with your left logo path
            alt="Right Logo"
            className="max-w-full max-h-full object-contain"
            width={504}
            height={455}
          />
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 ">
            <h2 className="text-2xl md:text-5xl font-bold text-black mb-4 flex flex-col items-center gap-9">
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
      <section
        id="about"
        className="min-h-screen flex items-center bg-muted py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Part 1 */}
            <div className=" p-8 ">
              <h3 className="text-2xl font-semibold mb-4">درباره ما</h3>
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
              <h3 className="text-2xl font-semibold mb-4">ماموریت ما</h3>
              <p className="text-lg ">
                ما به دنبال ارائه راهکارهای هوشمند و خلاقانه در بخش های
                گردشگری،فناوری و انرژی هستیم تا با بهسته سازی فرآیندها،کاهش
                هزینه ها و افزایش بهره وری،تاثیری مثبت و ماندگار بر صنایع مختلف
                داشته باشیم
              </p>
            </div>

            {/* Part 3 */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-8">چرا ما؟</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src="/images/lamp.png"
                      alt="rocket icon"
                      className="max-w-full max-h-full object-contain"
                      width={109}
                      height={109}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">نوآوری</h4>
                    <p className="text-gray-600">
                      استفاده از هوش مصنوعی،داده کاوی و اینترنت اشیا (IOT) برای
                      راهکارهای
                    </p>
                  </div>
                </div>

                {/* 
                <div>
                    <h4 className="text-xl font-bold mb-2">نوآوری</h4>
                    <p>
                      استفاده از هوش مصنوعی،داده کاوی و اینترنت اشیا (IOT) برای
                      ایجاد راهکارهای هوشمند در گردشگری،نرم افزار و صنعت برق
                    </p>
                  </div>
                */}

                {/* Card 2 */}
                <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src="/images/rocket.png"
                      alt="rocket icon"
                      className="max-w-full max-h-full object-contain"
                      width={109}
                      height={109}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      بهینه سازی و بهره وری
                    </h4>
                    <p className="text-gray-600">
                      کاهش هزینه ها،افزایش سرعت و ارائه راهکارهای مقرون به صرفه
                      و کارآمد
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src="/images/link.png"
                      alt="link icon"
                      className="max-w-full max-h-full object-contain"
                      width={109}
                      height={109}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      یکپارچگی و اتوماسیون
                    </h4>
                    <p className="text-gray-600">
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
      <section id="services" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold  mb-12">فعالیت ها</h2>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card p-6 rounded-lg shadow-lg">
                <div className="h-48 mb-4 bg-muted rounded-md overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500`}
                    alt={`Service ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">خدمت {item}</h3>
                <p className="text-muted-foreground mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
                <Button variant="secondary" className="w-full">
                  جزئیات بیشتر
                </Button>
              </div>
            ))}
          </div> */}
          <Tabs defaultValue="first" className="w-full" dir="rtl">
            <TabsList className="w-full justify-start mb-8">
              <TabsTrigger value="first" className="flex-1">
                گردشگری
              </TabsTrigger>
              <TabsTrigger value="second" className="flex-1">
                توسعه نرم افزار
              </TabsTrigger>
              <TabsTrigger value="third" className="flex-1">
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
              />
            </TabsContent>
            <TabsContent value="second">
              <Carousel
                images={[
                  "/images/carousel-p2-1.png",
                  "/images/carousel-p2-2.png",
                  "/images/carousel-p2-3.png",
                ]}
              />
            </TabsContent>
            <TabsContent value="third">
              <Carousel
                images={[
                  "/images/service-one.png",
                  "/images/atripa-project.png",
                  "/images/service-two.png",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}


