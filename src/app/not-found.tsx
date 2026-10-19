import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404 / Signal lost</span>
      <h1>This route<br /><em>doesn’t exist.</em></h1>
      <Link href="/"><ArrowLeft aria-hidden="true" /> Return home</Link>
    </main>
  );
}
