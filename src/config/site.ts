import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Emerging technology trends and innovative solutions.",
  description: "",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "URL Utilities",
    slug: "url-utilities",
    tools: [
      {
        title: "Link Analytics Dashboard",
        desc: "Analyze and monitor the performance of your shortened URLs.",
        href: "https://free-url.short360s.com/stats",
      },
      {
        title: "Shorten Your URL",
        desc: "Convert long URLs into short, shareable links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Generator",
        desc: "Generate QR codes to make URL sharing easier via smartphones.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
    ],
  },
  {
    title: "SEO Tools",
    slug: "seo-tools",
    tools: [
      {
        title: "Google Cache Viewer",
        desc: "View the cached version of your website as seen by Google.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "URL Redirect Checker",
        desc: "Check if your URLs are correctly redirected for optimal SEO.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Meta Tag Analyzer",
        desc: "Analyze and optimize the meta tags for better SEO performance.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Google Index Checker",
        desc: "Check if your pages are indexed in Google's search engine.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Website Security Test",
        desc: "Test your website for vulnerabilities and security issues.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Backlink Generator",
        desc: "Generate backlinks to improve your SEO rankings.",
        href: "https://tools360s.com/backlink-maker",
      },
    ],
  },
  {
    title: "Miscellaneous Tools",
    slug: "utility-tools",
    tools: [
      {
        title: "Browser Update Check",
        desc: "Ensure your browser is updated to the latest version.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Online Code Formatter",
        desc: "Format your HTML, CSS, and JavaScript code for better readability.",
        href: "https://tools360s.com/code-formatter",
      },
      {
        title: "Invoice Generator",
        desc: "Create professional invoices for your freelance or business needs.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Public IP Finder",
        desc: "Find your device’s public IP address for network configurations.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Password Generator",
        desc: "Generate strong, secure passwords for online accounts.",
        href: "https://tools360s.com/password-generator/",
      },
    ],
  },
  {
    title: "Image Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Resize Images Online",
        desc: "Resize your images to fit any platform or website.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Convert Image Formats",
        desc: "Convert images between different formats like JPEG, PNG, WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Crop Images",
        desc: "Trim your images to fit the desired size or aspect ratio.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Image Compression Tool",
        desc: "Compress images to reduce file size without losing quality.",
        href: "https://review360.info",
      },
      {
        title: "Add Watermark to Images",
        desc: "Insert watermarks on your images to protect your content.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Store and share your images on cloud platforms.",
        href: "https://review360.info/upload-image",
      },
    ],
  },
  {
    title: "Text Tools",
    slug: "text-tools",
    tools: [
      {
        title: "Text Comparison Tool",
        desc: "Compare two pieces of text and highlight their differences.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Count Tool",
        desc: "Count the number of words, characters, and sentences in your text.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
];
