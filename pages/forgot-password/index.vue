<template>
    <div>
        <Background/>
        <div class="flex h-screen bg-white bg-opacity-60 relative">
            <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   
                <header>
                    <img class="w-40 mx-auto mb-5" src="img/logo.png" />
                </header>   
                <form>
                    <div>
                        <label class="block mb-2 text-red-800 font-bold" for="username">Email</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-red-800 outline-none focus:bg-gray-300" type="text" name="username">
                    </div>
                    <div>          
                        <input class="cursor-pointer w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Get New Password">
                    </div>       
                </form>  
                <footer>
                    <NuxtLink to="/create-account" class="font-bold text-red-700 hover:text-red-900 text-sm float-left">
                        Sign Up
                    </NuxtLink>
                    <NuxtLink to="/" class="font-bold text-red-700 hover:text-red-900 text-sm float-right">
                        Back to Login
                    </NuxtLink>
                </footer>   
            </div>
        </div>
    </div>
</template>