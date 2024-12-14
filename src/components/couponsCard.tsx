'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Coupon } from '@/types';

export default function CouponCard({
  storeName,
  storeImage,
  discount,
  rating,
  isActive,
  expiryText,
  isFavorite: initialFavorite = false,
}: Readonly<Coupon>) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <Card className="overflow-hidden transition duration-300">
      <CardContent className="p-0">
        <div className="relative p-4 flex flex-row-reverse items-start justify-between">
          <Button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-2 left-2 text-gray-400 hover:text-red-500 transition-colors"
            variant="ghost"
          >
            <Heart
              className={cn(
                'w-5 h-5',
                isFavorite && 'fill-red-500 text-red-500'
              )}
            />
          </Button>

          <div className="flex-1 text-right">
            <p className="text-2xl mb-1 text-[#543883]">{storeName}</p>
            <p className="text-sm text-[#636B7F]">كود خصم {discount}</p>
            <p className="text-xs text-gray-500 mt-1">{expiryText}</p>
          </div>

          <div className="w-16 h-16 ml-4 relative shrink-0">
            <Image
              src={storeImage}
              alt={storeName}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <Button className="w-full rounded-none bg-[#543883] hover:bg-[#8A67C0] h-12">
          عرض الكود
        </Button>

        <div className="p-3 flex flex-row-reverse items-center justify-between border-t">
          <Button
            className="flex text-[#262254] hover:text-gray-700"
            variant="ghost"
          >
            <Share2 className="w-5 h-5 text-[#543883]" />
            <span className="text-sm mr-1">مشاركة</span>
          </Button>

          <div className="flex items-center gap-2">
            <span
              className={cn(
                'text-xs px-2 py-1 rounded text-white',
                isActive ? 'bg-[#19772A] ' : 'bg-[#D22F00]'
              )}
            >
              {isActive ? 'كود فعال' : 'كود منتهي'}
            </span>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium ml-1">{rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
