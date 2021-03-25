<template>
    <div
        class="tag text-xs border rounded-2xl p-2 bg-accent-500 text-center m-4 content-center">
      <span class='text-accent-100'>{{ tag }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Tag',
      props: {
          tag: String

      }
    };
</script>
