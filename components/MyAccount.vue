<template>
    <div class="flex-none w-10/12">
        <div class="bg-gray-100 p-12">
            <div class="">
                <div class="w-full">
                    <div class="flex w-full">
                        <MyAccountProfile />
                        <MyAccountSettings />
                    </div>
                </div>
                <div class="w-full">
                    <MyAccountSocialIcons/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

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