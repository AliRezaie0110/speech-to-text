import Header from '../app/components/Header';
import SpeechRecorder from '../app/components/SpeechRecorder';
import SpeechBox from './components/SpeechBox';
import SpeechTabs from '../app/components/SpeechTabs';
import Sidebar from './components/Sidebar';


export default function HomePage() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex flex-col items-center justify-center flex-1 p-8 text-center">
          <h1 className="text-2xl font-bold text-teal-600 mb-4">تبدیل گفتار به متن</h1>
          <p className='text-[#969696] max-w-[437px] font-[16px] mb-8'>
            آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
          </p>
          <SpeechTabs />
          
        </main>
      </div>
    </>

  );
}
