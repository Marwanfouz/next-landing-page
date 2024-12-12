import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesCard = (category: {
  id: number;
  name: string;
  image: string | StaticImageData;
}) => {
  return (
    <Card className="border-none">
      <CardContent className="flex flex-col items-center p-6 h-[248px] mb-1 relative">
        <div className="absolute top-3 right-28 w-20 h-20 md:w-32 md:h-32 bg-[#FFA360] rounded-full transform translate-x-6 translate-y-6" />
        <div className="z-10">
          <Image
            src={category.image}
            alt={category.name}
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="mt-4 text-xl font-medium text-center font-arabic">
          {category.name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
