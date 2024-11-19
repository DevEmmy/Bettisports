"use client";
import Preview from "@/components/Podcast/Preview";
import CarouselComponent from "@/components/Shared/CarouselComponent";
import HorizontalHeader from "@/components/Shared/HorizontalHeader";
import React, { useState } from "react";
import { useFetchPodCast } from "@/hooks/PostRequests";
import Loader from "@/components/Loader";
import { Post } from "@/requests/dto";
import parser from "html-react-parser";
import TimeAgo from "react-timeago";
import { FaPlay, FaPause } from "react-icons/fa";
import Play from "@/components/UI/Play";
import AudioPlayer from "@/components/UI/AudioPlayer";
import { RiTimeLine } from "react-icons/ri";
import LikeCommentShare from "@/components/UI/LikeCommentShare";

const page = () => {
  const [show, setShow] = useState<boolean>(false);
  const [audio, setAudio] = useState<any | null>(null);

  const { podcast, isError, isLoading } = useFetchPodCast();
  return (
    <>
      {podcast && (
        <AudioPlayer
          item={audio}
          show={show}
          closeShow={() => setShow(false)}
        />
      )}
      <div className=" mx-5 md:mx-xPadding flex flex-col gap-10 py-10">
        <div className="grid md:grid-cols-[4fr__1fr] gap-6">
          <div className="flex flex-col justify-between">
            <CarouselComponent>
              {isLoading ? (
                <Loader />
              ) : podcast?.length > 0 ? (
                podcast?.map((item: any, i: number) => (
                  <div className=" h-[600px] rounded-2xl">
                    <img
                      src={item?.thumbNail}
                      alt=""
                      className="h-full rounded-2xl w-full object-cover"
                    />
                    <div className="overlay rounded-2xl" />

                    <div className="text-white text-start absolute bottom-10 left-10 z-[1000]">
                      <p className="font-[600] text-[28px] ">{item?.title}</p>
                      <p className="text-[14px] flex gap-3 items-center">
                        <TimeAgo date={item?.createdAt} />
                      </p>
                      <p className="text-[16px]">{parser(item?.content)}</p>
                    </div>

                    <div
                      onClick={() => {
                        setShow(!show);
                        setAudio(item);
                      }}
                      className="absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-4 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
                    >
                      <FaPlay className="text-defaultYellow" size={25} />
                    </div>
                  </div>
                ))
              ) : (
                <p>There is no podcast</p>
              )}
            </CarouselComponent>

            <img src="./hero2.png" alt="" className="mt-4" />
          </div>

          <div>
            <HorizontalHeader text="Popular" endText="" />

            <div className="flex flex-col gap-5 my-2">
              {podcast?.slice(0, 3).map((item: Post, i: number) => {
                return (
                  <div
                    className="flex md:gap-1 flex-col md:my-0 my-3 rounded-2xl "
                    key={i}
                  >
                    {/* <img src={item?.thumbNail} alt="" className=' max-h-[130px] rounded-lg'/> */}

                    <div className="h-[140px] relative grid place-items-center">
                      <img
                        src={item?.thumbNail}
                        alt=""
                        className=" max-h-[140px] w-full object-fill rounded-lg"
                      />
                      {/* <AudioPlayer item={item} /> */}
                      <div
                        onClick={() => {
                          setShow(!show);
                          setAudio(item);
                        }}
                        className="absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-3 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
                      >
                        <FaPlay className="text-defaultYellow" size={23} />
                      </div>
                    </div>

                    <div>
                      <p className="font-[600] text-sm">{item?.title}</p>
                      <p className="text-[11px]">
                        <TimeAgo date={item?.createdAt} />
                      </p>
                      <p className="text-[11px] text-gray-800">
                        {parser(item?.content)}
                      </p>
                    </div>
                  </div>

                  // <Preview key={i} item={item}/>
                );
              })}
            </div>
          </div>
        </div>

        <HorizontalHeader text="Recent" />

        <div className="md:grid grid-cols-5 gap-5 my-2">
          {
            // slice(14,30)
            podcast?.slice(14,30).map((item: Post, i: number) => {
              return (
                <div key={i} className="flex md:gap-1 flex-col md:my-0 my-3 rounded-2xl relative">
                  <img
                    src={item?.thumbNail}
                    alt=""
                    className=" h-[200px] rounded-2xl"
                  />
                  <div
                        onClick={() => {
                          setShow(!show);
                          setAudio(item);
                        }}
                        className="absolute -mt-10 -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-3 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
                      >
                        <FaPlay className="text-defaultYellow" size={18} />
                  </div>
                  <p className="font-[600] text-sm">{item?.title}</p>
                  <p className="text-[11px] flex items-center gap-0.5">
                    <RiTimeLine />
                    <TimeAgo date={item?.createdAt} />
                  </p>
                  <p className="text-[12px] text-black/80">
                    {parser(item?.content)}
                  </p>
                </div>
              );
            })
          }
        </div>

        <HorizontalHeader text="More Podcasts" />

        <div className="md:grid grid-cols-5 gap-5 my-2">
          {
            // .slice(30,46)
            podcast?.slice(30, 46).map((item: Post, i: any) => {
              return (
                <div key={i} className="flex md:gap-1 flex-col md:my-0 my-3 rounded-2xl relative">
                <img
                  src={item?.thumbNail}
                  alt=""
                  className=" h-[200px] rounded-2xl"
                />
                <div
                      onClick={() => {
                        setShow(!show);
                        setAudio(item);
                      }}
                      className="absolute -mt-10 -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-3 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
                    >
                      <FaPlay className="text-defaultYellow" size={18} />
                </div>
                <p className="font-[600] text-sm">{item?.title}</p>
                <p className="text-[11px] flex items-center gap-0.5">
                  <RiTimeLine />
                  <TimeAgo date={item?.createdAt} />
                </p>
                <p className="text-[12px] text-black/80">
                  {parser(item?.content)}
                </p>
              </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default page;
