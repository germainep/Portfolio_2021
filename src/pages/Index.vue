<template>
  <Layout>
    <main>
      <section class='hero grid grid-cols-2 pt-8 bg-gradient-to-b from-primary-500 to-accent-500 relative lg:h-96'>
        <div class='w-1/2 mx-auto mb-8'>
          <p class='text-white text-5xl'>
            Hi, I’m Germaine, Full-Stack Software Engineer
          </p>
          <Button>Download Resume</Button>
        </div>
        <div class='w-1/2 m-auto'>
          <span class='quote absolute text-accent-200 block text-lg right-0 pr-1 w-2/5'>
            “Creativity can solve almost any problem. The creative act the defeat of
            habit by originality, overcomes everything. “ ~ George Lois
          </span>
        </div>
        <div class='custom-shape-divider-bottom-1615398229 h-10'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path
                d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
                class='shape-fill' fill='white'></path>
          </svg>
        </div>
      </section>

      <section class='mt-20 px-8'>
        <h2 class='text-4xl text-center'>
          Your business is more than <span class='text-primary-300'>just</span> a website
        </h2>

        <div class='grid grid-cols-3 gap-3 my-8 h-auto px-4'>
          <div class='grid grid-rows-2 items-center'>
            <div class='mx-auto'>
              <svg xmlns='http://www.w3.org/2000/svg' width='250' height='160' viewBox='0 0 250 160'>
                <path
                    d='M253.75,20H16.25C12.812,20,10,22.4,10,25.333V174.667C10,177.6,12.812,180,16.25,180h237.5c3.437,0,6.25-2.4,6.25-5.333V25.333C260,22.4,257.187,20,253.75,20ZM247.5,169.333H22.5V62.667h225ZM247.5,52H22.5V30.667h225ZM72.5,41.333c0,2.933-2.812,5.333-6.25,5.333H35c-3.437,0-6.25-2.4-6.25-5.333S31.563,36,35,36H66.25C69.688,36,72.5,38.4,72.5,41.333Z'
                    transform='translate(-10 -20)'/>
                <g transform='translate(125 89.648)'>
                  <g transform='translate(-38 -38)'>
                    <g transform='translate(0 0)'>
                      <rect width='76' height='76' opacity='0'/>
                      <path
                          d='M59.168,55.28,48.385,44.4A25.7,25.7,0,0,0,28.373,3,25.525,25.525,0,0,0,3,28.675,25.525,25.525,0,0,0,28.373,54.349a24.931,24.931,0,0,0,15.541-5.424L54.665,59.837a3.145,3.145,0,0,0,4.5,0,3.236,3.236,0,0,0,0-4.557ZM9.343,28.675A19.031,19.031,0,1,1,28.373,47.931,19.144,19.144,0,0,1,9.343,28.675Z'
                          transform='translate(6.489 6.203)'/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <h3 class='text-2xl text-center'>SEO</h3>
            <p class='text-center'>What good is a website if customers can’t find you.</p>
          </div>

          <div class='grid grid-rows-2 items-center'>
            <div class='mx-auto'>
              <svg class='' xmlns='http://www.w3.org/2000/svg' width='197.594' height='160'
                   viewBox='0 0 197.594 160'>
                <g
                    transform='translate(-5 -5)'>
                  <path
                      d='M185.657,5H21.937C12.6,5,5,11.152,5,18.714V126.143c0,7.563,7.6,13.714,16.937,13.714H74.871c-1.626,6.478-6.222,12.068-14.041,16.951a4.089,4.089,0,0,0-1.894,5.1,5.686,5.686,0,0,0,5.342,3.1h79.037a5.716,5.716,0,0,0,5.312-3.022,4.054,4.054,0,0,0-1.712-5.071c-8.666-5.807-13.455-11.421-14.639-17.049h53.381c9.339,0,16.937-6.152,16.937-13.714V18.714C202.593,11.152,195,5,185.657,5ZM21.937,14.143h163.72c3.112,0,5.646,2.051,5.646,4.571v89.143H16.291V18.714C16.291,16.194,18.824,14.143,21.937,14.143ZM129.69,155.857H77.951a31.29,31.29,0,0,0,8.438-16h34.43C121.56,145.319,124.526,150.667,129.69,155.857Zm55.967-25.143H21.937c-3.112,0-5.646-2.051-5.646-4.571V117H191.3v9.143C191.3,128.663,188.769,130.714,185.657,130.714Z'/>
                  <path
                      d='M79.286,110.287H70.143a4.571,4.571,0,0,0,0,9.143h9.143a4.571,4.571,0,0,0,0-9.143Zm35.083-57.538a4.57,4.57,0,0,0,6.406.866l13.853-10.549a4.571,4.571,0,0,0,0-7.272L120.775,25.244a4.571,4.571,0,0,0-5.54,7.272l9.078,6.913-9.078,6.913A4.569,4.569,0,0,0,114.368,52.749ZM65.571,39.43a4.574,4.574,0,0,0,1.8,3.636L81.225,53.615a4.571,4.571,0,1,0,5.54-7.272L77.688,39.43l9.078-6.913a4.571,4.571,0,1,0-5.54-7.272L67.373,35.794A4.574,4.574,0,0,0,65.571,39.43ZM91.732,66.613a4.559,4.559,0,0,0,5.8-2.85l15.585-45.714a4.571,4.571,0,1,0-8.652-2.951L88.882,60.811A4.571,4.571,0,0,0,91.732,66.613ZM17.571,87.43H125a4.571,4.571,0,1,0,0-9.143H17.571a4.571,4.571,0,0,0,0,9.143Zm0-20.571H61a4.571,4.571,0,1,0,0-9.143H17.571a4.571,4.571,0,1,0,0,9.143Zm0-20.571H51.857a4.571,4.571,0,1,0,0-9.143H17.571a4.571,4.571,0,1,0,0,9.143Zm0-20.571h48a4.571,4.571,0,0,0,0-9.143h-48a4.571,4.571,0,1,0,0,9.143Z'
                      transform='translate(29.082 8.999)'/>
                </g>
              </svg>
            </div>
            <h3 class='text-2xl text-center'>Web Development</h3>
            <p class='text-center'>I provide clean tested code using best practices.
                                   application.</p>
          </div>
          <div class='grid grid-rows-2 items-center'>
            <div class='mx-auto'>
              <svg xmlns='http://www.w3.org/2000/svg' width='260' height='170' viewBox='0 0 260 170'>
                <g
                    transform='translate(1.5 -2.5)'>
                  <line x2='109.375' transform='translate(53.723 167.5)' fill='none'
                        stroke='#000000' stroke-linecap='round' stroke-linejoin='round'
                        stroke-width='10'/>
                  <path
                      d='M173.378,140.833H14.892C8.6,140.833,3.5,136.3,3.5,130.7V17.633C3.5,12.037,8.6,7.5,14.892,7.5H201.957c6.292,0,11.392,4.537,11.392,10.133v43.2'
                      transform='translate(0)' fill='none' stroke='#000000' stroke-linecap='round'
                      stroke-linejoin='round' stroke-width='10'/>
                  <line x2='169.643' transform='translate(3.5 105.948)' fill='none' stroke='#000000'
                        stroke-linecap='round' stroke-linejoin='round' stroke-width='10'/>
                  <line x1='30.134' transform='translate(92.786 122.825)' fill='none' stroke='#000000'
                        stroke-linecap='round' stroke-linejoin='round' stroke-width='10'/>
                  <rect width='49.107' height='26.805' transform='translate(83.857 140.695)' fill='none'
                        stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='10'/>
                  <rect width='50.223' height='79.422' rx='0.5' transform='translate(203.277 88.078)' fill='none'
                        stroke='#000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='10'/>
                  <line x2='50.223' transform='translate(203.277 149.63)' fill='none' stroke='#000000'
                        stroke-linecap='round' stroke-linejoin='round' stroke-width='10'/>
                  <line x2='50.223' transform='translate(203.277 105.948)' fill='none' stroke='#000000'
                        stroke-linecap='round' stroke-linejoin='round' stroke-width='10'/>
                </g>
              </svg>
            </div>

            <h3 class='text-2xl text-center'>Responsive Web</h3>
            <p class='text-center'>Your site needs to be visible form anywhere and on any screen </p>
          </div>

        </div>
      </section>

      <section class='skills h-96 px-8'>
        <h2 class='text-right'>Skills</h2>
        <SkillsBox></SkillsBox>

      </section>
    </main>


  </Layout>
</template>

<script>
import Button from '~/components/Button/Button'
import SkillsBox from '~/components/SkillsBox/SkillsBox'

export default {
  metaInfo: {
    title: 'Home',
    components: {SkillsBox, Button},
  },
}
</script>

<style>

.quote {
  font-family : "Shadows into Light", serif;
}

.custom-shape-divider-bottom-1615398229 {
  position    : absolute;
  bottom      : 0;
  left        : 0;
  width       : 100%;
  overflow    : hidden;
  line-height : 0;
}

</style>
