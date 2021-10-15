<template>
    <div class="flex-none w-10/12">
        <div class="bg-gray-100 rounded-md overflow-hidden">
            <div class="bg-red-600">
                <div class="flex">
                    <div class="px-6 bg-red-900 py-3 hover:bg-red-900 pointer-events">
                        <p class="text-white">Creatives</p>
                    </div>
                </div>
            </div>
            <div class="p-6 flex">
                <div class="w-8/12">
                    <div>
                        <div class="mt-5 pr-5">
                            <div>
                                <div class="no-flex bg-red-800 px-3 py-2">
                                    <div>
                                        <h4 class="text-xl font-medium text-white">Creative Uploads</h4>
                                    </div>
                                </div>
                                <div class="h-set-uploads overflow-y-scroll">
                                    <MosaicTemplate/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-4/12 mt-5">
                    <div>
                        <div class="bg-red-800 px-3 py-2">
                                    <h4 class="text-white font-bold">Add Creatives</h4>
                        </div>
                        <form class="w-full bg-white p-4">
                            <div>
                                <FileUpload/>
                            </div>
                            <div>
                                <div>
                                    <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Title
                                    </label>
                                </div>
                                <div>
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600" id="inline-full-name" type="text">
                                </div>
                            </div>
                            <div class="mt-3">
                                <div>
                                    <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Description
                                    </label>
                                </div>
                                <div>
                                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600" id="inline-full-name" type="text" >
                                </div>
                            </div>
                            <div class="mt-3">
                                <label class="block text-left" style="max-width: 400px;">
                                    <span class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">Select</span>
                                    <select class="form-select block w-full mt-1 border py-2 px-4 cursor-pointer ">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>
                                </label>
                            </div>
                            <div class="mt-3">
                                <div class="md:w-2/3">
                                    <button class="shadow bg-red-700 hover:bg-red-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </form>
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

.h-set-uploads{
    height: 465px;
}
</style>