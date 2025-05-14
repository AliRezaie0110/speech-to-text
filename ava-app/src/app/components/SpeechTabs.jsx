'use client';

import { useState } from 'react';
import { Mic, Upload, Link as LinkIcon } from 'lucide-react';
import SpeechRecorder from './SpeechRecorder';
import SpeechBox from './SpeechBox';
import FileUploader from './FileUploader';
import LinkInput from './LinkInput';

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

        <div
          className={`rounded-2xl w-[653px] h-[429px] p-6 flex flex-col justify-center items-center ${activeTab === 'record' ? 'rounded-tr-none' : ''
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







