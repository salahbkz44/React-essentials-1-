export default function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title + " image"} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
