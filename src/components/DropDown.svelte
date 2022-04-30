<script>
	  import CollapsibleSection from './CollapsibleSection.svelte';
      import File from "./File.svelte";


    let ass = [
        "Lab Assignment 1",
        "Assignment 2",
        "Assignment 3"
    ]
    let link = "Lab Assignment 1.pdf"

</script>
<section>
    {#each ass as item}
        <CollapsibleSection headerText={ item }>
            <div>
                <File link = { `./PP/${item}.pdf` } />
            </div>
        </CollapsibleSection>
        
    
    
    {/each}

</section>

<style>

</style>
