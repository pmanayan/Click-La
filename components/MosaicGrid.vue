<template>
    <div class="grid card">
        <div class="card-image">
            <nuxt-link to="creatives" data-fancybox="mosaic-gallery" data-caption="Caption Images 1">
                <img src='img/foods-sample.jpg' alt="image">	
                <div class="grid_body">
                    <!--div class="relative">						
                        <h3 class="grid_title">Your Title</h3>
                        <p class="grid_author">Description</p>
                    </div>
                    <div class="mt-auto">
                        <span class="grid_tag">#tag1</span>
                    </div-->
                </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
/*Mosaic Gallery*/
hr.title {
        margin: 15px 0 !important;
    }
    #mosaic .grid {
        display: inline-block;
        margin-bottom: 16px;
        position: relative;
    }

    #mosaic .grid:before {
        border-radius: 5px;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.2);
    }

    #mosaic .grid img {
        width: 100%;
        border-radius: 5px;
    }

    #mosaic .grid_title {
        font-size: 1.75rem;
        font-weight: bold;
        margin: 0px 0px 10px 0px;
    }

    #mosaic .grid_author {
        font-size: 0.9rem;
        font-weight: 300;
    }

    #mosaic .grid_link {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    #mosaic .grid_body {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 30px 30px;
        color: #fff;
        display: flex;
        flex-direction: column;
        font-family: "Apple Chancery", cursive;
    }

    #mosaic .grid_tag {
        background-color: rgba(255, 255, 255, 0.8);
        color: #333;
        border-radius: 5px;
        padding: 5px 15px;
        margin-bottom: 5px;
    }

    .mt-auto {
        margin-top: auto;
    }

    .t-c-1{
        display: grid;
        grid-template-columns: 100%;
        grid-row-gap: 20px;
    }

    .t-c-2{
        display: grid;
        grid-template-columns: 49.7% 49.7%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-3{
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.2%;
    }

    .t-c-4{
        display: grid;
        grid-template-columns: 24.6% 24.6% 24.6% 24.6%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-5{
        display: grid;
        grid-template-columns: 19.6% 19.6% 19.6% 19.6% 19.6%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-6{
        display: grid;
        grid-template-columns: 16.3% 16.3% 16.3% 16.3% 16.3% 16.3%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-7{
        display: grid;
        grid-template-columns: 13.85% 13.85% 13.85% 13.85% 13.85% 13.85% 13.85%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-8{
        display: grid;
        grid-template-columns: 12.06% 12.06% 12.06% 12.06% 12.06% 12.06% 12.06% 12.06%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-9{
        display: grid;
        grid-template-columns: 10.66% 10.66% 10.66% 10.66% 10.66% 10.66% 10.66% 10.66% 10.66%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-10{
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        grid-column-gap: 1.3%;
        grid-row-gap: 1%;
    }

    .t-c-11{
        display: grid;
        grid-template-columns: 8.63% 8.63% 8.63% 8.63% 8.63% 8.63% 8.63% 8.63% 8.63% 8.63% 8.63%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .t-c-12{
        display: grid;
        grid-template-columns: 7.87% 7.87% 7.87% 7.87% 7.87% 7.87% 7.87% 7.87% 7.87% 7.87% 7.87% 7.87%;
        grid-column-gap: 0.5%;
        grid-row-gap: 0.5%;
    }

    .m-t-c-1{
        columns: 1;
        column-gap: 16px;
    }

    .m-t-c-2{
        columns: 2;
        column-gap: 16px;
    }

    .m-t-c-3{
        columns: 3;
        column-gap: 16px;
    }

    .m-t-c-4{
        columns: 4;
        column-gap: 16px;
    }

    .m-t-c-5{
        columns: 5;
        column-gap: 16px;
    }

    .m-t-c-6{
        columns: 6;
        column-gap: 16px;
    }

    .m-t-c-7{
        columns: 7;
        column-gap: 16px;
    }

    .m-t-c-8{
        columns: 8;
        column-gap: 16px;
    }

    .m-t-c-9{
        columns: 9;
        column-gap: 16px;
    }

    .m-t-c-10{
        columns: 10;
        column-gap: 16px;
    }

    .m-t-c-11{
        columns: 11;
        column-gap: 16px;
    }

    .m-t-c-12{
        columns: 12;
        column-gap: 16px;
    }

    div#responsive-gallery-description nuxt-link {
        display: block;
    }

    #mosaic .grid_title{
        color: #fff;
    }

    .card {
        position: relative;
        overflow: hidden;
    }

    @media (max-width: 1200px) {
        #mosaic {
            columns: 4;
        }
    }

    @media (max-width: 992px) {
        #mosaic {
            columns: 2;
        }
    }

    @media (max-width: 532px) {
        #mosaic {
            columns: 2;
        }

        .mobile-t-c-1{
            display: grid;
            grid-template-columns: 100%;
        }
    }
/*Mosaic Gallery End*/
</style>