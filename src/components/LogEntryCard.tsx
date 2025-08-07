import Link from "next/link";
import Image from "next/image";
import { LogEntry } from "@/lib/types";

interface LogEntryCardProps {
  logEntry: LogEntry;
}

export default function LogEntryCard({ logEntry }: LogEntryCardProps) {
  const formattedDate = new Date(logEntry.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={`/log/${logEntry.slug}`} className="group block overflow-hidden rounded-lg bg-neutral-800/50 ring-1 ring-white/10 hover:ring-blue-600/50 transition-all duration-200">
      <div className="relative h-56 w-full">
        <Image
          src={logEntry.imageUrl}
          alt={logEntry.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 p-4">
          <div className="text-sm text-blue-400 mb-1 font-medium">
            {formattedDate}
          </div>
          <h3 className="text-xl font-bold text-white">{logEntry.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-neutral-200">{logEntry.summary}</p>
      </div>
    </Link>
  );
}