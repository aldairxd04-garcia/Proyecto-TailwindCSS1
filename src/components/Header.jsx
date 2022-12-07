import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  XMarkIcon,
  UserIcon,
  HomeModernIcon,
  UsersIcon,
  WrenchIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const somos = [
  {
    name: 'Personal',
    description:
      'Con la capacidad de brindarle asistencia y respuesta las 24 horas, los 7 días a la semana.',
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'Instalaciones',
    description:
      'Como especialistas competentes, estamos capacitados por las mejores marcas.',
    href: '#',
    icon: HomeModernIcon,
  },
  {
    name: 'Clientes',
    description:
      'Contamos con la confianza de reconocidas empresas que avalan la calidad de nuestro servicio.',
    href: '#',
    icon: UsersIcon,
  },
]
const despliegue2 = [
  {
    name: 'Dinamómetro',
    description:
      'Con la capacidad de brindarle asistencia y respuesta las 24 horas, los 7 días a la semana.',
    href: '#',
    icon: WrenchIcon,
  },
  {
    name: 'Servicios',
    description:
      'Como especialistas competentes, estamos capacitados por las mejores marcas.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Productos',
    description:
      'Contamos con la confianza de reconocidas empresas que avalan la calidad de nuestro servicio.',
    href: '#',
    icon: ShoppingBagIcon,
  },
]
const callsToAction = [
  { name: 'Llámanos', href: '#', icon: DevicePhoneMobileIcon },
  { name: 'Lunes a domingo - 24h', href: '#', icon: ClockIcon },
]
const resources = [
  {
    name: 'Admon. de Mantenimiento',
    description:
      'Enfocados en mejorar la integridad de los activos con el uso de equipos modernos y técnicas de inspección comprobadas.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Mantenimiento',
    description:
      'Servicios de mantenimiento preventivo y correctivo a equipos y componentes críticos.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Capacitación',
    description:
      'Capacitación para mantenimiento y operación de componentes críticos.',
    href: '#',
    icon: CalendarIcon,
  },
]
// const recentPosts = [
//   { id: 1, name: 'Boost your conversion rate', href: '#' },
//   {
//     id: 2,
//     name: 'How to use search engine optimization to drive traffic to your site',
//     href: '#',
//   },
//   { id: 3, name: 'Improve your customer experience', href: '#' },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-14"
                src="https://imgur.com/NJHUpaQ.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-slate-900 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <a
            href="#"
            className="text-base font-bold text-gray-100 hover:text-gray-900"
          >
            INICIO
          </a>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-orange-400' : 'text-gray-100',
                      'group inline-flex items-center rounded-md bg-slate-900 text-base font-bold hover:text-orange-300 focus:outline-none'
                    )}
                  >
                    <span>SOMOS</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-orange-400' : 'text-gray-100',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-slate-100 px-5 py-6 sm:gap-8 sm:p-8">
                          {somos.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-orange-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-orange-400' : 'text-gray-100',
                      'group inline-flex items-center rounded-md bg-slate-900 text-base font-bold hover:text-orange-300 focus:outline-none'
                    )}
                  >
                    <span>¿QUÉ OFRECEMOS?</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-orange-400' : 'text-gray-100',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-slate-100 px-5 py-6 sm:gap-8 sm:p-8">
                          {despliegue2.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-orange-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-orange-400' : 'text-gray-100',
                      'group inline-flex items-center rounded-md bg-slate-900 text-base font-bold hover:text-orange-300 focus:outline-none '
                    )}
                  >
                    <span>¿QUÉ HACEMOS?</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-orange-400' : 'text-gray-100',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-orange-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        {/* <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="truncate text-base"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul> 
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-orange-600 hover:text-orange-500"
                            >
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-bold text-gray-100 hover:text-gray-900"
            >
              INICIA SESIÓN
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {despliegue2.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-orange-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Personal
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Instalaciones
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  ¡Recomienda el servicio!{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-500">
                    Inicia Sesión
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
