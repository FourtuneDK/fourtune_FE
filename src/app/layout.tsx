import { ReactNode } from "react";

export const metadata = {
    title: "Fourtune File Upload Test",
    description: "File upload test page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
        <body>{children}</body>
        </html>
    );
}
