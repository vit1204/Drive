<script lang="ts" setup>
import {  ref } from 'vue'
import FilterMenu from "./FilterMenu.vue"

let isPopupVisible = ref<boolean>(false)

const closePopup = () => {
    isPopupVisible.value = false
}


</script>

<template>
    <div :class="$style.search">
        <div :class="$style.searchIconSearch">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>

        <input :class="$style.searchInput" type="text" placeholder="Please input">
        <div @click="isPopupVisible = true" :class="$style.searchIconFilter" >
            <font-awesome-icon  :icon="['fas', 'sliders']" />
        </div>
        <el-dialog v-model="isPopupVisible">
            <FilterMenu @isPopupVisible="closePopup" />
            
            

        </el-dialog>
     
    </div>
</template>

<style lang="scss" module>
.search {
    display: flex;
    align-items: center;
    position: relative;
    min-width: 700px;
    margin-right: 300px;
   
    
}

.searchInput {
    border: none;
    background-color: #e9eef6;
    padding: 16px 44px;
    border-radius: 26px;
    width: 100%;
    font-size: 16px;

    &:focus {
        outline: none;
        background-color: #fafafa;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
}

.searchIconSearch {
    position: absolute;
    left: 18px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
}

.searchIconFilter {
    position: absolute;
    right: 18px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
}

</style>