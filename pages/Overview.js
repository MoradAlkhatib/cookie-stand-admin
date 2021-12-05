import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/me.png";
export default function OverView() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex   bg-blue-400 w-6/12 text-center">
        <Link href="/">
          <a className="  text-5xl text-center align-middle mt-72 bg-green-300 text-gray-700">
            Return to Main Page
          </a>
        </Link>
        <Image
          src={profilePic}
          alt="cloud"
          width={500}
          automatically
          provided
          height={500}
          automatically
          provided
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </section>
  );
}
