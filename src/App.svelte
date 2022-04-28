<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import File from "./components/File.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let items = [
    "Parallel Processing",
    "Computer Networking",
    "Java Programming",
    "Theory of Computation",
  ];
  let activeItem = "Parallel Processing";
  const tabChange = (e) => (activeItem = e.detail);
</script>

<Header />
<main>
  <divV class = "column">
    <p> Completed Tasks </p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </divV>

  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Computer Networking"}
    <File />
  {:else if activeItem === "Add New Poll"}
    <p>new poll form goes here</p>
  {/if}
</main>
<Footer />

<style>
  main {
    width: 100%;
    max-width: 960px;
    margin: 40px auto;
  }
  divV {
    width: 200px;
    border: 5px solid black;
  }
  .column {
    float: left;
    width: 150px;
  }
  p {
    text-align: center;
  }
</style>
