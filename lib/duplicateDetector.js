const crypto = require('crypto');
const { distance } = require('fastest-levenshtein');

function generateContentHash(content) {
  return crypto
    .createHash('sha256')
    .update(content.toLowerCase().replace(/\s+/g, ' ').trim())
    .digest('hex');
}

function calculateSimilarity(str1, str2) {
  const maxLength = Math.max(str1.length, str2.length);
  const editDistance = distance(str1, str2);
  return 1 - (editDistance / maxLength);
}

async function detectDuplicate(newPrompt, existingPrompts) {
  const newHash = generateContentHash(newPrompt.content);

  // Exact hash match
  const exactMatch = existingPrompts.find(p => p.contentHash === newHash);
  if (exactMatch) {
    return { isDuplicate: true, type: 'exact', parent: exactMatch };
  }

  // Similarity check (95% threshold)
  for (const existing of existingPrompts) {
    const similarity = calculateSimilarity(
      newPrompt.content.toLowerCase(),
      existing.content.toLowerCase()
    );

    if (similarity >= 0.95) {
      return {
        isDuplicate: true,
        type: 'similar',
        parent: existing,
        similarity 
      };
    }
  }

  return { isDuplicate: false };
}

function generateNextVersion(parentVersion) {
  const [major, minor] = parentVersion.split('.').map(Number);
  return `${major}.${minor + 1}`;
}

module.exports = {
  generateContentHash,
  detectDuplicate,
  generateNextVersion
};