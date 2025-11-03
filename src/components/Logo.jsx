import Image from "next/image";
import Link from "next/link";

/**
 * Holookor Logo component
 */
export default function Logo({ className = "" }) {
  return (
    <Link href='/' className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/Logo.png"
        alt="HOLOOKOR"
        width={150}
        height={40}
        priority
        className="w-23 h-10 sm:w-32 sm:h-10 md:w-40 md:h-11 lg:w-50 lg:h-12"
      />
      {/* <span className="text-xl font-bold">HOLOOKOR</span> */}
    </Link>
  );
}
