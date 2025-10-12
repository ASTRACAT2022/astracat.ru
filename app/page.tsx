import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react"
import { ChannelMigrationNotice } from "@/components/channel-migration-notice"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { HeroSection } from "@/components/hero-section"
import { TelegramFeed } from "@/components/telegram-feed"
import { GitHubProjects } from "@/components/github-projects"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">ASTRACAT</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#projects"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Проекты
              </Link>
              <Link href="#news" className="flex items-center text-lg font-medium transition-colors hover:text-primary">
                Новости
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Контакты
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <Link
                href="https://t.me/astracatuo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Telegram
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <Link
                href="https://github.com/ASTRACAT2022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                GitHub
              </Link>
            </Button>
            <Button size="sm">
              <Link href="#contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <ChannelMigrationNotice />

        <section id="projects" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Наши проекты</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Инновационные решения для быстрого и безопасного интернета
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <ProjectCard
              title="ASTRACAT DNS"
              description="Быстрый и безопасный DNS-сервис, ускоренный на 34%"
              icon={<Globe className="h-12 w-12 text-primary" />}
              features={["Обновленный SNI-прокси", "Модифицированная балансировка", "Оптимизация под любые устройства"]}
              cta="Подключить"
              ctaLink="#dns-details"
              highlight="Быстрее на 34%"
            />

            <ProjectCard
              title="BrozeProxy"
              description="Надежный и быстрый прокси для браузеров и Telegram"
              icon={<Shield className="h-12 w-12 text-primary" />}
              features={["Высокая скорость соединения", "Поддержка Telegram", "Простая настройка"]}
              cta="Подключить"
              ctaLink="#proxy-details"
            />

            <ProjectCard
              title="ASTRACAT VPN"
              description="Безопасное и анонимное соединение для всех устройств"
              icon={<Zap className="h-12 w-12 text-primary" />}
              features={["Бесплатная подписка", "Высокая скорость", "Telegram бот для управления"]}
              cta="Подключить"
              ctaLink="https://t.me/astracatvpnX_bot"
              isExternal={true}
            />
          </div>
        </section>

        <section id="dns-details" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">ASTRACAT DNS</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Мы прокачали наш DNS — теперь он ещё шустрее!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Преимущества</CardTitle>
                <CardDescription>Почему наш DNS лучше</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Обновленный SNI-прокси</strong>
                      <p className="text-sm text-muted-foreground">Меньше задержек, больше стабильности</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Модифицированная балансировка</strong>
                      <p className="text-sm text-muted-foreground">Умное распределение запросов</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Безопасный и быстрый интернет</strong>
                      <p className="text-sm text-muted-foreground">Без тормозов и задержек</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <strong>Оптимизация под любые устройства</strong>
                      <p className="text-sm text-muted-foreground">Работает на всех платформах</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Как подключить</CardTitle>
                <CardDescription>Настройте DNS за несколько шагов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-1">
                    <div className="font-medium">IPv4:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      87.121.221.179
                    </code>
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">DNS-адрес:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      dns.astracat.ru
                    </code>
                  </div>
                  <div className="pt-4">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Настройте DNS в сетевых параметрах устройства</li>
                      <li>Проверьте пинг — почувствуйте разницу!</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link
                    href="https://t.me/astracatuo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-center"
                  >
                    Получить помощь с настройкой
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="proxy-details" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">BrozeProxy</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Надежный и быстрый прокси для браузеров и Telegram
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Настройки подключения</CardTitle>
                <CardDescription>Данные для настройки прокси</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-1">
                    <div className="font-medium">Адрес:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      brozeproxy.astracat.ru
                    </code>
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Порт:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">9898</code>
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Логин:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      BrozeProxy
                    </code>
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Пароль:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      BrozeProxy
                    </code>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-red-500 font-bold">🔥 НЕ ИСПОЛЬЗОВАТЬ ДЛЯ SmartTube! 🔥</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Обновленный прокси</CardTitle>
                <CardDescription>Новый, более быстрый адрес</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-1">
                    <div className="font-medium">Новый адрес:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      st.astracat.ru:7777
                    </code>
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Логин/Пароль:</div>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      astranet
                    </code>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm">Старый адрес тоже работает, но новый быстрее! 😉</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link
                    href="https://t.me/astracatuo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-center"
                  >
                    Получить помощь с настройкой
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="news" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Последние новости</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Следите за обновлениями из нашего Telegram канала
            </p>
          </div>

          <div className="mt-12">
            <TelegramFeed />
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              <Link
                href="https://t.me/astracatuo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Подписаться на канал
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="github" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Открытые проекты</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Изучите исходный код наших проектов на GitHub
            </p>
          </div>

          <div className="mt-12">
            <GitHubProjects />
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              <Link
                href="https://github.com/ASTRACAT2022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Посмотреть все проекты
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Связаться с нами</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Есть вопросы? Мы всегда на связи!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Наш официальный канал</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Подпишитесь на наш Telegram канал для получения последних новостей и обновлений.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link
                    href="https://t.me/astracatuo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-center"
                  >
                    @astracatuo
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>VPN Бот</CardTitle>
                <CardDescription>Управление VPN подпиской</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Используйте нашего Telegram бота для управления вашей бесплатной VPN подпиской.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link
                    href="https://t.me/astracatvpnX_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-center"
                  >
                    @astracatvpnX_bot
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GitHub</CardTitle>
                <CardDescription>Наши открытые проекты</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Изучите исходный код наших проектов, включая DNS-резолвер, SOCKS5-прокси и другие инновационные
                  решения.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link
                    href="https://github.com/ASTRACAT2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-center"
                  >
                    @ASTRACAT2022
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Техподдержка</CardTitle>
                <CardDescription>Помощь с настройкой</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Если у вас возникли проблемы с подключением или настройкой наших сервисов, напишите нам.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link
                    href="https://t.me/astracatuo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full justify-center"
                  >
                    Написать в поддержку
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 ASTRACAT Inc. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://t.me/astracatuo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Telegram
            </Link>
            <Link
              href="https://github.com/ASTRACAT2022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
