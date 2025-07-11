const principles = [
  {
    emoji: "💡",
    title: "User-Centric Focus",
    description:
      "We prioritize intuitive design and a seamless experience in everything we create.",
    color: "bg-yellow-50 text-yellow-600 border-yellow-200",
  },
  {
    emoji: "🚀",
    title: "Innovative Solutions",
    description:
      "We leverage modern technology to build tools that are powerful, efficient, and future-ready.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    emoji: "🛡️",
    title: "Quality & Trust",
    description:
      "Our commitment is to deliver reliable, secure, and high-quality software you can depend on.",
    color: "bg-green-50 text-green-600 border-green-200",
  },
]

const stats = [
  { number: "2+", label: "Products Launched" },
  { number: "100%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Support Available" },
  { number: "∞", label: "Innovation Drive" },
]

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading and Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 mb-6">
            <span className="text-sm font-medium text-slate-700">
              ✨ About VyomSoft
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Building Technology with
            <span className="text-blue-600 block sm:inline sm:ml-3">
              Purpose
            </span>
          </h2>

          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-slate-600 leading-relaxed">
            At VyomSoft, we specialize in developing cutting-edge applications
            and tools tailored to meet the unique needs of our clients. Our
            mission is to simplify lives and enhance productivity through
            innovative technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our Core Principles
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These fundamental values guide every decision we make and every
              product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Icon (Emoji) */}
                  <div
                    className={`inline-flex w-14 h-14 rounded-xl border-2 items-center justify-center text-2xl mb-6 ${principle.color} transition-all duration-300 group-hover:scale-110`}
                  >
                    {principle.emoji}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {principle.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
