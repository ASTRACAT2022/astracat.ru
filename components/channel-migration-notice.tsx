import Link from "next/link"
import { AlertCircle } from "lucide-react"

export function ChannelMigrationNotice() {
  return (
    <div className="container py-6">
      <div className="mx-auto max-w-[58rem]">
        <div className="rounded-lg border-2 border-blue-500/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-500/20 p-3">
              <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-2">
                📢 Мы переехали в новый Telegram канал!
              </h3>
              <p className="text-muted-foreground mb-3">
                Наш новый официальный канал:{" "}
                <Link
                  href="https://t.me/astracatuo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-primary underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  @astracatuo
                </Link>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Подпишитесь на новый канал, чтобы получать последние новости, обновления и технические анонсы от команды
                ASTRACAT!
              </p>
              <Link
                href="https://t.me/astracatuo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Перейти в новый канал →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
