"use client";
import React from "react";
import { useFetchEditorsPick } from "@/hooks/PostRequests";
import CarouselComponent from "../Shared/CarouselComponent";
import parse from "html-react-parser";
import Link from "next/link";
import ReactTimeago from "react-timeago";
import Loader from "../Loader";

const MajorHighlight = () => {
  const { posts, isError, isLoading } = useFetchEditorsPick();
  return (
    <div className="mt-16">
      <CarouselComponent>
        {isLoading ? (
          <Loader />
        ) : posts?.length > 3 ? (
          posts?.slice(3,8).map((item: any, i: number) => {
            return (
              <div className="w-full h-[600px] relative" key={i}>
                <img
                  src={item?.thumbNail ? item?.thumbNail : item?.media}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="overlay" />

                <div className="details p-10 text-start">
                  <p className="text-[10px]">
                    <ReactTimeago date={item?.createdAt || "July 7, 2024"} />
                  </p>
                  <Link href={`/blog/${item?._id}`}>
                    <p className="font-[800] text-[36px] line-clamp-2 leading-10">
                      {item?.title} fcchvgjbk
                    </p>
                    <p className="!text-[10px] line-clamp-2 parser mb-2">
                      {parse(item?.content)}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>There are no major highlight available</p>
        )}
      </CarouselComponent>
    </div>
  );
};

export default MajorHighlight;
