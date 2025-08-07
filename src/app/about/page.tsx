export const metadata = {
  title: "About - MedMansports",
  description: "Learn more about my journey as a content creator and developer.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              About Me
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Welcome to my corner of the internet! I'm a passionate developer and content creator 
                who believes in the power of technology to solve real-world problems and enhance 
                human experiences.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                My Journey
              </h2>
              <p>
                My journey began with a curiosity for how things work under the hood. This led me 
                into the world of programming, where I discovered my love for building applications 
                that make people's lives easier. From web development to mobile apps, I enjoy 
                tackling challenging problems and learning new technologies.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Beyond Code
              </h2>
              <p>
                When I'm not coding, you'll find me on the tennis court or pickleball courts. 
                Sports have taught me discipline, perseverance, and the importance of continuous 
                improvement - qualities that directly translate to my work as a developer. I regularly 
                compete in local tournaments and love sharing my athletic journey through content creation.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                What I Do
              </h2>
              <p>
                I specialize in full-stack web development, with expertise in modern frameworks 
                like React, Next.js, and Node.js. I'm also passionate about e-commerce solutions, 
                performance optimization, and creating intuitive user experiences. Through my content, 
                I share insights about development, entrepreneurship, and the intersection of technology 
                and athletics.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Let's Connect
              </h2>
              <p>
                I'm always excited to connect with fellow developers, athletes, and entrepreneurs. 
                Whether you're looking to collaborate on a project, need technical consultation, 
                or just want to chat about the latest tech trends or sports, don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}