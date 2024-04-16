<script setup lang="ts">
import Home from "@/components/Home.vue"
import FolderItem from "@/components/FolderItem.vue";
import Sidebar from "@/components/Sidebar.vue"
import FilesList from "@/components/FilesList.vue"
</script>

<template>
  <div style="display: flex;">
    <Sidebar />
    <Home>
      <div style=" padding-left: 20px;display: flex; flex-direction: column;align-items:baseline; ">
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

        <div :class="$style.mainFiles" >
          <div :class="$style.mainFolder" >
            Tập tin
          </div>
          <FilesList />
          

        </div>

      </div>


    </Home>



  </div>


</template>

<style scoped lang="scss" module>
.mainTitle {
  
  margin-top: 20px;
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
.mainFolderList{
  margin-bottom: 20px;
}
.mainFolder{
  font-size: 16px;
  padding: 8px 0 16px;
  .mainFolderList{
    display: flex;
    flex-wrap:wrap ;
  }

}



</style>
