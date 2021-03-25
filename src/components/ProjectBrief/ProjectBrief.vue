<template>

    <div>
      <h2>Project Brief</h2>
      <div class='w-full rounded-lg bg-accent-300 p-3'>
        <slot/>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectBrief'
    };
</script>
