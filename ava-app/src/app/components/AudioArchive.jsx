"use client";
import { useState, Fragment } from "react";
import {
  FaRegCopy,
  FaRegFileWord,
} from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import { Mic, Upload, LinkIcon } from "lucide-react";

export default function AudioArchive() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = expandedRow !== null ? 3 : 8;

  const toggleRow = (index) => {
    const newExpandedRow = expandedRow === index ? null : index;
    setExpandedRow(newExpandedRow);

    // وقتی ردیف باز میشه یا بسته میشه، صفحه جاری رو به صفحه مربوط به اون ردیف تنظیم کن
    const newRowsPerPage = newExpandedRow !== null ? 3 : 8;
    const newPage = Math.floor(index / newRowsPerPage) + 1;
    setCurrentPage(newPage);
  };

  const data = [
    {
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...",
      date: "۱۴۰۰/۰۸/۳۱",
      type: ".mp3",
      duration: "۴:۲۹",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
    {
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...",
      date: "۱۴۰۰/۰۸/۳۱",
      type: ".mp3",
      duration: "۴:۲۹",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
    {
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20Shervin ...",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".wav",
      duration: "۳:۱۴",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    {
      name: "پادکست رادیو راه - فصل دوم - قسمت ششم- راه سروش",
      date: "۱۴۰۰/۰۸/۱۹",
      type: ".mp3",
      duration: "۱:۲۸:۱۸",
      icon: <Mic size={30} className="bg-[#40C6B8] p-2 text-white rounded-full" />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
    {
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...",
      date: "۱۴۰۰/۰۸/۳۱",
      type: ".mp3",
      duration: "۴:۲۹",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
    {
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20Shervin ...",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".wav",
      duration: "۳:۱۴",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    
    {
      name: "پادکست رادیو راه - فصل دوم - قسمت ششم- راه سروش",
      date: "۱۴۰۰/۰۸/۱۹",
      type: ".mp3",
      duration: "۱:۲۸:۱۸",
      icon: <Mic size={30} className="bg-[#40C6B8] p-2 text-white rounded-full" />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
    {
      name: "https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...",
      date: "۱۴۰۰/۰۸/۳۱",
      type: ".mp3",
      duration: "۴:۲۹",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
    {
      name: "https://dls.loudmusic.ir/Music/1401/01/Baraye%20Shervin ...",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".wav",
      duration: "۳:۱۴",
      icon: <LinkIcon size={30} className="bg-[#FF1654] p-2 text-white rounded-full  " />,
    },
    {
      name: "پادکست رادیو راه - فصل دوم - قسمت ششم- راه سروش",
      date: "۱۴۰۰/۰۸/۱۹",
      type: ".mp3",
      duration: "۱:۲۸:۱۸",
      icon: <Mic size={30} className="bg-[#40C6B8] p-2 text-white rounded-full" />,
    },
    {
      name: "khaterate To",
      date: "۱۴۰۰/۰۸/۲۰",
      type: ".mp4",
      duration: "۴:۲۸",
      icon: <FiUploadCloud size={30} className="bg-[#118AD3] p-2 text-white rounded-full" />,
    },
  
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="w-full max-w-[1034px] mx-auto">
      <h2 className="text-[#00BA9F] text-[24px] mt-[80px] font-semibold mb-6 text-right">آرشیو من</h2>

      <div className="overflow-x-auto rounded-lg">
        <div className="">
          <table className="w-full table-auto text-right border-separate border-spacing-y-2">

            <thead className="sticky top-0 z-10">
              <tr className="text-gray-600">
                <th className="py-2"></th>
                <th className="py-2">نام فایل</th>
                <th className="py-2">تاریخ بارگذاری</th>
                <th className="py-2">نوع فایل</th>
                <th className="py-2">مدت زمان</th>
              </tr>
            </thead>
            <tbody>
              
              {visibleData.map((item, index) => {
                const globalIndex = startIndex + index;
                return (
                  <Fragment key={globalIndex}>
                    <tr
                      className="border-b cursor-pointer hover:shadow-sm hover:rounded-2xl  hover:bg-gray-50 text-[#000000]"
                      onClick={() => toggleRow(globalIndex)}
                    >
                      <td className="py-2 px-2">{item.icon}</td>
                      <td className="py-2 text-blue-600 max-w-xs truncate">{item.name}</td>
                      <td className="py-2">{item.date}</td>
                      <td className="py-2">{item.type}</td>
                      <td className="py-2">{item.duration}</td>
                      <td className="py-2">
                        <div className="flex justify-end items-center space-x-5 text-[#8F8F8F]">
                          <BsDownload size={16} className="cursor-pointer hover:text-[#07B49B]" />
                          <FaRegFileWord size={16} className="cursor-pointer" />
                          <FaRegCopy size={16} className="cursor-pointer hover:text-[#07B49B]" />
                          <VscTrash size={16} className="cursor-pointer hover:bg-red-500 hover:text-white rounded-full" />
                        </div>
                      </td>
                    </tr>

                    {expandedRow === globalIndex && (
                      <tr className="bg-blue-50 h-[300px] border">
                        <td colSpan={6} className="p-4">
                          <div className="transition-all duration-300 ease-in-out">
                            <p className="mb-2">
                              <strong>توضیحات:</strong> اطلاعات بیشتر درباره فایل "{item.name}"
                            </p>
                            <audio controls className="w-[500px] h-[34px] mt-2">
                              <source src="#" type="audio/mpeg" />
                              مرورگر شما از پخش صدا پشتیبانی نمی‌کند.
                            </audio>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4 space-x-2 rtl:space-x-reverse">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-30"
        >
          قبلی
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-teal-500 text-white" : ""}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-30"
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
