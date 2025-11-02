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
      />
      {/* <span className="text-xl font-bold">HOLOOKOR</span> */}
    </Link>
  );
}
