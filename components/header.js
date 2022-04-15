import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-12 mt-12">
      <Link href="/events_page">
        <a className="hover:underline">← Back to Events</a>
      </Link>
    </h2>
  );
}
