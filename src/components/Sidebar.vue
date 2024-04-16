<script setup lang="ts">



</script>

<template>
    <div :class="$style.sidebar">
        <div :class="$style.sidebarAddBtn">
            <el-dropdown trigger="click">
                <button type="button">
                    <el-icon size="25">
                        <Plus />
                    </el-icon>
                    Mới
                </button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <span>
                                <el-icon>
                                    <FolderAdd />
                                </el-icon>
                                Thư mục mới
                            </span>

                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <span>
                                <el-icon>
                                    <DocumentAdd />
                                </el-icon>
                                Tải tệp lên
                            </span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <span>
                                <el-icon>
                                    <FolderAdd />
                                </el-icon>
                                Tải thư mục lên
                            </span>
                        </el-dropdown-item>
                    </el-dropdown-menu>

                </template>

            </el-dropdown>

        </div>

        <div :class="$style.sidebarItem">
            <span tabindex="1">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <HomeFilled />
                </el-icon>
                Trang chủ
            </span>
            <span tabindex="2">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Management />
                </el-icon>
                Drive của tôi
            </span>
            <span tabindex="3">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Monitor />
                </el-icon>
                Máy tính của tôi
            </span>


        </div>

        <div :class="$style.sidebarItem">
            <span tabindex="4">
                <el-icon :class="$style.sidebarIcon" size="17">

                    <User />

                </el-icon>
                Được chia sẻ với tôi
            </span>
            <span tabindex="5">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Clock />
                </el-icon>
                Gần đây
            </span>
            <span tabindex="6">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Star />
                </el-icon>
                Có gắn sao
            </span>


        </div>

        <div :class="$style.sidebarItem">
            <span tabindex="7">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Warning />
                </el-icon>
                Nội dung rác
            </span tabindex="8">
            <span>
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Delete />
                </el-icon>
                Thùng rác
            </span>
            <span tabindex="9">
                <el-icon :class="$style.sidebarIcon" size="17">
                    <Cloudy />
                </el-icon>
                Bộ nhớ
            </span>


        </div>
        <div :class="$style.sideBarLeftFooter">
            <div :class="$style.sideBarLeftSlider"></div>
            <p>
                Đã sử dụng 12,01 GB trong tổng số 15 GB
            </p>
            <button :class="$style.sideBarLeftFooterBtn">
                Mua thêm bộ nhớ
            </button>
        </div>

        <!-- Nội dung của sidebar -->
    </div>



</template>

<script>
import { Clock, Cloudy, HomeFilled, Management } from '@element-plus/icons-vue';
import { ElDropdown } from 'element-plus';

export default {
    name: 'Sidebar',
};
</script>

<style scoped lang="scss" module>
.sidebar {
    width: 270px;
    height: 100%;

}

.sidebarHeader {
    cursor: pointer;
    display: flex;
    /* Sử dụng flexbox để sắp xếp các phần tử theo hàng */
    align-items: center;
    /* Căn chỉnh các phần tử theo chiều dọc (trục chính) */
    margin-left: 16px;
    margin-top: 10px;
    font-size: 1.5rem;

    span {
        font-size: 22px;
        color: rgb(95, 99, 104);
    }
}

.sidebarAddBtn {
    max-width: 256px;
    padding: 8px 16px 16px;
    margin-top: 16px;

    button {
        font-size: 14px;
        font-weight: 500;
        align-items: center;
        background-color: var(--dt-surface-bright, #fff);
        box-shadow: var(--dt-shadow-elevation-1, 0 1px 2px 0 rgba(60, 64, 67, .3), 0 1px 3px 1px rgba(60, 64, 67, .15));
        border-radius: var(--dt-corner-fab, 6.25rem);
        border-width: 0;
        color: #1f1f1f;
        cursor: pointer;
        display: inline-flex;
        fill: var(--dt-on-surface, rgb(60, 64, 67));
        gap: .75rem;
        grid-template-columns: auto 1fr;
        height: 3.5rem;
        min-width: 6.25rem;
        padding: 1.125rem 1.25rem 1.125rem 1rem;
        place-content: center start;
    }

}

.sidebarAddBtn:hover {
    button {
        box-shadow: var(--dt-shadow-elevation-2, 0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15));
    }
}

.sidebarItem {
    display: flex;
    flex-direction: column;
    margin-top: 6px;

    padding-left: 20px;
    margin-bottom: 23px;

    span {
        cursor: pointer;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 14px;
        padding-left: 16px;
        vertical-align: middle;
        align-items: center;

        .sidebarIcon {
            margin-right: 10px;
        }
    }

    span:hover {
        background-color: var(--color-gray-lighter);
        width: 90%;
        border-radius: 15px;
     
        

    }

    span:focus {
        background-color: rgba(100, 148, 237, 0.33);
        width: 90%;
        border-radius: 15px;
  
    }

}

.sideBarLeftFooter {

    p {
        width: 70%;

        font-size: 14px;
        margin-left: 39px;
    }

    .sideBarLeftSlider {
        width: 150px;
        margin-left: 39px;
        height: 3px;
        background-color: var(--color-primary);

    }

}

.sideBarLeftFooterBtn {
    width: 150px;
    margin-left: 40px;
    height: 40px;
    background-color: white;
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