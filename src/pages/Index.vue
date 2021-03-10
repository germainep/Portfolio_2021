<template>
  <Layout>
    <section class='hero pt-24'>
      <span class='absolute text-accent-700 block text-3xl right-0 pr-1 w-2/5'>
        “Creativity can solve almost any problem. The creative act the defeat of
        habit by originality, overcomes everything. “ ~ George Lois
      </span>

    </section>

    <section class="skills relative bg-accent-500 h-96">
      <div class="custom-shape-divider-bottom-1615398229" >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" fill='white'></path>
        </svg>
      </div>
    </section>


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
  font-family : "Shadows into Light", serif;
}
.custom-shape-divider-bottom-1615398229 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

</style>
