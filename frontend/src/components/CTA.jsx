export default function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Hemen Başlayın
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          NosiAI ile notlarınızı akıllıca yönetmeye bugün başlayın.
          Kredi kartı gerekmez, istediğiniz zaman iptal edin.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3 rounded-xl text-base font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Ücretsiz Hesap Oluştur
          </a>
          <a href="#" className="w-full sm:w-auto text-indigo-600 px-8 py-3 rounded-xl text-base font-medium border border-indigo-200 hover:bg-indigo-50 transition">
            Demo İzle
          </a>
        </div>
      </div>
    </section>
  )
}
