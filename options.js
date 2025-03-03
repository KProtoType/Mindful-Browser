document.addEventListener('DOMContentLoaded', () => {
  const patternInput = document.getElementById('patternInput');
  const addButton = document.getElementById('addButton');
  const patternList = document.getElementById('patternList');
  const saveButton = document.getElementById('saveButton');
  let patterns = [];

  // Load existing patterns
  chrome.storage.local.get('delayedSites', (data) => {
    patterns = data.delayedSites || [];
    renderPatterns();
  });

  function renderPatterns() {
    patternList.innerHTML = '';
    patterns.forEach((pattern, index) => {
      const li = document.createElement('li');
      li.textContent = pattern;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => {
        patterns.splice(index, 1);
        renderPatterns();
      };
      li.appendChild(deleteButton);
      patternList.appendChild(li);
    });
  }

  addButton.onclick = () => {
    const pattern = patternInput.value.trim();
    if (pattern) {
      patterns.push(pattern);
      patternInput.value = '';
      renderPatterns();
    }
  };

  saveButton.onclick = () => {
    chrome.storage.local.set({ delayedSites: patterns }, () => {
      alert('Patterns saved.');
    });
  };
});
