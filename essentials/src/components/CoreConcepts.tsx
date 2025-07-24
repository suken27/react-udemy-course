import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
            </ul>
        </Section>
    );
}

export default CoreConcepts;