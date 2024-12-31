"use client";
import React, { useState } from "react";
import Line from "../UI/Line";
import Preview from "./Preview";
import Loader from "../Loader";
import { useFetchPhotoSplash } from "@/hooks/PostRequests";
import SectionHead from "../UI/SectionHead";

const PhotoSplash = () => {
  const [photoView, setPhotoView] = useState<boolean>(false);
  const competitions = [
    {
      title: "AFCON",
    },
    {
      title: "EURO 2024",
    },
    {
      title: "2024 World Cup",
    },
    {
      title: "COPA AMERICA",
    },
    {
      title: "ASIAN CUP",
    },
    {
      title: "FIFA WOMEN WORLD CUP",
    },
  ];

  const { photoSplash, isError, isLoading } = useFetchPhotoSplash();

  return (
    <div className="flex flex-col gap-5 my-10 px-5 md:px-xPadding">
      {/* <h1 className='font-[600] uppercase'>BSB PHOTOSPLASH</h1> */}
      <SectionHead title="BSB PHOTOSPLASH" />
      <Line />

      <div className="md:grid md:grid-cols-4 gap-5">
        {isLoading ? (
          <Loader />
        ) : photoSplash?.length > 0 ? (
          photoSplash?.slice(0, 6).map((item: any, i: number) => {
            return (
              <div
                className={`relative ${
                  (i == 2 || i == 3) && "col-span-2"
                } cursor-pointer my-3 md:my-0`}
                key={i}
                onClick={() => setPhotoView(true)}
              >
                <img src={item?.media} alt="" className="w-full h-[300px]" />
                <div className="overlay" />
                <div className="details p-5">
                  <p className="text-[20px] font-[600]">{item?.title}</p>
                  <p className="text-sm">{item?.excerpt}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>There are no photo splash available!</p>
        )}
      </div>

      {photoView && (
        <Preview
          photoList={photoSplash}
          photoView={photoView}
          setPhotoView={setPhotoView}
        />
      )}
    </div>
  );
};

export default PhotoSplash;
