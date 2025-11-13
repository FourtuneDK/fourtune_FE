/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./common/**/*.{js,ts,jsx,tsx}",
        "./features/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                kakaoBig: [
                    "KakaoBigSans",
                    "Pretendard",
                    "Noto Sans KR",
                    "sans-serif",
                ],
                kakaoSmall: [
                    "KakaoSmallSans",
                    "Pretendard",
                    "Noto Sans KR",
                    "sans-serif",
                ],
            },

            fontSize: {
                kakaoTitle: ["2.5rem", { lineHeight: "1.2" }], // 약 40px
                kakaoBody: ["1rem", { lineHeight: "1.6" }],   // 약 16px
            },
        },
    },
    plugins: [],
};
