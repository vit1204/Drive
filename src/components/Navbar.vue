<script setup lang="ts">
import { ref } from "vue";
import "../assets/custome.scss"
import MenuApp from "./MenuApp.vue";
import Search from "./Search.vue";


let isCollapse = ref<Boolean>(false);
</script>

<template>

    <el-header>
        <div :class="$style.navbar">
            <el-header >
                <div :class="$style.navbarInputWrapper">
                    <div :class="$style.sidebarHeader">
                        <img src="https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png"
                            style="width: 40px;height: 40px;margin-right: 10px;" alt="">
                        <span>Drive</span>
                    </div>


                    <Search />


                    <div :class="$style.navbarIconWrapper">
                        <el-dropdown trigger="click">
                            <svg style="margin-right: 20px;" viewBox="0 0 24 24" width="24px" height="24px"
                                class=" a-s-fa-Ha-pa c-qd" focusable="false" fill="currentColor">
                                <path
                                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                                </path>
                                <path d="M7 15h10v2H7zm3.3-3.8L8.4 9.3 7 10.7l3.3 3.3L17 7.3l-1.4-1.4z"></path>
                            </svg>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Xem trước khi không có mạng</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                        <el-dropdown trigger="click">
                            <svg style="margin-right: 20px;" class="wo35tf" xmlns="http://www.w3.org/2000/svg"
                                width="24px" height="24px" viewBox="0 0 24 24" fill="#000000" focusable="false">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
                                </path>
                            </svg>
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

                            <svg style="margin-right: 20px;" class=" a-s-fa-Ha-pa c-qd" width="24px" height="24px"
                                viewBox="0 0 24 24" fill="currentColor" focusable="false">
                                <path
                                    d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z">
                                </path>
                                <circle cx="12" cy="12" r="3.5"></circle>
                            </svg>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Cài đặt</el-dropdown-item>
                                    <el-dropdown-item> Tải drive cho máy tính </el-dropdown-item>
                                    <el-dropdown-item>Phím tắt</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                        <el-dropdown trigger="click">
                            <el-icon size="20" style="margin-right:20px">
                                <Menu />
                            </el-icon>
                            <template #dropdown>

                                <MenuApp />

                            </template>
                        </el-dropdown>
                        <ElDropdown trigger="click">
                            <span>
                                <img src="../../public/avatar-trang-4.jpeg"
                                    style="width: 32px;height: 32px;border-radius: 50%;object-fit:cover; " alt="">
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <div :class="$style.managePopupFormat">
                                        <div :class="$style.managePopupContainer">
                                            <div :class="$style.managePopupHeader">
                                                <div :class="$style.managePopupTitle">
                                                    <p>Nguyenthanhviet@gmai.com</p>
                                                    <el-icon>
                                                        <Close />
                                                    </el-icon>
                                                </div>

                                                <img style="width: 100px;
                                                    border-radius: 50%; object-fit: cover; "
                                                    src="../../public/avatar-trang-4.jpeg" alt="">
                                                <p :class="$style.textBig">Chào việt</p>
                                                <button :class="$style.sideBarLeftFooterBtn">
                                                    Quản lý tài khoản google của bạn
                                                </button>
                                            </div>

                                            <el-menu ellipsis="true"
                                                style="width: 90%; margin-left: 25px; margin-top: 20px; border-radius: 20px;"
                                                default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
                                                <el-sub-menu index="1">
                                                    <template #title>
                                                        <div
                                                            style="display: flex; align-items: center; justify-content: space-between">
                                                            <img src="../../public/avatar-trang-4.jpeg"
                                                                style="width: 32px;height: 32px;border-radius: 50%;object-fit:cover; "
                                                                alt="">


                                                            <span
                                                                style="margin-left: 20px;">nguyenthanhviet@gmail.com</span>

                                                        </div>

                                                    </template>
                                                    <el-menu-item style="padding-left: 20px; " index="1-1">

                                                        <el-icon>
                                                            <CirclePlusFilled />

                                                        </el-icon>
                                                        <span>Thêm tài khoản khác</span>

                                                    </el-menu-item>


                                                    <el-menu-item 
                                                        style="border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;"
                                                        index="1-4-1">
                                                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" style="margin-right: 20px;" />
                                                        <span>Đăng xuất khỏi tất cả các tài khoản</span>
                                                    </el-menu-item>
                                                </el-sub-menu>

                                            </el-menu>
                                            <div style="display: flex; justify-content: center;
                                                align-items: center;gap: 20px;">
                                                <p>Chính sách quyền riêng tư</p>
                                                <p>.</p>
                                                <p>Điều khoản dịch vụ</p>
                                            </div>
                                        </div>
                                    </div>
                                </el-dropdown-menu>
                            </template>
                        </ElDropdown>
                    </div>
                </div>
            </el-header>
        </div>
    </el-header>


</template>

<style scoped lang="scss" module>
.sidebarHeader {
    position: relative;
    
    cursor: pointer;
    display: flex;
    /* Sử dụng flexbox để sắp xếp các phần tử theo hàng */
    align-items: center;
    
    /* Căn chỉnh các phần tử theo chiều dọc (trục chính) */


    font-size: 1.5rem;

    span {
        font-size: 22px;
        color: rgb(95, 99, 104);
    }
}
.navbar {
    width: 100%;
        height: 100%;
    
    
    .navbarInputWrapper {
      
        margin-top: 9px;
        display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            overflow-x: auto;
            font-size: 12px;
            align-items: center;
        flex-wrap: nowrap;

        input {
            margin-right: 580px;
            padding-left: 20px;
        }

        .navbarIconWrapper {

            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
}

.managePopupFormat {
    min-width: 412px;
    height: auto;

    background-color: #e9eef6;
    border-radius: 10px;
    box-shadow: 0 4px 8px 3px rgba(0, 0, 0, .15), 0 1px 3px rgba(0, 0, 0, .3);
}

.managePopupContainer {

    padding-bottom: 20px;
}

.managePopupHeader {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.managePopupTitle {

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-left: 90px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        margin-right: 70px;

    }
}

.textBig {
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1.75rem;
}

.sideBarLeftFooterBtn {
    width: 300px;

    height: 40px;
    background-color: transparent;
    border: 1px solid var(--color-primary);
    font-size: 14px;
    border-radius: 20px;
    transition: all 0.3s;
    color: var(--color-primary);
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #f4f4f4;
    }
}
</style>