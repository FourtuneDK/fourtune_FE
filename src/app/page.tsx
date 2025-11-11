// 파일 업로드 - 인프라 테스트용 페이지

"use client";

import { useState } from "react";

export default function FileUploadPage() {
    const [fileName, setFileName] = useState<string | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : null);

        if (file) {
            setUploadStatus("업로드 중...");

            const formData = new FormData();
            formData.append("file", file);

            try {
                const res = await fetch("/api/upload", {
                    method: "POST",
                    body: formData,
                });

                if (res.ok) {
                    const data = await res.json();
                    setUploadStatus(`✅ 업로드 완료: ${data.message}`);
                } else {
                    setUploadStatus("❌ 업로드 실패");
                }
            } catch (err) {
                console.error(err);
                setUploadStatus("⚠️ 서버 오류 발생");
            }
        }
    };

    return (
        <html lang="ko">
        <head>
            <title>파일 업로드 (Text)</title>
        </head>
        <body className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
            <h1 className="text-2xl font-bold mb-4">📄 텍스트 파일 업로드</h1>

            <label
                htmlFor="file"
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg inline-block transition"
            >
                파일 선택
            </label>

            <input
                id="file"
                type="file"
                accept=".txt"
                className="hidden"
                onChange={handleFileChange}
            />

            {fileName && (
                <p className="mt-4 text-gray-700">
                    선택된 파일: <strong>{fileName}</strong>
                </p>
            )}

            {uploadStatus && (
                <p className="mt-2 text-sm text-gray-600">{uploadStatus}</p>
            )}
        </div>
        </body>
        </html>
    );
}

