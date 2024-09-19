import type { Metadata } from "next";
import ".././globals.css";
import TopNav from "@/components/Dashboard/TopNav";
import LeftNav from "@/components/Dashboard/LeftNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <TopNav />
            <div className="hidden md:flex">
            <LeftNav />
            </div>
            <div className="px-5 my-3 md:p-20 w-full md:w-4/5 bg-gray-100 min-h-[100vh] pt-20 md:mt-20 md:ml-[20%]">
                {children}
            </div>

        </>
    );
}
