import { CalendarIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  title: string
  date: string
  content: string
  tags?: string[]
}

export function NewsCard({ title, date, content, tags = [] }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {date}
          </div>
        </div>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      {tags.length > 0 && (
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
