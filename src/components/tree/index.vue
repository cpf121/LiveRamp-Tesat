<template>
    <a-tree :data="treeData">
        <template #switcher-icon="node, { isLeaf }">
            <IconDown v-if="!isLeaf" />
        </template>
        <template #title="nodeData">
            <IconDragDotVertical v-if="nodeData.team" />
            <IconFolder v-if="nodeData.folder"></IconFolder>
            <icon-font type="icon-a-icon-person-tuandui2" v-else-if="nodeData.team"/>
            <span class="tree-title">{{nodeData.title}}</span>
        </template>
    </a-tree>
</template>
<script setup>
import { IconDown, IconDragDotVertical,IconFolder } from '@arco-design/web-vue/es/icon';
import { Icon } from '@arco-design/web-vue';

const IconFont = Icon.addFromIconFontCn({ src: 'https://at.alicdn.com/t/c/font_3758652_h4rag7nmbtc.js' });
const props=defineProps({
    treeData:{
        type:Array,
        default:[]
    }
})
</script>
<style lang="scss" scoped>
.tree-title{
    margin-left: 3px;
    top: 1px;
    position: relative;
}
:deep(.arco-tree-node-title:hover .arco-tree-node-drag-icon){
    opacity: 0;
}
:deep(.arco-tree-node-title){
    flex: 1;
}
</style>