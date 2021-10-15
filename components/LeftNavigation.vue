<template>
    <div id="navigation-links-container" class="flex-none w-2/12 px-12">
        <div>
            <NuxtLink to="/dashboard" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                Dashboard
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/my-account" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                My Account
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/news" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                News
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/videos" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                Videos
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/trainings" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                Trainings
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/creatives" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                Creatives
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/events" class="py-1 px-3 rounded text-center mb-2 block border-gray-800 border">
                Events
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
#navigation-links-container .nuxt-link-exact-active {
        background: #dc2626;
        color: #fff;
        border-color: #dc2626;
}
</style>