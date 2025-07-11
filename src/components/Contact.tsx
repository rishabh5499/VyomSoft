import { Mail, Phone } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            Contact Me
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a
                    href="mailto:suryanarayan9071@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    suryanarayan9071@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <a
                    href="tel:+919513192506"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    +91 95131 92506
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
