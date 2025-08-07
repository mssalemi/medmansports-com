export const metadata = {
  title: "Collaborate - MedMansports",
  description: "Let's work together on your next project or initiative.",
};

export default function CollaboratePage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Collaborate
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to work on interesting projects and connect with 
            like-minded individuals. Here's how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Development Services
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Full-stack web application development</li>
              <li>• E-commerce platform optimization</li>
              <li>• Performance auditing and improvements</li>
              <li>• Custom tool and automation development</li>
              <li>• Technical consulting and code reviews</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Content Creation
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Technical blog posts and tutorials</li>
              <li>• Video content about development</li>
              <li>• Sports and fitness content creation</li>
              <li>• Product reviews and demonstrations</li>
              <li>• Speaking at events and conferences</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Ready to Start a Project?
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-600 text-center">
              I'd love to hear about your project and explore how we can work together. 
              Whether you need technical expertise, content creation, or both, let's discuss 
              your goals and create something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:hello@medmansports.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Send Me an Email
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What to Include in Your Message:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Brief description of your project or needs</li>
              <li>• Timeline and budget considerations</li>
              <li>• Any specific technical requirements</li>
              <li>• Your goals and success metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}