// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
    //开启命名空间
    namespaced:true,
    //准备actions——用于响应组件中的动作
    actions:{
        getShoppingCarts(context){
            axios.post("/shoppingTrolley/get",{
                token: sessionStorage.getItem('token'),
                dataNum: 20,
                pageNum: 1
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log('@@@',res)
                // console.log('###',context)
                context.state.shoppingCarts = res.data.data
            })
        },
        deleteShopping(context,id){
            axios.post("/shoppingTrolley/removeCommodity",{
                token: sessionStorage.getItem('token'),
                commodityId: id,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.shoppingCarts = []
                context.state.shoppingCarts = res.data.data
            })
        },
        alertShopping(context,row){
            console.log(context,row)
            axios.post("/shoppingTrolley/setCommodityNum",{
                token: sessionStorage.getItem('token'),
                commodityId: row.goods,
                commodityNum: row.num,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log(res)
                context.state.shoppingCarts = []
                context.state.shoppingCarts = res.data.data
            })
        },
        // 搜索零食
        searchSnack(context){
            axios.post("/goods/getCommoditiesWithType",{
                pageNumber: 1,
                commodityNum: 200,
                type:"零食大全"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.lingshidata = res.data.data
            })
        },
        searchHomeItem(context){
            axios.post("/goods/getCommoditiesWithType",{
                pageNumber: 1,
                commodityNum: 200,
                type:"家庭用品"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.homedata = res.data.data
            })
        },
        searchWallHanging(context){
            axios.post("/goods/getCommoditiesWithType",{
                pageNumber: 1,
                commodityNum: 200,
                type:"文艺壁挂"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.biguadata = res.data.data
            })
        },
        searchHardware(context){
            axios.post("/goods/getCommoditiesWithType",{
                pageNumber: 1,
                commodityNum: 200,
                type:"五金器材"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.wujindata = res.data.data
            })
        },
        searchClothes(context){
            axios.post("/goods/getCommoditiesWithType",{
                pageNumber: 1,
                commodityNum: 200,
                type:"潮流衣物"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.zhaoliudata = res.data.data
            })
        },
        searchTuiJian(context){
            axios.post("/goods/getRecommend",{
                pageNumber: 1,
                commodityNum: 200,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.tuijiandata = res.data.data
            })
        },
        searchYoHui(context){
            axios.post("/goods/getDiscount",{
                pageNumber: 1,
                commodityNum: 200,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                // console.log('yohui',res)
                context.state.yohuidata = res.data.data
            })
        },
        searchOrder(context){
            axios.post("/orders/getOrderForm",{
                token: sessionStorage.getItem('token'),
                pageNum: 1,
                dataNum: 200,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                context.state.orders = res.data.data
            })
        },
        searchAddress(context){
            axios.post("/userAddress/get",{
                token: sessionStorage.getItem('token'),
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log(res)
                context.state.address = res.data.data
            })
        },
        addAddress(context,row){
            console.log(context)
            console.log(row[0],'222',row[1],row[2])
            axios.post("/userAddress/add",{
                token: sessionStorage.getItem('token'),
                address: row[0],
                phoneNum: row[1],
                receivePeronName: row[2]
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log(res)
            })
        },
        deleteAddress(context,id){
            console.log(id)
            axios.post("/userAddress/remove",{
                token: sessionStorage.getItem('token'),
                addressId: id,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log(res)
            })
        },
        addtoshopping(context,commodityId){
            console.log(commodityId)
            axios.post("/shoppingTrolley/add",{
                token: sessionStorage.getItem('token'),
                commodityId: commodityId,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log(res)
            })
        },
        searchVa(context,keywords){
            console.log(keywords)
            axios.post("/goods/search",{
                pageNumber: 1,
                commodityNum:200,
                keyWords:keywords,
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( res => {
                console.log(res)
                context.state.searchList = res.data.data
            })
        },
    },
    //mutations——用于操作数据（state）
    mutations:{

    },
    //state——用于存储数据
    state:{
        lingshidata:[],
        homedata:[],
        wujindata:[],
        biguadata:[],
        zhaoliudata:[],
        tuijiandata:[],
        yohuidata:[],
        shoppingCarts:[],
        orders:[],
        address:[],
        searchList:[],
        test:'你好，世界！'
    },
    //对state数据进行加工，原数据不变，返回新结果
    getters:{

    }
}