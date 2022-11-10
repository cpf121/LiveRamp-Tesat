<template>
    <a-layout class="layout">
        <a-layout-sider class="left">
            <tree :treeData="treeData" @drag-start="dragstart"></tree>
        </a-layout-sider>
        <a-layout-content @dragover="dragover" @drop="onDrop" class="lay-content">
            <div v-for="(item,index) in groupData" :key="item">
                <a-button type="primary" shape="round" v-if="index>0" class="andBtn">AND <IconDown></IconDown></a-button>
                <group :groupData="item" @addGroup="addGroup"></group>
            </div>
            
        </a-layout-content>
    </a-layout>
</template>
<script setup>
import tree from './tree/index.vue';
import group from './group/index.vue';
import { ref,h } from 'vue';
import { Message } from '@arco-design/web-vue';
import { IconDown } from '@arco-design/web-vue/es/icon';
const treeData=ref([
    {
        title: 'Node1',
        key: '0-0',
        folder:true,
        children: [
            {
                title: 'Child Node1',
                key: '0-3-1',
                team:true,
                draggable: true,
            },
            {
                title: 'Child Node2',
                key: '0-3-2',
                team:true,
                draggable: true,
            },
        ],
    },
    {
        title: 'Node2',
        key: '0-1',
        folder:true,
        children: [
            {
                title: 'Child Node2-1',
                key: '0-2',
                folder:true,
                children:[
                    {
                        title: 'Child Node2-1-1',
                        key: '0-4-1',
                        team:true,
                        draggable: true,
                    }
                ]
            },
            {
                title: 'Child Node2-2',
                key: '0-4-2',
                team:true,
                draggable: true,
            },
        ],
    },
]);
const temp=ref(null)


const dragover=(e)=>{
    var ev=e||window.event;
    ev.preventDefault();
}

const dragstart=(e,node)=>{
    temp.value=node;
    console.log(e,node)
}

const groupData=ref([
    [{
        title:'分组1-1',
        key:'0-1-1',
        head:''
    },{
        title:'分组1-2',
        key:'0-1-2',
        head:''
    }],
    [{
        title:'分组2-1',
        key:'0-2-1',
        head:''
    },{
        title:'分组2-2',
        key:'0-2-2',
        head:''
    }]
])
const onDrop = (e) => {
    let dataArr = getArr()
    if(dataArr.indexOf(temp.value.key)>-1){
        Message.warning('The current filter condition already exists!')
        return
    }
    if(groupData.value.length==0||groupData.value[groupData.value.length-1].length>=2){
        groupData.value.push([temp.value])
    }else{
        groupData.value[groupData.value.length-1].push(temp.value)
    }
};
const getArr=()=>{
    //扁平化groupData
    return groupData.value.reduce((arr=[],cur)=>{
        return arr.concat(cur.map(item=>item.key))
    },[])
}

const addGroup=(currGroup)=>{
    let dataArr = getArr()
    if(dataArr.indexOf(temp.value.key)>-1){
        Message.warning('The current filter condition already exists!')
        return
    }
    currGroup.push(temp.value)
}
</script>
<style lang="scss" scoped>
.layout{
    height: 100%;
    .left{
        background: #fff;
        width: 405px !important;
        border-right: 1px solid #e8e8e8;
        box-shadow: none;
    }
    .lay-content{
        padding: 0 10px;
        background-color: #F0F7EE;
        text-align: left;
        .andBtn{
            margin-left: 15px;
        }
    }
}
</style>