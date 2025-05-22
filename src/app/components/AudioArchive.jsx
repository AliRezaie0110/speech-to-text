"use client";

import { useState, useEffect, Fragment } from "react";
import { FaRegCopy, FaRegFileWord } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import FileUploader from "./FileUploader";
import Pagination from "./Pagination";
import { Mic, Upload, Link as LinkIcon } from 'lucide-react';

export default function AudioArchive({ fileUrl, setFileUrl, transcript, setTranscript, customItems = [] }) {
  const [data, setData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = expandedRow !== null ? 3 : 8;

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/proxy/requests");
      const result = await response.json();
      console.log("Fetched data:", result.results);

      setData((prevData) => {
        const hasCustomItems = prevData.some(item => customItems.some(ci => ci.id === item.id));
        if (!hasCustomItems) {
          return [...customItems, ...(result?.results || [])];
        } else {
          return [...(result?.results || [])];
        }
      });
    } catch (error) {
      console.error("خطا در دریافت دیتا:", error);
    }
  };

  fetchData();
}, []);

  const handleDelete = async (idToDelete) => {
    

    try {
      const res = await fetch(`/api/proxy/requests/${idToDelete}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Error ${res.status}: ${errorText}`);
      }

      setData((prevData) => prevData.filter((item) => item.id !== idToDelete));
    } catch (error) {
      console.error("حذف از سرور شکست خورد:", error);
      alert("مشکلی در حذف فایل پیش آمد");
    }
  };

  const toggleRow = (index) => {
    const newExpandedRow = expandedRow === index ? null : index;
    setExpandedRow(newExpandedRow);
    const newRowsPerPage = newExpandedRow !== null ? 3 : 8;
    const newPage = Math.floor(index / newRowsPerPage) + 1;
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const visibleData = data.slice(startIndex, startIndex + rowsPerPage);

  const getFileExtension = (urlOrName) => {
    if (!urlOrName) return "";
    const parts = urlOrName.split(".");
    return parts.length > 1 ? parts[parts.length - 1] : "";
  };

  const formatDuration = (durationStr) => {
    if (!durationStr) return "—";

    const parts = durationStr.split(":"); 
    if (parts.length !== 3) return durationStr;

    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);
    const seconds = Math.floor(parseFloat(parts[2])); // remove milliseconds

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds >= 3600) {
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    } else {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div className="w-full max-w-[1034px] mx-auto">
      <h2 className="text-[#00BA9F] text-[24px] mt-[20px] font-semibold mb-6 text-right">آرشیو من</h2>

      <div className="rounded-lg">
        <table className="w-full table-auto text-right border-separate border-spacing-y-2">
          <thead className="sticky top-0 z-10">
            <tr className="text-gray-600">
              <th className="py-2"></th>
              <th className="py-2">نام فایل</th>
              <th className="py-2">تاریخ بارگذاری</th>
              <th className="py-2">نوع فایل</th>
              <th className="py-2">مدت زمان</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((item, index) => {
              const globalIndex = startIndex + index;
              const fileName = item.url?.split("/").pop() || "—";
              const fileType = getFileExtension(item.filename);
              const uploadDate = item.processed?.slice(0, 10) || "—";

              return (
                <Fragment key={globalIndex}>
                  <tr
                    className="border-b cursor-pointer hover:shadow-sm hover:rounded-2xl hover:bg-gray-50 text-[#000000]"
                    onClick={() => toggleRow(globalIndex)}
                  >
                    <td className="py-2 px-2 text-red-500"><LinkIcon size={20}  /></td>
                    <td className="py-2 text-blue-600 max-w-xs truncate">{fileName}</td>
                    <td className="py-2">{uploadDate}</td>
                    <td className="py-2">{`${fileType}.`}</td>
                    <td className="py-2">{formatDuration(item.duration)}</td>
                    <td className="py-2">
                      <div className="flex justify-end items-center space-x-5 text-[#8F8F8F]">
                        <BsDownload
                          size={16}
                          className="cursor-pointer hover:text-[#07B49B]"
                          onClick={(e) => {
                            e.stopPropagation();

                            if (!item.url) {
                              alert("لینک فایل موجود نیست!");
                              return;
                            }

                            const proxyUrl = `/api/proxy-download?url=${encodeURIComponent(item.url)}`;
                            const link = document.createElement("a");
                            link.href = proxyUrl;
                            link.setAttribute("download", item.filename || "downloaded-file");
                            link.setAttribute("target", "_blank");
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        />
                        <FaRegFileWord size={16} className="cursor-pointer" />
                        <FaRegCopy size={16} className="cursor-pointer hover:text-[#07B49B]" />
                        <VscTrash
                          size={16}
                          className="cursor-pointer hover:bg-red-500 hover:text-white rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(item.id);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                  {expandedRow === globalIndex && (
                    <tr>
                      <td colSpan={6}>
                        <div className="relative p-2 m-2 h-[300px] border border-[#00BA9F] rounded-lg">
                          <FileUploader
                            display="hidden"
                            customHeight="150"
                            fileUrl={fileUrl}
                            setFileUrl={setFileUrl}
                            transcript={item.segments || []}
                            setTranscript={setTranscript}
                          />
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

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / rowsPerPage)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
