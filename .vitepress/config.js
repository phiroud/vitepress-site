import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Truyện Tình Cảm Quân Sinh',
  description: 'Bộ truyện ngắn về tình cảm của cặp đôi trong thời học quân sự',
  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Truyện', link: '/story.md' }
    ],
    sidebar: [
      {
        text: 'Truyện',
        items: [
          { text: 'Tình yêu trong thời quân sinh', link: '/story.md' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phiroud/vitepress-site' }
    ]
  }
})