import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from 'next/image';
import nbn from '@/public/images/Frame.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-between relative bg-gradient-to-b from-primary/10 to-background pt-16">
        {/* Right Logo */}
        <div className="flex-1 h-screen flex items-center justify-center p-8">
          <Image
            src="/images/Frame.png" // Replace with your left logo path
            alt="Left Logo"
            className="max-w-full max-h-full object-contain"
            width={504} 
            height={455}
          />
        </div>

        {/* Left Logo */}
        <div className="flex-1 h-screen flex items-center justify-center p-8">
          <Image
            src="/images/Frame1.png" // Replace with your right logo path
            alt="Right Logo"
            className="max-w-full max-h-full object-contain"
            width={768} 
            height={778}
            
          />
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                alt="About Us"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">درباره ما</h2>
              <p className="text-lg text-muted-foreground mb-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
              </p>
              <Button variant="outline">بیشتر بدانید</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">خدمات ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <Button variant="secondary" className="w-full">جزئیات بیشتر</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}