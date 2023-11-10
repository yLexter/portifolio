import React from "react";
import Timeline from "../UI/Timeline/Timeline";
import { TDataTimeline } from "../../entities";
import SectionTitle from "../UI/Texts/SectionTitle";

type IProp = {};

export default function ({}: IProp) {
   const timelineData: TDataTimeline[] = [
      {
         title: "Primeiro contato com progamação",
         date: "05/06/2021",
         text: "Começei estudando Javascript e a fazer bots para dicosrd como hobbie.",
      },
      {
         title: "Curso de Computação",
         date: "23/04/2022",
         text: "Entrei para o curso de computação para UEPB.",
      },
      {
         title: "Área de Web",
         date: "15/01/2023",
         text: "Conheci e começei os estudos de progamação web.",
      },
   ];

   return (
      <div className="mb-spacing-section px-spacing-page h-auto">
         <SectionTitle title="Timeline" />
         <Timeline data={timelineData} />
      </div>
   );
}
