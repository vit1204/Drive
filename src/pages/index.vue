<script setup lang="ts">
import Home from "@/components/Home.vue"
import FolderItem from "@/components/FolderItem.vue";

</script>

<template>
  <Home>
     <div :class="$style.mainTitle">
      My drive
     </div>

     <div :class="$style.mainFolderList">
      <div :class="$style.mainFolder">
        Thư mục
      </div>
      <div :class="$style.mainFolderList">
        
       <FolderItem />
      
      </div>

     </div>



  </Home>


</template>

<style scoped lang="scss" module>
.mainTitle {
    font-size: 24px;
    width: 100%;
    position: relative;
    margin-bottom: 30px
}
.mainTitle::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    top: 40px;
    bottom: 0;
}
.mainFolder{
  font-size: 14px;
  padding: 8px 0 16px;
  .mainFolderList{
    display: flex;
    flex-wrap:wrap ;
  }

}



</style>
