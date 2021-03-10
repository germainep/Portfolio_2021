<template>
    <footer class='bg-primary relative py-2'>
      <div class='flex items-center justify-around space-x-4 p-4'>

        <div class=''>
          <h3 class='flex flex-rows items-center text-center text-2xl mb-8'>You Can Usually Find Me Somewhere
                                                                            Below</h3>
            <div class=' flex items-center justify-around'>
              <g-link href="https://github.com/germainep">
                <font-awesome :icon="['fab', 'github']" color="white" size="2x" />
              </g-link>
              <g-link href="https://twitter.com/G_as_in_Genius">
                <font-awesome :icon="['fab', 'twitter']" color="white" size="2x" />
              </g-link>
              <g-link href="https://linkedin.com/in/germaine-p">
                <font-awesome :icon="['fab', 'linkedin-in']" class='fill-accent' color="white" size="2x" />
              </g-link>
          </div>
        </div>

        <div class='contact w-1/4'>
          <form class='form-control flex flex-col'>
            <div class='flex flex-col mb-4'>
            <label class='text-sm' for='name'>Name</label>
            <input type='text' name='name' class='rounded h-6'>
            </div>
            <div class='flex flex-col mb-4'>
              <label class='text-sm' for='phone'>Phone</label>
              <input type='tel' name='phone' class='rounded h-6'>
            </div>
            <div class='flex flex-col mb-4'>
              <label class='text-sm' for='email'>Email</label>
              <input type='email' class='rounded h-6'>
            </div>
            <div class='flex flex-col mb-3'>
              <label  class='text-sm' for='message'>Message</label>
              <textarea name='message' class='rounded'/>
            </div>
            <button class='self-center bg-accent-500 shadow-md shadow-lg rounded h-8 w-16'>Submit</button>
          </form>
        </div>
      </div>
      <hr/>
      <p class='text-center text-sm'>2021 &copy; Created by Germaine P. in Danville, VA</p>

    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    };
</script>
