import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const BrandsCard = (brand: {
  id: number;
  name: string;
  image: string | StaticImageData;
}) => {
  return (
    <Card
      key={brand.id}
      className="flex flex-col items-center justify-center p-4 shadow-md hover:shadow-lg transition-shadow"
    >
      <CardContent className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-24 md:h-24 relative mb-4">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-center text-lg font-semibold text-[#363062]">
          {brand.name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default BrandsCard;
