import { StaticImageData } from 'next/image';

export interface Coupon {
  id: number;
  storeName: string;
  storeImage: string | StaticImageData;
  discount: string;
  rating: number;
  isActive: boolean;
  expiryText: string;
  isFavorite?: boolean;
}
