"use client";
import React, { useState } from "react";
import { useFetchPodCast } from "@/hooks/PostRequests";
import Loader from "../Loader";
import parser from "html-react-parser";
import TimeAgo from "react-timeago";
import { FaPlay } from "react-icons/fa";
import AudioDuration from "./PodcastDuration";
import { PiClockDuotone } from "react-icons/pi";
import AudioPlayer from "../UI/AudioPlayer";
import SectionHead from "../UI/SectionHead";

const Podcast = () => {
  const [show, setShow] = useState<boolean>(false);
  const [audio, setAudio] = useState<any | null>(null);
  const { podcast, isError, isLoading, refetch } = useFetchPodCast();
  return (
    <>
      {podcast && (
        <AudioPlayer
          item={audio}
          show={show}
          closeShow={() => setShow(false)}
        />
      )}
      <div className="bg-[#25282B] text-white px-5 md:px-xPadding my-20 py-10">
        <div className="flex items-center gap-3">
          {/* <p className="text-white">PODCASTS</p> */}
          <SectionHead title='PODCASTS' otherStyles='text-white' />
          <div className="w-full h-[3px] rounded-2xl bg-secondaryGray" />
        </div>

        {isLoading ? (
          <Loader />
        ) : podcast?.length ? (
          <div className="sm:grid grid-cols-[3fr_1fr] mt-10 gap-5 sm:h-[80vh] text-white">
            <div className="relative my-3 sm:h-[80vh] overflow-hidden">
              <img src={podcast[0]?.thumbNail} alt="" />

              <div
                onClick={() => {
                  setShow(!show);
                  setAudio(podcast[0]);
                }}
                className="absolute -translate-x-[50%] -translate-y-[50%] top-2/4 left-2/4 p-3 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
              >
                <FaPlay className="text-defaultYellow" size={23} />
              </div>

              <div className="overlay" />

              <div className="details md:p-10 p-2 w-full flex md:flex-col gap-3  justify-between md:justify-normal">
                <p className=" text-[20px] md:text-[28px] font-[700] line-clamp-3 text-left">
                  {podcast[0]?.title}
                </p>
                <p className="text-xs hidden md:flex items-center">
                  {" "}
                  <PiClockDuotone /> &nbsp;{" "}
                  <TimeAgo date={podcast[0]?.createdAt} /> &nbsp; |{" "}
                  <AudioDuration base64Audio={podcast[0]?.media} />
                </p>
                <p className="text-sm hidden md:flex text-white/80">
                  {parser(podcast[0]?.content)}
                </p>
              </div>
              {/* <p className="md:hidden text-[8px] px-2 details  text-white">
              <TimeAgo date={podcast[0]?.createdAt} /> | 25min
            </p> */}
            </div>

            <div className="flex flex-col divide-y sm:h-[80vh] overflow-y-auto format-scrollbar">
              {podcast?.slice(1, 10).map((item: any, i: number) => {
                return (
                  <div key={i} className="grid grid-cols-[2fr_4fr_1fr] gap-3 items-center  text-white py-3">
                    <img
                      src={item?.thumbNail}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="grid">
                      <p className="text-sm uppercase font-[600]">
                        {item?.title}
                      </p>
                      <p className="text-xs text-white/60 line-clamp-2">
                        {parser(item?.content)}
                      </p>
                    </div>
                    <div className="grid">
                      <div
                        onClick={() => {
                          setShow(!show);
                          setAudio(item);
                        }}
                        className="p-3 text-white cursor-pointer z-[100] font-[700] bg-[#373A3C]/5 border border-[#373A3C] bg-opacity-80 backdrop-filter backdrop-blur-md border-opacity-20 shadow-xl  rounded-full"
                      >
                        <FaPlay className="text-defaultYellow" size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p>There are no podcast</p>
        )}
      </div>
    </>
  );
};

export default Podcast;
