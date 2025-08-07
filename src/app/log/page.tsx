import { getLogEntries } from "@/lib/data";
import LogEntryCard from "@/components/LogEntryCard";

export const metadata = {
  title: "Log - MedMansports",
  description: "Follow my athletic journey and personal updates.",
};

export default async function LogPage() {
  const logEntries = await getLogEntries();

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            My Log
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Updates from my athletic journey, training insights, competition experiences, 
            and personal reflections on the intersection of sports and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logEntries.map((entry) => (
            <LogEntryCard key={entry.slug} logEntry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}