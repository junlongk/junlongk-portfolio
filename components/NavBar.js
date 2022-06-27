import Link from "next/link";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link href={`/about`}>About</Link>
      <br />
      <Link href={`/blog`}>Blog</Link>
      <br />
      <Link href={`/projects`}>Projects</Link>
      <br />
    </div>
  );
}
