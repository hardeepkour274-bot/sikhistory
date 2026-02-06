export default function Purpose() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            Purpose of This Website
          </h1>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            This website is created for educational and spiritual purposes — to
            help people learn Sikh history, understand the teachings of the Gurus,
            and connect with Gurbani in a simple and respectful way.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
          {/* Points */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-white hover:border-gray-200 hover:shadow-sm transition">
              <h2 className="text-lg font-semibold text-navy">
                Educational Purpose
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To provide accurate and easy-to-read information about Sikh
                history, Gurus, important events, and inspiring sakhiyan.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-white hover:border-gray-200 hover:shadow-sm transition">
              <h2 className="text-lg font-semibold text-navy">
                Spiritual Purpose
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To encourage spiritual growth through Gurbani, Nitnem, and
                values like humility, seva, truth, and compassion.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-white hover:border-gray-200 hover:shadow-sm transition">
              <h2 className="text-lg font-semibold text-navy">
                Simple & Accessible
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To present Sikh knowledge in a clean, modern, and simple way so
                that students and sangat can learn easily.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-white hover:border-gray-200 hover:shadow-sm transition">
              <h2 className="text-lg font-semibold text-navy">
                Respect & Accuracy
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                This platform is made with respect for Sikh values. If any
                content needs correction, suggestions are always welcome.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="mt-10 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <h3 className="text-xl font-bold text-navy">A Humble Note 🙏</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              The goal of this website is to spread knowledge and inspiration,
              not to offend any belief. We request everyone to read with respect
              and share feedback to improve this platform.
            </p>
          </div>

          {/* Footer line */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            Made with respect for Sikh History • Gurmat • Gurbani
          </div>
        </div>
      </div>
    </section>
  );
}
