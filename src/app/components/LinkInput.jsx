"use client";

import { useState } from "react";
import { Link as LinkIcon } from "lucide-react";

export default function LinkInput({ onTranscript, onFileUrl, className = "" }) {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);  

  const handleSubmit = async () => {
    if (!link) return;

    setLoading(true);
    try {
      const response = await fetch('/api/proxyTranscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token a85d08400c622b50b18b61e239b9903645297196',
        },
        body: JSON.stringify({ media_urls: [link] }),
      });

      if (!response.ok) {
        throw new Error('خطا در ارسال درخواست');
      }

      const data = await response.json();

      if (onTranscript) {
        onTranscript(data.transcript || []);
      }

      if (onFileUrl) {
        onFileUrl(data.fileUrl || data.audioUrl || null);
      }

      setShowModal(true); 
      setLink("");        

    } catch (error) {
      alert('مشکلی در ارسال URL به وجود آمد.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`relative w-[328px] mx-auto ${className}`}>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="example.com/sample.mp3"
          className="w-full border border-[#FF1654] text-[#626262] text-left p-2 pr-4 pl-14 rounded-[50px]"
        />
        <div
          onClick={handleSubmit}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FF1654] cursor-pointer ${loading ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <LinkIcon size={16} color="white" />
        </div>
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-[#d3d3da] text-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
            <h2 className="text-lg font-semibold mb-4">عملیات موفق</h2>
            <p>فایل شما با موفقیت به آرشیو اضافه شد.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-[#FF1654] text-white rounded hover:bg-[#e01444]"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
}
