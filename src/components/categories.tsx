'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import smarthouse from '../../public/img/categories/smarthouse.png';
import clothes from '../../public/img/categories/clothes.png';
import market from '../../public/img/categories/market.png';
import phones from '../../public/img/categories/phones.png';
import Slider from './slider';
import CategoriesCard from './categoriesCard';

const categories = [
  {
    id: 1,
    name: 'الملابس',
    image: clothes,
  },
  {
    id: 2,
    name: 'البقالة',
    image: market,
  },
  {
    id: 3,
    name: 'المنزل الذكي',
    image: smarthouse,
  },
  {
    id: 4,
    name: 'الجوالات ومستلزماتها',
    image: phones,
  },
  {
    id: 5,
    name: 'منتج إضافي',
    image: phones,
  },
  {
    id: 6,
    name: 'منتج إضافي آخر',
    image: phones,
  },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white" dir="rtl" id="categories">
      <Slider
        data={categories}
        CardComponent={CategoriesCard}
        title="تسوق حسب الفئات"
        sliderButton="categories"
      />
    </section>
  );
}
