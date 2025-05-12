'use client';

import { useState } from 'react';
import { Mic, Upload, Link as LinkIcon } from 'lucide-react';
import SpeechRecorder from './SpeechRecorder';
import SpeechBox from './SpeechBox';

export default function SpeechTabs() {
    const [activeTab, setActiveTab] = useState('record');

    const tabs = [
        { id: 'record', label: 'ضبط صدا', icon: <Mic size={20} /> },
        { id: 'upload', label: 'بارگذاری فایل', icon: <Upload size={20} /> },
        { id: 'link', label: 'لینک', icon: <LinkIcon size={20} /> },
    ];

    return (
        <div className='relative'>
            <div className=" overflow-hidden w-[653px] h-[477px] mx-auto ">
                {/* Tabs */}
                <div className="flex w-[432px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 flex items-center justify-center w-[144px] h-[48px] gap-1
              text-sm font-medium transition-colors
              ${activeTab === tab.id ? 'text-white bg-[#00BA9F]' : 'text-gray-500'}
              rounded-t-[10px]`}
                        >
                            {tab.icon}
                            <span className="mt-1">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div
                    className={`ali border border-[#00BA9F] rounded-2xl w-[653px] h-[429px] p-6 flex flex-col justify-center items-center ${activeTab === 'record' ? 'rounded-tr-none' : ''
                        }`}
                >
                    {activeTab === 'record' && <SpeechRecorder />}
                    {activeTab === 'upload' && <FileUploader />}
                    {activeTab === 'link' && <LinkInput />}
                </div>
                <div>
                </div>
            </div>
            <SpeechBox />
        </div>
    );
}

// جایگزین کن با کامپوننت‌هایی که می‌سازی:
function FileUploader() {
    return (
        <div>
            <label className="block mb-2 text-gray-700">انتخاب فایل صوتی:</label>
            <input type="file" accept="audio/*" className="block w-full" />
        </div>
    );
}

function LinkInput() {
    return (
        <div>
            <label className="block mb-2 text-gray-700">آدرس لینک صوتی:</label>
            <input
                type="text"
                placeholder="https://example.com/audio.mp3"
                className="w-full border p-2 rounded"
            />
        </div>
    );
}
