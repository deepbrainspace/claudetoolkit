const fs = require("fs");
const path = require("path");

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createFileIfNotExists(filePath, content) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
}

// Setup required directories
const directories = [
  "public/images/testimonials",
  "public/videos",
  "src/styles",
  "src/types",
];

directories.forEach((dir) => {
  ensureDirectoryExists(path.join(process.cwd(), dir));
});

// Create types file
const typesContent = `
export interface AgentType {
  id: number;
  name: string;
  type: string;
  description: string;
}

export interface BenefitType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}
`;

createFileIfNotExists(
  path.join(process.cwd(), "src/types/index.ts"),
  typesContent.trim(),
);

// Create placeholder images
const placeholderSvg = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f0f0f0"/>
  <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#666" text-anchor="middle">Placeholder Image</text>
</svg>
`;

["john.jpg", "sarah.jpg"].forEach((filename) => {
  const imagePath = path.join(
    process.cwd(),
    "public/images/testimonials",
    filename,
  );
  createFileIfNotExists(imagePath, placeholderSvg);
});

// Create placeholder video
const videoPath = path.join(process.cwd(), "public/videos/demo.mp4");
if (!fs.existsSync(videoPath)) {
  // Create an empty video file as placeholder
  fs.writeFileSync(videoPath, "");
}

// Create favicon files
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="100%" height="100%" fill="#2563eb"/>
  <path d="M256 128c70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128 57.3-128 128-128z" fill="white"/>
</svg>
`;

[
  "favicon.ico",
  "apple-touch-icon.png",
  "favicon-32x32.png",
  "favicon-16x16.png",
].forEach((filename) => {
  const faviconPath = path.join(process.cwd(), "public", filename);
  createFileIfNotExists(faviconPath, faviconSvg);
});

// Create site manifest
const manifestContent = {
  name: "DeepBrain.Space",
  short_name: "DeepBrain",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  theme_color: "#2563eb",
  background_color: "#ffffff",
  display: "standalone",
};

createFileIfNotExists(
  path.join(process.cwd(), "public/site.webmanifest"),
  JSON.stringify(manifestContent, null, 2),
);

console.log("Setup completed successfully!");
