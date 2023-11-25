export function Items({
  text,
  handleClick,
}: {
  text: string
  handleClick: () => void
}) {
  return (
    <li>
      {text}
      <button onClick={handleClick}>Eliminar elemnto</button>
    </li>
  )
}
