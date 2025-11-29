import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Terms and Conditions | Catena Dynamic Resources",
  description: "Terms and Conditions for Catena Dynamic Resources",
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: December 3, 2020</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-base leading-relaxed">
                Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the
                https://catenaltd.com website (the "Service") operated by Catena Ltd ("us", "we", or "our").
              </p>
              <p className="text-base leading-relaxed">
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                Terms. These Terms apply to all visitors, users and others who access or use the Service.
              </p>
              <p className="text-base leading-relaxed">
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
                the terms then you may not access the Service.
              </p>
            </section>

            {/* Accounts Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Accounts</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  When you create an account with us, you must provide us information that is accurate, complete, and
                  current at all times. Failure to do so constitutes a breach of the Terms, which may result in
                  immediate termination of your account on our Service.
                </p>
                <p className="text-base leading-relaxed">
                  You are responsible for safeguarding the password that you use to access the Service and for any
                  activities or actions under your password, whether your password is with our Service or a third-party
                  service.
                </p>
                <p className="text-base leading-relaxed">
                  You agree not to disclose your password to any third party. You must notify us immediately upon
                  becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Intellectual Property Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Intellectual Property</h2>
              <p className="text-base leading-relaxed">
                The Service and its original content, features and functionality are and will remain the exclusive
                property of Catena Ltd and its licensors.
              </p>
            </section>

            {/* Links To Other Web Sites Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Links To Other Web Sites</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  Our Service may contain links to third-party web sites or services that are not owned or controlled by
                  Catena Ltd.
                </p>
                <p className="text-base leading-relaxed">
                  Catena Ltd has no control over, and assumes no responsibility for, the content, privacy policies, or
                  practices of any third party web sites or services. You further acknowledge and agree that Catena Ltd
                  shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged
                  to be caused by or in connection with use of or reliance on any such content, goods or services
                  available on or through any such web sites or services.
                </p>
                <p className="text-base leading-relaxed">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party web
                  sites or services that you visit.
                </p>
              </div>
            </section>

            {/* Termination Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Termination</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for
                  any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-base leading-relaxed">
                  All provisions of the Terms which by their nature should survive termination shall survive
                  termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
                  limitations of liability.
                </p>
                <p className="text-base leading-relaxed">
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
                  account, you may simply discontinue using the Service.
                </p>
              </div>
            </section>

            {/* Disclaimer Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Disclaimer</h2>
              <p className="text-base leading-relaxed">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>
            </section>

            {/* Governing Law Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Governing Law</h2>
              <p className="text-base leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of Nigeria without regard to its
                conflict of law provisions.
              </p>
              <p className="text-base leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
                regarding our Service, and supersede and replace any prior agreements we might have between us regarding
                the Service.
              </p>
            </section>

            {/* Changes Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Changes</h2>
              <p className="text-base leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will try to provide at least 15 days notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="text-base leading-relaxed">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </section>

            {/* Contact Us Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions about these Terms, please contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
