import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string | StaticImageData;
  href: string;
}

export default function ArticleCard({
  title,
  excerpt,
  date,
  image,
  href,
}: ArticleCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-md">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <time
          className="text-sm text-muted-foreground block mb-3"
          dateTime={date}
        >
          كي {date}
        </time>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Link
          href={href}
          className="inline-flex items-center text-[#9977CE] hover:text-[#8A67C0] transition-colors group-hover:gap-2"
        >
          اقرأ المزيد
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  );
}
