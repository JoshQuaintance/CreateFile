<script>
  import Button from './Button.svelte'
  export let name;
</script>

<main class="flex flex-column">
  <h1 class="text-2xl text-red-500">Hello {name}!</h1>
  <Button />

  <h1 class="text-red-900">Learning svelte</h1>
</main>

<style>
</style>
