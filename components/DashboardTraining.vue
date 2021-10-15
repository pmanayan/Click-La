<template>
    <NuxtLink :to="'/'+dataLink"  class="w-3/12 mx-9 bg-white ml-0 rounded-md h-36 block relative overflow-hidden">
        <h3 class="text-2xl text-white font-bold bg-red-800 p-2">{{dataFromDB}}</h3>   
        <h4 class="absolute bottom-0 right-0 text-right pr-2 pb-2 "><span class="text-2xl font-bold"><span class="font-extrabold text-3xl tracking-widest">{{numberUpdates}}</span> Updates</span> <br><span class="text-base">since last logged</span></h4>     
    </NuxtLink>
</template>

<script>
export default {
    props: ['dataFromDB','numberUpdates', 'dataLink'],
}
</script>