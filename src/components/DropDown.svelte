<script>
	  import CollapsibleSection from './CollapsibleSection.svelte';
      import File from "./File.svelte";


    let ass = [
        "Assignment 1",
        "Assignment 2",
        "Assignment 3"
    ]
    let link = './PP/Document.pdf'

</script>
<section>
    {#each ass as item}
        <CollapsibleSection headerText={ item }>
            <div>
                <File link = { './PP/' + 'Document.pdf' } />
            </div>
        </CollapsibleSection>
        
    
    
    {/each}

</section>

<style>

</style>
