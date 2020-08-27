// const webpack = require('webpack')

let plugins = []

if (process.env.NODE_ENV === 'production') {
    plugins.push('transform-remove-console')
}

export default {
    // mode: 'universal',
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: '忆家,YIHOME_澳洲留学租房_英国留学租房-忆家官网',
        meta: [
            {charset: 'utf-8'},
            {
                hid: 'description',
                name: 'description',
                content: 'YIHOME忆家是国内领先的海外留学租房平台，租房服务包括：澳洲留学租房、英国留学租房、雷丁租房、布莱顿租房、墨尔本等海外留学租房生态圈。致力为英国和澳洲市场海外留学生提供长期租住解决方案，咨询热线：021-66610767'
            },
            {name: 'apple-mobile-web-app-capable', content: 'yes'}, // iOS浏览器禁止缩放
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
            },
            {hid: 'keywords', name: 'keywords', content: 'YIHOME,留学生租房,澳洲留学租房,英国留学租房'},

            {name: 'renderer', content: 'webkit'}, // 强制让360浏览器使用Webkit内核
            {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: "https://ditu.google.cn/maps/api/js?key=AIzaSyBvJmcaYjx2WDBwhoQtxJNIHwfvodK2UEk&signed_in=true"},
            {src: "https://map.qq.com/api/js?v=2.exp&key=A64BZ-NCVKX-X4M4Q-7V7GK-7FH6T-OEFUB"},
            {src: 'https://hm.baidu.com/hm.js?b127ed932a7cdf1b6d9a5b7c238903b3'},
            // {src:"https://components.demo.mydriver-international.com/mdr-components.js"}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#3B44AC'},
    //loading: '@/components/loading.vue',
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        "swiper/css/swiper.css",
        "assets/style/iconfont.css",
        "assets/style/common.scss",
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        "@/plugins/vant.js",
        {src: '@/plugins/index.js', ssr: false},
        {src: '@/plugins/filters.js', ssr: true},
        {src: '@/plugins/element-ui', ssr: true},
        {src: '@/plugins/bootstrap', ssr: true},
        {src: '@/plugins/api', ssr: false},
        {src: "@/plugins/vue-awesome-swiper.js", ssr: false},
        {src: "@/plugins/vant.js", ssr: false},
        {src: '@/plugins/iview', ssr: true},
        {src: '@/plugins/baiduStatistics.js'},
        {src: '@/plugins/ga.js', ssr: false},
        // { src: '@/plugins/maps', ssr: false },
        //{ src: "@/plugins/vue-lazyload.js" ,ssr: false}
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        "@nuxtjs/proxy",
        'bootstrap-vue/nuxt',
    ],
	proxy: [
		[
		    '/yihome-admin/api',
            {
                target: 'https://inyihome.com',
                pathRewrite: { '^/yihome-admin/api': '/yihome-admin/api'}
            }
        ]
	],
    bootstrapVue: {
        components: ['BContainer', 'BRow', 'BCol', 'BImg']
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    // router:{
    //     base:"/dist", //此为根目录，如果有具体目录需求按实际情况写
    // },
    /*
    ** Build configuration
    */
    build: {
        optimization: {
            splitChunks: {
                chunks: 'all',
                automaticNameDelimiter: '.',
                maxAsyncRequests: 7,
                cacheGroups: {
                    vuetify: {
                        test: /node_modules[\\/]vuetify/,
                        chunks: 'all',
                        priority: 20,
                        name: true
                    },
                    elementui: {
                        test: /node_modules[\\/]element-ui/,
                        chunks: 'all',
                        priority: 20,
                        name: true
                    }
                }
            }
        },
        analyze: {
            analyzerMode: 'static'
        },
        babel: {
            'plugins': plugins
        },
        extractCSS: {allChunks: true},
        transpile: [/^element-ui/, /^bootstrapVue/],
        // postcss: {
        //     plugins: {
        //         'postcss-pxtorem': {
        //             rootValue: 37.5,
        //             propList: ['*'],
        //             selectorBlackList: ['mint-']
        //         }
        //     }
        // },
        /* loaders:[
            //小图片的64位打包
              {
                test:/\.(png|jpe?g|gif|svg)$/,
                loader:"url-loader",
                query:{
                  limit:1000,
                  name:'img/[name].[hash].[ext]'
                }
              },
              {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 1000,
                  name: 'fonts/[name].[hash:7].[ext]'
                }
              }
        ], */
        /* plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery'
            })
        ], */

        /*
        ** You can extend webpack config here
        */

        extend(config, ctx) {
        }
    }
}
