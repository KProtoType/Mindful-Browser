# Mindful Browser

A Chrome extension that promotes digital mindfulness by adding a 1-minute delay when visiting specified websites.

## How It Works

Think of Mindful Browser as a friendly speed bump for your web browsing habits. Just like a speed bump makes you slow down and be more aware while driving, this extension creates a pause before loading certain websites, giving you a moment to consider:

- Do I really need to visit this site right now?
- Is this the best use of my time?
- Am I browsing mindfully or just out of habit?

## Features

- Adds a 1-minute delay screen when navigating to specified websites
- Customizable URL patterns (e.g., `*://*.facebook.com/*`, `*://*.youtube.com/*`)
- Simple options page to add, delete, and save your delay patterns
- Default pattern is set to `*://*.chess.com/*` (can be changed)

## Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the downloaded folder
5. The extension is now installed and ready to use

## Usage

1. After installation, the extension will automatically add a 1-minute delay when visiting Chess.com (default setting)
2. To customize which websites have delays:
   - Click on the Chrome menu (three dots) → Extensions → Mindful Browser → Options
   - Add URL patterns in the format `*://*.example.com/*`
   - Click "Add" to add a pattern to the list
   - Click "Save" to apply your changes
3. When you visit a website matching your patterns, you'll see a white screen for 1 minute before the site loads

## URL Pattern Examples

- `*://*.facebook.com/*` - Delays all Facebook pages
- `*://*.youtube.com/*` - Delays all YouTube pages
- `*://*.twitter.com/*` - Delays all Twitter/X pages
- `*://*.reddit.com/*` - Delays all Reddit pages
- `*://news.ycombinator.com/*` - Delays Hacker News specifically

## Why Use Mindful Browser?

Many of us find ourselves automatically typing URLs for social media or other distracting websites throughout the day. By adding a small delay, this extension helps break the automatic habit loop and encourages more intentional browsing.

It's like adding a small waiting period before buying something - often just that little pause is enough to make us reconsider!

## Limitations

- The extension only delays initial navigation to matching websites
- If you navigate between pages on the same domain, there's no additional delay
- The extension uses the URL pattern matching from Chrome's extension API

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

[MIT License](LICENSE)
