"use client";

import Image from "next/image";
import Carousel from "@/components/Carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { BASE_URL } from "@/utils/apiConfig";
import axios from "axios";

const texts = ["آینده ای هوشمند", "فناوری", "نوآوری"];

export default function Home() {
  // Define a type for our unified content
  interface ContentType {
    aboutUs: { persian_description: string }[];
    mission: { persian_description: string }[];
    whyUs: any[]; // Each item should include persian_title, persian_description, image, etc.
    activities: any[]; // Activities represent the services section data
  }

  // Unified state for all sections
  const [content, setContent] = useState<ContentType>({
    aboutUs: [],
    mission: [],
    whyUs: [],
    activities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for managing active service tab and active product index per service
  const [activeTab, setActiveTab] = useState(0);
  const [activeProductIndices, setActiveProductIndices] = useState<number[]>(
    []
  );

  // Unified API fetch for all content
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/content");
        setContent(response.data);
        // Initialize an array of zeros based on the number of service items
        if (response.data.activities) {
          setActiveProductIndices(
            new Array(response.data.activities.length).fill(0)
          );
        }
      } catch (err) {
        setError("خطا در دریافت اطلاعات");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Snap scrolling logic remains unchanged
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

  // Change text in hero section
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intervalId);
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

  // Determine the current product for the active service tab
  const currentService = content.activities[activeTab];
  const currentProduct =
    currentService &&
    currentService.products &&
    currentService.products.length > 0
      ? currentService.products[activeProductIndices[activeTab]]
      : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen section flex flex-col md:flex-row items-center justify-between relative pt-16"
      >
        <div className="w-full md:flex-1 h-[30vh] md:h-screen flex flex-col items-center justify-center p-8">
          <Image
            src="/images/home-logo.png"
            alt="Right Logo"
            className="max-w-full max-h-full object-contain"
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
        <div className="w-full md:flex-1 h-[50vh] md:h-screen flex items-center justify-center p-8 relative overflow-hidden">
          <motion.div
            animate={{ rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:gap-10">
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
              className="bg-gradient-text bg-clip-text text-transparent text-2xl md:text-5xl text-black font-bold"
            >
              {texts[currentTextIndex]}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen section flex items-center py-7"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12">
            <div className="p-8">
              <h3 className="text-2xl md:text-4xl font-extrabold mb-4 flex justify-center md:justify-start">
                درباره ما
              </h3>
              {loading ? (
                <p className="text-lg">در حال بارگذاری...</p>
              ) : error ? (
                <p className="text-lg text-red-500">{error}</p>
              ) : (
                <p className="text-2xl">
                  {content.aboutUs[0]?.persian_description}
                </p>
              )}
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-4xl font-extrabold mb-4 flex justify-center md:justify-start">
                ماموریت ما
              </h3>
              <p className="text-2xl">
                {loading
                  ? "در حال بارگذاری..."
                  : error
                  ? error
                  : content.mission[0]?.persian_description}
              </p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-4xl font-extrabold mb-8 flex justify-center md:justify-start">
                چرا ما؟
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {loading ? (
                  <p className="text-lg">در حال بارگذاری...</p>
                ) : error ? (
                  <p className="text-lg text-red-500">{error}</p>
                ) : (
                  content.whyUs.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-3 md:p-6 rounded-lg flex items-center gap-4"
                    >
                      <div className="rounded-lg w-[80px] h-[80px] md:w-[109px] md:h-[109px] flex items-center justify-center aspect-square">
                        <Image
                          src={`${BASE_URL}${item.image}`}
                          alt={item.persian_title}
                          className="max-w-full max-h-full object-contain"
                          width={109}
                          height={109}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-2xl font-bold md:mb-2">
                          {item.persian_title}
                        </h4>
                        <p className="text-gray-600 text-base md:text-base">
                          {item.persian_description}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen section flex items-center py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 flex justify-center md:justify-start">
            فعالیت ها
          </h2>
          {loading ? (
            <p className="text-lg">در حال بارگذاری...</p>
          ) : error ? (
            <p className="text-lg text-red-500">{error}</p>
          ) : content.activities.length > 0 ? (
            <Tabs
              value={activeTab.toString()}
              onValueChange={(value) => setActiveTab(Number(value))}
              className="w-full"
              dir="rtl"
            >
              <TabsList className="w-full justify-start mb-5 p-7 px-0">
                {content.activities.map((service, index) => (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="flex-1 p-4 md:text-xl font-bold"
                  >
                    {service.persian_name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {content.activities.map((service, index) => (
                <TabsContent key={index} value={index.toString()}>
                  {service.products && service.products.length > 0 ? (
                    <Carousel
                      images={service.products.map(
                        (product: any) => product.image
                      )}
                      onChange={(i: number) => {
                        const newIndices = [...activeProductIndices];
                        newIndices[index] = i;
                        setActiveProductIndices(newIndices);
                      }}
                    />
                  ) : (
                    <p className="text-lg">فعالیته‌ای موجود نیست.</p>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <p className="text-lg">فعالیته‌ای موجود نیست.</p>
          )}

          {currentService &&
            currentService.products &&
            currentService.products.length > 0 &&
            currentProduct && (
              <Card
                title={currentProduct.persian_name}
                description={currentProduct.persian_description}
                bulletPoints={
                  currentProduct.features && currentProduct.features.length > 0
                    ? currentProduct.features.map(
                        (feat: any) => feat.persian_description
                      )
                    : []
                }
                buttonText="مشاهده وبسایت"
                redirectUrl={currentProduct.persian_website_address}
              />
            )}
        </div>
      </section>
    </div>
  );
}
