'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { FiRefreshCw } from "react-icons/fi";
import { RxCopy } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import { CiTextAlignRight } from "react-icons/ci";
import { GoClock } from "react-icons/go";

function FileUploader({ fileUrl, setFileUrl, transcript = [], setTranscript, display = 'flex', customHeight = 250 }) {
    const [tab, setTab] = useState('text');
    const inputRef = useRef(null);

    
    const formatTime = (timeStr) => {
        const parts = timeStr.split(':').map(Number);
        if (parts.length === 3) {
            const minutes = parts[1].toString().padStart(2, '0');
            const seconds = Math.floor(parts[2]).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        }
        return timeStr;
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);

            
            setTranscript([
                { start: "0:00:0.150", end: "0:00:7.980", text: "رحمان رحیم سلام عرض می کنم خدا قوت میگم به مهندس احمدی آذر" },
                { start: "0:00:8.250", end: "0:00:11.820", text: "تا الان در خدمت تیم بودن به عنوان سرپرست و" },
                
            ]);
        }
    };

    const handleReset = () => {
        setFileUrl(null);
        setTranscript([]);
        if (inputRef.current) inputRef.current.value = '';
    };

    
    const handleCopy = () => {
        if (transcript && transcript.length > 0) {
            const textToCopy = transcript.map(item => item.text).join(' ');
            navigator.clipboard.writeText(textToCopy);
            alert('متن کپی شد!');
        }
    };

    
    const handleDownload = () => {
        if (transcript && transcript.length > 0) {
            const textToDownload = transcript.map(item => item.text).join(' ');
            const blob = new Blob([textToDownload], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'transcript.txt';
            link.click();
            URL.revokeObjectURL(link.href);
        }
    };

    return (
        <div className="absolute top-0 mt-2 p-2 w-full h-auto flex flex-col justify-between rounded-xl">
            <div className="flex items-start justify-between border-b-[0.25px] border-[#00000080]">
                <div className="flex gap-6 text-sm">
                    <button
                        onClick={() => setTab('text')}
                        className={`flex items-center gap-1 pb-4 border-b-2 transition ${tab === 'text' ? 'border-black text-black font-semibold' : 'border-transparent cursor-pointer text-gray-500'}`}
                    >
                        <CiTextAlignRight />
                        متن ساده
                    </button>
                    <button
                        onClick={() => setTab('timestamped')}
                        className={`flex items-center gap-1 pb-4 border-b-2 transition ${tab === 'timestamped' ? 'border-black text-black font-semibold' : 'border-transparent cursor-pointer text-gray-500'}`}
                    >
                        <GoClock />
                        متن زمان‌بندی‌شده
                    </button>
                </div>

                <div className={`${display} justify-between items-center gap-4 text-[#8F8F8F]`}>
                    <MdOutlineFileDownload
                        className={`cursor-pointer hover:text-black transition ${transcript && transcript.length > 0 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}
                        onClick={handleDownload}
                        title="دانلود متن"
                    />
                    <RxCopy
                        className={`cursor-pointer hover:text-black transition ${transcript && transcript.length > 0 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}
                        onClick={handleCopy}
                        title="کپی متن"
                    />
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-1 text-sm text-white bg-[#118AD3] w-[112px] h-[34px] rounded-[20px] px-3 py-1 hover:bg-blue-600 cursor-pointer transition"
                    >
                        <FiRefreshCw />
                        شروع دوباره
                    </button>
                </div>
            </div>

            
            <div className="flex-1 w-full overflow-y-auto h-[250px] p-2">
                {transcript && transcript.length > 0 ? (
                    tab === 'text' ? (
                        <p className="text-right whitespace-pre-wrap w-full text-sm text-[#333] leading-loose">
                            {transcript.map(item => item.text).join(' ')}
                        </p>
                    ) : (
                        <div
                            className="flex-1 overflow-y-auto w-full mt-4 pr-2 space-y-2 scrollbar-custom"
                            style={{ height: `${customHeight}px` }}
                        >
                            {transcript.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center px-4 py-3 ml-4 text-sm text-[#333] rounded-[15px] odd:bg-[#F5F5F5] even:bg-white"
                                >
                                    <div className="flex items-center justify-between px-2 gap-8 text-left min-w-[62px] max-h-[62px] w-full">
                                        <span className="text-[13px] font-medium">{formatTime(item.end)}</span>
                                        <span className="text-[13px] text-[#7D7D7D]">{formatTime(item.start)}</span>
                                        <div className="text-[#118AD3] text-sm text-center w-full">
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                ) : (
                    <div className="flex flex-col items-center justify-center text-center gap-3 h-full">
                        <div
                            className="w-[62px] h-[62px] bg-[#118AD3] rounded-full flex items-center justify-center cursor-pointer mt-20"
                            onClick={() => inputRef.current?.click()}
                        >
                            <Image src="/upload-Icon.png" width={30} height={25} alt="upload" />
                        </div>
                        <p className="text-[#626262] max-w-[400px]">
                            برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید متن پیاده شده آن، در اینجا ظاهر می‌شود
                        </p>
                        <input
                            ref={inputRef}
                            type="file"
                            accept="audio/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                )}
            </div>

            {fileUrl && (
                <div className="pt-2 border-t w-full flex items-center justify-center">
                    <audio controls className="w-[519px] max-h-[34px] rounded-lg">
                        <source src={fileUrl} type="audio/mpeg" />
                        مرورگر شما از پخش صوت پشتیبانی نمی‌کند.
                    </audio>
                </div>
            )}
        </div>
    );
}

export default FileUploader;
