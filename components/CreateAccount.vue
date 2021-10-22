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
                    <h1 class="text-3xl font-bold text-red-800">Register</h1>
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
                        <label class="block mb-2 text-red-800 font-bold" for="password">Full Name</label>
                        <input class="w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300" type="text" name="name">
                    </div>
                    <div>
                        <label class="block mb-2 text-red-800 font-bold" for="password">Phone</label>
                        <input class="w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300" type="number" name="mobile_number">
                    </div>
                    <div>
                        <label class="block mb-2 text-red-800 font-bold" for="password">Email</label>
                        <input class="w-full p-2 mb-6 text-gray-800 border-b-2 border-red-800 outline-none focus:bg-gray-300" type="email" name="email">
                    </div>
                    <div>          
                        <NuxtLink to="/dashboard" class="cursor-pointer w-full bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 mb-6 rounded w-full block text-center">
                            Sign Up
                        </NuxtLink>
                    </div>       
                </form>  
                <div class="w-4/5 m-auto">
                    <div class="flex w-full m-auto text-center mt-3 content-center justify-center">
                        <p class="font-bold text-gray-500 text-sm mr-1">Already have an account? </p>
                        <NuxtLink to="/" class="font-bold text-red-700 hover:text-red-900 text-sm ">
                            Sign In
                        </NuxtLink>
                    </div>
                </div> 
            </div> 
            <div id="slider-login-1" class="w-6/12 p-5 bg-red-800 relative overflow-hidden">
                <div>
                    <img src="img/png-bg-1.png" class="absolute top-0 left-0 h-full w-full object-cover">
                </div>
                <div class="relative flex justify-center align-center content-end h-full">
                    <div id="slider-1" class="absolute h-full w-full flex justify-center align-center opacity-0 invisible active-slider">
                        <div class="h-auto m-auto">
                            <img src="img/login-layout-2-1.png" class="relative transition-set w-5/5 h-auto object-contain bottom-5" >
                            <div class="relative flex justify-center -mt-5">
                                <p class="slider-1 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1 bg-gray-700 active-nav" v-on:click="nextSlideFunction($event,'slider-1')"></p>
                                <p class="slider-2 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-2')"></p>
                                <p class="slider-3 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-3')"></p>
                            </div>
                        </div>
                    </div>
                    <div id="slider-2" class="absolute h-full w-full flex justify-center align-center opacity-0 invisible">
                        <div class="h-auto m-auto">
                            <img src="img/login-layout-2-2.png" class="relative transition-set w-5/5 h-auto object-contain bottom-5">
                            <div class="relative flex justify-center -mt-5">
                                <p class="slider-1 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-1')"></p>
                                <p class="slider-2 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-2')"></p>
                                <p class="slider-3 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-3')"></p>
                            </div>
                        </div>
                    </div>
                    <div id="slider-3" class="absolute h-full w-full flex justify-center align-center opacity-0 invisible">
                        <div class="h-auto m-auto">
                            <img src="img/login-layout-2-3.png" class="relative transition-set w-5/5 h-auto object-contain bottom-5">
                            <div class="relative flex justify-center -mt-5">
                                <p class="slider-1 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-1')"></p>
                                <p class="slider-2 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-2')"></p>
                                <p class="slider-3 slider-nav w-4 h-4 rounded-full bg-white cursor-pointer mx-1" v-on:click="nextSlideFunction($event,'slider-3')"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  </div>
</template>

<script>
var timeOut;
clearTimeout(timeOut);

export default {
    head() {
        return {
            title: "Registration Page",            
        };
    },
    methods: {
        nextSlideFunction: function(event,data){
            clearTimeout(timeOut);

            var _this = this;

            timeOut = setTimeout(function(){
                var toClick = document.querySelectorAll(".active-slider .active-nav")[0].nextElementSibling;
                if(toClick == null){
                    document.querySelectorAll(".active-slider .slider-nav")[0].click();
                    _this.autoSliderFunctionLoad1();
                }else{
                    toClick.click();
                    _this.autoSliderFunctionLoad1();
                }
            },5000);

            var navTarget = event.target;
            var sliderTarget = navTarget.parentElement.parentElement.parentElement.parentElement.querySelectorAll("#"+data);
            var activeSlider = navTarget.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".active-slider");
            
            if(sliderTarget.length > 0){
                var activeNav = sliderTarget[0].querySelectorAll(".active-nav");
                var setNewActiveNav = sliderTarget[0].querySelectorAll("."+data);

                if(activeNav > 0){
                    activeNav[0].classList.remove("bg-gray-700", "active-nav");
                }

                if(setNewActiveNav.length > 0){
                    setNewActiveNav[0].classList.add("bg-gray-700", "active-nav");
                }
            }

            if(activeSlider.length > 0){
                activeSlider[0].classList.remove("active-slider");
                activeSlider[0].classList.add("opacity-0");
            }
            
            if(sliderTarget.length > 0){
                               sliderTarget[0].classList.add("active-slider");
                sliderTarget[0].classList.remove("opacity-0");
            }
            
        },
        autoSliderFunctionLoad1: function(event){
            var _this = this;

            timeOut = setTimeout(function(){
                var toClick = document.querySelectorAll(".active-slider .active-nav")[0].nextElementSibling;
                if(toClick == null){
                    document.querySelectorAll(".active-slider .slider-nav")[0].click();
                    _this.autoSliderFunctionLoad1();
                }else{
                    toClick.click();
                    _this.autoSliderFunctionLoad1();
                }
            },5000);
        },
    },
    mounted: function mounted() {
        console.log("LOADED")
        this.autoSliderFunctionLoad1(this);
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
.active-slider{
    opacity: 1;
    visibility: visible;
}
.transition-set{
    transition: 1s;    
}
.opacity-0 img{
    opacity: 0;
}
.opacity-0.active-slider img{
    opacity: 1;
}
</style>