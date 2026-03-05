/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { 
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  trailingSlash: true,
};
export default nextConfig;
