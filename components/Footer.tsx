import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">درباره ما</h3>
            <p className="text-primary-foreground/80">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">قوانین و مقررات</a>
              </li>
              <li>
                <a href="#" className="hover:underline">حریم خصوصی</a>
              </li>
              <li>
                <a href="#" className="hover:underline">سوالات متداول</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>© ۱۴۰۲ تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;