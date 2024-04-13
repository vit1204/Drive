<script setup>
const folders = [
    {
        id:1,
        name: 'Thư mục khong co tieu de ahhihi'
    },
    {
        id:2,
        name: 'Thong bao lich hoc 2002'
    }
]

</script>


<template>
    <div :class="$style.folderFormat">
        <div :class="$style.folderItem" v-for="folder in folders" :key="folder.id">
            <span>
                <el-icon>
                    <Folder />
                </el-icon>
                {{ folder.name }}

            </span>

        </div>

    </div>



</template>

<style lang="scss" module>
.folderFormat {
    display: flex;
    flex-wrap: wrap;
    .folderItem {
        font-size: 14px;
        background-color: #F0F4F9;
        padding: 8px 16px;
        /* Điều chỉnh padding để tạo khoảng cách giữa các mục */
        margin: 8px;
        border-radius: 8px;
        font-weight: 500;
        /* Tạo khoảng cách giữa các mục */
    }
}


</style>