import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"

const VyomJSONPrivacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Privacy Policy - VyomJSON
          </h1>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p className="text-sm text-slate-500">
              Last updated: May 05, 2026
            </p>

            <p>
              This Privacy Policy describes Our policies and procedures on the 
              collection, use, and disclosure of Your information when You use the 
              VyomJSON web utility (the "Service") and tells You about Your 
              privacy rights and how the law protects You.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              1. Interpretation and Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Application</strong> refers to <strong>VyomJSON</strong>, the web-based JSON utility provided by the Company.</li>
              <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to Vyomsoft.</li>
              <li><strong>Service</strong> refers to the VyomJSON formatter and validator accessible at vyomsoft.in/jsonViewer.</li>
              <li><strong>You</strong> means the individual accessing or using the Service.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              2. Collection and Use of Your Data
            </h2>
            <h3 className="text-xl font-semibold text-slate-800">
              Browser-Side Processing
            </h3>
            <p>
              By default, VyomJSON is a <strong>client-side tool</strong>. When you paste JSON data into 
              the editor for formatting or validation, that data stays within your browser's memory. 
              We do not automatically upload your JSON content to our servers for processing.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">
              Types of Data Handled
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Editor Content:</strong> Any code or JSON text you enter is processed locally 
                to provide syntax highlighting and formatting.
              </li>
              <li>
                <strong>Shareable Links:</strong> If You explicitly choose to use the <strong>"Share"</strong> 
                feature, your JSON data is encrypted and stored in our secure database to generate a unique URL.
              </li>
              <li>
                <strong>Local Settings:</strong> We may use <code>localStorage</code> to remember your 
                editor preferences (e.g., theme, indentation size) across sessions.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              3. Data Security & "Sharing" Integrity
            </h2>
            <p>
              We understand that developers often handle sensitive configuration data. 
              If you use the cloud-sharing feature:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No Public Indexing:</strong> Shared JSON links are not indexed by search engines.</li>
              <li><strong>Encryption:</strong> Data stored for sharing is handled with industry-standard security protocols.</li>
              <li><strong>User Responsibility:</strong> We highly recommend <strong>never sharing</strong> JSON containing secrets (API keys, passwords, or PII) through the sharing feature.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              4. Third-Party Services
            </h2>
            <p>
              We do not use trackers or third-party analytics that profile your identity. 
              We may use standard web hosting logs which collect basic technical information 
              (like IP addresses) for security and performance monitoring purposes only.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mt-8">
              5. Contact Us
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

export default VyomJSONPrivacy