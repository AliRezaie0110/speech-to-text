"use client"
import Header from '../app/components/Header';
import SpeechTabs from '../app/components/SpeechTabs';
import { useState } from 'react';
import Sidebar from '../app/components/Sidebar';
import AudioArchive from './components/AudioArchive';


export default function HomePage() {
  const [view, setView] = useState('speech'); 
 
  return (
    <>
      <Sidebar view={view} setView={setView} />
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        {view === 'speech' &&
          <main className="flex flex-col items-center justify-center flex-1 p-8 text-center">
            <h1 className="text-2xl font-bold text-teal-600 mb-4">تبدیل گفتار به متن</h1>
            <p className='text-[#969696] max-w-[437px] font-[16px] mb-8'>
              آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
            </p>
            <div className="flex">
              <div className="flex-1 p-4">
                <SpeechTabs />
              </div>
            </div>

          </main>}
        {
          view === 'archive' && <div className="min-h-screen w-full p-6">
            <AudioArchive />
          </div>
        }

      </div>
    </>

  );
}
