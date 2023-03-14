import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div>
                <Link href="/">
                    <Image
                        className="rounded-full"
                        height={50}
                        width={50}
                        src="https://www.shutterstock.com/shutterstock/photos/755744683/display_1500/stock-vector-concept-of-blogging-golden-blog-word-bubble-message-in-pop-art-comic-style-755744683.jpg"
                        alt="logo"
                    />
                </Link>
                <h1>ASHRAF ONLINE BLOG</h1>
            </div>
            <div>
                <Link
                    href="https://www.linkedin.com/in/ashraf-a-khan"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
                >
                    Add me on LinkedIn
                </Link>
            </div>
        </header>
    );
}

export default Header;
