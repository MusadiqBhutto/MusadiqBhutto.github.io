const searchInput = document.getElementById('searchInput');
const suggestionsDiv = document.getElementById('suggestions');

// Mock data for suggestions
const suggestionsData = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

searchInput.addEventListener('input', function () 
{ 
  

  const inputValue = this.value.toLowerCase();

  // Filter suggestions based on input
  const filteredSuggestions = suggestionsData.filter(suggestion =>
    
    suggestion.toLowerCase().includes(inputValue)
  );

  // Update suggestions list
  updateSuggestions(filteredSuggestions);
});

function updateSuggestions(suggestions) {
  // Clear previous suggestions
  suggestionsDiv.innerHTML = '';

  // Display suggestions
  suggestions.forEach(suggestion => {
    const suggestionItem = document.createElement('div');
    suggestionItem.classList.add('suggestion-item');
    suggestionItem.textContent = suggestion;

    suggestionItem.addEventListener('click', function () {
      // Set the selected suggestion as the input value
      searchInput.value = suggestion;
      searchInput.style.borderBottomLeftRadius = '7px';
    searchInput.style.borderBottomRightRadius = '7px';
      // Clear suggestions
      suggestionsDiv.innerHTML = '';
      suggestionsDiv.style.border = 'none';
      
     
    });

    suggestionsDiv.appendChild(suggestionItem);
  });

  // Show or hide suggestions based on the number of filtered suggestions
  if (suggestions.length) 
  { 
    suggestionsDiv.style.border = '1px solid black';
    suggestionsDiv.style.display = 'block';
    searchInput.style.borderBottomLeftRadius = '0';
    searchInput.style.borderBottomRightRadius = '0';
  } 
  else 
  {
    suggestionsDiv.style.display = 'none';
  }
}

function search() {
  const searchTerm = searchInput.value;
  // Implement your search functionality here
  console.log('Searching for:', searchTerm);
}