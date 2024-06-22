// 在vite、Node、DOM中输入全局变量和环境变量

// Vite
declare global {
  interface ImportMetaEnv {
    MY_ENV: string
  }
}

// import.meta.env.MY_ENV // string

// Node
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ENV: string
    }
  }
}

// process.env.MY_ENV // string

// window环境
declare global {
  interface Window {
    MY_ENV: string
  }
}

// window.MY_ENV // string

// 只是声明了类型，但是还要确保将其添加到.env中

export {}
