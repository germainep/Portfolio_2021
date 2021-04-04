<template>
  <div
      class='SkillsBox grid grid-cols-3 gap-0.5 bg-primary-500 mx-auto rounded-lg justify-center items-center shadow-sm shadow-2xl p-2'>
    <div v-for='type in skillTypes' class='w-auto'>
      <h3 class='text-2xl text-center min-w-min p-4'>{{ type.name }}</h3>
      <ul class=' bg-primary-100 border-2 border-primary-500 border-opacity-100 px-4 py-2 rounded-lg shadow-sm h-60'>
        <li v-for='skills in type.skills' class=' mb-1'> {{ skills.skill }}</li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: 'SkillsBox',
  data: () => ( {
    skillTypes: [
      {
        name: 'FrontEnd',
        skills: [{skill: 'HTML'}, {skill: 'CSS'}, {skill: 'JavaScript'}, {skill: 'React'}, {skill: 'VueJs'}, {skill:
              'Sass/Scss'}, {skill: 'Stylus'}],
      },
      {
        name: 'BackEnd',
        skills: [{skill: 'PostgreSQL'}, {skill: 'Python'}, {skill: 'NodeJs'}, {skill: 'AWS'}, {skill: 'MongoDB'},
          {skill: 'MySQL'}, {skill: 'RESTful API Design'}],
      },
      {
        name: 'Other Skills',
        skills: [{skill: 'Responsive Web Design'}, {skill: 'Search Engine Optimization'}, {skill:
              'HTML Email Creation'}],
      },
    ],
  } ),

}
</script>
