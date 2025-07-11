import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const SmartPausePrivacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Privacy Policy - Smart Pause
          </h1>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="text-sm text-slate-500">
              Last updated: July 11, 2025
            </p>

            <p>
              This Privacy Policy describes Our policies and procedures
              regarding the Smart Pause Chrome extension and tells You about
              Your privacy rights and how the law protects You.
            </p>

            <p>
              Smart Pause is designed with privacy in mind. This extension
              operates locally on your browser and does not collect, store, or
              transmit your personal data.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              What Smart Pause Does
            </h2>
            <p>Smart Pause is a productivity-focused Chrome extension that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detects when you join a Google Meet call</li>
              <li>Automatically pauses YouTube videos during the meeting</li>
              <li>Resumes YouTube videos when the meeting ends</li>
              <li>Helps you maintain focus during important meetings</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Data Collection and Privacy
            </h2>

            <h3 className="text-xl font-semibold text-slate-800">
              What We DO NOT Collect
            </h3>
            <p>Smart Pause does NOT collect, store, or transmit:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information</li>
              <li>Meeting content or conversations</li>
              <li>Browsing history or website data</li>
              <li>YouTube viewing history or preferences</li>
              <li>Google Meet participant information</li>
              <li>Any form of user data or analytics</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800">
              How It Works Locally
            </h3>
            <p>The extension operates entirely within your browser:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitors browser tabs for Google Meet and YouTube</li>
              <li>Uses browser APIs to control video playback</li>
              <li>All processing happens locally on your device</li>
              <li>No data leaves your browser or device</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Permissions Explained
            </h2>
            <p>Smart Pause requests minimal permissions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Active Tab:</strong> To detect Google Meet tabs
              </li>
              <li>
                <strong>YouTube Access:</strong> To pause/resume videos
              </li>
              <li>
                <strong>Google Meet Access:</strong> To detect meeting status
              </li>
            </ul>
            <p>
              These permissions are used solely for the extension's
              functionality and do not enable data collection.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Third-Party Services
            </h2>
            <p>
              Smart Pause interacts with Google Meet and YouTube through
              standard browser APIs. We do not have partnerships with these
              services or access to their data beyond what's necessary for basic
              functionality.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Chrome Web Store Compliance
            </h2>
            <p>This extension fully complies with Chrome Web Store policies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimal permissions approach</li>
              <li>No data collection or tracking</li>
              <li>Transparent functionality</li>
              <li>User-focused purpose</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Updates and Modifications
            </h2>
            <p>
              Extension updates are delivered through the Chrome Web Store. Any
              updates maintain the same privacy standards and will not introduce
              data collection without explicit notice and consent.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Your Control
            </h2>
            <p>You have complete control over the extension:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enable or disable the extension at any time</li>
              <li>Uninstall without leaving any trace</li>
              <li>No accounts or registration required</li>
              <li>No data to delete or export</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Security
            </h2>
            <p>
              Since Smart Pause doesn't collect or store data, there are no
              security risks related to data breaches or unauthorized access to
              your personal information.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Changes to this Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected in extension updates and posted on our website
              with an updated "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or the Smart
              Pause extension, please contact us:
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
  )
}

export default SmartPausePrivacy
