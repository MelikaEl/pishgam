import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer" className="container mx-auto px-4 py-12 section" dir="rtl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex justify-center md:justify-start">تماس با ما</h2>

      <p className=" mb-8 text-lg ">
        اگر می‌خواهید با ما در ارتباط باشید، تیم ما آماده پاسخگویی به سوالات،
        پیشنهادات و همکاری‌های جدید است. می‌توانید از طریق تماس تلفنی یا ایمیل
        با ما ارتباط بگیرید.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg w-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full ">
            <Image
              src="/images/sms-tracking.png"
              alt="email icon"
              className="max-w-full max-h-full object-contain"
              width={48}
              height={48}
            />
            </div>
            <div>
              <p className="text-sm  mb-1">ایمیل</p>
              <a
                href="mailto:info@atripa.com"
                className="text-gray-900 hover:bg-gradient-to-r hover:to-custom-purple hover:from-custom-blue  hover:bg-clip-text hover:text-transparent transition-colors"
              >
                info@atripa.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg w-full ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full ">
            <Image
              src="/images/call-calling.png"
              alt="mobile icon"
              className="max-w-full max-h-full object-contain"
              width={48}
              height={48}
            />
            </div>
            <div>
              <p className="text-sm mb-1">تلفن</p>
              <a
                href="tel:051-36572582"
                className="text-gray-900 hover:bg-gradient-to-r hover:to-custom-purple hover:from-custom-blue  hover:bg-clip-text hover:text-transparent transition-colors"
                dir="ltr"
              >
                051-36572582
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg w-full">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full">
              <Image
                src="/images/location.png"
                alt="map icon"
                className="w-full h-full object-contain"
                width={48}
                height={48}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm mb-1">آدرس</p>
              <p className="text-gray-900 text-sm md:text-base">
                مشهد - بزرگراه آزادی - جنب بیمارستان رضوی - پیامبر اعظم ۱۷ -
                پلاک ۴
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[250px] md:h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/map.png"
              alt="map image"
              className="w-full h-full object-contain md:object-cover"
              width={768}
              height={512}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}