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
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "/specs/overview",
    icon: DocumentTextIcon,
  },
  {
    name: "Containers",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "/containers/overview",
    icon: RectangleGroupIcon,
  },
  {
    name: "Tutorials",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "/tutorials/overview",
    icon: AcademicCapIcon,
  },
  {
    name: "Examples",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "/examples/overview",
    icon: ArrowPathIcon,
  },
]

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="py-24 sm:py-32">
          <div className="container container-fluid">
            <div className="mx-auto w-full py-16 lg:text-center border border-[var(--ifm-color-primary)] rounded-2xl px-8 bg-[var(--ifm-table-stripe-background)]">
              <h2 className="text-base font-semibold leading-7 opacity-60">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
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
