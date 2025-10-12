"use client"

import { useState } from "react"

import { NewsCard } from "@/components/news-card"

interface TelegramPost {
  id: number
  title: string
  date: string
  content: string
  tags: string[]
}

export function TelegramFeed() {
  const [posts, setPosts] = useState<TelegramPost[]>([
    {
      id: 1,
      title: "🚀 ASTRACAT DNS стал быстрее на 34%!",
      date: "15.07.2024",
      content:
        "Мы прокачали наш DNS — теперь он ещё шустрее благодаря обновленному SNI-прокси и модифицированной балансировке. Подключай и тестируй скорость: IPv4: 87.121.221.179, DNS-адрес: dns.astracat.ru",
      tags: ["DNS", "Обновление", "Скорость"],
    },
    {
      id: 2,
      title: "ASTRACAT представляет: BrozeProxy!",
      date: "10.07.2024",
      content:
        "Теперь у вас есть надежный и быстрый прокси для браузеров и Telegram! Адрес: brozeproxy.astracat.ru, Порт: 9898, Логин: BrozeProxy, Пароль: BrozeProxy. НЕ ИСПОЛЬЗОВАТЬ ДЛЯ SmartTube!",
      tags: ["Прокси", "Telegram", "Безопасность"],
    },
    {
      id: 3,
      title: "🎉 КРУТЫЕ НОВОСТИ! 🎉",
      date: "05.07.2024",
      content:
        "Мы запустили домен astracat.ru! Это открывает огромные возможности для наших проектов! CDN от Cloudflare теперь ускоряет работу наших серверов, делая загрузку контента молниеносной!",
      tags: ["Домен", "CDN", "Cloudflare"],
    },
  ])

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <NewsCard
          key={post.id}
          title={post.title}
          date={post.date}
          content={post.content.replace(/@astracatui/g, "@astracatuo")}
          tags={post.tags}
        />
      ))}
    </div>
  )
}
