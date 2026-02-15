export async function searchWithPerplexity(query: string): Promise<string> {
  const apiKey = process.env.PERPLEXITY_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return 'Research tool unavailable - no API key configured';
  }

  try {
    // Use Perplexity API for real-time web research
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: 'You are a research assistant helping find specific, actionable information about locations, experiences, and activities. Provide concrete details like addresses, hours, prices, and insider tips.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.2,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No results found';
  } catch (error) {
    console.error('Perplexity search error:', error);
    return `Research unavailable: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}
