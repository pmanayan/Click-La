<template>
    <div class="flex-none w-10/12">
        <div class="bg-gray-100 p-12">
            <div class="flex mb-7">
                <NuxtLink to="/dashboard"  class="w-3/12 mx-9 bg-white ml-0 rounded-md p-2 h-36 block relative">
                    <h3 class="text-2xl text-red-600 font-medium">News</h3>   
                    <h4 class="absolute bottom-0 right-0 text-right text-blue-800 pr-2 pb-2"><span class="text-2xl"><span class="font-extrabold text-3xl tracking-widest">12</span> Updates</span> <br><span class="text-base">since last logged</span></h4>     
                </NuxtLink>
                <NuxtLink to="/training"  class="w-3/12 mx-9 bg-white ml-0 rounded-md p-2 h-36 block relative">
                    <h3 class="text-2xl text-red-600 font-medium">Training</h3>   
                    <h4 class="absolute bottom-0 right-0 text-right text-blue-800 pr-2 pb-2"><span class="text-2xl"><span class="font-extrabold text-3xl tracking-widest">3</span> Updates</span> <br><span class="text-base">since last logged</span></h4>     
                </NuxtLink>
                <NuxtLink to="/creative"  class="w-3/12 mx-9 bg-white ml-0 rounded-md p-2 h-36 block relative">
                    <h3 class="text-2xl text-red-600 font-medium">Creative</h3>   
                    <h4 class="absolute bottom-0 right-0 text-right text-blue-800 pr-2 pb-2"><span class="text-2xl"><span class="font-extrabold text-3xl tracking-widest">20</span> Updates</span> <br><span class="text-base">since last logged</span></h4>     
                </NuxtLink>
                <NuxtLink to="/events"  class="w-3/12 mx-9 bg-white ml-0 rounded-md p-2 h-36 block relative">
                    <h3 class="text-2xl text-red-600 font-medium">Events</h3>   
                    <h4 class="absolute bottom-0 right-0 text-right text-blue-800 pr-2 pb-2"><span class="text-2xl"><span class="font-extrabold text-3xl tracking-widest">12</span> Updates</span> <br><span class="text-base">since last logged</span></h4>     
                </NuxtLink>
            </div>
            <div class="flex">
                <div class="w-2/4 bg-white mr-5 p-5">
                    <div class="mb-4">
                        <h3 class="text-2xl text-red-600 font-medium">Forums</h3>
                    </div>
                    <div  class="h-80 overflow-y-scroll">
                        <div class="flex mb-5 border-2 border-blue-600 p-3 rounded">
                            <div class="w-1/12">
                                <img class="rounded-full" src="img/image-1.jpg" />
                            </div>
                            <div class="w-11/12 px-4 ">
                                <h4 class="text-blue-800 text-2xl font-medium">What are you working on?</h4>
                                <p class="text-xs text-blue-800">August 30,2021</p>
                                <p class="text-xs text-blue-800">Lorem ipsum dolor sit amet, consectellur adipising elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquz. Quis ipsum suspendesse gravida Risus commodo</p>
                            </div>
                        </div>
                        <div class="flex mb-5 border-2 border-blue-600 p-3 rounded">
                            <div class="w-1/12">
                                <img class="rounded-full" src="img/image-2.jfif" />
                            </div>
                            <div class="w-11/12 px-4 ">
                                <h4 class="text-blue-800 text-2xl font-medium">Process Improvement</h4>
                                <p class="text-xs text-blue-800">August 30,2021</p>
                                <p class="text-xs text-blue-800">Lorem ipsum dolor sit amet, consectellur adipising elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquz. Quis ipsum suspendesse gravida Risus commodo</p>
                            </div>
                        </div>
                        <div class="flex mb-5 border-2 border-blue-600 p-3 rounded">
                            <div class="w-1/12">
                                <img class="rounded-full" src="img/image-3.jfif" />
                            </div>
                            <div class="w-11/12 px-4 ">
                                <h4 class="text-blue-800 text-2xl font-medium">Marketing Strat Plan</h4>
                                <p class="text-xs text-blue-800">August 30,2021</p>
                                <p class="text-xs text-blue-800">Lorem ipsum dolor sit amet, consectellur adipising elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquz. Quis ipsum suspendesse gravida Risus commodo</p>
                            </div>
                        </div>
                        <div class="flex mb-5 border-2 border-blue-600 p-3 rounded">
                            <div class="w-1/12">
                                <img class="rounded-full" src="img/image-4.jfif" />
                            </div>
                            <div class="w-11/12 px-4 ">
                                <h4 class="text-blue-800 text-2xl font-medium">Team Building</h4>
                                <p class="text-xs text-blue-800">August 30,2021</p>
                                <p class="text-xs text-blue-800">Lorem ipsum dolor sit amet, consectellur adipising elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliquz. Quis ipsum suspendesse gravida Risus commodo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/4">
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