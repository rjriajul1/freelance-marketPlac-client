import React from "react";

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="bg-base-100 py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          🔐 Privacy Policy
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          We value your privacy. All your personal data is handled with the
          highest security and will never be shared without your consent. Read
          how we protect your information and your rights as a user.
        </p>
        <div className="text-left mt-8 space-y-4 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-primary">
              • Data Collection:
            </span>{" "}
            We collect only essential information like name, email, and usage
            data to improve our services.
          </p>
          <p>
            <span className="font-semibold text-primary">
              • Firebase Integration:
            </span>{" "}
            We use Firebase for authentication and database services. Firebase
            securely stores user credentials and application data according to
            Google’s privacy standards.
          </p>
          <p>
            <span className="font-semibold text-primary">
              • Third-Party Sharing:
            </span>{" "}
            We do not sell or share your information with third parties.
          </p>
          <p>
            <span className="font-semibold text-primary">
              • Account Security:
            </span>{" "}
            Protect your account with a strong password. We’re not responsible
            for lost credentials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
