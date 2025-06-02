export interface CoreConceptProps {
  readonly title: string;
  readonly description: string;
  readonly image: string;
}

export default function CoreConcept({image, title, description}: CoreConceptProps) {
  return <li key={title}>
    <img src={image} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}