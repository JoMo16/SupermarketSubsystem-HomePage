import { createRouter,createWebHistory } from "vue-router";
import LoginRegisterForgot_Password from "@/pages/loginRegisterForgot_Password/LoginRegisterForgot_Password";
import ShouYe from "@/pages/shouYe/ShouYe";
import PersonalCenter from "@/pages/personalCenter/PersonalCenter";
import Shopping from "@/pages/shopping/Shopping";
import YoHuiCenter from "@/pages/yoHuiCenter/YoHuiCenter";
import RecommendedToday from "@/pages/recommendedToday/RecommendedToday";
import Supermarket from "@/pages/supermarket/Supermarket";
import HouseholdGoods from "@/pages/householdGoods/HouseholdGoods";
import Hardware from "@/pages/hardware/Hardware";
import ArtWallHanging from "@/pages/artWallHanging/ArtWallHanging";
import TrendyClothes from "@/pages/trendyClothes/TrendyClothes";
import TransactionContent from "@/pages/transactionContent/TransactionContent";
import pay from "@/pages/defray/Pay";
import address from "@/pages/personalCenter/address/Address";
import historicalOrders from "@/pages/personalCenter/historicalOrders/HistoricalOrders";
import center from "@/pages/personalCenter/center/Center";
import Register from "@/pages/loginRegisterForgot_Password/Register";
import SearchPage from "@/pages/SearchPage";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'ShouYe',
            component:ShouYe,
            meta:{title:'E购'}
        },
        {
            path:'/searchPage',
            name:'SearchPage',
            component:SearchPage,
            meta:{title:'搜索'}
        },
        {
            path:'/login',
            component:LoginRegisterForgot_Password,
            meta:{title:'登陆注册'},
            children:[
                {
                    path: '',
                    components: {
                        default: Register
                    }
                }
            ]
        },
        {
            path:'/shopping',
            component:Shopping,
            meta:{title:'购物车'}
        },
        {
            path:'/yohui',
            component:YoHuiCenter,
            meta:{title:'优惠中心'}
        },
        {
            path:'/recommendedToday',
            component:RecommendedToday,
            meta:{title:'今日推荐'}
        },
        {
            path:'/supermarket',
            component:Supermarket,
            meta:{title:'零食超市'}
        },
        {
            path:'/householdGoods',
            component:HouseholdGoods,
            meta:{title:'家庭用品'}
        },
        {
            path:'/hardware',
            component:Hardware,
            meta:{title:'五金器材'}
        },
        {
            path:'/artWallHanging',
            component:ArtWallHanging,
            meta:{title:'文艺壁挂'}
        },
        {
            path:'/trendyClothes',
            component:TrendyClothes,
            meta:{title:'潮流衣物'}
        },
        {
            path:'/personalCenter',
            component:PersonalCenter,
            meta:{title: '个人中心'},
            children:[
                {
                    path:'',
                    components:{
                        default:address,
                        'center':center,
                        'historicalOrders':historicalOrders,
                    }
                }
            ]
        },
        {
            path:'/transactionContent',
            name:'transactionContent',
            component:TransactionContent,
            meta:{title: '物品内容'},
            props($route){
                return {
                    name:$route.query.name,
                    price:$route.query.price,
                    discount:$route.query.discount,
                    imgname:$route.query.imgname,
                    description:$route.query.description,
                    commodityId:$route.query.commodityId,
                }
            }
        },
        {
            name:'pay',
            path:'/pay',
            component:pay,
            meta:{title: '订单页'},
            props($route){
                return {
                    shuJu:$route.query.shuJu,
                }
            }
        },
    ]
})

router.beforeEach((to,from,next) => {
    // console.log('前置路由守卫',to,from)
    document.title = to.meta.title || 'E购'
    next()
})

export default router