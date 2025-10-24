import Link from "next/link";

export default function Header() {
    const styledLinks=`p-1 m-2 text-xl hover:underline`;
    return (
        <header>
            <h1>A Post Website</h1>
            <p>A wesbite showing posts from a  website</p>
            <nav>
                <ul>
                    <li>
                        <Link href={`/`} className={styledLinks}>Home</Link>
                    </li>
                    <li><Link href={`/about`} className={styledLinks}>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}