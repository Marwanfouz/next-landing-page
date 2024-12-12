'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import laptop from '../../public/img/hero/laptop.png';
import headphones from '../../public/img/hero/headphones.png';
import jarir from '../../public/img/hero/jarir.png';
import palystation from '../../public/img/hero/palystation.png';
import watch from '../../public/img/hero/watch.png';
import SearchBar from './searchBar';

const floatingAnimation = {
  y: ['-10%', '10%'],
  transition: {
    y: {
      // repeat: Infinity,
      // repeatType: 'reverse',
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  return (
    <div className="relative bg-[#C53338] bg-[url('../../public/img/hero/background.svg')] h-[450px] m-4 sm:m-10 md:m-20 rounded-[30px]">
      <div className="w-[100px] h-[100px] absolute top-0 left-0 overflow-hidden">
        <div className="absolute top-[90px] left-[-26px] w-[160px] h-[20px] bg-white -rotate-45 origin-top-left flex items-center justify-center m-auto">
          <span className="text-black text-sm font-bold">خصم %35</span>
        </div>
      </div>

      <motion.div
        animate={floatingAnimation}
        className="absolute top-[40px] left-[80px] w-56 h-56"
      >
        <Image
          src={laptop}
          alt="Laptop"
          width={500}
          height={200}
          className="object-contain w-full h-full"
        />
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        className="absolute top-[40px] right-[80px] w-44 h-44 hidden sm:block"
      >
        <Image
          src={watch}
          alt="Smart Watch"
          width={150}
          height={150}
          className="object-contain w-full h-full"
        />
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        className="absolute bottom-[-65px] right-[-20px] w-52 h-52 hidden sm:block"
      >
        <Image
          src={headphones}
          alt="Headphones"
          width={180}
          height={180}
          className="object-contain w-full h-full"
        />
      </motion.div>

      <motion.div
        animate={floatingAnimation}
        className="absolute bottom-[-60px] left-[80px] w-48 h-48"
      >
        <Image
          src={palystation}
          alt="Gaming Controller"
          width={160}
          height={160}
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src={jarir}
            alt="Jarir Bookstore"
            width={200}
            height={60}
            className="mx-auto w-48 sm:w-56"
          />
        </motion.div>

        {/* Main Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-arabic"
        >
          عرض كوبونات جرير
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white text-base sm:text-lg md:text-xl mb-4 font-arabic"
        >
          كوبونات تصل بخصم إلى 35% على منتجات مختارة
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white text-base sm:text-lg mb-8 font-arabic"
        >
          في متجر مكتبة جرير
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:mb-[40px]"
        >
          <Button className="bg-white text-black hover:bg-gray-100 rounded-md px-6 sm:px-8 py-2 text-base sm:text-lg font-arabic mb-8 sm:mb-12">
            اكتشفها الآن
          </Button>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center gap-2 max-w-xl mx-auto"
        >
          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
}
