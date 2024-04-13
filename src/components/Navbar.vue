<script setup lang="ts">
import { Grid, QuestionFilled } from '@element-plus/icons-vue';




</script>

<template>
    <el-container>

        <div :class="$style.navbar">
            <el-header style=" width: 100%; margin-left:260px; font-size: 12px">
                <div :class="$style.navbarInputWrapper">


                    <input
                        style="width: 516px;height: 46px;border: none;background-color: var(--color-gray-lighter);border-radius: 24px;"
                        type="text" placeholder="Please input">



                    <div :class="$style.navbarIconWrapper">

                        <el-dropdown trigger="click">
                            <el-icon size="25" style="margin-right: 20px;">
                                <CircleCheck />
                            </el-icon>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Xem trước khi không có mạng</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                        <el-dropdown trigger="click">
                            <el-icon size="25" style="margin-right: 20px;">
                                <QuestionFilled />
                            </el-icon>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>
                                        Trợ giúp
                                    </el-dropdown-item>
                                    <el-dropdown-item> Điều khoản chính sách </el-dropdown-item>
                                    <el-dropdown-item>Gửi ý kiến phản hồi cho google</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>

                        </el-dropdown>


                        <el-dropdown trigger="click">

                            <el-icon size="25" style="margin-right: 20px;">
                                <setting />
                            </el-icon>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Cài đặt</el-dropdown-item>
                                    <el-dropdown-item> Tải drive cho máy tính </el-dropdown-item>
                                    <el-dropdown-item>Phím tắt</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                        <el-dropdown trigger="click">

                            <el-icon size="25" style="margin-right: 20px;">
                                <Grid />
                            </el-icon>
                        </el-dropdown>
                        <span>
                            <img src="../../public/avatar-trang-4.jpeg"
                                style="width: 32px;height: 32px;border-radius: 50%;object-fit:cover; " alt="">
                        </span>



                    </div>
                </div>
               
            </el-header>




        </div>
    </el-container>

</template>

<style scoped lang="scss" module>
.navbarInputWrapper {
   
    input{
        margin-right: 250px;
        padding-left: 20px;
    }

    margin-top: 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    .navbarIconWrapper{
        margin-top: 10px;
    }
}

</style>