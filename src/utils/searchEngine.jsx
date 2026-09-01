import searchData from '../data/searchData'



function normalizeText(text = '') {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}



function getSearchTerms(query) {
  return normalizeText(query)
    .split(/\s+/)
    .filter(Boolean)
}



function calculateScore(item, terms) {
  const title = normalizeText(item.title)
  const category = normalizeText(item.category)
  const description = normalizeText(item.description)

  const keywords = (item.keywords || [])
    .map(normalizeText)

  let score = 0

  terms.forEach((term) => {

    
    if (title === term) {
      score += 100
    }

   
    if (title.startsWith(term)) {
      score += 70
    }

    
    if (title.includes(term)) {
      score += 50
    }

    
    keywords.forEach((keyword) => {

      if (keyword === term) {
        score += 60
      }

      if (keyword.startsWith(term)) {
        score += 40
      }

      if (keyword.includes(term)) {
        score += 25
      }
    })

    if (category.includes(term)) {
      score += 20
    }

    
    if (description.includes(term)) {
      score += 15
    }
  })

 
  const searchableText = normalizeText([
    item.title,
    item.category,
    item.description,
    ...(item.keywords || []),
  ].join(' '))

  const allTermsMatch = terms.every((term) =>
    searchableText.includes(term)
  )

  if (allTermsMatch) {
    score += 30
  }

  return score
}




export function searchContent(query, options = {}) {

  const {
    limit = 8,
    minScore = 10,
  } = options

  const terms = getSearchTerms(query)

  
  if (!terms.length) {
    return []
  }

  const results = searchData
    .map((item) => ({
      ...item,
      score: calculateScore(item, terms),
    }))
    .filter((item) => item.score >= minScore)
    .sort((a, b) => b.score - a.score)

  return results.slice(0, limit)
}



export function getSearchSuggestions(limit = 8) {

  return searchData
    .slice(0, limit)
    .map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      path: item.path,
    }))
}


export { normalizeText }