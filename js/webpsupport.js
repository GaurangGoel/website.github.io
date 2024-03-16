// Function to check WebP support
function supportsWebp() {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => { resolve(img.width > 0 && img.height > 0); };
      img.onerror = () => { resolve(false); };
      img.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAAAAAAEAAEAAAAAAAAAAAAAAAAAAAAQAAJtBnAoAAA==';
    });
  }
  
  // Apply background images based on support
  function applyBackgroundImages() {
    supportsWebp().then((supported) => {
      document.querySelectorAll('[data-bg-webp]').forEach((element) => {
        const webpUrl = element.getAttribute('data-bg-webp');
        const fallbackUrl = element.getAttribute('data-bg-fallback');
        
        const backgroundImageUrl = supported ? webpUrl : fallbackUrl;
        element.style.backgroundImage = `url("${backgroundImageUrl}")`;
      });
    });
  }
  
  // Call the function on window load
  window.onload = applyBackgroundImages;  