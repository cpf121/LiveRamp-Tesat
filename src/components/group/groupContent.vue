<template>
    <div class="content">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="item in bread" :key="item">{{item}}</a-breadcrumb-item>
        </a-breadcrumb>
        <div>
            <a-input class="search" placeholder="Search" allow-clear v-model="searchValue" @press-enter="handleSearch" @clear="searchClear">
                <template #prefix>
                    <icon-search />
                </template>
            </a-input>
        </div>
        <a-link href="link" :hoverable="false" @click="handleClear">Clear All</a-link>
        <span class="selectBlod">{{checkedValue.length}} Selected</span>
        <div>
            <a-checkbox-group v-model="checkedValue" @change="checkChange">
                <a-grid :cols="3" :colGap="24" :rowGap="16">
                    <a-checkbox v-for="item in checkList" :value="item.value">
                        <span>{{item.label}}</span>
                        <span style="margin-left: 30px;">{{item.value}}</span>
                    </a-checkbox>
                </a-grid>
            </a-checkbox-group>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { IconSearch } from '@arco-design/web-vue/es/icon';

const props=defineProps({
    id:{
        type:String,
        default:''
    },
    data:{
        type:Object,
        default:{}
    }
})
const emit=defineEmits(['checkChange'])
const bread=ref([])
const checkList=ref([])
const getData=()=>{
    getBreadByKey(props.id).then(res=>{
        bread.value=res
    })
    getcheckBoxDataByKey(props.id).then(res=>{
        checkList.value=res
    })
}
const checkedValue=ref([]);
onMounted(()=>{
    getData();

})
const searchValue=ref('');
const handleSearch=()=>{
    checkList.value=checkList.value.filter(item=>item.label==searchValue.value)
}
const searchClear=()=>{
    getcheckBoxDataByKey(props.id).then(res=>{
        checkList.value=res
    })
}
const handleClear=(e)=>{
    checkedValue.value=[]
    e.preventDefault()
}

const checkChange=()=>{
    let head=[]
    checkedValue.value.forEach(item=>{
        head.push(checkList.value.find(t=>t.value==item).label)
    })
    emit('checkChange',props.data,'= '+ head.join(','))
}

/**
 * 模拟面包屑数据
 */
const breadData=ref([
    {
        key:'0-1-1',
        bread:['一级0-1-1','二级0-1-1','三级0-1-1']
    },
    {
        key:'0-1-2',
        bread:['一级0-1-2','二级0-1-2','三级0-1-2']
    },
    {
        key:'0-2-1',
        bread:['一级0-2-1','二级0-2-1','三级0-2-1']
    },
    {
        key:'0-2-2',
        bread:['一级0-2-2','二级0-2-2','三级0-2-2']
    },
    {
        key:'0-3-1',
        bread:['一级0-3-1','二级0-3-1','三级0-3-1']
    },
    {
        key:'0-3-2',
        bread:['一级0-3-2','二级0-3-2','三级0-3-2']
    },
    {
        key:'0-4-1',
        bread:['一级0-4-1','二级0-4-1','三级0-4-1']
    },
    {
        key:'0-4-2',
        bread:['一级0-4-2','二级0-4-2','三级0-4-2']
    },
    {
        key:'0-5-1',
        bread:['一级0-5-1','二级0-5-1','三级0-5-1']
    },
    {
        key:'0-5-2',
        bread:['一级0-5-2','二级0-5-2','三级0-5-2']
    },
    {
        key:'0-6-1',
        bread:['一级0-6-1','二级0-6-1','三级0-6-1']
    },
    {
        key:'0-6-2',
        bread:['一级0-6-2','二级0-6-2','三级0-6-2']
    },
    {
        key:'0-7-1',
        bread:['一级0-7-1','二级0-7-1','三级0-7-1']
    },
    {
        key:'0-7-2',
        bread:['一级0-7-2','二级0-7-2','三级0-7-2']
    }
])
/**
 * 获取面包屑数据
 */
const getBreadByKey=(key)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = breadData.value.find(item=>item.key===key)
            resolve(data?data.bread:[])
        },1000)
    })
}
/**
 * 模拟checkbox数据
 */
const checkBoxData=ref([
    {
        key:'0-1-1',
        list:[
            {
                label:'label1 0-1-1',
                value:1
            },{
                label:'label2 0-1-1',
                value:2
            },
            {
                label:'label3 0-1-1',
                value:3
            },
            {
                label:'label4 0-1-1',
                value:4
            },
            {
                label:'label5 0-1-1',
                value:5
            },
            {
                label:'label6 0-1-1',
                value:6
            },
            {
                label:'label7 0-1-1',
                value:7
            }
        ]
    },
    {
        key:'0-1-2',
        list:[
            {
                label:'label1 0-1-2',
                value:1
            },{
                label:'label2 0-1-2',
                value:2
            },
            {
                label:'label3 0-1-2',
                value:3
            },
            {
                label:'label4 0-1-2',
                value:4
            },
            {
                label:'label5 0-1-2',
                value:5
            },
            {
                label:'label6 0-1-2',
                value:6
            },
            {
                label:'label7 0-1-2',
                value:7
            }
        ]
    },
    {
        key:'0-2-1',
        list:[
            {
                label:'label1 0-2-1',
                value:1
            },{
                label:'label2 0-2-1',
                value:2
            },
            {
                label:'label3 0-2-1',
                value:3
            },
            {
                label:'label4 0-2-1',
                value:4
            },
            {
                label:'label5 0-2-1',
                value:5
            },
            {
                label:'label6 0-2-1',
                value:6
            },
            {
                label:'label7 0-2-1',
                value:7
            }
        ]
    },
    {
        key:'0-2-2',
        list:[
            {
                label:'label1 0-2-2',
                value:1
            },{
                label:'label2 0-2-2',
                value:2
            },
            {
                label:'label3 0-2-2',
                value:3
            },
            {
                label:'label4 0-2-2',
                value:4
            },
            {
                label:'label5 0-2-2',
                value:5
            },
            {
                label:'label6 0-2-2',
                value:6
            },
            {
                label:'label7 0-2-2',
                value:7
            }
        ]
    },
    {
        key:'0-3-1',
        list:[
            {
                label:'label1 0-3-1',
                value:1
            },{
                label:'label2 0-3-1',
                value:2
            },
            {
                label:'label3 0-3-1',
                value:3
            },
            {
                label:'label4 0-3-1',
                value:4
            },
            {
                label:'label5 0-3-1',
                value:5
            },
            {
                label:'label6 0-3-1',
                value:6
            },
            {
                label:'label7 0-3-1',
                value:7
            }
        ]
    },
    {
        key:'0-3-2',
        list:[
            {
                label:'label1 0-3-2',
                value:1
            },{
                label:'label2 0-3-2',
                value:2
            },
            {
                label:'label3 0-3-2',
                value:3
            },
            {
                label:'label4 0-3-2',
                value:4
            },
            {
                label:'label5 0-3-2',
                value:5
            },
            {
                label:'label6 0-3-2',
                value:6
            },
            {
                label:'label7 0-3-2',
                value:7
            }
        ]
    },
    {
        key:'0-4-1',
        list:[
            {
                label:'label1 0-4-1',
                value:1
            },{
                label:'label2 0-4-1',
                value:2
            },
            {
                label:'label3 0-4-1',
                value:3
            },
            {
                label:'label4 0-4-1',
                value:4
            },
            {
                label:'label5 0-4-1',
                value:5
            },
            {
                label:'label6 0-4-1',
                value:6
            },
            {
                label:'label7 0-4-1',
                value:7
            }
        ]
    },
    {
        key:'0-4-2',
        list:[
            {
                label:'label1 0-4-2',
                value:1
            },{
                label:'label2 0-4-2',
                value:2
            },
            {
                label:'label3 0-4-2',
                value:3
            },
            {
                label:'label4 0-4-2',
                value:4
            },
            {
                label:'label5 0-4-2',
                value:5
            },
            {
                label:'label6 0-4-2',
                value:6
            },
            {
                label:'label7 0-4-2',
                value:7
            }
        ]
    },
    {
        key:'0-5-1',
        list:[
            {
                label:'label1 0-5-1',
                value:1
            },{
                label:'label2 0-5-1',
                value:2
            },
            {
                label:'label3 0-5-1',
                value:3
            },
            {
                label:'label4 0-5-1',
                value:4
            },
            {
                label:'label5 0-5-1',
                value:5
            },
            {
                label:'label6 0-5-1',
                value:6
            },
            {
                label:'label7 0-5-1',
                value:7
            }
        ]
    },
    {
        key:'0-5-2',
        list:[
            {
                label:'label1 0-5-2',
                value:1
            },{
                label:'label2 0-5-2',
                value:2
            },
            {
                label:'label3 0-5-2',
                value:3
            },
            {
                label:'label4 0-5-2',
                value:4
            },
            {
                label:'label5 0-5-2',
                value:5
            },
            {
                label:'label6 0-5-2',
                value:6
            },
            {
                label:'label7 0-5-2',
                value:7
            }
        ]
    },
    {
        key:'0-6-1',
        list:[
            {
                label:'label1 0-6-1',
                value:1
            },{
                label:'label2 0-6-1',
                value:2
            },
            {
                label:'label3 0-6-1',
                value:3
            },
            {
                label:'label4 0-6-1',
                value:4
            },
            {
                label:'label5 0-6-1',
                value:5
            },
            {
                label:'label6 0-6-1',
                value:6
            },
            {
                label:'label7 0-6-1',
                value:7
            }
        ]
    },
    {
        key:'0-6-2',
        list:[
            {
                label:'label1 0-6-2',
                value:1
            },{
                label:'label2 0-6-2',
                value:2
            },
            {
                label:'label3 0-6-2',
                value:3
            },
            {
                label:'label4 0-6-2',
                value:4
            },
            {
                label:'label5 0-6-2',
                value:5
            },
            {
                label:'label6 0-6-2',
                value:6
            },
            {
                label:'label7 0-6-2',
                value:7
            }
        ]
    },
    {
        key:'0-7-1',
        list:[
            {
                label:'label1 0-7-1',
                value:1
            },{
                label:'label2 0-7-1',
                value:2
            },
            {
                label:'label3 0-7-1',
                value:3
            },
            {
                label:'label4 0-7-1',
                value:4
            },
            {
                label:'label5 0-7-1',
                value:5
            },
            {
                label:'label6 0-7-1',
                value:6
            },
            {
                label:'label7 0-7-1',
                value:7
            }
        ]
    },
    {
        key:'0-7-2',
        list:[
            {
                label:'label1 0-7-2',
                value:1
            },{
                label:'label2 0-7-2',
                value:2
            },
            {
                label:'label3 0-7-2',
                value:3
            },
            {
                label:'label4 0-7-2',
                value:4
            },
            {
                label:'label5 0-7-2',
                value:5
            },
            {
                label:'label6 0-7-2',
                value:6
            },
            {
                label:'label7 0-7-2',
                value:7
            }
        ]
    }
])
/**
 * 获取checkbox数据
 */
const getcheckBoxDataByKey=(key)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = checkBoxData.value.find(item=>item.key===key)
            resolve(data?data.list:[])
        },1000)
    })
}
</script>
<style lang="scss" scoped>
.content{
    .search{
        width: 220px;
        border: 1px solid #CCC;
        background-color: #FFF;
        border-radius: 4px;
        margin: 10px 0;
    }
    .selectBlod{
        font-weight: bold;
        margin-left: 10px;
    }
}
</style>