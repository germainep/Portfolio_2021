<template>
  <div class='Logo'>
    <svg xmlns='http://www.w3.org/2000/svg' width='150' height='75' viewBox='0 0 292 151'>
      <defs></defs>
      <text
          class='a' transform='translate(20 102)'>
        <tspan x='0' y='0'>G</tspan>
        <tspan class='b' y='0' xml:space='preserve'>      </tspan>
      </text>
      <text class='a' transform='translate(201 102)'>
        <tspan x='0' y='0'>P.</tspan>
      </text>
      <text class='c' transform='translate(70 99)'>
        <tspan x='0' y='0'>ermaine</tspan>
      </text>
      <text class='d' transform='translate(0 120)'>
        <tspan x='0' y='0'>[</tspan>
      </text>
      <text class='d' transform='translate(250 120)'>
        <tspan x='0' y='0'>}</tspan>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>
<style>
.a, .c, .d {
  fill        : #FFF;
  font-family : KellySlab-Regular, Kelly Slab;
}

.a {
  font-size : 90px;
}

.b {
  font-size : 65px;
}

.c {
  font-size      : 37.915px;
  baseline-shift : 21.664500680076873;
}

.d {
  font-size : 125px;
}
</style>
