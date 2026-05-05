import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const VyomMutePrivacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Privacy Policy - VyomMute
          </h1>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="text-sm text-slate-500">
              Last updated: May 02, 2026
            </p>

            <p>
              This Privacy Policy describes Our policies and procedures on the 
              collection, use, and disclosure of Your information when You use the 
              VyomMute Chrome Extension (the "Service") and tells You about Your 
              privacy rights and how the law protects You.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              1. Interpretation and Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Application</strong> refers to <strong>VyomMute</strong>, the software program provided by the Company.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Vyomsoft.</li>
              <li><strong>Service</strong> refers to the VyomMute Chrome Extension.</li>
              <li><strong>You</strong> means the individual accessing or using the Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              2. Collection and Use of Your Personal Data
            </h2>
            <h3 className="text-xl font-semibold text-slate-800">
              Types of Data Collected
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local Storage Data:</strong> VyomMute creates a "Meeting Ledger" (History) 
                that includes Google Meet timestamps and YouTube video URLs. 
                <strong> This data is stored strictly on your local device</strong> using 
                the <code>chrome.storage.local</code> API and is never transmitted to our servers.
              </li>
              <li>
                <strong>Usage Data:</strong> The extension monitors active tab states for 
                <code> youtube.com</code> and <code>meet.google.com</code> to automate media controls. 
                This process happens entirely within your browser context.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              3. Google User Data Compliance & Limited Use
            </h2>
            <p>
              VyomMute's use and transfer to any other app of information received from 
              Google APIs will adhere to the <strong>Chrome Web Store User Data Policy</strong>, 
              including the <strong>Limited Use</strong> requirements.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No Sale of Data:</strong> We do not sell, trade, or rent your personal data to third parties.</li>
              <li><strong>Functional Purpose:</strong> Data is only used to provide the core functionality of pausing/resuming media and providing a local history log.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              4. Data Retention and Deletion
            </h2>
            <p>
              The Company will retain your local history only as long as the extension 
              is installed or until you manually use the <strong>"Clear History"</strong> 
              feature within the application. Since no data is stored on our servers, 
              deleting the extension or clearing the history through the UI permanently 
              removes your data.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              5. Security of Your Personal Data
            </h2>
            <p>
              The security of your data is important to us. Because VyomMute operates 
              locally, your information is protected by your own device's security 
              and the Chrome browser's sandboxing environment.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong>By email:</strong>{" "}
                <a
                  href="mailto:suryanarayan9071@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  suryanarayan9071@gmail.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="https://vyomsoft.in"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vyomsoft.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default VyomMutePrivacy