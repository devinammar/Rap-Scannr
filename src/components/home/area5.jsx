// after debugging

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../cms/sanityClient";

const dummySlides = [
  {
    image: "/pexels-zachtheshoota-2067689.jpg",
    caption:
      "(TEXTDUMMY) Rap Scannr is built for those who hear more than just a beat. Every bar, every rhyme, every flow carries something worth digging into. From word choice to lyrical structure, we break it all down so you can understand what makes a rap track truly stand out. Want to know how deep the meaning goes behind your favorite song? Rap Scannr's Track Analysis unpacks it all, layer by layer, word by word, brick by brick. Because rap isn't just music. Rap is a language",
  },
  {
    image: "/pexels-din-127253222-14853507.jpg",
    caption:
      "(TEXTDUMMY) Two songs. One arena. Rap Scannr's Rap Battle feature is built for those who want real answers, not just opinions. Compare flow, complexity, and lyrical depth across two tracks side by side. Does the classic still hold up against the new wave? Who hits harder on paper? Who's more technically sharp when you strip away the hype? Drop two songs into Rap Scannr and let the analysis speak for itself, bar by bar, track by track. Because in rap, the truth is always in the lyrics.",
  },
  {
    image: "/pexels-erick-richards-2112514569-30316347.jpg",
    caption:
      "(TEXTDUMMY) Rap is never just rhymes that sound good on a beat. Behind every track there are layers wordplay, metaphor, internal rhyme schemes, and cultural references that are easy to miss on the first listen. Rap Scannr is built for those who want to go deeper than the surface. Our Track Analysis breaks down every element in full detail, from word selection to recurring themes, from delivery patterns to the meaning buried deep between the bars. Your music, finally understood.",
  },
  {
    image: "/pexels-erick-richards-2112514569-30316347.jpg",
    caption:
      "(TEXTDUMMY) Rap carries a long history written into every lyric ever recorded. From the golden age to the current generation, every song is a cultural document worth reading more carefully than most people do. Rap Scannr lets you trace that evolution compare tracks across different eras, artists, and styles to see what has changed and what has stayed the same. Because understanding rap means understanding the journey of an entire culture, one bar at a time.",
  },
];

const USE_CMS = true; // ganti false kalau mau balik ke dummy

export const Area5 = () => {
  const [slides, setSlides] = useState(USE_CMS ? [] : dummySlides);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null); // state buat arah animasi slide (sliding efek)
  const [prevImage, setPrevImage] = useState(null); // state buat nampilin gambar banner sebelumnya saat animasi slide (sliding efek)
  const buttonp =
    "text-p text-white font-medium self-center ml-0 max-[480px]:ml-0";

  useEffect(() => {
    if (USE_CMS) {
      client
        .fetch(`*[_type == "banner"] | order(order asc)`)
        .then((data) => setSlides(data));
    }
  }, []);

  // buat ngecek loading effect waktu ngeload gambar dan teks p dari sanity

  //   useEffect(() => {
  //   if (USE_CMS) {
  //     client
  //       .fetch(`*[_type == "banner"] | order(order asc)`)
  //       .then(data => {
  //         setTimeout(() => setSlides(data), 3000);
  //       });
  //   }
  // }, []);

  // tanpa efek sliding waktu pindah konten (banner dan p)

  // const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length);
  // const next = () => setCurrent(i => (i + 1) % slides.length);

  // biar ada efek sliding waktu pindah konten (banner dan p)
  const prev = () => {
    setPrevImage(bgImage);
    setDirection("left");
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  };

  // biar ada efek sliding waktu pindah konten (banner dan p)
  const next = () => {
    setPrevImage(bgImage);
    setDirection("right");
    setCurrent((i) => (i + 1) % slides.length);
  };

  const currentSlide = slides[current];
  const bgImage = USE_CMS
    ? currentSlide
      ? urlFor(currentSlide.image).url()
      : ""
    : currentSlide?.image;

  return (
    <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-62 max-[1024px]:mt-52 max-[768px]:mt-46">
      {/* banner tanpa sliding efek */}
      {/* <div
        className="w-full h-[372px] max-[1280px]:h-[320px] max-[1024px]:h-[290px] max-[1080px]:h-[260px] max-[768px]:h-[240px] bg-cover bg-center bg-gray-200"
        style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}
      /> */}

      {/* banner dengan sliding efek */}
      <div className="w-full h-[372px] max-[1280px]:h-[320px] max-[1024px]:h-[290px] max-[1080px]:h-[260px] max-[768px]:h-[240px] overflow-hidden relative">
        {prevImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${prevImage}')` }}
          />
        )}
        <div
          key={current}
          className={`absolute inset-0 bg-cover bg-center ${direction === "right" ? "slide-in-right" : direction === "left" ? "slide-in-left" : ""}`}
          style={{ backgroundImage: bgImage ? `url('${bgImage}')` : "none" }}
        />
      </div>

      <div className="flex px-20 max-[768px]:px-14 max-[480px]:px-8 pt-15 max-[768px]:justify-between max-[768px]:flex-col">
        <div className="flex gap-16 order-1 max-[768px]:order-1 max-[768px]:pb-10 items-start">
          <button className="w-16 group" onClick={prev}>
            <img
              src="/previous.png"
              className="block group-hover:hidden"
              alt="previous"
            />
            <img
              src="/previousgrey.png"
              className="hidden group-hover:block"
              alt="previous"
            />
          </button>
          <button className="w-16 group" onClick={next}>
            <img
              src="/next.png"
              className="block group-hover:hidden"
              alt="next"
            />
            <img
              src="/nextgrey.png"
              className="hidden group-hover:block"
              alt="next"
            />
          </button>
        </div>
        <div className="order-2 max-[768px]:order-2 ml-80 max-[1720px]:ml-74 max-[1480px]:ml-60 max-[1280px]:ml-50 max-[1030px]:ml-40 max-[768px]:ml-0">
          <p className="pb-30">
            {currentSlide ? currentSlide.caption : "Loading..."}
          </p>
          <Link
            className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full justify-center"
            to="about"
          >
            <p className={buttonp}>Learn More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ____________________________________________________________

// ini bikinan sendiri

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Area5 = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const buttonp = "text-p text-white font-medium self-center ml-0 max-[480px]:ml-0";

//   return (
//     <div className="min-[1920px]:w-[1920px] min-[1920px]:justify-self-center mt-62 max-[1024px]:mt-52 max-[768px]:mt-46">
//       <div
//         className="w-full h-[372px] max-[1280px]:h-[320px] max-[1024px]:h-[290px] max-[1080px]:h-[260px] max-[768px]:h-[240px] bg-cover bg-center"
//         style={{ backgroundImage: "url('/pexels-zachtheshoota-2067689.jpg')" }}>
//       </div>
//       <div className="flex px-20 max-[768px]:px-14 max-[480px]:px-8 pt-15 max-[768px]:justify-between max-[768px]:flex-col">
//         <div className="flex gap-16 order-1 max-[768px]:order-1 max-[768px]:pb-10 items-start">
//       <button className="w-16">
//         <img src="/previous.png" alt="previous" />
//       </button>
//       <button className="w-16">
//         <img src="/next.png" alt="next" />
//       </button>
//       </div>
//       <div className="order-2 max-[768px]:order-2 ml-80 max-[1720px]:ml-74 max-[1480px]:ml-60 max-[1280px]:ml-50 max-[1030px]:ml-40 max-[768px]:ml-0">
//         <p className="pb-10">tes</p>
//         <Link className="bg-black h-10 flex w-[222px] hover:bg-black/50 max-[768px]:w-[180px] max-[640px]:w-[160px] max-[480px]:w-full justify-center" to="about">
//           <p className={buttonp}>Learn More</p>
//         </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
