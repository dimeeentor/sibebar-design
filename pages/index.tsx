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
    const accountPopupRef = useRef<HTMLDivElement>(null)
    const navigationMenuRef = useRef<HTMLDivElement>(null)
    const sidebarRef = useRef<HTMLDListElement>(null)

    const doOpenMenu = (menuItem: HTMLUListElement) => {
        menuItem.classList.toggle("hidden")
        menuItem.classList.toggle("menu-item-active")
    }

    const doActivateCloseMenuTrigger = (spanItem: HTMLSpanElement) => {
        spanItem.classList.toggle("close-menu-active")
    }

    const doOpenAccountPopup = () => {
        accountPopupRef.current?.classList.toggle("hidden")
        accountPopupRef.current?.classList.toggle("account-popup-active")
    }

    const doMinimizeSidebar = () => {
        navigationMenuRef.current?.classList.toggle("hidden")
        sidebarRef.current?.classList.toggle("w-80")
        sidebarRef.current?.classList.toggle("w-[4.5rem]")
    }

    return (
        <aside
            ref={sidebarRef}
            className="ease flex h-screen w-80 select-none justify-between bg-[#0050F4]/90 p-4 backdrop-blur-lg duration-300"
        >
            <aside
                onDoubleClick={doMinimizeSidebar}
                className="[&>img]:ease flex w-10 flex-col items-center"
            >
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
                <div
                    onClick={doOpenAccountPopup}
                    className="h-10 w-10 cursor-pointer rounded-full bg-white shadow-md"
                ></div>
                {/* Account Settings Popup */}
                <div
                    ref={accountPopupRef}
                    className="absolute bottom-16 left-16 z-10 hidden rounded-lg border border-slate-300 bg-[#0050F4]/90 p-3 text-sm text-white backdrop-blur-md"
                >
                    <ul className="flex flex-col gap-2 pb-2">
                        <Link href={""} className="default-hover">
                            <li>View your profile</li>
                        </Link>
                        <Link href={""} className="default-hover">
                            <li>Account settings</li>
                        </Link>
                        <Link href={""} className="default-hover">
                            <li>Keyboard shortcuts</li>
                        </Link>
                        <Link href={""} className="default-hover">
                            <li>What's new?</li>
                        </Link>
                    </ul>
                    <div className="flex border-t-[1px] border-slate-300 pt-2">
                        <div className="h-10 w-10 cursor-pointer rounded-full bg-white shadow-md"></div>
                        <div className="ml-4 flex flex-col text-sm">
                            <p>Dmytro Honcharenko</p>
                            <p className="text-slate-300">
                                honcharenko@duck.com
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
            <main ref={navigationMenuRef} className="overflow-y-scroll">
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
