import type { FunctionComponent } from 'preact'

interface Props {
  value: string
}

const Chord: FunctionComponent<Props> = ({ value, children }) => {
  if (!children) {
    return <strong class="align-top text-primary-900">{value}</strong>
  }

  return (
    <span class="inline-flex flex-col gap-y-0.5 align-bottom">
      <strong class="text-primary-900">{value}</strong>
      {children}
    </span>
  )
}

export default Chord
