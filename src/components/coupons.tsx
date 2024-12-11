import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import extra from '../../public/extra.svg'
import sala from '../../public/sala.svg'
import alarabia from '../../public/alarabia.svg'

export function Coupons() {
  const coupons = [
    {
      title: 'اكسترا',
      discount: '25%',
      rating: 4.71,
      reviews: 245,
      image: extra,
    },
    {
      title: 'العربية للعود',
      discount: '25%',
      rating: 4.68,
      reviews: 189,
      image: alarabia,
    },
    {
      title: 'المالة الاقتصادية',
      discount: '25%',
      rating: 4.84,
      reviews: 312,
      image: sala,
    },
  ]

  return (
    <section className="py-12 bg-gray-50 " id='brands'>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">الكوبونات الأكثر استخداماً</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
