const path = require("path");
// config/index

const config = {
  projectName: 'nutui',
  date: '2024-2-20',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-html'],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
      force: true,
      exclude: ['@nutui/nutui-react-taro', '@nutui/icons-react-taro']
    }
  },
  cache: {
    enable: false,
  },
  alias: {
    "@": path.resolve(__dirname, "..", "src"),


  },
  sass: {},
  mini: {
    miniCssExtractPluginOption: {
      //忽略css文件引入顺序
      ignoreOrder: true
    },
    //智能提取分包依赖
    optimizeMainPackage: {
      enable: true
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      htmltransform: {
        enable: true,
        // 设置成 false 表示 不去除 * 相关的选择器区块
        // 假如开启这个配置，它会把 tailwindcss 整个 css var 的区域块直接去除掉
        config: {
          removeCursorStyle: false,
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },

    },

  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    // esnextModules: ['nutui-react'],
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['nut-']
        }
      },
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
