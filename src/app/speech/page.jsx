'use client';

import SpeechTabs from '../components/SpeechTabs';

export default function SpeechPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-[28px] font-bold text-teal-600 mb-4">تبدیل گفتار به متن</h1>
      <p className='text-[#969696] max-w-[437px] font-[16px] mb-8'>
        آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
      </p>
      <div className="w-full">
        <SpeechTabs />
      </div>
    </div>
  );
}
