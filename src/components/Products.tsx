import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { ExternalLink, Shield, Check, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Data-driven approach: Easier to update, scale, and manage.
const productsData = [
  {
    name: "MitaVyaya",
    tagline: "Smart Expense Tracking App",
    description:
      "Effortlessly track income and expenses. Gain clarity on your spending habits with interactive charts and detailed reports.",
    logo: "/mita-vyaya.png",
    status: "coming-soon",
    features: [
      "Smart Expense Tracking",
      "Interactive Data Visualization",
      "Custom Budget Analytics",
    ],
    primaryAction: {
      text: "Get it on Google Play",
      image: "/play-store.png",
      disabled: true,
    },
    privacyLink: "/privacy/mitavyaya",
    themeColor: "indigo",
  },
  {
    name: "Smart Pause",
    tagline: "Productivity Chrome Extension",
    description:
      "Enhance your workflow by automatically pausing YouTube when you join a meeting, and resuming seamlessly afterwards.",
    logo: "/smart-pause.png",
    status: "available",
    features: [
      "Auto Video Pause/Resume",
      "Seamless Meeting Integration",
      "Boosts Productivity",
    ],
    primaryAction: {
      text: "Add to Chrome",
      image: "/chrome.png",
      disabled: false,
      link: "https://chromewebstore.google.com/detail/smartpause-auto-pause-you/djacnhcnhcpfjjnhomkdeaoipdmdhmlo",
    },
    privacyLink: "/privacy/smartpause",
    themeColor: "blue",
  },
]

export const Products = () => {
  const navigate = useNavigate()

  return (
    <section
      id="products"
      className="w-full py-2.5 mt-[-30px] sm:py-3 lg:py-4 bg-slate-50 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative solutions designed to enhance your productivity and
            simplify your digital life.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {productsData.map((product) => (
            <Card
              key={product.name}
              className="group relative flex flex-col h-full bg-white/60 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden border border-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:border-slate-300"
            >
              {/* Subtle glow effect on hover */}
              <div
                className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl 
                bg-gradient-to-r from-${product.themeColor}-400/50 to-blue-400/50 blur-lg`}
              />

              <div className="relative flex flex-col h-full p-6 sm:p-8 z-10">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.logo}
                        alt={`${product.name} Logo`}
                        className="w-16 h-16 object-contain rounded-xl shadow-md"
                      />
                      <div>
                        <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-base text-slate-600">
                          {product.tagline}
                        </CardDescription>
                      </div>
                    </div>
                    {product.status === "available" ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">
                        Available
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100"
                      >
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-0 flex-grow flex flex-col">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons - Pushed to the bottom */}
                  <div className="mt-auto space-y-3">
                    {product.primaryAction.disabled ? (
                      <div className="relative">
                        <Button
                          disabled
                          size="lg"
                          className="w-full h-12 bg-slate-200 text-slate-500 cursor-not-allowed"
                        >
                          <img
                            src={product.primaryAction.image}
                            alt={product.primaryAction.text}
                            className="h-7 opacity-50"
                          />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="lg"
                        className={`w-full h-12 bg-${product.themeColor}-600 hover:bg-${product.themeColor}-700 text-white font-semibold transition-transform duration-300 group-hover:scale-[1.02]`}
                        onClick={() =>
                          window.open(product.primaryAction.link, "_blank")
                        }
                      >
                        <img
                          src={product.primaryAction.image}
                          alt={product.primaryAction.text}
                          className="h-7"
                        />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      className="w-full h-12 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      onClick={() => navigate(product.privacyLink)}
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Privacy Policy
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
