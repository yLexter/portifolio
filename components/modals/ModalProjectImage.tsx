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

         <DialogContent className=" h-2/3 w-[80%] rounded-lg p-0">
            <img
               className="object-fill aspect-square w-full h-full"
               src={project.image}
            />
         </DialogContent>
      </Dialog>
   );
}
