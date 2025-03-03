// Converts a Chrome match pattern (e.g., *://*.chess.com/*) to a regular expression
function matchPatternToRegExp(pattern) {
  if (pattern === '<all_urls>') {
    return /^(?:http|https|ftp|file):\/\//;
  }

  const match = /^(\*|https?|file|ftp):\/\/(\*|(?:\*\.)?[^/*]+)(\/.*)$/.exec(pattern);
  if (!match) return null;

  const [, scheme, host, path] = match;
  let regex = '^';

  // Scheme
  regex += scheme === '*' ? '(?:https?|ftp)' : scheme;
  regex += '://';

  // Host
  if (host === '*') {
    regex += '[^/]+';
  } else if (host.startsWith('*.')) {
    const domain = host.slice(2);
    regex += '(?:[\\w-]+\.)*' + domain.replace('.', '\\.');
  } else {
    regex += host.replace('.', '\\.');
  }

  // Path
  regex += path.replace(/\*/g, '.*');
  regex += '$';

  return new RegExp(regex);
}

// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return; // Only process main frame

  const url = details.url;
  // Skip if the URL has already been delayed
  if (url.includes('?mindfulDelay=true') || url.includes('&mindfulDelay=true')) {
    return;
  }

  chrome.storage.local.get('delayedSites', (data) => {
    const delayedSites = data.delayedSites || [];
    for (const pattern of delayedSites) {
      const regex = matchPatternToRegExp(pattern);
      if (regex && regex.test(url)) {
        const delayUrl = chrome.runtime.getURL('delay.html') + '?originalUrl=' + encodeURIComponent(url);
        chrome.tabs.update(details.tabId, { url: delayUrl });
        break;
      }
    }
  });
});

// Set default pattern on first install
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.local.set({ delayedSites: ['*://*.chess.com/*'] });
  }
});
