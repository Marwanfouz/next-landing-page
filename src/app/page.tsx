import Hero from '@/components/hero';
import Categories from '@/components/categories';
import Coupons from '@/components/coupons';
import Brands from '@/components/brands';
import About from '@/components/about';
import AllCoupons from '@/components/allCoupons';
import CouponsOffers from '@/components/couponsOffers';
import ExclusiveOffers from '@/components/exclusiveOffers';
import Testimonials from '@/components/testimonials';
import Blogs from '@/components/blogs';
import DailyOffer from '@/components/dailyOffer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Coupons />
      <Brands />
      <About />
      <AllCoupons />
      <CouponsOffers />
      <ExclusiveOffers />
      <Testimonials />
      <Blogs />
      <DailyOffer />
    </main>
  );
}
