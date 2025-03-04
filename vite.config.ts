import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/twcommunity/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0", // 🔹 외부에서 접근 가능하게 설정
    port: 5173, // 기본 포트 (변경 가능)
    strictPort: true, // 포트가 사용 중이면 실행 중단
    proxy: {
      "/search": {
        target: "http://3.39.239.164:3000", // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
