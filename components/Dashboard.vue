<template>
    <div class="flex-none w-10/12">
        <div class="bg-gray-100 p-12">
            <div class="flex mb-7">
                <DashboardTraining v-for="data in dtDB" :key="data.id" :dataFromDB="data.training" :numberUpdates="data.numberUpdates" :dataLink="data.dataLink"/>
            </div>
            <div class="flex">
                <div class="w-2/4 bg-white mr-5">
                    <div class="mb-4 bg-red-800">
                        <h3 class="text-2xl font-medium p-5 text-white">Forums</h3>
                    </div>
                    <div  class="h-80 overflow-y-scroll">
                        <div class="px-5 py-1">
                            <Forum class="cursor-pointer"/>
                            <Forum class="cursor-pointer"/>
                            <Forum class="cursor-pointer"/>
                            <Forum class="cursor-pointer"/>
                            <Forum class="cursor-pointer"/>
                            <Forum class="cursor-pointer"/>
                            <Forum class="cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div class="w-2/4">
                    <div>
                        <h3>Calendar</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dtDB:[
                {
                    training: "News",
                    numberUpdates: 300,
                    dataLink: 'news',
                },
                {
                    training: "Trainings",
                    numberUpdates: 30,
                    dataLink: 'training',
                },
                {
                    training: "Creatives",
                    numberUpdates: 3,
                    dataLink: 'creatives',
                },
                {
                    training: "Events",
                    numberUpdates: 3,
                    dataLink: 'events',
                },
            ]
        }
    }
}
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #991b1b;
  border-radius: 5px;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>