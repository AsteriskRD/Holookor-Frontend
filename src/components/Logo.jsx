import Image from "next/image";
import Link from "next/link";

/**
 * Holookor Logo component
 */
export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/Logo.png"
        alt="HOLOOKOR"
        width={100}
        height={20}
        priority
        className="w-20 h-6 sm:w-28 sm:h-7 md:w-36 md:h-11 lg:w-48 lg:h-12"
      />
      {/* <span className="text-xl font-bold">HOLOOKOR</span> */}
    </Link>
  );
}
