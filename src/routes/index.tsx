import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default component$(() => {
  return (
    <>
      <h1 class="text-blue-500">Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <Accordion class="w-96">
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>You know what?</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>The Jack Shelton is awesome!</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
