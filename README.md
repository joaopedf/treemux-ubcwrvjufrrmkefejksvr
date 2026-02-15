# LifeOS - Your AI Chief of Staff for Adventure

Break routines. Live adventurously. Let AI plan your next spontaneous experience.

## What is LifeOS?

LifeOS is an AI-powered adventure planning assistant that helps you escape the mundane and discover extraordinary experiences. Whether you're looking for secret rooftop spots, spontaneous weekend getaways, or trying something completely new, LifeOS turns curiosity into action.

## Features

- **AI-Powered Planning**: Multi-turn conversations with Claude AI that understand your preferences and constraints
- **Actionable Recommendations**: Get specific locations, times, and insider tips - not just generic suggestions
- **Beautiful UI**: Stunning gradient design with smooth streaming responses
- **Adventure Categories**: From urban exploration to spontaneous trips to trying new activities

## Tech Stack

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **AI**: Claude 3.7 Sonnet via Anthropic AI SDK
- **Deployment**: Vercel

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Add your API keys to `.env`:
   - `ANTHROPIC_API_KEY` - Get from https://console.anthropic.com

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
bun run build
bun start
```

## How It Works

1. Tell LifeOS what kind of adventure you're looking for
2. The AI asks clarifying questions to understand your preferences
3. Get specific, actionable plans with locations, timing, and pro tips
4. Make it happen!

## Example Adventures

- "Find a secret rooftop spot in my city"
- "Plan a spontaneous weekend getaway"
- "Discover underground events happening tonight"
- "Help me try something I've never done before"

## License

MIT
