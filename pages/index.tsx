import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <aside className="h-screen w-80 rounded-r-lg bg-[#0050F4]/90 p-4">
            <aside className="[&>img]:ease flex h-full w-10 flex-col items-center [&>img]:cursor-pointer">
                {/* Account Photo */}
                <div className="mb-4 h-10 w-10 flex-none cursor-pointer rounded-full bg-white shadow-md"></div>
                {/* Sidebar Icons - Top */}
                <div className="ease flex w-fit grow flex-col items-center gap-2 transition [&>*]:duration-300">
                    <Link
                        href={""}
                        className="rounded-lg p-2 hover:bg-blue-500"
                    >
                        <Image
                            src={"/../public/icons/home.png"}
                            height={22}
                            width={22}
                            alt={"home_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link
                        href={""}
                        className="rounded-lg p-2 hover:bg-blue-500"
                    >
                        <Image
                            src={"/../public/icons/analytics.png"}
                            height={22}
                            width={22}
                            alt={"analytics_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link
                        href={""}
                        className="rounded-lg p-2 hover:bg-blue-500"
                    >
                        <Image
                            src={"/../public/icons/cart.png"}
                            height={22}
                            width={22}
                            alt={"cart_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link
                        href={""}
                        className="rounded-lg p-2 hover:bg-blue-500"
                    >
                        <Image
                            src={"/../public/icons/settings.png"}
                            height={26}
                            width={26}
                            alt={"settings_icon"}
                            className="invert"
                        />
                    </Link>
                </div>
                {/* Sidebar Icons - Bottom */}
                <div className="mb-10 rounded-lg p-2 duration-300 hover:bg-blue-500">
                    <Image
                        src={"/../public/icons/contacts.png"}
                        height={26}
                        width={26}
                        alt="contacts_icon"
                        className="invert"
                    />
                </div>
                {/* Account Photo */}
                <div className="h-10 w-10 flex-none cursor-pointer rounded-full bg-white shadow-md"></div>
            </aside>
            <main className="absolute left-20 top-5">
                <header className="flex max-w-full items-center justify-between [&>*]:duration-300">
                    <h2 className="text-white">sidebardesign.com</h2>
                    <div className="ml-14 cursor-pointer rounded-lg p-2 hover:bg-blue-500">
                        <Image
                            src={"/../public/icons/share.png"}
                            width={16}
                            height={16}
                            alt="share_icon"
                            className="opacity-70 invert"
                        />
                    </div>
                </header>
            </main>
        </aside>
    )
}
