"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TEAM_MEMBERS } from "@/lib/team-data"
import { TeamMemberCard } from "./team-member-card"

gsap.registerPlugin(ScrollTrigger)

export function TeamGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const items = containerRef.current.querySelectorAll("[data-team-item]")

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
  }, [])

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} data-team-item>
          <TeamMemberCard member={member} />
        </div>
      ))}
    </div>
  )
}
