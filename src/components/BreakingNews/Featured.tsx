"use client";
import { useFetchFeatured, useFetchNewsBreaking } from "@/hooks/PostRequests";
import React from "react";
import Loader from "../Loader";
import Link from "next/link";
import SectionHead from "../UI/SectionHead";
import LikeCommentShare from "../UI/LikeCommentShare";
import parser from 'html-react-parser';

const Featured = () => {
  const { newsBreaking, isError, isLoading } = useFetchNewsBreaking();

  const featured = newsBreaking;
  return (
    <div>
      <div className="flex justify-between pb-5 border-b-4 border-b-secondaryBlue">
        {/* <p>Featured</p> */}
        <SectionHead title="Featured" />

        <div className="flex gap-10">
          <p>ALL</p>
          <p>MEN</p>
          <p>WOMEN</p>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : featured?.length > 0 ? (
        <div className=" mt-10 gap-5">
          {/* <div className="grid gap-5">
            <img src="./ads.png" alt="" />
          </div> */}

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 bgblack/30">
          <img src="./ads.png" alt="" />
            {isLoading ? (
              <Loader />
            ) : newsBreaking?.length > 0 ? (
              newsBreaking.slice(0, 5)?.map((item: any, i: number) => {
                return (
                  <div
                    key={i}
                    className={`my-4 md:my-2 col-span-1 ${
                      i == 0 ? "" : ""
                    } flex-col gap-2`}
                  >
                    <Link
                      href={`/blog/${item?._id}`}
                      className="flex gap-3 flex-col mb-1"
                    >
                      <img src={item?.media} alt="" className="h-40 w-full" />
                      <div>
                      <p className="text-[14px]  font-medium line-clamp-2">
                          {parser(item?.title)}
                        </p>
                        <p className="text-[11px] parser line-clamp-2 mt-1">
                          {parser(item?.content)}
                        </p>
                        <p className="text-[10px] text-grayColor">
                          {item?.date ? item?.date : "March 23, 2024"}
                        </p>
                      </div>
                    </Link>
                    <LikeCommentShare id={item?._id} size={15} />
                  </div>
                );
              })
            ) : (
              <p>There is no featured post</p>
            )}

          </div>
        </div>
      ) : (
        <p>There are no featured posts</p>
      )}
    </div>
  );
};

export default Featured;
