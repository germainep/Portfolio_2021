<template>
  <div
      class='SkillsBox grid grid-cols-3 bg-primary-500 w-2/3 mx-auto mt-8 rounded-lg justify-center items-center shadow-sm shadow-2xl p-2'>
    <div v-for='type in skillTypes'>
      <h3 class='text-2xl text-center p-4'>{{ type.name }}</h3>
      <ul class=' bg-primary-100 border-2 border-primary-500 border-opacity-100 p-4 rounded-lg shadow-sm'>
        <li v-for='skills in type.skills'> {{ skills.skill }}</li>
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
        skills: [{skill: 'test1'}, {skill: 'test2'}, {skill: 'test3'}, {skill: 'test4'}],
      },
      {
        name: 'BackEnd',
        skills: [{skill: 'test1'}, {skill: 'test2'}, {skill: 'test3'}, {skill: 'test4'}],
      },
      {
        name: 'Other Skills',
        skills: [{skill: 'test1'}, {skill: 'test2'}, {skill: 'test3'}, {skill: 'test4'}],
      },
    ],
  } ),

}
</script>
