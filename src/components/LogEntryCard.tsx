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
    <Link href={`/log/${logEntry.slug}`} className="group block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <div className="relative h-48 w-full">
          <Image
            src={logEntry.imageUrl}
            alt={logEntry.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">
            {formattedDate}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {logEntry.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {logEntry.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}