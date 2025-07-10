import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Профессиональные трансляции медицинских мероприятий
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Проводите медицинские конференции и телемосты без технических
              сбоев — с гарантией качества и конфиденциальности
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <Icon name="Phone" className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              >
                <Icon name="Play" className="mr-2" />
                Посмотреть demo
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Icon
                  name="Shield"
                  className="mr-1 text-emerald-400"
                  size={16}
                />
                Конфиденциальность
              </div>
              <div className="flex items-center">
                <Icon name="Zap" className="mr-1 text-blue-400" size={16} />
                4K/HDR качество
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="mr-1 text-purple-400" size={16} />
                24/7 поддержка
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Для кого это?</h2>
            <p className="text-gray-400 text-lg">
              Наши решения идеально подходят для
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Pill",
                title: "Фармацевтические компании",
                description: "Запуск препаратов, обучение врачей",
              },
              {
                icon: "Users",
                title: "Ассоциации врачей",
                description: "Научные конференции, межрегиональные школы",
              },
              {
                icon: "Stethoscope",
                title: "Производители медоборудования",
                description: "Демонстрации технологий",
              },
              {
                icon: "Calendar",
                title: "Event-агентства",
                description: "Комплексная организация медицинских ивентов",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Решаем главные проблемы</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                Проблемы обычных решений:
              </h3>
              {[
                "Плохое качество звука/картинки, обрывы связи",
                "Нет специального оборудования для трансляций из операционных",
                "Риски утечки конфиденциальных данных",
              ].map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon
                    name="X"
                    className="text-red-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-300">{problem}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">
                Наше решение:
              </h3>
              {[
                "Аппаратный бондинг (стабильный интернет даже в «мертвых зонах»)",
                "Профессиональное оборудование 4K/HDR",
                "Защищенные каналы передачи данных",
              ].map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    className="text-emerald-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-300">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Rocket",
                title: "Технологии",
                items: [
                  "Собственный интернет-бондинг (5 сим-карт 4G)",
                  "Камеры для операционных с медицинскими протоколами",
                  "Видеомикшеры, интерком, стриминговые платформы",
                ],
              },
              {
                icon: "BarChart",
                title: "Полный цикл",
                items: [
                  "Предварительный тест связи",
                  "Лендинг для регистрации участников + личные кабинеты",
                  "Чат, голосования, аналитика после мероприятия",
                ],
              },
              {
                icon: "Shield",
                title: "Безопасность",
                items: [
                  "Конфиденциальность данных",
                  "Резервные каналы связи",
                  "Соответствие медицинским стандартам",
                ],
              },
            ].map((advantage, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name={advantage.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-white">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advantage.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Бриф",
                  description: "Уточняем детали (15 минут)",
                },
                {
                  step: "2",
                  title: "Тест-день",
                  description: "Проверяем оборудование и связь",
                },
                {
                  step: "3",
                  title: "Реализация",
                  description: "Трансляция + интерактив (чат, голосования)",
                },
                {
                  step: "4",
                  title: "Отчет",
                  description: "Статистика по участникам и активности",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши клиенты</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {[
              "Bayer",
              "Eisai",
              "MicroPort®",
              "РЖД-Медицина",
              "Минздрав НСО",
            ].map((client, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg text-center"
              >
                <p className="text-gray-300 font-semibold">{client}</p>
              </div>
            ))}
          </div>
          <Card className="bg-gray-700 border-gray-600 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-white">
                Кейс: Межрегиональная школа практикующих врачей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    50+
                  </div>
                  <p className="text-gray-300">Очных участников</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    60+
                  </div>
                  <p className="text-gray-300">Онлайн участников</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    100%
                  </div>
                  <p className="text-gray-300">Без технических сбоев</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Цены</h2>
          </div>
          <Card className="bg-gray-700 border-gray-600 max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                От 90 000 ₽
              </div>
              <CardTitle className="text-white">За мероприятие</CardTitle>
              <CardDescription className="text-gray-300">
                Точная стоимость зависит от сложности и длительности
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Хотите провести мероприятие без технических рисков?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Первая консультация — бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
            >
              <Icon name="Phone" className="mr-2" />
              +7 (XXX) XXX-XX-XX
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
            >
              <Icon name="Mail" className="mr-2" />
              contact@yoursite.ru
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <div className="flex items-center">
              <Icon name="Clock" className="mr-1" size={16} />
              Ответим в течение часа
            </div>
            <div className="flex items-center">
              <Icon name="CheckCircle" className="mr-1" size={16} />
              Гарантия качества
            </div>
            <div className="flex items-center">
              <Icon name="Award" className="mr-1" size={16} />
              Более 100 успешных проектов
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
