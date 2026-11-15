const films = [
  { title: 'The Founder', wiki: 'The_Founder' },
  { title: 'Apollo 13', wiki: 'Apollo_13_(film)' },
  { title: 'Ford v Ferrari', wiki: 'Ford_v_Ferrari' },
  { title: 'Oppenheimer', wiki: 'Oppenheimer_(film)' },
  { title: 'Moneyball', wiki: 'Moneyball_(film)' },
  { title: 'Steve Jobs', wiki: 'Steve_Jobs_(film)' },
  { title: 'The Social Network', wiki: 'The_Social_Network' },
  { title: 'Air', wiki: 'Air_(2023_film)' },
  { title: 'BlackBerry', wiki: 'BlackBerry_(film)' },
  { title: '12 Angry Men', wiki: '12_Angry_Men_(1957_film)' }
];

async function run() {
  for (const f of films) {
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${f.wiki}`, {
        headers: { 'User-Agent': 'TheBusinessCutLMS/1.0 (educational; info@thebusinesscut.org)' }
      });
      if (res.ok) {
        const data = await res.json();
        console.log(`[FOUND] ${f.title}:`, data.thumbnail?.source || 'No thumbnail');
      } else {
        console.log(`[FAIL ${res.status}] ${f.title}`);
      }
    } catch (e) {
      console.error(f.title, e.message);
    }
  }
}

run();
