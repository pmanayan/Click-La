<template>
    <div id="mosaic" class="m-t-c-3 p-5">
        <MosaicGrid v-for="imgdata in img_datas" :key="imgdata.id" :id="imgdata.id" :imgdata="imgdata.imgdata" />
    </div>
</template>

<script>
// Define a new component called todo-item

export default {
    data(){
        return{
            img_datas:[
                "foods-sample.jpg",
                "foods-sample.jpg",
                "foods-sample.jpg",
                "foods-sample.jpg",
                "foods-sample.jpg",
                "foods-sample.jpg",
                "foods-sample.jpg",
            ]
        }
    }
}
</script>