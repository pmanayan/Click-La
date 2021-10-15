<template>
    <div class="w-4/12">
        <div class="flex mt-3 items-center items-end">
            <img src="img/settings.png" class="w-12">
            <h3 class="pl-3 text-blue-800 font-bold text-2xl">Settings</h3>
        </div>
        <div>
        <div class="flex mt-10">
            <p class="mt-3.5 w-8/12 text-left pr-3 text-blue-800 text-xl">Noficiation</p>
            <label for="toggle1" class="cursor-pointer mt-3.5">
                <!-- toggle -->
                <div class="relative">
                <!-- input -->
                <input type="checkbox" id="toggle1" class="sr-only">
                <!-- line -->
                <div class="radius block bg-gray-300 w-14 h-8 rounded-full"></div>
                <!-- dot -->
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
                <!-- label -->
            </label>
        </div>
        <div class="flex mt-3">
            <p class="w-8/12 text-left pr-3 text-blue-800 text-xl">Email Noficiation</p>
            <label for="toggleB" class="cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                <!-- input -->
                <input type="checkbox" id="toggleB" class="sr-only">
                <!-- line -->
                <div class="radius block bg-gray-300 w-14 h-8 rounded-full"></div>
                <!-- dot -->
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
                <!-- label -->
            </label>
        </div>
        <div class="flex mt-3">
            <p class="w-8/12 text-left pr-3 text-blue-800 text-xl">Text Noficiation</p>
            <label for="toggleC" class="cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                <!-- input -->
                <input type="checkbox" id="toggleC" class="sr-only">
                <!-- line -->
                <div class="radius block bg-gray-300 w-14 h-8 rounded-full"></div>
                <!-- dot -->
                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
                <!-- label -->
            </label>
        </div>
        </div>
    </div>
</template>

<style>
/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #fff;
}
input:checked ~ .radius{
    background: #93C5FD;
} 
</style>