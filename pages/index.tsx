import Image from "next/image"
import Link from "next/link"
import { Ref, RefObject, useRef } from "react"

export default function Home() {
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
    const closeButtonRefs = useRef<HTMLSpanElement[]>([])

    const doOpenMenu = (menuItem: HTMLUListElement) => {
        menuItem.classList.toggle("hidden")
        menuItem.classList.toggle("menu-item-active")
    }

    const doActivateCloseMenuTrigger = (spanItem: HTMLSpanElement) => {
        spanItem.classList.toggle("close-menu-active")
    }

    return (
        <aside className="flex h-screen w-80 justify-between bg-[#0050F4]/90 p-4">
            <aside className="[&>img]:ease flex w-10 flex-col items-center">
                {/* Account Photo */}
                <div className="mb-4 h-10 w-10 cursor-pointer rounded-full bg-white shadow-md"></div>
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
                <div className="h-10 w-10 cursor-pointer rounded-full bg-white shadow-md"></div>
                {/* Account Settings Popup */}
                <div>
                    <ul>
                        <li>
                            <span>View your profile</span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                        </li>
                        <li>
                            <span></span>
                            <span></span>
                        </li>
                    </ul>
                </div>
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
                                    onClick={() => {
                                        doOpenMenu(menuItemsRefs.current[index])
                                        doActivateCloseMenuTrigger(
                                            closeButtonRefs.current[index]
                                        )
                                    }}
                                >
                                    <span>{element}</span>
                                    <span
                                        ref={(element: HTMLSpanElement) =>
                                            closeButtonRefs.current.push(
                                                element
                                            )
                                        }
                                        className="close-menu relative text-xl text-slate-200"
                                    >
                                        —
                                    </span>
                                </div>
                                <ul
                                    ref={(element: HTMLUListElement) =>
                                        menuItemsRefs.current.push(element)
                                    }
                                    className="hidden"
                                >
                                    <li className="ease cursor-pointer rounded-lg py-2 pl-4 duration-300 hover:bg-blue-500">
                                        Item 1
                                    </li>
                                    <li className="ease cursor-pointer rounded-lg py-2 pl-4 duration-300 hover:bg-blue-500">
                                        Item 2
                                    </li>
                                    <li className="ease cursor-pointer rounded-lg py-2 pl-4 duration-300 hover:bg-blue-500">
                                        Item 3
                                    </li>
                                    <li className="ease cursor-pointer rounded-lg py-2 pl-4 duration-300 hover:bg-blue-500">
                                        Item 4
                                    </li>
                                </ul>
                            </menu>
                        )
                    })}
                </menu>
            </main>
        </aside>
    )
}
