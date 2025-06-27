export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Ustawienia
      </h1>

      <div className="space-y-8">
        {/* Profile Management */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Śledzone Profile</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Zarządzaj profilami Twitter, które chcesz śledzić w poszukiwaniu promptów AI.
          </p>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Nazwa użytkownika (bez @)"
                className="input flex-1"
              />
              <button className="btn-primary">
                Dodaj Profil
              </button>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium mb-3">Aktywne profile:</h3>
              <div className="text-gray-500 dark:text-gray-400">
                Brak dodanych profili. Dodaj pierwszy profil powyżej.
              </div>
            </div>
          </div>
        </div>

        {/* API Configuration */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Konfiguracja API</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sprawdź status połączenia z zewnętrznymi API.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span>Twitter API</span>
              <span className="text-yellow-600">Nie skonfigurowane</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span>OpenAI API</span>
              <span className="text-yellow-600">Nie skonfigurowane</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <span>Baza danych</span>
              <span className="text-green-600">Połączona</span>
            </div>
          </div>
        </div>

        {/* Scan Settings */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Ustawienia Skanowania</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Skonfiguruj jak często i w jaki sposób skanować profile.
          </p>

          <div className="space-y-4">
            <div>
              <label className="label">Częstotliwość skanowania</label>
              <select className="input">
                <option>Raz dziennie (6:00)</option>
                <option>Co 12 godzin</option>
                <option>Co 6 godzin</option>
                <option>Tylko ręcznie</option>
              </select>
            </div>

            <div>
              <label className="label">Maksymalna liczba tweetów na skan</label>
              <input type="number" defaultValue="100" className="input" />
            </div>

            <button className="btn-primary">
              Zapisz Ustawienia
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}