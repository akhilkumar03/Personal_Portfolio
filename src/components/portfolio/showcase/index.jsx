import React from 'react'
import Arrow from '../../shared/arrow'
import "./style.scss"

const Showcase = ({data, transition}) => {
  return (
    <div className='projects-showcase'>
        {data.map((project)=>{
            return(
                <div key={project.name} className={`showcase-items ${transition === "zoomOut" ? "zoomOut" : transition === "zoomIn" ? "zoomIn" : ""}`}>
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="cta">
                            <span className='text'>Project Details</span>
                            <Arrow />
                        </div>
                    </div>
                    <img src={project.media.thumbnail} />
                </div>
            )
        })}
    </div>
  )
}

export default Showcase