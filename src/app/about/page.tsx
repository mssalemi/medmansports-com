export const metadata = {
  title: "About - MedMansports",
  description: "Learn more about my journey as a content creator and developer.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-800/50 rounded-lg ring-1 ring-white/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-bold text-white mb-8">
              About Me
            </h1>
            
            <div className="prose prose-lg max-w-none text-neutral-200 space-y-8">
              <p className="text-xl leading-relaxed">
                Excellence isn't achieved overnight. It's forged through relentless dedication, 
                precision under pressure, and the unwavering commitment to push beyond what others 
                consider possible.
              </p>
              
              <h2 className="text-3xl text-white mt-12 mb-6 accent-gold">
                THE PURSUIT OF MASTERY
              </h2>
              <p>
                Every line of code I write carries the same intensity I bring to competition. 
                In development, there are no shortcuts to greatness—only disciplined execution, 
                strategic thinking, and the hunger to dominate every technical challenge. 
                From architecting scalable systems to optimizing performance at the millisecond level, 
                I operate where precision meets ambition.
              </p>
              
              <h2 className="text-3xl text-white mt-12 mb-6 accent-gold">
                CHAMPION MENTALITY
              </h2>
              <p>
                The court teaches what the classroom cannot: how to perform under pressure, 
                how to analyze opponents in real-time, and how to execute flawlessly when it matters most. 
                These championship principles fuel every project I touch. Whether it's delivering 
                mission-critical applications or building systems that handle millions of users, 
                I bring the mindset of someone who refuses to accept anything less than victory.
              </p>
              
              <h2 className="text-3xl text-white mt-12 mb-6 accent-gold">
                BUILDING LEGACY
              </h2>
              <p>
                I don't just build applications—I architect digital empires. Every technology stack 
                I master, every performance benchmark I shatter, every impossible deadline I conquer 
                adds to a legacy of technical excellence that speaks louder than any resume ever could. 
                This is about more than delivering code; it's about creating solutions that define industries.
              </p>
              
              <h2 className="text-3xl text-white mt-12 mb-6 accent-gold">
                THE ELITE STANDARD
              </h2>
              <p>
                Champions don't connect—they elevate. If you're ready to work with someone who brings 
                the same relentless standards to development that elite athletes bring to their sport, 
                then we speak the same language. This isn't about collaboration; it's about domination 
                through technical superiority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}