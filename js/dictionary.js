const WORDS_API_URL = 'https://random-word-api.herokuapp.com/word'

export default async function getDictionary(count = 3) {
  const params = new URLSearchParams()

  params.set('number', count)

  const res = await fetch(`${WORDS_API_URL}?${params}`)

  return await res.json()
}
