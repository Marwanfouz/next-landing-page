import Image from 'next/image'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import laptop from "../../public/laptop.svg"
import headphones from "../../public/headphones.svg"
import jarir from "../../public/jarir.svg"
import palystation from "../../public/image.png"
import watch from "../../public/watch.svg"

export default function Hero() {
  return (
    <div className="relative bg-[#C53338] bg-[url('../../public/background.svg')] h-[413px] m-20 rounded-[30px]">
      <div >
        <div className="absolute top-[90px] left-[-26px] lg:w-[13%] md:w-[153px] h-[6%] bg-white -rotate-45 origin-top-left flex items-center justify-center">
      <span className="text-black text-sm font-bold">خصم %35</span>
      </div>
    </div>
      <div className="absolute top-10 left-10 w-48 h-48 transform -rotate-12">
        <Image
          src={laptop}
          alt="Laptop"
          width={500}
          height={200}
          className="object-contain w-60"
        />
      </div>
      <div className="absolute top-20 right-10 w-32 h-32">
        <Image
          src={watch}
          alt="Smart Watch"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[-56px] right-4 w-40 h-40">
        <Image
          src={headphones}
          alt="Headphones"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[-56px] left-4 w-36 h-36 transform rotate-12">
        <Image
          src={palystation}
          alt="Gaming Controller"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={jarir}
            alt="Jarir Bookstore"
            width={200}
            height={60}
            className="mx-auto"
          />
        </div>

        {/* Main Text */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 font-arabic">
          عرض كوبونات جرير
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 font-arabic">
          كوبونات تصل بخصم إلى 35% على منتجات مختارة
        </p>
        <p className="text-white text-lg mb-8 font-arabic">
          في متجر مكتبة جرير
        </p>

        {/* CTA Button */}
        <Button 
          className="bg-white text-black hover:bg-gray-100 rounded-md px-8 py-2 text-lg font-arabic mb-12"
        >
          اكتشفها الآن
        </Button>

        {/* Search Bar */}
        <div className="flex justify-center gap-2 max-w-2xl mx-auto">
          <Button className="bg-[#4A3880] hover:bg-[#3E2D6A]">
            <Search className="h-5 w-5" />
          </Button>
          <Input 
            className="bg-white text-right font-arabic"
            placeholder="ابحث عن كل ما تحتاج هنا..."
            dir="rtl"
          />
        </div>
      </div>

      {/* 2023 Badge */}

    </div>
  )
}

