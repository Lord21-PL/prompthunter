export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Witaj w PromptHunter! 🚀
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Twoja biblioteka promptów AI jest gotowa do uruchomienia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="card p-6">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Zobacz statystyki i najnowsze prompty
          </p>
        </div>

        <div className="card p-6">
          <div className="text-3xl mb-4">👥</div>
          <h3 className="text-lg font-semibold mb-2">Profile</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Zarządzaj śledzonymi kontami Twitter
          </p>
        </div>

        <div className="card p-6">
          <div className="text-3xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">Wyszukaj</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Znajdź idealne prompty dla swoich projektów
          </p>
        </div>
      </div>

      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-4">Pierwsze kroki</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h3 className="font-semibold">Skonfiguruj zmienne środowiskowe</h3>
              <p className="text-gray-600 dark:text-gray-300">Skopiuj .env.example do .env.local i wypełnij swoimi kluczami API</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h3 className="font-semibold">Uruchom bazę danych</h3>
              <p className="text-gray-600 dark:text-gray-300">Wykonaj: npm run db:push</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h3 className="font-semibold">Dodaj pierwszy profil</h3>
              <p className="text-gray-600 dark:text-gray-300">Przejdź do Ustawień i dodaj profil Twitter do śledzenia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}