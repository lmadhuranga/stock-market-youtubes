async function fetchScreener() {
  const resp = await fetch('https://orionterminal.com/api/screener');
  const json = await resp.json();
  console.log('called', json); // process columns: symbol, volume, price change, etc.
}
setInterval(fetchScreener, 3000);
