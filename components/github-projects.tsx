"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface GitHubProject {
  name: string
  description: string
  language: string
  stars: number
  url: string
  topics: string[]
}

export function GitHubProjects() {
  const [projects] = useState<GitHubProject[]>([
    {
      name: "The-ASTRACAT-DNS-Resolver",
      description: "Быстрый и безопасный DNS-резолвер с поддержкой DoH и DoT",
      language: "Go",
      stars: 15,
      url: "https://github.com/ASTRACAT2022/The-ASTRACAT-DNS-Resolver",
      topics: ["dns", "resolver", "security", "go"],
    },
    {
      name: "The-ASTRACAT-SOCKS5-Eliza",
      description: "Высокопроизводительный SOCKS5 прокси-сервер",
      language: "Go",
      stars: 8,
      url: "https://github.com/ASTRACAT2022/The-ASTRACAT-SOCKS5-Eliza",
      topics: ["socks5", "proxy", "networking", "go"],
    },
    {
      name: "The-AstraDNS",
      description: "Модульная система DNS с поддержкой кастомных правил",
      language: "Python",
      stars: 12,
      url: "https://github.com/ASTRACAT2022/The-AstraDNS",
      topics: ["dns", "python", "networking", "security"],
    },
    {
      name: "chromeVPN",
      description: "Простой VPN клиент для хоум нетворк лешего",
      language: "Python",
      stars: 5,
      url: "https://github.com/ASTRACAT2022/chromeVPN",
      topics: ["vpn", "chrome", "extension", "privacy"],
    },
  ])

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      Go: "bg-blue-500",
      Python: "bg-yellow-500",
      JavaScript: "bg-yellow-400",
      TypeScript: "bg-blue-600",
      Ruby: "bg-red-500",
    }
    return colors[language] || "bg-gray-500"
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4" />
                {project.stars}
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.topics.map((topic, topicIndex) => (
                <Badge key={topicIndex} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
              <span className="text-sm text-muted-foreground">{project.language}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Посмотреть код
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
