import type { Metadata } from "next";
import ".././globals.css";
import Image from "next/image";
import image from "../../../public/auth.png"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="md:grid grid-cols-2 ">
            <div>
                {children}
            </div>
            <Image width={0} height={0} unoptimized src={image} alt="" className="hidden md:flex h-[100vh] w-full object-cover"/>

        </div>
    );
}
