<template>
  <VueFileAgent :uploadUrl="uploadUrl" v-model="fileRecords" class="bg-gray-900"></VueFileAgent>
</template>
<script>
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

Vue.use(VueFileAgent);
export default {
    
}
</script>
