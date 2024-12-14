'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleCard from '@/components/articleCard';
import image from '../../public/img/blogs/image.png';
import imageone from '../../public/img/blogs/image1.png';
import imagetwo from '../../public/img/blogs/image2.png';

const articles = [
  {
    id: 1,
    title: 'عنوان المدونة هنا',
    excerpt:
      'في عالم العمليات التجارية الحديثة، يعد نظام نقاط البيع (POS) أكثر من مجرد أداة لمعالجة المعاملات. إنها تمثل منصة ديناميكية تسمح بال...',
    date: '20 ابريل 2024',
    image: imageone,
    href: '#',
  },
  {
    id: 2,
    title: 'عنوان المدونة هنا',
    excerpt:
      'في عالم العمليات التجارية الحديثة، يعد نظام نقاط البيع (POS) أكثر من مجرد أداة لمعالجة المعاملات. إنها تمثل منصة ديناميكية تسمح بال...',
    date: '20 ابريل 2024',
    image: imagetwo,
    href: '#',
  },
  {
    id: 3,
    title: 'عنوان المدونة هنا',
    excerpt:
      'إحدى الوظائف الأساسية لنظام نقاط البيع هي معالجة البيانات والتعامل مع بيانات العملاء الحساسة، مثل معلومات بطاقة الائتمان...',
    date: '20 ابريل 2024',
    image: image,
    href: '#',
  },
];

export default function Blogs() {
  return (
    <section className="py-12 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">مقالاتنا الأخيرة</h2>
            <p className="text-muted-foreground">ابق علي اطلاع باحث اخبارنا</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next article"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Previous article"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
