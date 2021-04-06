<template>
  <footer class='bg-primary-500 py-2 z-10 mt-10'>
    <div class='grid grid-rows-2 gap-6 p-12 lg:p-4 items-center justify-center'>
      <div class='contact w-full mx-auto lg:w-1/2'>
        <form class='grid grid-cols-2 grid-rows-3 gap-3 w-full items-center'>
          <h1 class='col-span-2 text-center text-4xl'>Request a quote</h1>

          <div class='flex flex-col mb-4'>
            <label class='text-sm' for='name'>Name</label>
            <input type='text' id='name' name='name' class='rounded-lg h-10'>
          </div>

          <div class='flex flex-col mb-4'>
            <label class='text-sm' for='email'>Email</label>
            <input type='email' id='email' name='email' class='rounded-lg h-10'>
          </div>

          <div class='flex flex-col mb-4'>
            <label class='text-sm' for='timeline'>Timeline</label>
            <input type='text' id='timeline' name='timeline' class='rounded-lg h-10'>
          </div>

          <div class='flex flex-col mb-4'>
            <label class='text-sm' for='budget'>Budget</label>
            <input type='number' id='budget' class='rounded-lg h-10'>
          </div>

          <div class='flex flex-col col-span-2 mb-3'>
            <label class='text-sm' for='message'>Message</label>
            <textarea name='message' id='message' class='rounded-lg'/>
          </div>

          <Button class='col-span-2 text-center'>Submit</Button>
        </form>
      </div>

      <div class='grid grid-cols-1 md:grid-cols-2 gap-5 px-4'>
        <div>
          <h3 class='mb-8 text-2xl text-primary-200 text-center md:text-left'>About me</h3>
          <p>Software development is my passion. I love to build thing. Nothing brings me
             more joy than
             bringing something to life. To turn an idea into a reality there is nothing to beat that feeling of
             accomplishment.</p>
        </div>
        <div class='my-auto'>
          <h3 class='text-center text-2xl mb-8'>You Can Usually Find Me Somewhere
                                                                            Below</h3>
          <div class=' flex items-center justify-around'>
            <g-link href='https://github.com/germainep'>
              <font-awesome :icon="['fab', 'github']" color='white' size='3x'/>
            </g-link>
            <g-link href='https://twitter.com/G_as_in_Genius'>
              <font-awesome :icon="['fab', 'twitter']" color='white' size='3x'/>
            </g-link>
            <g-link href='https://linkedin.com/in/germaine-p'>
              <font-awesome :icon="['fab', 'linkedin-in']" class='fill-accent' color='white' size='3x'/>
            </g-link>
          </div>
        </div>
        </div>

      </div>
      <hr/>
      <p class='text-center text-sm'>2021 &copy; Created by Germaine P. in Danville, VA</p>

    </footer>
</template>

<script>
import Button from '~/components/Button/Button'

export default {
  name: 'Footer',
  components: {Button},
}
</script>
