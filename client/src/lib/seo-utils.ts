// SEO utility functions for better search engine optimization

export const updateMetaTag = (name: string, content: string) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  if (metaTag) {
    metaTag.setAttribute("content", content);
  } else {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", name);
    metaTag.setAttribute("content", content);
    document.head.appendChild(metaTag);
  }
};

export const updateCanonicalUrl = (url: string) => {
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute("href", url);
  } else {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", url);
    document.head.appendChild(canonicalLink);
  }
};

export const updateOpenGraphTags = (data: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      let ogTag = document.querySelector(`meta[property="og:${key}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", value);
      } else {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", `og:${key}`);
        ogTag.setAttribute("content", value);
        document.head.appendChild(ogTag);
      }
    }
  });
};

export const updateTwitterTags = (data: {
  title?: string;
  description?: string;
  image?: string;
}) => {
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      let twitterTag = document.querySelector(`meta[name="twitter:${key}"]`);
      if (twitterTag) {
        twitterTag.setAttribute("content", value);
      } else {
        twitterTag = document.createElement("meta");
        twitterTag.setAttribute("name", `twitter:${key}`);
        twitterTag.setAttribute("content", value);
        document.head.appendChild(twitterTag);
      }
    }
  });
};

// SEO constants
export const SEO_CONFIG = {
  baseUrl: "https://chirantan-portfolio.vercel.app",
  defaultTitle: "Chirantan Mallick - Front-end Developer & AI/ML Engineer",
  defaultDescription:
    "Explore Chirantan Mallick's portfolio - Front-end Developer & AI/ML Engineer. Innovative projects including SalaryScope, SemesterHub & AI Resume Screener. View my work!",
  defaultImage:
    "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429079/Chirantan-mallick-hero-image_sdw6ld.jpg",
  twitterHandle: "@chirantanmallick",
  author: "Chirantan Mallick",
};
