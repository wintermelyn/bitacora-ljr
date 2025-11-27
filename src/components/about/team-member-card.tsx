"use client"

import { useState } from "react"
import { Users } from "lucide-react"
import Image from "next/image"
import type { TeamMember } from "@/lib/team-data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="group cursor-pointer">
        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-teal-600/20 border border-primary/30 mb-4 transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20">
          <Image
            src={member.image || "/placeholder.svg?height=300&width=300&query=team member"}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-white text-sm font-medium">Haz clic para más</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600">
            {member.role}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">{member.description}</p>
        </div>
      </div>

      {/* Modal with full details */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary to-teal-600">
                <Image
                  src={member.image || "/placeholder.svg?height=300&width=300&query=team member"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                <p className="text-sm mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-600 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Acerca de
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-teal-600" />
                Reflexión del Curso
              </h4>
              <div className="space-y-3">
                {member.reflection.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-sm text-muted-foreground leading-relaxed italic">
                    &quot;{paragraph}&quot;
                  </p>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
