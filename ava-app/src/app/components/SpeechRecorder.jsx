'use client';

import { useRef, useState } from 'react';
import { Mic, StopCircle } from 'lucide-react';

export default function SpeechRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="sara flex flex-col justify-center items-center rounded-2xl p-8 text-center">
      {/* حالت درحال ضبط */}
      {recording ? (
        <button
          onClick={stopRecording}
          className="bg-red-500 text-white w-[62px] h-[62px] flex items-center justify-center rounded-full"
        >
          <StopCircle size={62} />
        </button>
      ) : (
        <button
          onClick={startRecording}
          className="bg-teal-500 text-white w-[62px] h-[62px] flex items-center justify-center rounded-full"
        >
          <Mic size={32} />
        </button>
      )}

      {/* باکس متن راهنما */}
      <div className="w-[276px] h-[56px] rounded mt-4 flex items-center justify-center px-2 text-sm text-gray-600 text-center">
        {recording ? (
          'در حال ضبط... برای توقف، دکمه را بزنید'
        ) : (
          <>
            برای شروع به صحبت، دکمه را فشار دهید
            <br />
            متن پیاده‌شده‌ی آن، در اینجا ظاهر می‌شود
          </>
        )}
      </div>
    </div>
  );
}  
