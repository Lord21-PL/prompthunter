const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Dodawanie danych startowych...')

  // Dodaj podstawowe kategorie
  const categories = [
    { 
      name: 'Pisanie', 
      slug: 'writing', 
      description: 'Prompty do tworzenia tekstów, artykułów i treści' 
    },
    { 
      name: 'Programowanie', 
      slug: 'coding', 
      description: 'Prompty programistyczne i techniczne' 
    },
    { 
      name: 'Marketing', 
      slug: 'marketing', 
      description: 'Prompty marketingowe i sprzedażowe' 
    },
    { 
      name: 'Analiza', 
      slug: 'analysis', 
      description: 'Prompty analityczne i badawcze' 
    },
    { 
      name: 'Kreatywność', 
      slug: 'creative', 
      description: 'Prompty kreatywne i artystyczne' 
    }
  ]

  for (const categoryData of categories) {
    const category = await prisma.category.upsert({
      where: { slug: categoryData.slug },
      update: {},
      create: categoryData
    })

    // Dodaj podkategorie
    const subcategories = getSubcategoriesForCategory(categoryData.slug)

    for (const subData of subcategories) {
      await prisma.subcategory.upsert({
        where: { 
          categoryId_slug: { 
            categoryId: category.id, 
            slug: subData.slug 
          } 
        },
        update: {},
        create: {
          ...subData,
          categoryId: category.id
        }
      })
    }
  }

  console.log('✅ Dane startowe dodane pomyślnie!')
}

function getSubcategoriesForCategory(categorySlug) {
  const subcategoriesMap = {
    writing: [
      { name: 'Artykuły', slug: 'articles', description: 'Prompty do pisania artykułów' },
      { name: 'Posty na bloga', slug: 'blog-posts', description: 'Prompty do postów blogowych' },
      { name: 'Copywriting', slug: 'copywriting', description: 'Prompty sprzedażowe' },
      { name: 'Storytelling', slug: 'storytelling', description: 'Prompty narracyjne' }
    ],
    coding: [
      { name: 'Debugging', slug: 'debugging', description: 'Prompty do debugowania kodu' },
      { name: 'Code Review', slug: 'code-review', description: 'Prompty do przeglądu kodu' },
      { name: 'Dokumentacja', slug: 'documentation', description: 'Prompty do dokumentacji' },
      { name: 'Refactoring', slug: 'refactoring', description: 'Prompty do refaktoryzacji' }
    ],
    marketing: [
      { name: 'Social Media', slug: 'social-media', description: 'Prompty do mediów społecznościowych' },
      { name: 'Email Marketing', slug: 'email-marketing', description: 'Prompty do email marketingu' },
      { name: 'SEO', slug: 'seo', description: 'Prompty SEO' },
      { name: 'Reklamy', slug: 'ads', description: 'Prompty reklamowe' }
    ],
    analysis: [
      { name: 'Analiza danych', slug: 'data-analysis', description: 'Prompty analityczne' },
      { name: 'Badania', slug: 'research', description: 'Prompty badawcze' },
      { name: 'Raporty', slug: 'reports', description: 'Prompty do raportów' },
      { name: 'Insights', slug: 'insights', description: 'Prompty do wniosków' }
    ],
    creative: [
      { name: 'Brainstorming', slug: 'brainstorming', description: 'Prompty do burzy mózgów' },
      { name: 'Pomysły', slug: 'ideas', description: 'Prompty do generowania pomysłów' },
      { name: 'Kreatywne pisanie', slug: 'creative-writing', description: 'Prompty kreatywne' },
      { name: 'Innowacje', slug: 'innovation', description: 'Prompty innowacyjne' }
    ]
  }

  return subcategoriesMap[categorySlug] || []
}

main()
  .catch((e) => {
    console.error('❌ Błąd podczas dodawania danych:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })