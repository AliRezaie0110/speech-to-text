import React from 'react'
import { Link as LinkIcon } from 'lucide-react';
function LinkInput() {
    return (
        <div className="w-full ">

            <div className="relative w-[328px] mx-auto ">
                <input
                    type="text"
                    placeholder="example.com/sample.mp3"
                    className="w-full border border-[#FF1654]  text-[#626262] text-left p-2 pr-4 pl-14 rounded-[50px]"
                />
                <div className='absolute left-3 top-1/2 -translate-y-1/2 m w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FF1654]'>
                    <LinkIcon size={16} />
                </div>
            </div>
            <div className="w-full max-w-[415px] mx-auto text-[#626262] h-[56px] rounded px-4 py-2 text-center">
                نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد و دکمه را فشار دهید
            </div>
        </div>
    );
}

export default LinkInput
