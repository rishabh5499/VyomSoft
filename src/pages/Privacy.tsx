import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="text-sm text-slate-500">
              Last updated: July 11, 2025
            </p>

            <p>
              VyomSoft ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website vyomsoft.in and use our services.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-slate-800">
              Personal Information
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request support or information about our products</li>
            </ul>
            <p>This information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800">Usage Data</h3>
            <p>
              We automatically collect certain information when you visit our
              website, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Device information</li>
              <li>Referral source</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800">
              Analytics Data
            </h3>
            <p>
              We use Google Analytics to understand how visitors interact with
              our website. Google Analytics collects information anonymously and
              reports website trends without identifying individual visitors.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              How We Use Your Information
            </h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Analyze website usage and performance</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Information Sharing
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>
                With trusted service providers who assist in operating our
                website
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your experience and analyze
              site usage. You can control cookie preferences through your
              browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              International Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your data.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
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
  )
}

export default Privacy
