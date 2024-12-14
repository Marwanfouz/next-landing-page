import Image, { StaticImageData } from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Star } from 'lucide-react';
import like from '../../public/img/testimonials/like.svg';
import circle from '../../public/img/testimonials/circle.svg';

interface TestimonialCardProps {
  id: number;
  name: string;
  title: string;
  content: string;
  image: string | StaticImageData;
  rating: number;
  badge: string;
}

export default function TestimonialCard({
  name,
  title,
  content,
  image,
  rating,
  badge,
}: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="absolute top-[100px] left-[250px] w-96 h-56 z-10 rounded-xl shadow-md bg-white">
          <div className="text-[#A33670] text-[180px] absolute -top-8 -left-44 opacity-10">
            &ldquo;
          </div>
          <CardHeader>
            <div className="relative">
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-gray-600">{title}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 relative z-10 leading-relaxed">
              {content}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col items-start ">
            <div className="flex gap-1 flex-row-reverse">
              <Image src={like} alt="like" className="w-6 h-6" />
              <h4 className="font-medium text-[#505050] mb-2">التقييمــات</h4>
            </div>
            <div className="flex gap-1 items-center justify-center bg-white shadow-md rounded-md h-10 w-40 right-24">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < rating
                      ? 'fill-[#FFA360] text-[#FFA360]'
                      : 'fill-gray-300 text-gray-300'
                  }`}
                />
              ))}
            </div>
          </CardFooter>
        </div>
        <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
          <div className="absolute top-20 right-20 bg-[#27214D] text-white p-4 rounded-2xl max-w-[280px] z-20 text-sm">
            {badge}
          </div>
          <Image src={circle} alt="circle" fill className="object-cover" />
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover !top-3 !right-48"
          />
        </div>
      </div>
    </Card>
  );
}
