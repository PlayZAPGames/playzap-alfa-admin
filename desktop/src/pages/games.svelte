<script>
  let games = [
    { name: "Battle of Worms", url: "http://localhost:2028", logo: "/logos/game1.png" },
    { name: "Game Two", url: "https://game2-admin.example.com", logo: "/logos/game2.png" },
    { name: "Game Three", url: "https://game3-admin.example.com", logo: "/logos/game3.png" }
  ];

  function goToGame(url) {
    window.location.href = url;
  }
</script>

<div class="container">
  <h1 class="title">Select a Game</h1>
  <div class="grid">
    {#each games as game}
      <div class="card" on:click={() => goToGame(game.url)}>
        <img src={game.logo} alt={game.name} />
        <h2>{game.name}</h2>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    text-align: center;
    padding: 2rem;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  .card {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.2);
  }
  .card img {
    max-width: 80px;
    margin-bottom: 1rem;
  }
  .card h2 {
    font-size: 1.2rem;
    margin: 0;
  }
</style>
