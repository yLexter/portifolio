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

         <DialogContent className="top-[50%] h-auto max-w-[100vw] w-[70%] rounded-lg p-0">
            <img
               className="object-fill aspect-square w-full h-[55vh]"
               src={project.image}
            />
         </DialogContent>
      </Dialog>
   );
}
