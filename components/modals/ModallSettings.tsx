"use client";

import React, { useState } from "react";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   DialogFooter,
} from "@/components/ui/dialog";
import { CLanguages, TLanguages } from "@/entities";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useJsonDataContext } from "@/contexts/JsonProvider";

type IPropModallSettings = {
   children: React.ReactNode;
};

export default function ModallSettings({ children }: IPropModallSettings) {
   const languages = Object.values(CLanguages);
   const { language, setLanguage } = useJsonDataContext();
   const [selectedValue, setSelectedValue] = useState<TLanguages>(language);

   const handleRadioChange = (value: string) => {
      setSelectedValue(value as TLanguages);
   };

   const handleClick = () => {
      setLanguage(selectedValue);
   };

   return (
      <Dialog>
         <DialogTrigger>{children}</DialogTrigger>
         <DialogContent className="rounded-lg">
            <DialogHeader>
               <DialogTitle className="text-lg">Configurações</DialogTitle>
            </DialogHeader>

            <div>
               <h1 className="font-semibold mb-1">Linguagens</h1>

               <RadioGroup
                  onValueChange={handleRadioChange}
                  defaultValue={language}
               >
                  {languages.map((language) => {
                     return (
                        <div
                           key={`RadioGpStts-${language.code}`}
                           className="flex items-center space-x-2"
                        >
                           <RadioGroupItem
                              value={language.code}
                              id={`MdSttngs-${language.code}`}
                           />
                           <label htmlFor={`MdSttngs-${language.code}`}>
                              {language.label}
                           </label>
                        </div>
                     );
                  })}
               </RadioGroup>
            </div>

            <DialogFooter>
               <DialogTrigger asChild>
                  <Button onClick={handleClick}>Salvar</Button>
               </DialogTrigger>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}
