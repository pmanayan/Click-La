<template>
<div class="w-4/12 mt-14">
    <div class="bg-white mt-10 px-5 py-3 border">
        <div>
            <h4 class="text-xl text-blue-800">Forum Statistics</h4>
        </div>
        <div class="mt-1">
            <p class="flex text-lg">Threads: <span class="m-auto mr-0">{{totalThreads}}</span></p>
        </div>
        <div class="mt-1">
            <p class="flex text-lg">Messages: <span class="m-auto mr-0">{{totalMessages}}</span></p>
        </div>
        <div class="mt-1">
            <p class="flex text-lg">Members: <span class="m-auto mr-0">{{totalMembers}}</span></p>
        </div>
        <div class="mt-1">
            <p class="flex text-lg">Latest Member: <span class="m-auto mr-0">{{lastestMember}}</span></p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['totalThreads','totalMessages','totalMembers','lastestMember']
}
</script>