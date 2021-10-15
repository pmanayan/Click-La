<template>
  <div class="w-8/12">
    <div class="flex items-center">
        <div class="relative cursor-pointer">
            <img class="rounded-full" src="img/image-1.jpg" />
            <div class="bg-blue-800 absolute bottom-0 right-0 p-2 rounded-full">
                <img class="w-5 filter invert" src="img/photo-camera.png">
            </div>
        </div>
        <h3 class="pl-3 text-blue-800 font-bold text-2xl">My Account</h3>
    </div>
    <div class="form">
        <form>
              <div class="flex mt-10">
                  <label for="fullname" class="w-2/12 text-right pr-3 text-blue-800 text-xl">Full name</label>
                  <input type="text" name="fullname" id="fullname" class="bg-gray-100 border-2 border-blue-800 rounded w-9/12"/>
              </div>
              <div class="flex mt-4">
                  <label for="fullname" class="w-2/12 text-right pr-3 text-blue-800 text-xl">Mobile</label>
                  <input type="text" name="fullname" id="fullname" class="bg-gray-100 border-2 border-blue-800 rounded w-9/12"/>
              </div>
              <div class="flex mt-4">
                  <label for="fullname" class="w-2/12 text-right pr-3 text-blue-800 text-xl">Email</label>
                  <input type="text" name="fullname" id="fullname" class="bg-gray-100 border-2 border-blue-800 rounded w-9/12"/>
              </div>
        </form>
    </div>
  </div>
</template>
