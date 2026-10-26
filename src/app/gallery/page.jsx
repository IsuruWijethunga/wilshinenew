"use client";

import Image from "next/image";
import Banner from "@/Component/Banner";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Script from "next/script";

const photos = [
  { src: "/img/gallery/ba (1).png", width: 800, height: 1200 },
  { src: "/img/gallery/3.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/4.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/19.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/12.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/13.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/ba.png", width: 800, height: 1200 },
  { src: "/img/gallery/20.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/29.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/ba (2).png", width: 800, height: 1200 },
  { src: "/img/gallery/30.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6907.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6960.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/ba (3).png", width: 800, height: 1200 },
  { src: "/img/gallery/IMG_6967.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6975.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/IMG_6980.jpg", width: 1200, height: 800 },
  { src: "/img/gallery/ba (4).png", width: 800, height: 1200 },
  { src: "/img/gallery/IMG_7360.JPG", width: 1600, height: 1200 },
  { src: "/img/gallery/27.jpg", width: 1200, height: 800 },
];

function renderNextImage({ alt = "", title }, { photo, width, height }) {
  return (
    <div
      style={{
        width: "100%", // Let react-photo-album control the width
        height: "100%", // Let react-photo-album control the height
        position: "relative",
        overflow: "hidden",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out", // Existing transition
      }}
    >
      <Image
        src={photo.src} // Use photo.src directly
        alt={alt}
        title={title}
        width={width} // Use provided width
        height={height} // Use provided height
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
        style={{ objectFit: "cover" }} // Ensure proper image scaling
        placeholder="empty" // Avoid blur placeholder if blurDataURL is not provided
        className="hover: scale-105" // Added hover scale effect
      />
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17199478404"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17199478404');
          `}
      </Script>
      <Banner
        title="Gallery"
        path="/gallery"
        pathName="Gallery"
        path2=""
        path2Name=""
      />
      <div className="container max-w-6xl mx-auto px-4 py-8 mt-5 mb-5">
        <MasonryPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 400) return 1;
            if (containerWidth < 800) return 2;
            return 3;
          }}
          spacing={10}
          padding={0}
        />
      </div>
    </div>
  );
}
