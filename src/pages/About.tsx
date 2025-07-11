import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Lightbulb, Target, Users, Smartphone, Chrome } from "lucide-react"
import { AnimatedBackground } from "../components/AnimatedBackground"

const About = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative">
        <Navbar />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-800 mb-8">
              About VyomSoft
            </h1>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
              <div className="text-xl leading-relaxed">
                <p>
                  VyomSoft is an innovation-driven technology company dedicated
                  to creating digital solutions that simplify life and enhance
                  productivity. We believe in the power of technology to
                  transform everyday experiences and empower individuals to
                  achieve more.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg">
                  To simplify life and enhance productivity through innovative
                  applications and tools that are intuitive, reliable, and
                  user-focused. We strive to bridge the gap between complex
                  technology and everyday needs.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-800 mt-12">
                Our Products
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-semibold text-slate-800">
                      MitaVyaya
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    A comprehensive expense tracking mobile application that
                    helps users monitor their spending habits, track income, and
                    visualize financial data through interactive charts and
                    reports.
                  </p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Coming Soon on Play Store
                  </div>
                </div>

                <div className="border border-slate-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Chrome className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-slate-800">
                      Smart Pause
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    A productivity-focused Chrome extension that automatically
                    pauses YouTube videos when you join Google Meet calls and
                    resumes them afterward, helping you maintain focus during
                    meetings.
                  </p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Available on Chrome Web Store
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-800 mt-12">
                Our Values
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Lightbulb className="w-12 h-12 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Innovation
                  </h3>
                  <p className="text-slate-600">
                    We constantly explore new technologies and approaches to
                    solve real-world problems with creative solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Target className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    Simplicity
                  </h3>
                  <p className="text-slate-600">
                    We believe in making complex technology accessible and easy
                    to use for everyone, regardless of technical expertise.
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    User Focus
                  </h3>
                  <p className="text-slate-600">
                    Our users are at the center of everything we do. We listen,
                    learn, and adapt to meet their evolving needs.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                  Join Our Journey
                </h2>
                <p className="text-slate-600 mb-6">
                  We're just getting started. As we continue to grow and develop
                  new products, we remain committed to our core mission of
                  creating technology that makes life better and more
                  productive.
                </p>
                <p className="text-slate-600">
                  Have questions or want to learn more about our work?
                  <a
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                  >
                    Get in touch with us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About
