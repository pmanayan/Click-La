<template>
  <div class="relative overflow-hidden">
    <div class="my-bg fixed">
        <img src="img/png-bg-2.png" class="fixed top-0 left-0 w-full">
    </div>
    <div class="flex h-screen bg-white bg-opacity-90 relative">
        <div class="w-full max-w-6xl m-auto bg-indigo-100 rounded flex overflow-hidden">   
            <div class="w-6/12 p-10">
                <div>
                    <img class="w-20 mx-auto mb-5 ml-0" src="img/logo.png" />
                </div>   
                <div class="flex justify-center mb-5">
                    <h1 class="text-3xl font-bold text-red-800">Login</h1>
                </div>
                <form class="w-4/5 m-auto">
                    <div>
                        <label class="block mb-2 text-red-800 font-bold" for="username">Username</label>
                        <input class="w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300" type="text" name="username"/>
                    </div>
                    <div>
                        <label class="block mb-2 text-red-800 font-bold" for="password">Password</label>
                        <input class="w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300" type="password" name="password">
                    </div>
                    <div>          
                        <NuxtLink to="/dashboard" class="cursor-pointer w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 mb-6 rounded w-full block text-center">
                            Sign In
                        </NuxtLink>
                    </div>       
                </form>  
                <div class="w-4/5 m-auto">
                    <div class="flex w-full m-auto text-center mt-3 content-center justify-center">
                        <p class="font-bold text-gray-500 text-sm mr-1">Need Account? </p>
                        <NuxtLink to="/create-account" class="font-bold text-red-700 hover:text-red-900 text-sm ">
                            Sign Up
                        </NuxtLink>
                    </div>
                    <div class="flex justify-center mt-3">
                        <NuxtLink to="/forgot-password" class="font-bold text-red-700 hover:text-red-900 text-sm">
                            Forgot Password?
                        </NuxtLink>
                    </div>
                </div> 
            </div> 
            <div id="slider-login-1" class="w-6/12 p-5 bg-red-800 relative overflow-hidden">
                <div>
                    <img src="img/png-bg-1.png" class="absolute top-0 left-0 h-full w-full object-cover">
                </div>
                <div class="relative flex justify-center align-center content-end h-full">
                    <img id="slider-1" src="img/login-layout-2-1.png" class="transition-set w-5/5 h-auto object-contain absolute bottom-5 active-slider" >
                    <img id="slider-2" src="img/login-layout-2-2.png" class="transition-set w-5/5 h-auto object-contain absolute bottom-5 opacity-0">
                    <img id="slider-3" src="img/login-layout-2-3.png" class="transition-set w-5/5 h-auto object-contain absolute bottom-5 opacity-0">
                </div>
                <div class="relative flex justify-center -mt-5">
                    <p class="slider-nav w-3 h-3 rounded-full bg-white cursor-pointer mx-1 bg-gray-700 active-nav" v-on:click="nextSlideFunction($event,'slider-1')"></p>
                    <p class="slider-nav w-3 h-3 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-2')"></p>
                    <p class="slider-nav w-3 h-3 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-3')"></p>
                </div>
            </div> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Login Page",
            data: {
                counter: 0
            },
        };
    },
    methods: {
        nextSlideFunction: function(event,data){
            var sliderTarget = event.target.parentElement.parentElement.querySelectorAll("#"+data)[0];
            var activeSlider = event.target.parentElement.parentElement.querySelectorAll(".active-slider");
            var activeNav = event.target.parentElement.parentElement.querySelectorAll(".active-nav")[0];
            var navTarget = event.target;

            activeNav.classList.remove("bg-gray-700", "active-nav");
            navTarget.classList.add("bg-gray-700", "active-nav");

            activeSlider[0].classList.add("opacity-0");
            activeSlider[0].classList.remove("active-slider");
            sliderTarget.classList.add("active-slider");
            sliderTarget.classList.remove("opacity-0");
        },
    },
    mounted() {
        document.body.onload = () =>{
            var documentToPass = document.querySelectorAll("#slider-login-1 .active-nav")[0];
        }
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                console.log('Page completed with image and files!')
                // fetch to next page or some code
                //this.nextSlideFunction();
            }
        }
    },
}
</script>

<style scoped>
.my-bg:after {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
}
.transition-set{
    transition: 1s;
}
</style>