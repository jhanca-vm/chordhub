import type { FunctionComponent } from 'preact'

interface Props {
  value: string
  symbol?: string
}

const Chord: FunctionComponent<Props> = ({ value, symbol, children }) => {
  const text = <>{value}{symbol && <small>{symbol}</small>}</>

  if (!children) {
    return <strong class="align-top text-primary-900">{text}</strong>
  }

  return (
    <span class="inline-grid grid-rows-2 gap-y-0.5 text-left align-bottom">
      <strong class="text-primary-900">{text}</strong>
      {children}
    </span>
  )
}

export default Chord
