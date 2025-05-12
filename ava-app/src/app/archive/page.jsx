import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function ArchivePage() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 p-8 text-black">
        <Header />
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">آرشیو</h2>
        <p className="text-gray-600">در این بخش می‌توانید فایل‌های صوتی یا متون پیاده‌سازی‌شده قبلی را مشاهده کنید.</p>

        {/* لیست آرشیو نمونه */}
        <div className="mt-6 space-y-4">
          <div className="p-4 border rounded bg-white shadow">📝 فایل صوتی ۱ - ۱۴۰۳/۰۲/۱۰</div>
          <div className="p-4 border rounded bg-white shadow">📝 فایل صوتی ۲ - ۱۴۰۳/۰۲/۰۸</div>
        </div>
      </main>
    </>
  );
}
