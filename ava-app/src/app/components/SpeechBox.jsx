'use client';

import { useState } from "react";

export default function SpeechBox() {
  const [lang,setLang] = useState("فارسی")
  return (
    <div className="absolute left-80 mt-[14px] rounded-xl w-[179px] h-[37px] text-[#626262]">
      <div className="flex justify-between items-center w-full">
        <label className="text-[14px] whitespace-nowrap">زبان گفتار:</label>

        <div className="relative w-[105px] h-[37px]">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="appearance-none w-full h-full pl-8 pr-3 text-[14px] font-[300] rounded-[30px] text-[#00BA9F] border focus:outline-none"
          >
            <option value="fa">فارسی</option>
            <option value="en">انگلیسی</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <svg className="w-3 h-3 fill-current text-[#00BA9F]" viewBox="0 0 10 6">
              <path d="M0 0l5 6 5-6H0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
