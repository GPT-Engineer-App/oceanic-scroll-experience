import { useState, useEffect } from 'react';
import { Wave, Anchor, Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import WaveAnimation from '../components/WaveAnimation';

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 5) {
      setShowEasterEgg(true);
    }
  }, [clickCount]);

  const handleAnchorClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Wave className="h-8 w-8 text-blue-300" />
          <span className="text-2xl font-bold">Ocean Portfolio</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
            <li><a href="#portfolio" className="hover:text-blue-300 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero" className="py-20 text-center relative">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Whats up</h1>
          <p className="text-xl sm:text-2xl mb-8">Dive into my ocean of creativity</p>
          <Button variant="outline" size="lg" className="bg-blue-400 hover:bg-blue-500 text-white border-blue-300">
            Explore My Work
          </Button>
          <WaveAnimation />
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover rounded-full w-64 h-64 border-4 border-blue-300" />
            </div>
            <div>
              <p className="text-lg mb-4">
                Welcome to my digital ocean! I'm a passionate developer with a love for creating beautiful and functional web experiences. Just like the vast ocean, my skills are deep and diverse.
              </p>
              <p className="text-lg mb-4">
                With a background in [Your Background], I bring a unique perspective to every project I tackle. My goal is to create websites that not only look great but also provide seamless user experiences.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me [Your Hobbies/Interests], always seeking inspiration from the world around me.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-blue-800 text-white">
                <CardContent className="p-6">
                  <img src="/placeholder.svg" alt={`Project ${item}`} className="mx-auto object-cover w-full h-48 mb-4 rounded" />
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="mb-4">A brief description of the project and its key features.</p>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="bg-blue-700 hover:bg-blue-600 text-white">
                      View Project
                    </Button>
                    <div className="flex space-x-2">
                      <ExternalLink className="h-5 w-5" />
                      <Github className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-blue-700 hover:bg-blue-600">
                      <Mail className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email Me</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-blue-700 hover:bg-blue-600">
                      <Github className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-blue-700 hover:bg-blue-600">
                      <Linkedin className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Ocean Portfolio. All rights reserved.</p>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-300 hover:text-blue-100"
            onClick={handleAnchorClick}
          >
            <Anchor className="h-6 w-6" />
          </Button>
        </div>
      </footer>

      {showEasterEgg && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 flex items-center justify-center z-50">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">You've discovered the hidden treasure!</h3>
            <p className="text-xl mb-8">As vast as the ocean, there's always more to explore in web development.</p>
            <Button onClick={() => setShowEasterEgg(false)} className="bg-blue-500 hover:bg-blue-600">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
