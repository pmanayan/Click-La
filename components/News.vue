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
                        <h3 class="text-2xl font-medium">Sales and Marketing Forum {{threadsCounter}}</h3>
                    </div>
                    <NewsCategory class="mt-3" v-for="news in newsLists" :key="news.id" :category="news.category" :categoryData="news.categoryData"/>
                </div>
                <ForumStatistics v-for="data in forumStatistics" :key="data.id" :lastestMember="data.lastestMember" :totalThreads="data.totalThreads" :totalMessages="data.totalMessages" :totalMembers="data.totalMembers"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
            newsLists: [
                {
                    category: 'Sales and Marketing',
                    categoryData: [
                        {
                            topic: 'Sales Forecast',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'image-1.jpg',
                        },
                        {
                            topic: 'Sales Forecast',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'image-1.jpg',
                        },
                        {
                            topic: 'Sales Forecast',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'image-1.jpg',
                        },
                        {
                            topic: 'Sales Forecast',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'image-1.jpg',
                        },
                    ]
                },
                {
                    category: 'Sales Forecast',
                    categoryData: [
                        {
                            topic: 'Sales Marketing',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'video-thumbnail-1.png',
                        },
                        {
                            topic: 'Sales Marketing',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'video-thumbnail-1.png',
                        },
                        {
                            topic: 'Sales Marketing',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'video-thumbnail-1.png',
                        },
                        {
                            topic: 'Sales Marketing',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'video-thumbnail-1.png',
                        },
                        {
                            topic: 'Sales Marketing',
                            numberThreads: '500',
                            numberMessages: '612',
                            shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum interdum leo vel facilisis. Aenean eget lobortis diam, quis faucibus lectus.',
                            date: 'July 20, 2019',
                            numberActive: '3',
                            authorPicture: 'video-thumbnail-1.png',
                        },
                    ]
                }
            ],
            forumStatistics:[
                {
                    lastestMember: "John Doe",
                    totalThreads: 3600,
                    totalMessages: 150,
                    totalMembers: 250,
                }
            ],
            threadsCounter: 0,
    }),
    methods: {
        increase: function(){
            console.log(newsLists);
        }
    },
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