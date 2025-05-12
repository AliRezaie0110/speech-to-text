'use client';

import { useState } from 'react';
import { Mic, Upload, Link as LinkIcon } from 'lucide-react';
import SpeechRecorder from './SpeechRecorder';
import SpeechBox from './SpeechBox';

export default function SpeechTabs() {
  const [activeTab, setActiveTab] = useState('record');

  const tabs = [
    { id: 'record', label: 'ضبط صدا', icon: <Mic size={20} />, color: '#00BA9F' },
    { id: 'upload', label: 'بارگذاری فایل', icon: <Upload size={20} />, color: '#118AD3' },
    { id: 'link', label: 'لینک', icon: <LinkIcon size={20} />, color: '#FF1654' },
  ];

  const renderTabContent = () => {
    if (activeTab === 'record') return <SpeechRecorder />;
    if (activeTab === 'upload') return <FileUploader />;
    if (activeTab === 'link') return <LinkInput />;
    return null;
  };

  const activeColor = tabs.find(tab => tab.id === activeTab)?.color;

  return (
    <div className="relative">
      <div className="w-[653px] h-[477px] mx-auto">
        {/* Tabs */}
        <div className="flex w-[432px]">
          {tabs.map(tab => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center cursor-pointer w-[144px] h-[48px] gap-1 text-sm font-medium transition-colors rounded-t-[10px]
                  ${isActive ? 'text-white' : 'text-gray-500'}`}
                style={{ backgroundColor: isActive ? tab.color : 'transparent' }}
              >
                {tab.icon}
                <span className="mt-1">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div
          className={`rounded-2xl w-[653px] h-[429px] p-6 flex flex-col justify-center items-center ${
            activeTab === 'record' ? 'rounded-tr-none' : ''
          }`}
          style={{ border: `1px solid ${activeColor}` }}
        >
          {renderTabContent()}
        </div>
      </div>

      <SpeechBox />
    </div>
  );
}

// فایل‌ آپلود
function FileUploader() {
  return (
    <div className="w-full">
      <label className="block mb-2 text-gray-700">انتخاب فایل صوتی:</label>
      <input type="file" accept="audio/*" className="block w-full" />
    </div>
  );
}

// ورودی لینک
function LinkInput() {
  return (
    <div className="w-full">
      <label className="block mb-2 text-gray-700">آدرس لینک صوتی:</label>
      <input
        type="text"
        placeholder="https://example.com/audio.mp3"
        className="w-full border p-2 rounded"
      />
    </div>
  );
}
