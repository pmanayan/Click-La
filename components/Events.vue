<template>
    <div class="flex-none w-10/12">
        <div class="bg-gray-100">
            <div class="bg-red-600">
                <div class="flex">
                    <div class="px-6 bg-red-900 py-3 hover:bg-red-900 pointer-events">
                        <p class="text-white">Upcoming Events</p>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="w-2/4 bg-white p-5">
                    <div  class="h-96 overflow-y-scroll">
                        <Event class="cursor-pointer"/>
                        <Event class="cursor-pointer"/>
                        <Event class="cursor-pointer"/>
                        <Event class="cursor-pointer"/>
                        <Event class="cursor-pointer"/>
                    </div>
                </div>
                <div class="w-2/4 p-5">
                    <div>
                        <h3>Forums</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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