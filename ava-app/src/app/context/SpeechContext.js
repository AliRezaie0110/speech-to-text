'use client';
import { createContext, useState, useContext } from 'react';

const SpeechContext = createContext();

export function SpeechProvider({ children }) {
  const [lang, setLang] = useState('fa');

  return (
    <SpeechContext.Provider value={{ lang, setLang }}>
      {children}
    </SpeechContext.Provider>
  );
}

export function useSpeech() {
  return useContext(SpeechContext);
}
