<script>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
    export let headerText;

    let expanded = false
</script>

<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>

<div>
    <h3>
        <button aria-expanded={expanded} on:click={() => expanded = !expanded}>{headerText}
<svg viewBox="0 0 20 20" fill="none" >
<path class="vert" d="M10 1V19" stroke="white" stroke-width="2"/>
<path d="M1 10L19 10" stroke="white" stroke-width="2"/>
</svg>
        </button>
    </h3>
    
    <div class='contents' hidden={!expanded}>
        <slot></slot>
    </div>
</div>

<style>

	h3 {
		margin: 0;
	}
	
  button {
    background-color: var(--background, #010c2e);
    color: var(--gray-darkest, #282828);
    display: flex;
		justify-content: space-between;
    width: 100%;
		border: none;
    border-radius: 5px;
		margin: 0;
		padding: 1em 0.5em;
    cursor: pointer;
    margin: 10px 10px;
    font-family: Montserrat;
    color: #a1aac7;
    font-weight: bolder;
  }

  button:hover{
    background-color: #030126;
    border-radius: 5px;
    color: white;
  }


    button[aria-expanded="true"] .vert {
        display: none;
    }

    button:focus svg{
        outline: 2px solid white;
    }


    svg {
        height: 0.7em;
				width: 0.7em;
    }
</style>