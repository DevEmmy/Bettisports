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
            <LeftNav />
            <div className="p-20 w-4/5 bg-gray-100 min-h-[100vh] mt-20 ml-[20%]">
                {children}
            </div>

        </>
    );
}
