import { component$, Slot } from "@builder.io/qwik";

import {
  AccordionRoot as QwikUIAccordionRoot,
  AccordionItem as QwikUIAccordionItem,
  AccordionHeader as QwikUIAccordionHeader,
  AccordionTrigger as QwikUIAccordionTrigger,
  AccordionContent as QwikUIAccordionContent,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionHeaderProps,
} from "~/components/headless/accordion";

import { cn } from "~/lib/utils";

import { LuChevronDown } from "@qwikest/icons/lucide";

const Accordion = QwikUIAccordionRoot;

const AccordionItem = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionItem class={cn("border-b", props.class)} {...props}>
      <Slot />
    </QwikUIAccordionItem>
  );
});

// AccordionHeader will render as an h3 element by default, which can be problematic with markdown cn-prose styles
const AccordionHeader = component$<AccordionHeaderProps>((props) => {
  return (
    <QwikUIAccordionHeader class={cn("flex", props.class)} {...props}>
      <Slot />
    </QwikUIAccordionHeader>
  );
});

const AccordionTrigger = component$<AccordionTriggerProps>((props) => {
  return (
    <QwikUIAccordionTrigger
      class={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        props.class,
      )}
      {...props}
    >
      <Slot />
      <LuChevronDown class="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
    </QwikUIAccordionTrigger>
  );
});

const AccordionContent = component$<AccordionItemProps>((props) => {
  return (
    <QwikUIAccordionContent
      class={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        props.class,
      )}
      {...props}
    >
      <div class="pb-4 pt-0">
        <Slot />
      </div>
    </QwikUIAccordionContent>
  );
});

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  LuChevronDown,
};
