import { defineConfig, presetWind3 } from 'unocss'
export default defineConfig({
  presets: [
    presetWind3({
      important: "#app"
    }), // 启用默认预设（类似 Tailwind）
  ],
  // 自定义规则
  rules: [
  ],
  // 自定义快捷方式
  shortcuts: {

  }
})
