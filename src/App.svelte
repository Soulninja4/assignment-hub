<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import File from "./components/File.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import DropDown from "./components/DropDown.svelte";

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
  <div class="row">
    <div class="column left">
      <p>Completed Tasks</p>
      <p> (also not functional for now)</p>
    </div>
    <div class="column right">
      <Tabs {activeItem} {items} on:tabChange={tabChange} />
      {#if activeItem === "Computer Networking"}
        <div class="column">
          <File />
        </div>
      {:else if activeItem === "Parallel Processing"}
        <div class="column items">
          <DropDown />
        </div>
      {/if}
    </div>
    
</main>

<style>
  main {
    width: 100%;
  }

  .row {
    display: flex;
  }

  .column {
    float: left;
  }
  .items {
    width: 70%;
    padding-left: 15px;
  }
  .left {
    width: 25%;
    border-right: 1px solid var(--gray-light, #eee);
    height:100vh;
  }
  .right {
    width: 75%;
  }
  p {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
  }
</style>
