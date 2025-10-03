<script>
  import BOWSIcon from '../assets/BOWS_icon.png';
  import survivalIcon from '../assets/coming-soon.png';
  const isLocal = import.meta.env.DEV;

  console.log("Environment:", import.meta.env);
  const finalcall = isLocal ? "http://localhost:2028" : "https://dash-bow.playzap.games/"
  console.log("finalcall:", finalcall);
  

  let games = [
    { 
      name: "Battle of Worms", 
      url: isLocal ? "http://localhost:2028" : "https://dash-bow.playzap.games/", 
      logo: BOWSIcon,
      disabled: false
    },
    { 
      name: "Survival", 
      url: isLocal ? "/" : "/", 
      logo: survivalIcon,
      disabled: true   // 👈 disable this one
    }
  ];

  function goToGame(game) {
    if (!game.disabled) {
      window.location.href = game.url;
    }
  }
</script>

<div class="container">
  <h1 class="title">Select a Game</h1>
  <div class="grid">
    {#each games as game}
      <div 
        class="card {game.disabled ? 'disabled' : ''}" 
        on:click={() => goToGame(game)}
      >
        <img src={game.logo} alt={game.name} />
        <h2>{game.name}</h2>
        {#if game.disabled}
          <p class="coming-soon">Coming Soon</p>
        {/if}
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

  /* Disabled state */
  .card.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none; /* stops clicks */
  }
  .coming-soon {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #d9534f;
  }
</style>
