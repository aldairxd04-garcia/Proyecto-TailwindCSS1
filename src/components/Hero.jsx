import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <div className=" bg-[url('https://i.imgur.com/mNJwpee.jpg')]">
      <Container className="pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
          RIG SERVICE &{' '}
          <div className="relative -skew-y-3 transform bg-gradient-to-tl from-[#e0a300] to-[#c6420c] transition delay-150 duration-700 ease-in-out hover:-translate-y-1  hover:scale-110 md:mx-44">
            <span className="relative text-orange-100">ENGINEERING</span>
          </div>{' '}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor
          pharetra sem, ac venenatis nibh porta a. Donec vel elementum enim,
          vitae fermentum mi. Curabitur eget tortor quis nunc eleifend mattis
          vitae eu ipsum.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <button
            type="button"
            class="mr-2 mb-2 animate-bounce rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-extrabold text-white shadow-xl transition duration-700 hover:bg-slate-800 focus:outline-none focus:ring-4"
          >
            CONTACTANOS
          </button>
        </div>
        <div className="mt-36 lg:mt-44">
          <p className="font-display text-base text-orange-100">
            Contamos con la confianza de reconocidas empresas que avalan la
            calidad de nuestro servicio.
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'Transistor', logo: logoTransistor },
                { name: 'Tuple', logo: logoTuple },
                { name: 'StaticKit', logo: logoStaticKit },
              ],
              [
                { name: 'Mirage', logo: logoMirage },
                { name: 'Laravel', logo: logoLaravel },
                { name: 'Statamic', logo: logoStatamic },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        unoptimized
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}
