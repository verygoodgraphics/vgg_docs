import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import {
  ArrowPathIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid"

const features = [
  {
    name: "Specs",
    description:
      "VGG Specs is a set of JSON-based specifications for vector graphics.",
    href: "/specs/overview",
    icon: DocumentTextIcon,
  },
  {
    name: "Containers",
    description:
      "VGG containers help deploy VGG applications to multiple platforms.",
    href: "/containers/overview",
    icon: RectangleGroupIcon,
  },
  {
    name: "Tutorials",
    description:
      "VGG tutorials help you get started with VGG dev workflow.",
    href: "/tutorials/overview",
    icon: AcademicCapIcon,
  },
  {
    name: "Examples",
    description:
      "Various VGG examples demonstrating VGG capabilities.",
    href: "/examples/overview",
    icon: ArrowPathIcon,
  },
]

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      description=""
    >
      <main>
        <div className="py-24 sm:py-32">
          <div className="container container-fluid">
            <div className="mx-auto w-full py-16 lg:text-center border border-[var(--ifm-color-primary)] rounded-2xl px-8 bg-[var(--ifm-table-stripe-background)]">
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                VeryGoodGraphics
              </h1>
              <p className="mt-6 text-lg leading-8">
                Documentation Center
              </p>
            </div>
            <div className="mx-auto mt-24 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                      <feature.icon
                        className="h-5 w-5 flex-none text-zinc-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 m-0">
                      <p className="flex-auto opacity-60 mb-0">
                        {feature.description}
                      </p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
