'use client';

import Image from 'next/image';
import Link from 'next/link';
import about from '../../public/img/about/about.png';

export default function About() {
  return (
    <section className="py-16 bg-[#FDF5FF]">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 px-4">
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src={about}
              alt="About illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#363062] mb-4">
            ما هي منصة جو أوفر
          </h2>

          <p className="text-[#6B7280] leading-relaxed mb-6">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا
            النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#363062] mb-4">
              ما يميزنا
            </h3>
            <ul className="space-y-3">
              {[
                'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
                'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
                'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
                'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#FFD1E3] rounded-full"></div>
                  <p className="text-[#6B7280] text-sm">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <Link
              href="#"
              className="inline-block bg-[#7C3AED] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#6B2EC1] transition"
            >
              الدخول/إنشاء حساب
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
