import Image from "next/image"
import Link from "next/link"
import { Ref, RefObject, useRef } from "react"

export default function Home() {
    const overview = useRef<HTMLUListElement>(null)
    const store = useRef<HTMLUListElement>(null)
    const emails = useRef<HTMLUListElement>(null)
    const reports = useRef<HTMLUListElement>(null)
    const design = useRef<HTMLUListElement>(null)
    const discounts = useRef<HTMLUListElement>(null)
    const licenses = useRef<HTMLUListElement>(null)

    const menuItems = [
        "Overview",
        "Store",
        "Emails",
        "Reports",
        "Design",
        "Discounts",
        "Licenses",
    ]

    const menuItemsRefs = useRef<HTMLUListElement[]>([])

    function doOpenMenu(menuItem: HTMLUListElement) {
        return menuItem.classList.toggle("hidden")
    }

    return (
        <aside className="flex h-screen w-80 justify-between bg-[#0050F4]/90 p-4">
            <aside className="[&>img]:ease flex h-full w-10 flex-col items-center">
                {/* Account Photo */}
                <div className="mb-4 h-10 w-10 flex-none cursor-pointer rounded-full bg-white shadow-md"></div>
                {/* Sidebar Icons - Top */}
                <nav className="ease flex w-fit grow flex-col items-center gap-2">
                    <Link href={""} className="default-hover">
                        <Image
                            src={"/../public/icons/home.png"}
                            height={22}
                            width={22}
                            alt={"home_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link href={""} className="default-hover">
                        <Image
                            src={"/../public/icons/analytics.png"}
                            height={22}
                            width={22}
                            alt={"analytics_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link href={""} className="default-hover">
                        <Image
                            src={"/../public/icons/cart.png"}
                            height={22}
                            width={22}
                            alt={"cart_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link href={""} className="default-hover">
                        <Image
                            src={"/../public/icons/settings.png"}
                            height={26}
                            width={26}
                            alt={"settings_icon"}
                            className="invert"
                        />
                    </Link>
                </nav>
                {/* Sidebar Icons - Bottom */}
                <div className="default-hover mb-8 rounded-lg">
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
            <main className="overflow-y-scroll">
                <header className="flex max-w-full items-center justify-between">
                    <h2 className="text-white">sidebardesign.com</h2>
                    <div className="default-hover ml-14 cursor-pointer">
                        <Image
                            src={"/../public/icons/share.png"}
                            width={16}
                            height={16}
                            alt="share_icon"
                            className="opacity-70 invert"
                        />
                    </div>
                </header>
                <menu className="mt-6 flex flex-col gap-1 text-white">
                    {menuItems.map((element, index) => {
                        return (
                            <menu key={element}>
                                <div
                                    className="default-hover flex justify-between"
                                    onClick={(e) => {
                                        console.log(e.target)
                                        doOpenMenu(menuItemsRefs.current[index])
                                    }}
                                >
                                    <span>{element}</span>
                                    <span className="close-menu relative text-xl">
                                        —
                                    </span>
                                </div>
                                <ul
                                    ref={(element: HTMLUListElement) =>
                                        menuItemsRefs.current.push(element)
                                    }
                                    className="hidden px-2"
                                >
                                    <li className="list-disc">Item 1</li>
                                    <li className="list-disc">Item 2</li>
                                    <li className="list-disc">Item 3</li>
                                    <li className="list-disc">Item 4</li>
                                </ul>
                            </menu>
                        )
                    })}
                </menu>
            </main>
        </aside>
    )
}
