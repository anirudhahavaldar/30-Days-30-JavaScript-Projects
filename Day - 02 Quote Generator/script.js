const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const tweetBtn = document.getElementById('tweet-btn');

const apiUrl = 'https://api.quotable.io/random';
async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  renderData(data);
}

function renderData(data) {
  quote.textContent = data.content;
  author.textContent = data.author;
}

newQuoteBtn.addEventListener('click', () => {
  getQuote(apiUrl);
});

function tweetQuote() {
  const quoteTweet = quote.textContent;
  const authorTweet = author.textContent;

  // URL encode the quote and author
  const encodedQuote = encodeURIComponent(`"${quoteTweet}" - ${authorTweet}`);

  // Create the tweet URL with pre-populated text
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedQuote}`;

  // Open a new window to the Twitter intent
  window.open(tweetURL, '_blank');
}

tweetBtn.addEventListener('click', tweetQuote);
