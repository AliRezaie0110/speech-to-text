"use client";
import { useState, Fragment } from "react";
import {
  FaRegCopy,
  FaRegFileWord,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import FileUploader from "./FileUploader";
import Pagination from "./Pagination";
import audioArchiveData from "../data/audioArchiveData";


export default function AudioArchive(fileUrl, setFileUrl, transcript, setTranscript, display, customHeight) {
  
  const data = audioArchiveData
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = expandedRow !== null ? 3 : 8;

  const toggleRow = (index) => {
    const newExpandedRow = expandedRow === index ? null : index;
    setExpandedRow(newExpandedRow);
    
    // set current page to the relevant page 
    const newRowsPerPage = newExpandedRow !== null ? 3 : 8;
    const newPage = Math.floor(index / newRowsPerPage) + 1;
    setCurrentPage(newPage);
  };

   

  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="w-full max-w-[1034px] mx-auto">
      <h2 className="text-[#00BA9F] text-[24px] mt-[20px] font-semibold mb-6 text-right">آرشیو من</h2>

      <div className="rounded-lg">
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
                      className="border-b  cursor-pointer hover:shadow-sm hover:rounded-2xl  hover:bg-gray-50 text-[#000000]"
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
                    {/* any row clicked  */}
                    {expandedRow === globalIndex && (
                      <tr>
                        <td colSpan={6}>
                          <div className="relative p-2 m-2 h-[300px] border border-[#00BA9F] rounded-lg">
                            <div className="transition-all duration-300 ease-in-out">
                              <FileUploader display="hidden" customHeight="150"
                                fileUrl={true}
                                setFileUrl={setFileUrl}
                                transcript={true}
                                setTranscript={setTranscript}
                                 />
                            </div>
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
      <Pagination
        currentPage={currentPage}
        totalPages={356}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}
