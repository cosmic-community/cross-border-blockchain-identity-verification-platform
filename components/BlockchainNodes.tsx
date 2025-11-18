'use client'

import { useEffect, useState } from 'react'

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export default function BlockchainNodes() {
  const [nodes, setNodes] = useState<Node[]>([])

  useEffect(() => {
    // Initialize nodes
    const initialNodes: Node[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      connections: [],
    }))

    // Create connections
    initialNodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * initialNodes.length)
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex)
        }
      }
    })

    setNodes(initialNodes)

    // Animate nodes
    const interval = setInterval(() => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newX = node.x + node.vx
          let newY = node.y + node.vy
          let newVx = node.vx
          let newVy = node.vy

          if (newX <= 0 || newX >= 100) {
            newVx = -newVx
            newX = Math.max(0, Math.min(100, newX))
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy
            newY = Math.max(0, Math.min(100, newY))
          }

          return { ...node, x: newX, y: newY, vx: newVx, vy: newVy }
        })
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
      {/* Draw connections */}
      {nodes.map((node) =>
        node.connections.map((targetId) => {
          const target = nodes[targetId]
          if (!target) return null
          return (
            <line
              key={`${node.id}-${targetId}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity="0.3"
            />
          )
        })
      )}

      {/* Draw nodes */}
      {nodes.map((node) => (
        <circle
          key={node.id}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="3"
          fill="#00d4ff"
          className="animate-pulse-slow"
        />
      ))}

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="50%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#b100ff" />
        </linearGradient>
      </defs>
    </svg>
  )
}