export const metadata = {
  title: "Privacy Policy | DINECODE",
  description: "Read the privacy policy and data handling practices for DINECODE, Ahmedabad's luxury dining guide.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[var(--color-background)] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-8 text-center">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-12" />
        
        <div className="space-y-8 text-[var(--color-subtext)] leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">1. Introduction</h2>
            <p>
              Welcome to DINECODE. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">2. Data We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 font-playfair">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@dinecode.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
