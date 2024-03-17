"use client";

import React from "react";
import SectionTitle from "../ui/Section/SectionTitle";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import BaseSection from "../ui/Section/BaseSection";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import emailJs from "@emailjs/browser";
import { useJsonDataContext } from "@/contexts/JsonProvider";
import { CSectionNames } from "@/entities";

type IPropContactMe = {
   children?: React.ReactNode;
   className?: string;
};

type FormContact = z.infer<typeof schema>;

const schema = z.object({
   name: z
      .string()
      .min(2, { message: "Insira um nome no mínimo 2 caracteres" })
      .max(30, { message: "Insira um nome no mínimo 2 caracteres" }),
   email: z.string().email({ message: "Insira um email válido" }),
   message: z
      .string()
      .min(10, { message: "Insira uma mensagem de no mínimo 10 caracteres" })
      .max(500, { message: "Insira uma mensagem no máximo 500 caracteres" }),
});

const serviceId = process.env.EMAILJS_SERVICE_ID || "";
const templateId = process.env.EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.EMAILJS_PUBLIC_KEY || "";

const Spinner = () => {
   return (
      <svg
         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
      >
         <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
         ></circle>
         <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
         ></path>
      </svg>
   );
};

export default function ContactMe({ children, className }: IPropContactMe) {
   const { currentData } = useJsonDataContext();
   const { toast } = useToast();
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
   } = useForm<FormContact>({
      resolver: zodResolver(schema),
   });

   const onSubmit: SubmitHandler<FormContact> = async (data) => {
      const templateParams = {
         name: data.name,
         message: data.message,
         email: data.email,
      };

      await emailJs
         .send(serviceId, templateId, templateParams, publicKey)
         .then(() => {
            toast({
               variant: "sucess",
               title: "Email enviado com sucesso!",
               description: "Obrigado por entrar em contato",
            });
         })
         .catch((e) => {
            console.log(e);
            toast({
               variant: "destructive",
               title: "Algo deu Errado! Por favor, tente novamente",
            });
         });

      reset();
   };

   return (
      <BaseSection id={CSectionNames.contact} className="flex md:gap-x-16">
         <div className="hidden flex-1 items-start justify-center md:w-1/2 md:flex">
            <img
               className="w-11/12 h-11/12 object-cover"
               src="./images/contact-me.png"
               alt="contact-me"
            />
         </div>

         <div className="w-full md:w-1/2">
            <SectionTitle
               className="text-center"
               title={currentData.naveBar.contact}
            />

            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col gap-y-2 mb-2">
                  <Label htmlFor="name">
                     {currentData.contact.inputs.username.label}
                  </Label>
                  <Input
                     disabled={isSubmitting}
                     placeholder={
                        currentData.contact.inputs.username.placeholder
                     }
                     type="text"
                     id="name"
                     {...register("name")}
                  />
                  {errors.name && (
                     <span className="text-sm text-red-600">
                        {errors.name.message}
                     </span>
                  )}
               </div>

               <div className="flex flex-col gap-y-2 mb-2">
                  <Label htmlFor="email">
                     {currentData.contact.inputs.email.label}:
                  </Label>
                  <Input
                     disabled={isSubmitting}
                     placeholder={currentData.contact.inputs.email.placeholder}
                     type="email"
                     id="email"
                     {...register("email")}
                  />
                  {errors.email && (
                     <span className="text-sm text-red-600">
                        {errors.email.message}
                     </span>
                  )}
               </div>

               <div className="flex flex-col gap-y-2 mb-2">
                  <Label htmlFor="message">
                     {currentData.contact.inputs.message.label}:
                  </Label>
                  <Textarea
                     disabled={isSubmitting}
                     placeholder={
                        currentData.contact.inputs.username.placeholder
                     }
                     className="resize-none"
                     id="message"
                     {...register("message")}
                  />
                  {errors.message && (
                     <span className="text-sm text-red-600">
                        {errors.message.message}
                     </span>
                  )}
               </div>

               <Button
                  className="self-center text-lg w-2/3 h-14 rounded-lg mt-4"
                  type="submit"
                  disabled={isSubmitting}
               >
                  {isSubmitting ? <Spinner /> : currentData.contact.submit}
               </Button>
            </form>
         </div>
      </BaseSection>
   );
}
