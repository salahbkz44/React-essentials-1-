import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          onClick={() => {
            handleSelect("components");
          }}
          isSelected={selectedTopic === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onClick={() => {
            handleSelect("jsx");
          }}
          isSelected={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onClick={() => {
            handleSelect("props");
          }}
          isSelected={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onClick={() => {
            handleSelect("state");
          }}
          isSelected={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
