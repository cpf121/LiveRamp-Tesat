<template>
    <div class="group" @dragover="dragover" @drop="onDrop">
        <div v-for="(item,index) in groupData" :key="item.key" class="group-container">
            <a-button type="primary" shape="round" v-if="index>0" class="andBtn">AND <IconDown></IconDown></a-button>
            <div class="group-item">
                <a-collapse>
                    <a-collapse-item :show-expand-icon="false">
                        <template #header>
                            <div class="group-head">
                                <IconDragDotVertical />
                                <div class="group-head-title">
                                    <span>{{item.title}}</span>
                                    <span class="selectBlod">{{item.head}}</span>
                                </div>
                                <icon-font type="icon-sort" />
                                <IconClose/>
                            </div>
                        </template>
                        <content :id="item.key" :data="item" @checkChange="checkChange"></content>
                    </a-collapse-item>
                </a-collapse>
            </div>
        </div>
    </div>
    
</template>
<script setup>
import { IconDown,IconDragDotVertical,IconClose } from '@arco-design/web-vue/es/icon';
import { ref } from 'vue';
import { Icon } from '@arco-design/web-vue';
import content from './groupContent.vue';

const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/c/font_3758652_h4rag7nmbtc.js' });

const props=defineProps({
    groupData:{
        type:Array,
        default:[]
    }
})
const emit=defineEmits(['addGroup'])

const onDrop = (e) => {
    emit('addGroup',props.groupData)
    e.stopPropagation() // 阻止冒泡
};
const dragover=(e)=>{
    var ev=e||window.event;
    ev.preventDefault();
}

const checkChange=(curGroup,childData)=>{
    curGroup.head=childData
}
</script>
<style lang="scss" scoped>
.group{
    text-align: left;
    padding:10px;
    
    .group-container{
        background-color: #FFF;
        padding: 5px;
        border-radius: 4px;
        .group-item{
            margin-top: 5px;
            .group-head{
                display: flex;
                align-items: center;
                .group-head-title{
                    flex: 1;
                    margin-left: 10px;
                    .selectBlod{
                        font-weight: bold;
                        margin-left: 5px;
                    }
                }
            }
            :deep(.arco-collapse-item-header){
                padding-left: 10px;
                .arco-collapse-item-header-title{
                    flex: 1;
                }
            }
        }
    }
    
}
</style>