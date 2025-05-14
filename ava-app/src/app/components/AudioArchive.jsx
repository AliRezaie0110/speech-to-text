import { FaTrash, FaRegCopy, FaRegFileWord, FaDownload, FaRegPlayCircle } from 'react-icons/fa';
import { BsDownload } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import { Mic, Upload, LinkIcon } from 'lucide-react'
export default function AudioArchive() {
  const data = [
    {
      name: 'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...',
      date: '۱۴۰۰/۰۸/۳۱',
      type: '.mp3',
      duration: '۴:۲۹',
      icon: <LinkIcon className="text-red-500" />,
    },
    {
      name: 'khaterate To',
      date: '۱۴۰۰/۰۸/۲۰',
      type: '.mp4',
      duration: '۴:۲۸',
      icon: <Upload className="text-sky-500" />,
    },
    {
      name: 'https://dls.loudmusic.ir/Music/1401/01/Baraye%20Shervin ...',
      date: '۱۴۰۰/۰۸/۲۰',
      type: '.wav',
      duration: '۳:۱۴',
      icon: <LinkIcon className="text-red-500" />,
    },
    {
      name: 'پادکست رادیو راه - فصل دوم - قسمت ششم- راه سروش',
      date: '۱۴۰۰/۰۸/۱۹',
      type: '.mp3',
      duration: '۱:۲۸:۱۸',
      icon: <Mic className="text-green-500" />,
    },
    {
      name: 'https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...',
      date: '۱۴۰۰/۰۸/۳۱',
      type: '.mp3',
      duration: '۱:۲۸:۱۸',
      icon: <LinkIcon className="text-red-500" />,
    },
    {
      name: 'khaterate To',
      date: '۱۴۰۰/۰۸/۲۰',
      type: '.mp4',
      duration: '۴:۲۸',
      icon: <Upload className="text-sky-500" />,
    },
    {
      name: 'https://dls.loudmusic.ir/Music/1401/01/Baraye%20Shervin ...',
      date: '۱۴۰۰/۰۸/۲۰',
      type: '.wav',
      duration: '۳:۱۴',
      icon: <LinkIcon className="text-red-500" />,
    },
    {
      name: 'پادکست رادیو راه - فصل دوم - قسمت ششم- راه سروش',
      date: '۱۴۰۰/۰۸/۱۹',
      type: '.mp3',
      duration: '۱:۲۸:۱۸',
      icon: <Mic className="text-green-500" />,
    },
  ];

  return (
    <div className="p-4 w-full max-w-[1034px] mx-auto">
      <h2 className="text-teal-600 text-2xl font-semibold mb-6 text-right">آرشیو من</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-right">
          <thead className="border-b">
            <tr className="text-gray-600">
              <th className="py-2"></th>
              <th className="py-2">نام فایل</th>
              <th className="py-2">تاریخ بارگذاری</th>
              <th className="py-2">نوع فایل</th>
              <th className="py-2">مدت زمان</th>
            </tr>
          </thead>
          <tbody className='h-[520px]'>
            {data.map((item, index) => (
              <tr key={index} className=" hover:bg-gray-50 text-[#000000]  h-[45px] hover:shadow-sm rounded-[10px] ">
                <td className="py-2">{item.icon}</td>
                <td className="py-2 text-blue-600 max-w-xs truncate">{item.name}</td>
                <td className="py-2">{item.date}</td>
                <td className="py-2">{item.type}</td>
                <td className="py-2">{item.duration}</td>
                <td className="py-2">
                  <div className="flex justify-end items-center space-x-5  text-[#8F8F8F]">
                    <BsDownload size={16} className="cursor-pointer hover:text-[#07B49B] " />
                    <FaRegFileWord size={16} className="cursor-pointer" />
                    <FaRegCopy size={16} className="cursor-pointer hover:text-[#07B49B] " />
                    <VscTrash size={16} className="cursor-pointer hover:bg-red-500 hover:text-white rounded-full  " />
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}