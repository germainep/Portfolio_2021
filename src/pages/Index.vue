<template>
  <Layout>
    <div class='hero pt-24'>
      <span class='absolute text-accent-700 block text-3xl right-0 pr-1 w-2/5'>
        “Creativity can solve almost any problem. The creative act the defeat of
        habit by originality, overcomes everything. “ ~ George Lois
      </span>

    </div>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
.hero {
  background : url("../images/hero_resized.jpg") no-repeat center top;
  -webkit-background-size : cover;
  background-size         : cover;
  height :  1080px;
}

.hero > span {
  font-family : "Shadows into Light";
}

</style>
