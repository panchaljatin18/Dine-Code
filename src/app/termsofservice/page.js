export const metadata = {
  title: "Terms of Service | DINECODE",
  description: "Read the terms and conditions of use for DINECODE, Ahmedabad's luxury dining guide.",
};

export default function TermsOfService() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-8 text-center">
          Terms of Service
        </h1>
        <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12" />
        
        <div className="space-y-8 text-[var(--color-subtext)] leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">1. Acceptance of Terms</h2>
            <p>
              By accessing and using DINECODE, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">2. Accuracy of Information</h2>
            <p>
              While we strive to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date. Restaurant menus, prices, and operating hours are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">3. User Conduct</h2>
            <p className="mb-4">You agree to use our website only for lawful purposes. You must not use our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that breaches any applicable local, national or international law or regulation.</li>
              <li>In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.</li>
              <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">4. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by DINECODE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">5. Modifications to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@dinecode.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
