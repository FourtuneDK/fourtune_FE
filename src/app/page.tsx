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
                const res = await fetch("http://localhost:8080/file/upload", {
                    method: "POST",
                    body: formData,
                });

                if (res.ok) {
                    const data = await res.json();
                    setUploadStatus(`업로드 완료: ${data.message || "성공"}`);
                } else {
                    setUploadStatus(`업로드 실패 (${res.status})`);
                }
            } catch (err) {
                console.error(err);
                setUploadStatus("서버 연결 오류 발생");
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-4">파일 업로드 테스트</h1>

                <label
                    htmlFor="file"
                    className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg inline-block transition"
                >
                    파일 선택
                </label>

                <input
                    id="file"
                    type="file"
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


            <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-10 space-y-10">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
                   [ 카카오 폰트 전체 미리보기 ]
                </h2>

                {/* KakaoBigSans */}
                <div className="space-y-6">
                    <h3 className="font-kakaoBig text-4xl font-extrabold text-gray-900">
                        KakaoBigSans — 큰글씨 제목용
                    </h3>
                    <p className="font-kakaoBig text-2xl font-bold text-gray-800">
                        2XL 굵은 제목: 카카오 큰글씨체 Bold
                    </p>
                    <p className="font-kakaoBig text-kakaoTitle font-semibold text-gray-700">
                        Title 프리셋 (40px): 카카오 큰글씨체 Title
                    </p>
                    <p className="font-kakaoBig text-lg font-normal text-gray-600">
                        본문 대비 강조: 카카오 큰글씨체 Regular
                    </p>
                </div>

                <hr className="border-gray-200" />

                {/* KakaoSmallSans */}
                <div className="space-y-6">
                    <h3 className="font-kakaoSmall text-3xl font-bold text-gray-900">
                        KakaoSmallSans — 작은글씨 본문용
                    </h3>
                    <p className="font-kakaoSmall text-kakaoBody text-gray-700">
                        Body 프리셋 (16px): 카카오 작은글씨체 Regular
                    </p>
                    <p className="font-kakaoSmall text-base font-medium text-gray-600">
                        일반 본문 텍스트 예시입니다. 본문, 설명문, UI 텍스트에 사용됩니다.
                    </p>
                    <p className="font-kakaoSmall text-sm font-light text-gray-500">
                        작은 텍스트 (14px): 버튼, 캡션, 보조 설명에 적합합니다.
                    </p>
                </div>

                <hr className="border-gray-200" />

                {/* 혼합 예시 */}
                <div className="space-y-4">
                    <h3 className="font-kakaoBig text-4xl font-extrabold text-gray-900">
                        혼합 사용 예시
                    </h3>
                    <p className="font-kakaoSmall text-kakaoBody text-gray-700">
            <span className="font-kakaoBig font-bold">
              큰글씨 제목
            </span>
                        과{" "}
                        <span className="font-kakaoSmall text-gray-800">
              작은글씨 본문
            </span>
                        을 조합하면 시각적 계층이 명확해집니다.
                    </p>
                </div>
            </div>

        </div>

    );
}
