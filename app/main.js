import Vue from "vue";
import IndexCompany from "./components/index.vue";

new Vue({
    el: "#app",
    data(){
        return {
            msg: ''
        };
    },
    components: {
        IndexCompany
    }
});