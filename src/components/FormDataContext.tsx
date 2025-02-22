'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FormData } from '../types/FormTypes';

interface FormDataContextValue {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextValue | null>(null);

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
}

const STORAGE_KEY = 'cvFormData';

export function FormDataProvider({ children }: any) {
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window === 'undefined') return {
      information: [],
      education: [],
      work: [],
      project: [],
      skills: []
    };
    const storedFormData = localStorage.getItem(STORAGE_KEY);
    return storedFormData ? JSON.parse(storedFormData) : {
      information: [],
      education: [],
      work: [],
      project: [],
      skills: [],
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}