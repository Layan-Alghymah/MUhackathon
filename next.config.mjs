import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // حصر جذر تتبّع الملفات على مجلد المشروع (يوجد lockfile في المجلد الأب).
  outputFileTracingRoot: __dirname,
  images: {
    // الصور المحلية فقط في هذه المرحلة (Placeholders). أضِف نطاقات خارجية عند الحاجة.
    remotePatterns: [],
  },
};

export default nextConfig;
