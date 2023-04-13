import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <aside className="h-screen w-80 rounded-r-lg bg-blue-500 p-4">
            <aside className="flex w-10 flex-col items-center">
                <div className="mb-4 h-10 w-10 rounded-full bg-white"></div>
                <div className="flex w-fit flex-col items-center gap-4">
                    <Link href={""} className="w-fit">
                        <Image
                            src={"/../public/icons/home.png"}
                            height={22}
                            width={22}
                            alt={"home_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            src={"/../public/icons/analytics.png"}
                            height={22}
                            width={22}
                            alt={"analytics_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            src={"/../public/icons/cart.png"}
                            height={22}
                            width={22}
                            alt={"cart_icon"}
                            className="invert"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            src={"/../public/icons/settings.png"}
                            height={26}
                            width={26}
                            alt={"settings_icon"}
                            className="invert"
                        />
                    </Link>
                </div>
            </aside>
        </aside>
    )
}
