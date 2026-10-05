import { IconSparkles } from "@tabler/icons-react"
import "./ProjectVisual.css"

export default function ProjectVisual() {
  return (
    <div className="project-visual">

      <div className="project-visual-window">

        <div className="project-visual-header">
          <div className="project-visual-brand">
            <span className="project-visual-logo">D</span>
            <span>Driftline</span>
          </div>

          <div className="project-visual-dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="project-visual-body">

          <aside className="project-visual-sidebar">
            <span />
            <span />
            <span />
            <span />
          </aside>

          <div className="project-visual-content">

            <p className="project-visual-eyebrow">
              Incident Intelligence
            </p>

            <h3>Authentication failures</h3>

            <div className="project-visual-stats">

              <div className="project-visual-stat">
                <strong>12</strong>
                <span>Similar</span>
              </div>

              <div className="project-visual-stat">
                <strong>87%</strong>
                <span>Confidence</span>
              </div>

              <div className="project-visual-stat">
                <strong>4m</strong>
                <span>To insight</span>
              </div>

            </div>

            <div className="project-visual-recommendation">

              <div className="project-visual-recommendation-icon">
                <IconSparkles size={18} stroke={1.7} />
              </div>

              <div className="project-visual-recommendation-text">
                <strong>Recommended action</strong>
                <span>Review connection pooling configuration</span>
              </div>

              <span className="project-visual-match">
                High match
              </span>

            </div>

            <div className="project-visual-lines">
              <span />
              <span />
              <span />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}