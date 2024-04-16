<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: "",
    type: [],
    type2: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}


</script>

<template>
    <el-form :model="form" label-width="auto" style="max-width: 800px">
        <el-form-item label="Loại" style="width: 50%;">
            <el-select placeholder="Bất kỳ" v-model="form.name">
                <el-option label="Bất kỳ" value="loai1" />
                <el-option label="Ảnh và hình ảnh" value="loai2" />
                <el-option label="PDF" value="loai3" />
                <el-option label="Tài liệu" value="loai3" />
                <el-option label="Bảng tính" value="loai4" />
                <el-option label="Âm thanh" value="loai5" />
                <el-option label="Video" value="loai6" />
                <el-option label="Bản trình bày" value="loai7" />
                <el-option label="Slide" value="loai8" />
                <el-option label="Tệp lưu trữ(zip)" value="loai9" />
                <el-option label="Biểu mẫu" value="loai10" />
                <el-option label="Lối tắt" value="loai11" />
                <el-option label="Sites" value="loai12" />
            </el-select>

        </el-form-item>
        <el-form-item label="Chủ sỡ hữu" style="width: 50%;">
            <el-select v-model="form.region" placeholder="Bất kỳ ai">
                <el-option label="Bất kỳ ai" value="Bất kỳ ai" />
                <el-option label="Do tôi sở hữu" value="Do tôi sở hữu" />
                <el-option label="Không do tôi sỡ hữu" value="Không do tôi sỡ hữu" /> <el-option
                    label="Một người cụ thể" value="Một người cụ thể" />
            </el-select>
        </el-form-item>
        <el-form-item label="Có các từ">
            <el-input v-model="form.date1" placeholder="Nhập các từ tìm thấy trong tệp" />
        </el-form-item>
        <el-form-item label="Tên mục">
            <el-input placeholder="Nhập một cụm từ khớp với một phần của tên tệp" v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Địa điểm" style="width: 50%;">
            <el-select placeholder="Mọi nơi" v-model="form.date2">
                <el-option label="Mọi nơi" value="Mọi nơi" />
                <el-option label="Drive của tôi" value="Drive của tôi" />
                <el-option label="Được chia sẻ với tôi" value="Được chia sẻ với tôi" /> <el-option
                    label="Vị trí khác ..." value="Vị trí khác ..." />
            </el-select>

        </el-form-item>


        <el-form-item style="margin-left: 90px;">
            <el-checkbox-group v-model="form.type">
                <el-checkbox value="Online activities" name="type">
                    Trong thùng rác
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                    Có gắn sao
                </el-checkbox>
                <el-checkbox value="Offline activities" name="type">
                    Đã mã hóa
                </el-checkbox>

            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Ngày sửa đổi" style="width: 50%;">
            <el-select placeholder="Mọi lúc" v-model="form.date2">
                <el-option label="Mọi lúc" value="Mọi lúc" />
                <el-option label="Hôm nay " value="Hôm nay" />
                <el-option label="Hôm qua" value="Hôm qua" />
                <el-option label="7 ngày qua" value="7 ngày qua" />
                <el-option label="30 ngày qua" value="30 ngày qua" />
                <el-option label="90 ngày qua" value="90 ngày qua" />
                <el-option label="Tùy chỉnh ..." value="Tùy chỉnh ..." />
            </el-select>

        </el-form-item>



        <el-form-item label="Yêu cầu phê duyệt">

            <el-checkbox-group v-model="form.type2">
                <el-checkbox value="Online activities" name="type">
                    Đang chờ tôi phê duyệt
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                    Do tôi yêu cầu
                </el-checkbox>
            </el-checkbox-group>
        </el-form-item>

        <el-form-item label="Được chia sẻ với">
            <el-input v-model="form.desc" />
        </el-form-item>





        <div style="display: flex;
        align-items: center; justify-content: space-between;">
            <div class="timhieuthem">
                <span style="color: rgb(11, 87, 208);cursor: pointer;">Tìm hiểu thêm</span>

            </div>

            <div style="text-align: right;">
                <el-button link @click="onSubmit">
                    <span style="color: rgb(11,87,208);">
                        Đặt lại
                    </span>
                </el-button>
                <el-button color="#0b57d0" round @click="$emit('isPopupVisible')">
                    <span style="color:rgb(255, 255, 255);">
                        Tìm kiếm
                    </span>
                </el-button>

            </div>
        </div>


    </el-form>
</template>

<style scoped>
.timhieuthem:hover{
    background-color: var(--color-gray-lighter);
    border-radius: 10px;
   
  
}
</style>
