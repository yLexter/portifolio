import React from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   DialogFooter,
} from "@/components/ui/dialog";
import { CLanguages } from "@/entities";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";

type IPropModallSettings = {
   children: React.ReactNode;
};

export default function ModallSettings({ children }: IPropModallSettings) {
   const languages = Object.values(CLanguages);

   const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {};

   return (
      <Dialog>
         <DialogTrigger>{children}</DialogTrigger>
         <DialogContent className="rounded-lg">
            <DialogHeader>
               <DialogTitle className="text-lg">Configurações</DialogTitle>
            </DialogHeader>

            <div>
               <h1 className="font-semibold mb-1">Linguagens</h1>

               <ul>
                  {languages.map((language) => {
                     return (
                        <li className="flex items-center space-x-2">
                           <RadioGroup
                              value={language.code}
                              id={`MdSttngs-${language.code}`}
                           />
                           <label htmlFor={`MdSttngs-${language.code}`}>
                              {language.label}
                           </label>
                        </li>
                     );
                  })}
               </ul>
            </div>

            <DialogFooter>
               <Button onClick={handleClick}>Salvar</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}
