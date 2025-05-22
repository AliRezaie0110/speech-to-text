'use client';
import { useState } from "react";
import AudioArchive from "../components/AudioArchive";
import LinkInput from "../components/LinkInput";

export default function ArchivePage() {
  const [customItems, setCustomItems] = useState([]);
  const [fileUrl, setFileUrl] = useState(null);
  const [transcript, setTranscript] = useState([]);

  return (
    <div>
      <LinkInput
        onTranscript={(data) => setTranscript(data)}
        onFileUrl={(url) => {
          setFileUrl(url);
          const filename = url?.split("/").pop() || "audio.mp3";
          const newItem = {
            id: Date.now(),
            filename,
            url,
            duration: "00:00",
            processed: new Date().toISOString(),
            custom: true,
          };
          setCustomItems([newItem]);
        }}
        className="hidden"
      />
      <AudioArchive
        fileUrl={fileUrl}
        setFileUrl={setFileUrl}
        transcript={transcript}
        setTranscript={setTranscript}
        customItems={customItems}
      />
    </div>
  );
}
