import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
        return NextResponse.json({ message: "파일이 없습니다." }, { status: 400 });
    }

    // 텍스트 파일 읽기
    const textContent = await file.text();

    console.log("📄 업로드된 파일 내용:");
    console.log(textContent);

    return NextResponse.json({ message: "파일이 성공적으로 업로드되었습니다." });
}
