import { createContextId } from "@builder.io/qwik";
import type {
  AccordionRootContext,
  AccordionItemContext,
} from "./accordion-context.type";

export const accordionRootContextId =
  createContextId<AccordionRootContext>("accordion-root");

export const accordionItemContextId =
  createContextId<AccordionItemContext>("accordion-item");
