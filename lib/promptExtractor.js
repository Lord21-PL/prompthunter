const PROMPT_PATTERNS = [
  /(?:prompt|zapytanie|polecenie):\s*["']([^"']+)["']/gi,
  /(?:ask|tell|write|create|generate):\s*["']([^"']+)["']/gi,
  /["']([^"']{20,500})["']\s*(?:→|->|gives?|results?)/gi,
  /```\s*([^`]{20,500})\s*```/g
];

const LLM_EXTRACTION_PROMPT = `
Analyze this tweet and extract any AI prompts. Return JSON:
{
  "prompts": [
    {
      "content": "extracted prompt text",
      "description": "optional context or description"
    }
  ]
}
If no prompts found, return {"prompts": []}.
`;

async function extractPrompts(tweetContent) {
  const prompts = [];

  // Rule-based extraction
  for (const pattern of PROMPT_PATTERNS) {
    const matches = [...tweetContent.matchAll(pattern)];
    matches.forEach(match => {
      if (match[1] && match[1].length > 10) {
        prompts.push({
          content: match[1].trim(),
          description: null,
          confidence: 0.8
        });
      }
    });
  }

  // LLM fallback if no patterns matched
  if (prompts.length === 0) {
    try {
      // This would call OpenAI API
      // const llmResult = await callOpenAI(LLM_EXTRACTION_PROMPT, tweetContent);
      // const parsed = JSON.parse(llmResult);
      // prompts.push(...parsed.prompts.map(p => ({
      //   ...p,
      //   confidence: 0.6
      // })));
    } catch (error) {
      console.error('LLM extraction failed:', error);
    }
  }

  return prompts.filter(p => p.confidence > 0.5);
}

module.exports = { extractPrompts };