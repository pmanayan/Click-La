<template>
<div>
    <div class="mt-5 pr-5">
        <div>
            <div class="no-flex bg-red-800 px-3 py-2">
                <div>
                    <h4 class="text-xl font-medium text-white">{{category}}</h4>
                </div>
            </div>
            <div  class="h-64 overflow-y-scroll">
                <NewsSingle v-for="data in categoryData" :key="data.id" :topic="data.topic" :numberThreads="data.numberThreads" :numberMessages="data.numberMessages" :shortSummary="data.shortSummary" :date="data.date" :numberActive="data.numberActive" :authorPicture="data.authorPicture"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['category', 'categoryData']
}
</script>