import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { AnimatedBackground } from "../components/AnimatedBackground"

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative">
        <Navbar />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-800 mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-sm text-slate-500">
                Last updated: July 11, 2025
              </p>

              <p>
                Welcome to VyomSoft. These Terms of Service ("Terms") govern
                your use of our website vyomsoft.in and our digital products. By
                accessing our website or using our services, you agree to these
                Terms.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Acceptance of Terms
              </h2>
              <p>
                By using our website, you confirm that you accept these Terms
                and agree to comply with them. If you do not agree to these
                Terms, you must not use our website or services.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Our Services
              </h2>
              <p>
                VyomSoft develops and promotes digital tools including mobile
                applications and browser extensions. Our current products
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>MitaVyaya - Expense tracking mobile application</li>
                <li>Smart Pause - Chrome extension for productivity</li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Acceptable Use
              </h2>
              <p>You agree not to use our website to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the normal operation of our website</li>
                <li>Collect user information without permission</li>
                <li>
                  Use our services for commercial purposes without authorization
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Intellectual Property
              </h2>
              <p>
                All content on our website, including text, graphics, logos,
                images, and software, is the property of VyomSoft or our
                licensors and is protected by copyright and trademark laws. You
                may not reproduce, distribute, or create derivative works
                without our written permission.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                User Content
              </h2>
              <p>
                If you submit content to our website (such as contact form
                messages), you grant us a non-exclusive license to use, modify,
                and display that content for the purposes of providing our
                services and improving our website.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Disclaimers
              </h2>
              <p>
                Our website and services are provided "as is" without warranties
                of any kind. We do not guarantee that our website will be
                uninterrupted, secure, or error-free. We are not responsible for
                any damages resulting from your use of our website.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, VyomSoft shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of our website or services, even
                if we have been advised of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the content or practices of these external
                sites. Your use of third-party websites is at your own risk.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to our
                website at any time, without notice, for conduct that we believe
                violates these Terms or is harmful to other users or our
                business.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Changes to Terms
              </h2>
              <p>
                We may modify these Terms at any time. Changes will be effective
                immediately upon posting on our website. Your continued use of
                our website after changes constitutes acceptance of the new
                Terms.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of Karnataka, India. Any
                disputes will be resolved in the courts of Karnataka, India.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Contact Information
              </h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:suryanarayan9071@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  suryanarayan9071@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default TermsOfService
