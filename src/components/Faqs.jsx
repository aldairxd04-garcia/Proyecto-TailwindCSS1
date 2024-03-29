import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "¿Número de contacto?",
    answer:
      "I don't know, but the flag is a big plus.",
  },
  // More questions...
  {
    question: "¿Dirección de la empresa?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "¿Precios?",
    answer:
      "Quas cupiditate laboriosam fugiat.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Faqs() {
  return (
    <div className="bg-gray-50 ">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="font-display text-3xl tracking-tight text-black text-center sm:text-4xl uppercase font-extrabold md:text-5xl">
            Preguntas frecuentes
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-white">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className=" text-black font-normal">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
