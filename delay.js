// delay.js
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const originalUrl = params.get('originalUrl');
  if (originalUrl) {
    setTimeout(() => {
      let redirectUrl = originalUrl;
      redirectUrl += originalUrl.includes('?') ? '&mindfulDelay=true' : '?mindfulDelay=true';
      window.location.replace(redirectUrl);
    }, 60000); // 60,000 milliseconds = 1 minute
  }
});
