import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialIcons() {
    return (
        <div className="flex gap-2 sm:ms-auto ">
            {/* Twitter */}
            <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-white  hover:bg-primary hover:text-white transition"
            >
                <FaTwitter size={24} />
            </Link>
            {/*youtube  */}
            <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-white  hover:bg-primary hover:text-white transition"
            >
                <FaYoutube size={24} />
            </Link>
            {/* Instagram */}
            <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-white  hover:bg-primary hover:text-white transition"
            >
                <AiFillInstagram size={24} />
            </Link>
            {/* Facebook */}
            <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full text-white  hover:bg-primary hover:text-white transition"
            >
                <FaFacebook size={24} />

            </Link>
        </div>
    );
}
