import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  cta: string
  ctaLink: string
  highlight?: string
  isExternal?: boolean
}

export function ProjectCard({
  title,
  description,
  icon,
  features,
  cta,
  ctaLink,
  highlight,
  isExternal = false,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border bg-background">
      <CardHeader className="flex flex-row items-center gap-4 p-6">
        {icon}
        <div className="grid gap-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        {highlight && (
          <Badge className="ml-auto" variant="secondary">
            {highlight}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <ul className="grid gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 mt-auto">
        <Button className="w-full" asChild>
          {isExternal ? (
            <Link href={ctaLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <Link href={ctaLink} className="flex items-center justify-center">
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
