<script lang="ts">
  import ProtectedRoute from "../components/ProtectedRoute.svelte";
  import games from "../pages/games.svelte";
</script>

<ProtectedRoute component={games} requiredRole={["admin", "super_admin"]} />
