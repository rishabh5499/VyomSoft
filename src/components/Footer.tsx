import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0c1b2a] rounded">
                <img
                  src="/transparent-logo.png"
                  alt="VyomSoft Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-800">VyomSoft</span>
            </div>
            <p className="text-slate-600 text-sm max-w-sm">
              Creating innovative solutions that empower businesses and
              individuals to achieve their goals through cutting-edge
              technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} VyomSoft. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-slate-600 text-sm">
                <span>Empowering innovation through technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
