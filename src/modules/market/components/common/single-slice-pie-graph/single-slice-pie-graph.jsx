import React from 'react'
import PropTypes from 'prop-types'

export default function SingleSlicePieGraph({ radius, percentage }) {
  const arcLength = (2 * Math.PI) * percentage

  const x = (Math.cos(arcLength) * radius) + radius
  const y = (Math.sin(arcLength) * radius) + radius


  const flags = (percentage > 0.5 ? '0 0, 0' : '1 1, 0')
  const path = `M${radius}, ${radius} L${2 * radius}, ${radius} A${radius} ${radius}, ${flags}, ${x} ${y} Z`
  return (
    <svg viewBox="0 0 180 180">
      <g transform="translate(45,45)">
        <circle cx={radius} cy={radius} r={radius} />
        <path
          d={path}
        />
      </g>
    </svg>
  )
}

SingleSlicePieGraph.propTypes = {
  radius: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
}
