import { Header } from '@/components/header'
import Hero from '@/components/hero'
import Categories from '@/components/categories'
import { Coupons } from '@/components/coupons'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Coupons />
    </main>
  )
}
