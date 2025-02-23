"use client";
import { FormDataProvider } from "@/components/FormDataContext";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const PageCV = dynamic(() => import("@/components/PageCV"), { ssr: false });
export default function Page() {
  const [pageReady, setPageReady] = useState(false);
  useEffect(() => {
    if (pageReady) {
      window.print();
    }
  }, [pageReady]);

  return (
    <FormDataProvider>
      <PageCV onReady={() => setPageReady(true)} />
    </FormDataProvider>
  );
}
