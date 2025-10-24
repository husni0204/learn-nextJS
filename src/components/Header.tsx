import Link from "next/link";
import Image from "next/image";

const Header =  ()=> {
    return (
        <header className="header">
            <nav>
                <div className="logo"><Link href="/"><Image src={"vercel.svg"} width={30} height={30} alt={""} /></Link></div>
                <div className="nav-links">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;