<template>
    <div class="flex m-auto mr-0">
        <div class="mt-5 mr-10">
            <img src="img/search.png" class="cursor-pointer">
        </div>
        <div class="mt-5 relative mr-10">
            <img src="img/with-notif.png" class="cursor-pointer">
            <div class="absolute top-0 right-0 bg-red-600 w-4 h-4 flex rounded-full cursor-pointer">
                <p class="text-white text-xs flex m-auto text-7">1</p>
            </div>
        </div>
        <div class="mt-5 relative">
            <div class="group flex items-center align-center cursor-pointer relative">
                <img src="img/image-1.jpg" class="w-10 rounded-full">
                <div class="ml-1">
                    <p class="text-lg font-light">Active User</p>
                </div>
                <div>
                    <img src="img/down-arrow.png" class="ml-2 w-5">
                </div>
                <div class="px-3 transition duration-500 ease-in-out absolute top-8 left-0 bg-red-600 bg-opacity-80 rounded-md opacity-0 group-hover:opacity-100">
                    <NuxtLink to="/my-account" class="py-1 px-3 rounded text-center mb-2 block text-white">
                        My Account
                    </NuxtLink>
                    <NuxtLink to="/logout" class="py-1 px-3 rounded text-center mb-2 block text-white">
                        Logout
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .text-7{
        font-size: 7px;
    }
</style>