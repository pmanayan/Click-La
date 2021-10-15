<template >
<div class="flex px-3 py-2 items-center bg-gray-300 odd:bg-gray-200 cursor-pointer">
    <div class="w-5/12 align-middle">
        <div class="p-1 flex">
            <img src="img/conversation.png" class="w-7 object-contain pr-2">
            <p class="text-md text-lg">{{topic}}</p>
        </div>
    </div>
    <div class="w-2/12">
        <div class="p-1">
            <p class="text-md text-xs text-xs">Threads</p>
            <p class="text-md">{{numberThreads}}</p>
        </div>
    </div>
    <div class="w-2/12">
        <div class="p-1">
            <p class="text-md text-xs">Messages</p>
            <p class="text-md">{{numberMessages}}</p>
        </div>
    </div>
    <div class="w-5/12 flex">
        <div class="flex items-center contain-center">
            <img :src="'img/'+authorPicture" class="author-img-set rounded-full">
        </div>
        <div class="p-1">
            <p class="text-md overflow-ellipsis line-clamp-2 text-xs">{{shortSummary}}</p>
            <p class="text-md overflow-ellipsis line-clamp-2 text-xs">{{date}} - USER Active: {{numberActive}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['topic', 'numberThreads', 'numberMessages','shortSummary', 'date', 'numberActive','authorPicture', 'singleID']
}
</script>

<style>
.author-img-set{
    width: 40px;
    max-width: 40px;
    height: 40px;
    object-fit: cover;
}
</style>