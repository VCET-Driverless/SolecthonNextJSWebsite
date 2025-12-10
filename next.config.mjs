/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'], // Add Unsplash domain here
      },
  output: "export", // since you're deploying to GitHub pages
  basePath: "/SolecthonNextJSWebsite",
  assetPrefix: "/SolecthonNextJSWebsite",
};


export default nextConfig;


