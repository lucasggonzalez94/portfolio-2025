interface NavBarLinkProps {
  children: React.ReactNode
  href?: string
  className?: string
}

function Base({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-white group inline-flex items-center cursor-pointer bg-transparent border-0 ${className ?? ''}`}>
      <span className="relative pb-1 uppercase text-[14px] select-none">
        <span>{children}</span>
        <span className="pointer-events-none absolute left-0 bottom-0 h-[2px] w-full scale-x-0 origin-bottom-right bg-white transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left" />
      </span>
    </span>
  )
}

export default function NavBarLink({ children, href, className }: NavBarLinkProps) {
  if (href) {
    return (
      <a href={href} className="inline-block">
        <Base className={className}>{children}</Base>
      </a>
    )
  }

  return (
    <button type="button" className="bg-transparent border-0 p-0">
      <Base className={className}>{children}</Base>
    </button>
  )
}
