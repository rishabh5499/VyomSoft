import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { AnimatedBackground } from "../components/AnimatedBackground"

const SmartPausePrivacy = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative">
        <Navbar />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-800 mb-8">
              Privacy Policy - Smart Pause
            </h1>
            <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
              <p className="text-sm text-slate-500">
                Last updated: December 02, 2024
              </p>

              <p>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>

              <p>
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Interpretation and Definitions
              </h2>

              <h3 className="text-xl font-semibold text-slate-800">
                Interpretation
              </h3>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold text-slate-800">
                Definitions
              </h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account</strong> means a unique account created for
                  You to access our Service or parts of our Service.
                </li>
                <li>
                  <strong>Application</strong> refers to SmartPause, the
                  software program provided by the Company.
                </li>
                <li>
                  <strong>Company</strong> (referred to as either "the Company",
                  "We", "Us" or "Our" in this Agreement) refers to SmartPause.
                </li>
                <li>
                  <strong>Country</strong> refers to: Karnataka, India
                </li>
                <li>
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone or a digital tablet.
                </li>
                <li>
                  <strong>Personal Data</strong> is any information that relates
                  to an identified or identifiable individual.
                </li>
                <li>
                  <strong>Service</strong> refers to the Application.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Collecting and Using Your Personal Data
              </h2>

              <h3 className="text-xl font-semibold text-slate-800">
                Types of Data Collected
              </h3>

              <h4 className="text-lg font-semibold text-slate-800">
                Usage Data
              </h4>
              <p>
                Usage Data is collected automatically when using the Service.
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>

              <h3 className="text-xl font-semibold text-slate-800">
                Use of Your Personal Data
              </h3>
              <p>
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.
                </li>
                <li>
                  To manage Your Account: to manage Your registration as a user
                  of the Service.
                </li>
                <li>
                  To contact You: To contact You by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication.
                </li>
                <li>
                  To provide You with news, special offers and general
                  information about other goods, services and events.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Security of Your Personal Data
              </h2>
              <p>
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-slate-800 mt-8">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, You can
                contact us:
              </p>
              <p>
                By email:{" "}
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

export default SmartPausePrivacy
