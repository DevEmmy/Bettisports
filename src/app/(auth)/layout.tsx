import type { Metadata } from "next";
import ".././globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-cols-2 ">
            <div>
                {children}
            </div>
            <img src="./auth.png" alt="" className="h-[100vh] w-full object-cover"/>

        </div>
    );
}
