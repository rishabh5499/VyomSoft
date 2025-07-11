import { Button } from "./ui/button"
import { AnimatedBackground } from "./AnimatedBackground"

export const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-4 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-8 animate-fade-in">
            Welcome to{" "}
            <span className="font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              VyomSoft
            </span>
          </h1>

          <p className="text-xl md:text-2xl mt-6 font-medium text-slate-600 mb-12 animate-fade-in leading-relaxed">
            We create innovative solutions that empower businesses and
            individuals to achieve their goals. Explore our offerings and join
            us on a journey of growth and innovation.
          </p>

          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  )
}
