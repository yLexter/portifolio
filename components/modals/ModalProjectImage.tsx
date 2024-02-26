import React, { ReactNode } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   DialogFooter,
} from "@/components/ui/dialog";
import { TProject } from "@/entities";

type IPropModalProjectImage = {
   children: ReactNode;
   project: TProject;
};

export default function ModalProjectImage({
   children,
   project,
}: IPropModalProjectImage) {
   return (
      <Dialog>
         <DialogTrigger asChild>{children}</DialogTrigger>
         <DialogContent className="w-1/2 h-96 rounded-lg p-0">
            <img
               className="w-full h-full object-cover"
               src={project.image}
               alt="Imagem projeto"
            />
         </DialogContent>
      </Dialog>
   );
}
