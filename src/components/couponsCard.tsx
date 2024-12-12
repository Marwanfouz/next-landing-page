import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { Star } from 'lucide-react';

const CouponsCard = (coupon: {
  id: number;
  title: string;
  image: string | StaticImageData;
  discount: string;
  rating: number;
  reviews: number;
}) => {
  return (
    <Card key={coupon.title}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 relative">
            <Image
              src={coupon.image}
              alt={coupon.title}
              fill
              className="object-contain"
            />
          </div>
          <Button variant="outline" size="sm">
            كود خصم {coupon.discount}
          </Button>
        </div>
        <h3 className="font-bold mb-2">{coupon.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{coupon.rating}</span>
          <span className="text-muted-foreground">({coupon.reviews})</span>
        </div>
        <Button className="w-full">عرض التفاصيل</Button>
      </CardContent>
    </Card>
  );
};

export default CouponsCard;
