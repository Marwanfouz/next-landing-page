'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import image from 'img/dailyOffer/image.png';
import icon from 'img/dailyOffer/icon.svg';

export default function DailyOffer() {
  return (
    <section className="py-12 px-4" dir="rtl">
      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, x: -500, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Card className="overflow-hidden rounded-[32px] relative">
          <Image
            src={image}
            alt="Centrepoint Store Interior"
            width={1200}
            height={400}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262254] to-[#544BBA] mix-blend-multiply" />

          <CardContent className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="space-y-2">
                <div className="text-white">
                  <span className="text-7xl md:text-8xl font-bold">50%</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">خصم</h2>
                </div>
              </div>

              <div className="flex-1 max-w-xl">
                <div className="flex items-center justify-end gap-2 mb-6">
                  <span className="text-white text-xl">سنتربوينت</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-4 border-[#27214D]" />
                  </div>
                  <span className="text-white text-xl">centrepoint</span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-4 border-[#27214D]" />
                  </div>
                </div>

                <div className="space-y-4 text-right">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    العرض اليومي لبراند &quot;سنتر بوينت&quot;
                  </h3>
                  <p className="text-gray-200 text-lg">
                    احصل على كود خصم سنتر بوينت بقيمة 50% على منتجات مختارة
                  </p>
                  <Button className="bg-[#FFA360] hover:bg-[#FF7043] text-white px-8 py-6 text-lg rounded-xl flex gap-1">
                    <Image src={icon} alt="icon" width={24} height={24} />
                    عرض الكود
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
