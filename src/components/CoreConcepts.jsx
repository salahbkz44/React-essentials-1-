import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept key={concept.title} {...concept} />;
        })}
      </ul>
    </section>
  );
}
