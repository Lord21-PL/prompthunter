# PromptHunter 🚀

Automatyczna biblioteka promptów AI z Twittera.

## Szybki start

1. **Sklonuj projekt**
   ```bash
   git clone <repo-url>
   cd prompthunter
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Skonfiguruj zmienne środowiskowe**
   ```bash
   cp .env.example .env.local
   # Wypełnij .env.local swoimi kluczami API
   ```

4. **Uruchom bazę danych**
   ```bash
   docker-compose up -d db redis
   ```

5. **Skonfiguruj bazę danych**
   ```bash
   npm run db:push
   npm run db:seed
   ```

6. **Uruchom aplikację**
   ```bash
   npm run dev
   ```

7. **Otwórz w przeglądarce**
   http://localhost:3000

## Wdrożenie na serwer

### Railway (najłatwiejsze)
1. Połącz z GitHub
2. Dodaj PostgreSQL
3. Skonfiguruj zmienne środowiskowe
4. Deploy!

### Vercel + PlanetScale
1. Deploy na Vercel
2. Dodaj bazę PlanetScale
3. Skonfiguruj zmienne

## Wymagane klucze API

- **Twitter API v2** - https://developer.twitter.com
- **OpenAI API** - https://platform.openai.com

## Funkcje

- ✅ Automatyczne śledzenie profili Twitter
- ✅ Ekstrakcja promptów AI
- ✅ Klasyfikacja i kategoryzacja
- ✅ Wykrywanie duplikatów z wersjonowaniem
- ✅ Responsywny interfejs
- ✅ Dark/Light mode
- ✅ Wyszukiwanie i filtrowanie

## Technologie

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Twitter API v2
- OpenAI API

## Licencja

MIT License
