import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer" className="container mx-auto px-4 py-12" dir="rtl">
      <h2 className="text-3xl font-bold mb-6">تماس با ما</h2>

      <p className=" mb-8 leading-relaxed">
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
            <div >
              <p className="text-sm  mb-1">ایمیل</p>
              <a
                href="mailto:info@atripa.com"
                className="text-gray-900 hover:text-purple-600 transition-colors"
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
              <p className="text-sm  mb-1 ">تلفن</p>
              <a
                href="tel:051-36572582"
                className="text-gray-900 hover:text-purple-600 transition-colors"
                dir="ltr"
              >
                051-36572582
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg w-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full ">
            <Image
              src="/images/location.png"
              alt="map icon"
              className="max-w-full max-h-full object-contain"
              width={48}
              height={48}
            />
            </div>
            <div>
              <p className="text-sm  mb-1">آدرس</p>
              <p className="text-gray-900">
                مشهد - بزرگراه آزادی - جنب بیمارستان رضوی - پیامبر اعظم ۱۷ -
                پلاک ۴
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/map.png"
              alt="map image"
              className="max-w-full max-h-full object-contain"
              width={768}
              height={512}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Mail, Phone, MapPin } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer id="footer" className="bg-primary text-primary-foreground py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">درباره ما</h3>
//             <p className="text-primary-foreground/80">
//               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <Phone className="h-5 w-5" />
//                 <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="h-5 w-5" />
//                 <span>info@example.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-5 w-5" />
//                 <span>تهران، خیابان ولیعصر</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:underline">قوانین و مقررات</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">حریم خصوصی</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:underline">سوالات متداول</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
//           <p>© ۱۴۰۲ تمامی حقوق محفوظ است.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
