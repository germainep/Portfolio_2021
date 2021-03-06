<template>
    <footer class='bg-primary relative flex flex-wrap items-center justify-between px-40 py-6'>
      <div class='social-media-container container-fluid w-1/4'>
        <h3>You Can Usually Find Me Somewhere Below!</h3>
        <div class='fa'><i></i></div>
        <div class='fa'><i></i></div>
        <div class='fa'><i></i></div>
      </div>
      <div class='contact w-1/4'>
        <form class='form-control flex flex-col'>
          <div class='flex flex-col my-2'>
          <label class='' for='name'>Name</label>
          <input type='text' name='name' class='rounded h-8'>
          </div>
          <div class='flex flex-col my-2'>
            <label for='phone'>Phone</label>
            <input type='tel' name='phone' class='rounded h-8'>
          </div>
          <div class='flex flex-col my-2'>
            <label for='email'>Email</label>
            <input type='email' class='rounded h-8'>
          </div>
          <div class='flex flex-col my-2'>
            <label  for='message'>Message</label>
            <textarea name='message' class='rounded'/>
          </div>
          <button class='self-center bg-accent rounded h-8 w-16'>Submit</button>
        </form>
      </div>

    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    };
</script>
