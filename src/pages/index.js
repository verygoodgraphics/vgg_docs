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
      "Descriptions of a set of JSON-based specifications for vector graphics.",
    href: "/specs/overview",
    icon: DocumentTextIcon,
  },
  {
    name: "Guides",
    description:
      "Describes how to integrate VGG into your design and development workflow.",
    href: "/guides/overview",
    icon: AcademicCapIcon,
  },
  {
    name: "Containers",
    description:
      "VGG containers for multiple platforms to help with the deployment of VGG applications.",
    href: "/containers/overview",
    icon: RectangleGroupIcon,
  },
  {
    name: "Examples",
    description: "Various VGG examples demonstrating VGG capabilities.",
    href: "/examples/overview",
    icon: ArrowPathIcon,
  },
]

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description="">
      <main>
        <div className="py-12 sm:py-16">
          <div className="container container-fluid">
            <div
              className="text-white mx-auto w-full bg-top bg-cover lg:h-[480px] md:h-[360px] flex flex-col justify-center items-center py-16 lg:text-center border border-[var(--ifm-color-primary)] rounded-2xl px-8 bg-[var(--ifm-table-stripe-background)]"
              style={{
                backgroundImage: "url(/img/vgg_docs_bg.png)",
              }}
            >
              <h1 className="mt-2 font-bold tracking-tight lg:text-[96px] md:text-[56px] sm:text-[48px] text-[32px]">
                VeryGoodGraphics
              </h1>
              <p className="sm:mt-6 mt-1 text-lg leading-8 sm:text-3xl">
                Documentation Center
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                  <a
                    key={feature.name}
                    className="flex flex-col dark:bg-white/5 rounded-2xl p-6 bg-zinc-100 hover:no-underline border-solid border-transparent hover:border-[var(--ifm-color-primary)] hover:shadow-md"
                    href={feature.href}
                  >
                    <dt className="flex items-center gap-x-3 text-xl dark:text-white/50 text-zinc-500 leading-7 font-medium">
                      <feature.icon
                        className="h-8 w-8 flex-none text-zinc-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <dd className="flex flex-auto flex-col text-base leading-7 m-0 mt-12">
                      <h2 className="flex-auto mb-0 text-lg font-normal dark:text-white/50 text-zinc-500">
                        {feature.description}
                      </h2>
                      <div className="mt-6 mb-0">
                        <div
                          className="text-sm font-semibold leading-6 hover:underline"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </div>
                      </div>
                    </dd>
                  </a>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
