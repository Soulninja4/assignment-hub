<script>
	import DropDown from './components/DropDown.svelte';
  import Header from "./components/Header.svelte";
  import File from "./components/File.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CollapsibleSection from "./components/CollapsibleSection.svelte";

  // tabs
  let items = [
    "Parallel Processing",
    "Computer Networking",
    "Java Programming",
    "Theory of Computation",
  ];

  //assignment lists
  let PPass = ["Lab Assignment 1", "Lab Assignment 2", "Theory Assignment 1"];

  let CNass = ["Lab Assignment 1", "Lab Assignment 2", "Lab Assignment 3"];

  let JPass = [
    "Lab Assignment 1",
    "Lab Assignment 2",
    "Lab Assignment 3",
    "Lab Assignment 4"
  ];

  let TOCass = ["Theory Assignment 1 (Batch 2)"];

  let activeItem = "Parallel Processing";
  const tabChange = (e) => (activeItem = e.detail);
</script>

<Header />
<main>
  <div class="row">
    <div class="column left">
      <p>Completed Tasks</p>
      <p>(also not functional for now)</p>
    </div>
    <div class="column right">
      <Tabs {activeItem} {items} on:tabChange={tabChange} />
      {#if activeItem === "Parallel Processing"}
        <div class="column items">
          {#each PPass as item}
            <CollapsibleSection headerText={item}>
              <div>
                <File link={`./PP/${item}.pdf`} />
              </div>
            </CollapsibleSection>
          {/each}
        </div>
      {:else if activeItem === "Computer Networking"}
        <div class="column items">
          {#each CNass as item}
            <CollapsibleSection headerText={item}>
              <div>
                <File link={`./CN/${item}.pdf`} />
              </div>
            </CollapsibleSection>
          {/each}
        </div>
      {:else if activeItem === "Java Programming"}
        <div class="column items">
          {#each JPass as item}
            <CollapsibleSection headerText={item}>
              <div>
                <File link={`./JP/${item}.pdf`} />
              </div>
            </CollapsibleSection>
          {/each}
        </div>
      {:else if activeItem === "Theory of Computation"}
        <div class="column items">
          {#each TOCass as item}
            <CollapsibleSection headerText={item}>
              <div>
                <File link={`./TOC/${item}.pdf`} />
              </div>
            </CollapsibleSection>
          {/each}
        </div>
      {/if}
    </div>
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
    height: 100vh;
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
