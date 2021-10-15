<template>
    <div class="flex-none w-10/12">
        <div class="bg-gray-100 rounded-md overflow-hidden">
            <div class="bg-red-600">
                <div class="flex">
                    <NuxtLink to="/dashboard" class="px-6 py-3 hover:bg-red-900">
                        <p class="text-white">Home</p>
                    </NuxtLink>
                    <NuxtLink to="/news" class="px-6 py-3 bg-red-900 hover:bg-red-900 flex items-center content-center ml-0.5">
                        <p class="text-white">Forums</p>
                        <img src="img/down-arrow-solid.svg" class="w-3 filter invert mt-1 ml-1">
                    </NuxtLink>
                    <NuxtLink to="/dashboard" class="px-6 py-3 hover:bg-red-900 ml-1">
                        <p class="text-white">What's New</p>
                    </NuxtLink>
                </div>
            </div>
            <div class="p-6 flex">
                <div class="w-8/12">
                    <div>
                        <NuxtLink to="/dashboard">Home ></NuxtLink>
                    </div>
                    <div class="mt-5">
                        <h3 class="text-2xl font-medium">Sales and Marketing Forum</h3>
                    </div>
                    <div>
                        <div class="mt-5 pr-5">
                            <div>
                                <div class="no-flex bg-red-800 px-3 py-2">
                                    <div>
                                        <h4 class="text-xl font-medium text-white">Sales and Marketing</h4>
                                    </div>
                                </div>
                                <div class="h-64 overflow-scroll">
                                    <div class="flex px-3 py-2 items-center bg-gray-300">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Sales Increase</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">500</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">728</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-1.jpg" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-200">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Leads</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">625</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">498</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-2.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-300">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Competitor Analysis</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">1k+</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">1</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-2.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-200">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Sales Increase</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">500</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">728</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-4.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5 pr-5">
                            <div>
                                <div class="no-flex bg-red-800 px-3 py-2">
                                    <div>
                                        <h4 class="text-xl font-medium text-white">Sales Forecast</h4>
                                    </div>
                                </div>
                                <div  class="h-64 overflow-scroll">
                                    <div class="flex px-3 py-2 items-center bg-gray-300">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Sales Increase</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">500</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">728</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-1.jpg" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-200">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Leads</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">625</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">498</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-2.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-300">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Competitor Analysis</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">1k+</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">1</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-2.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-200">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Sales Increase</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">500</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">728</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-4.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="mt-5 pr-5">
                            <div>
                                <div class="no-flex bg-red-800 px-3 py-2">
                                    <div>
                                        <h4 class="text-xl font-medium text-white">Sales Techniques</h4>
                                    </div>
                                </div>
                                <div  class="h-64 overflow-scroll">
                                    <div class="flex px-3 py-2 items-center bg-gray-300">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Sales Increase</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">500</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">728</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-1.jpg" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-200">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Leads</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">625</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">498</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-2.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-300">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Competitor Analysis</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">1k+</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">1</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-2.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex px-3 py-2 items-center bg-gray-200">
                                        <div class="w-5/12 align-middle">
                                            <div class="p-1 flex">
                                                <img src="img/conversation.png" class="w-7 object-contain pr-2">
                                                <p class="text-md text-lg">Sales Increase</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs text-xs">Threads</p>
                                                <p class="text-md">500</p>
                                            </div>
                                        </div>
                                        <div class="w-2/12">
                                            <div class="p-1">
                                                <p class="text-md text-xs">Messages</p>
                                                <p class="text-md">728</p>
                                            </div>
                                        </div>
                                        <div class="w-3/12 flex">
                                            <div class="flex items-center contain-center">
                                                <img src="img/image-4.jfif" class="w-40 rounded-full">
                                            </div>
                                            <div class="p-1">
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.  </p>
                                                <p class="text-md overflow-ellipsis line-clamp-2 text-xs">July 30, 2021 - USER Active: 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-4/12 mt-14">
                    <div class="bg-white mt-10 px-5 py-3 border">
                        <div>
                            <h4 class="text-xl text-blue-800">Forum Statistics</h4>
                        </div>
                        <div class="mt-1">
                            <p class="flex text-lg">Threads: <span class="m-auto mr-0">11,549</span></p>
                        </div>
                        <div class="mt-1">
                            <p class="flex text-lg">Messages: <span class="m-auto mr-0">18,558</span></p>
                        </div>
                        <div class="mt-1">
                            <p class="flex text-lg">Members: <span class="m-auto mr-0">575</span></p>
                        </div>
                        <div class="mt-1">
                            <p class="flex text-lg">Latest Member: <span class="m-auto mr-0">John Smith</span></p>
                        </div>
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