'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 max-w-3xl mx-auto bg-white rounded-sm shadow-md p-1  lg:w-[600px]">
      <div className="flex-1 flex items-center gap-2 px-4">
        <Search className="h-5 w-5 text-[#FFA360]" />
        <Input
          className="border-0 focus-visible:ring-0 text-right font-arabic placeholder:text-gray-400"
          placeholder="ابحث عن كل ما تحتاج هنا...."
          dir="rtl"
        />
      </div>
      <Button className="bg-[#543883] hover:bg-[#8A67C0] text-white rounded-sm px-6 py-2 text-base">
        بحث
      </Button>
    </div>
  );
}
