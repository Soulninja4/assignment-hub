<script>
    import Pspdfkit from './PdfViewerComponent.svelte';
    export let link = "default";
</script>

<main>
    <div class="pdf">

      <Pspdfkit document= { link } />
    </div>

</main>
<style>
    div { 
        padding-left: 30px;
        height: 50%;
        width: 50%;

    }
    .pdf { 
      height: 50%;
      width: 50%;
    }
</style>

