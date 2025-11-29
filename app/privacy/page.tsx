import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Catena Dynamic Resources",
  description: "Privacy Policy for Catena Dynamic Resources",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: December 3, 2020</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-base leading-relaxed">
                Catena Ltd ("us", "we", or "our") operates the Catena Dynamic Resources website (the "Service").
              </p>
              <p className="text-base leading-relaxed">
                This page informs you of our policies regarding the collection, use and disclosure of Personal
                Information when you use our Service.
              </p>
              <p className="text-base leading-relaxed">
                We will not use or share your information with anyone except as described in this Privacy Policy. By
                using the Service, you agree to the collection and use of information in accordance with this policy.
                Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same
                meanings as in our Terms and Conditions.
              </p>
            </section>

            {/* Information Collection And Use */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Information Collection And Use</h2>
              <p className="text-base leading-relaxed">
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that can be used to contact or identify you. Personally identifiable information ("Personal
                Information") may include, but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                <li>Name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Address</li>
              </ul>
            </section>

            {/* Log Data */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Log Data</h2>
              <p className="text-base leading-relaxed">
                We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log
                Data may include information such as your computer's Internet Protocol ("IP") address, browser type,
                browser version, the pages of our Service that you visit, the time and date of your visit, the time
                spent on those pages and other statistics.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Cookies</h2>
              <p className="text-base leading-relaxed">
                Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies
                are sent to your browser from a web site and stored on your computer's hard drive.
              </p>
              <p className="text-base leading-relaxed">
                We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use
                some portions of our Service.
              </p>
            </section>

            {/* Service Providers */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Service Providers</h2>
              <p className="text-base leading-relaxed">
                We may employ third party companies and individuals to facilitate our Service, to provide the Service on
                our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
              </p>
              <p className="text-base leading-relaxed">
                These third parties have access to your Personal Information only to perform these tasks on our behalf
                and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Security</h2>
              <p className="text-base leading-relaxed">
                The security of your Personal Information is important to us, but remember that no method of
                transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute
                security.
              </p>
            </section>

            {/* Links To Other Sites */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Links To Other Sites</h2>
              <p className="text-base leading-relaxed">
                Our Service may contain links to other sites that are not operated by us. If you click on a third party
                link, you will be directed to that third party's site. We strongly advise you to review the Privacy
                Policy of every site you visit.
              </p>
              <p className="text-base leading-relaxed">
                We have no control over, and assume no responsibility for the content, privacy policies or practices of
                any third party sites or services.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Children's Privacy</h2>
              <p className="text-base leading-relaxed">
                Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect
                personally identifiable information from children under 18. If you are a parent or guardian and you are
                aware that your child has provided us with Personal Information, please contact us. If we discover that
                a child under 18 has provided us with Personal Information, we will delete such information from our
                servers immediately.
              </p>
            </section>

            {/* Compliance With Laws */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Compliance With Laws</h2>
              <p className="text-base leading-relaxed">
                We will disclose your Personal Information where required to do so by law or subpoena.
              </p>
            </section>

            {/* Changes To This Privacy Policy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Changes To This Privacy Policy</h2>
              <p className="text-base leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.
              </p>
              <p className="text-base leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
