'use client'
import { FormDataProvider } from "@/components/FormDataContext";
import PageCV from "@/components/PageCV";
import React, { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        window.print();
    }, []);

    return (
        <FormDataProvider>
            <PageCV />
        </FormDataProvider>
    );
}