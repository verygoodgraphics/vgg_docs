import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Head from "@docusaurus/Head"
import Layout from "@theme/Layout"
import {
  ArrowPathIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  CodeBracketSquareIcon,
  SparklesIcon
} from "@heroicons/react/20/solid"

const features = [
  {
    name: "VGG Specs",
    description:
      "Descriptions of a set of JSON-based specifications specially for vector graphics.",
    href: "/specs/overview",
    icon: DocumentTextIcon,
    badge: "Beta",
  },
  {
    name: "VGG Features",
    description:
      "Illustrations of each feature defined by VGG Specs and implemented by VGG Runtime.",
    href: "/features/overview",
    icon: SparklesIcon,
  },
  {
    name: "VGG Workflow",
    description:
      "Explanations of concepts in VGG Workflow and descriptions of main steps to use it.",
    href: "/workflow/overview",
    icon: ArrowPathIcon,
  },
  {
    name: "VGG Containers",
    description:
      "Collection of VGG containers for multiple platforms to develop and deploy VGG applications.",
    href: "/containers/overview",
    icon: RectangleGroupIcon,
  },
  {
    name: "VGG Examples",
    description:
      "Various VGG examples written with VGG web containers to demonstrate VGG capabilities.",
    href: "/examples/overview",
    icon: CodeBracketSquareIcon,
  },
]

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout description="">
      <Head>
        <script
          defer
          data-domain="docs.verygoodgraphics.com"
          src="https://t.vgg.cool/js/script.js"
        ></script>
      </Head>
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
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <a
                    key={feature.name}
                    className="relative flex flex-col dark:bg-white/5 rounded-2xl p-6 bg-zinc-100 hover:no-underline border-solid border-transparent hover:border-[var(--ifm-color-primary)] hover:shadow-md"
                    href={feature.href}
                  >
                    {feature.badge && (
                      <span className="absolute right-4 top-4 bg-zinc-200 text-zinc-500/80 dark:bg-zinc-700 dark:text-zinc-400 inline-block ml-2 px-2 py-0.5 text-xs font-medium leading-4 rounded-full">
                        {feature.badge}
                      </span>
                    )}
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
                        <div className="text-sm font-semibold leading-6 hover:underline">
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
