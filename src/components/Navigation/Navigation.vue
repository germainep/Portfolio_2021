<template>
    <nav class="Navigation lg:flex flex-grow items-center">
      <ul class='flex flex-col lg:flex-row list-none ml-auto'>
        <li class='nav-item'>
          <g-link to='/' class='px-3 py-2 flex text-sm uppercase font-bold leading-snug'>Home</g-link>
        </li>
        <li>
          <g-link to='/projects' class='px-3 py-2 flex text-sm uppercase font-bold leading-snug'>Work</g-link>
        </li>
        <li>
          <g-link to='/blog' class='px-3 py-2 flex text-sm uppercase font-bold leading-snug'>Blog</g-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    };
</script>
