<template>
    <div class="tag border rounded-sm p-1 bg-accent-500">
      <span class='text-accent-100'>{{ tagTitle }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
      props: {
          tagTitle: ''
      }
    };
</script>
