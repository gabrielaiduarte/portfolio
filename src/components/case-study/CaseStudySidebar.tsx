import "./CaseStudySidebar.css"

export type CaseStudySidebarItem = {
    id: string
    label: string
}

type CaseStudySidebarProps = {
    items: CaseStudySidebarItem[]
    status?: string
    statusDetail?: string
}

export default function CaseStudySidebar({
    items,
    status = "Currently building",
    statusDetail = "Active Development"
}: CaseStudySidebarProps ) {
    return (
        <aside className="case-study-sidebar">
            <div className="case-study-sidebar-inner">

                <div className="case-study-sidebar-content">

                    <p className="case-study-sidebar-title">
                        On this page
                    </p>

                    <nav 
                        className="case-study-sidebar-nav"
                        aria-label="Case study sections"
                    >
                        {items.map((item, index) => (
                            <a 
                                key={item.id}
                                className="case-study-sidebar-link"
                                href={`#${item.id}`}
                            >
                                <span className="case-study-sidebar-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="case-study-sidebar-link-label">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </nav>

                </div>

                <div className="case-study-sidebar-status">
                    <span className="case-study-sidebar-status-dot" />

                    <div className="case-study-sidebar-status-copy">
                        <strong>{status}</strong>
                        <span>{statusDetail}</span>
                    </div>
                </div>
                
            </div>
        </aside>
    )
}