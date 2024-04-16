<script lang="ts" setup>
import { Picture } from '@element-plus/icons-vue'

interface User {
    owner: string
    date: string
    name: string
    address: string
}

const tableData: User[] = [
    {
        owner: "admin",
        date: '2016-05-03',
        name: 'Thong bao lich thi nam 2022',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        owner: "thanh",
        date: '2016-05-02',
        name: 'Interstellar-Vietsub.mp4',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        owner: "thanh",

        date: '2016-05-04',
        name: 'Thong bao lich giai dau cau long',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        owner: "ngaymai",
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>


<template>
    <el-table :data="tableData" width="100%" >
        <el-table-column label="Tên" min-width="400">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <Picture />
                    </el-icon>
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </div>
            </template>
        </el-table-column>

        <el-table-column label="Lý do tài liệu được đề xuất" min-width="300">
            <template #default="scope">
                    <span> Bạn đã mở:{{ scope.row.date}}</span>
                
            </template>
        </el-table-column>



        <el-table-column label="Chủ sỡ hữu" min-width="200">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <img style="width: 30px;
                                                    border-radius: 50%; object-fit: cover; "
                        src="../../public/avatar-trang-4.jpeg" alt="">
                    <span style="margin-left: 10px">{{ scope.row.owner.slice(0,30) + "..." }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Địa điểm" min-width="200" >
            <template #default="scope">
                <span>{{ scope.row.address }}</span>
            </template>
           
        </el-table-column>
        <el-table-column min-width="50" > 
            <font-awesome-icon class="moreIcon" :icon="['fas', 'ellipsis-vertical']" />
        </el-table-column>
      

    </el-table>
</template>

<style scoped>
.moreIcon {
    cursor: pointer;
    transition: linear;
    padding: 5px 8px 5px 8px;
}
.moreIcon:hover{

    background-color: #c0c0c0;
    border-radius: 50%;
   
 
}

</style>


