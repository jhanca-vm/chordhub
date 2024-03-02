import type { FunctionComponent } from 'preact'

interface Props {
  value: string
  symbol?: string
  extension?: string
}

const Chord: FunctionComponent<Props> = ({
  value,
  symbol,
  extension,
  children
}) => {
  const text = (
    <>
      {value}
      {(symbol || extension) && (
        <small>
          {symbol}
          {extension && <span className="font-semibold">{extension}</span>}
        </small>
      )}
    </>
  )

  if (!children) {
    return <strong class="align-top pl-0.5 text-primary-900">{text}</strong>
  }

  return (
    <span class="inline-grid grid-rows-2 gap-y-0.5 text-left align-bottom">
      <strong class="pl-0.5 text-primary-900">{text}</strong>
      {children}
    </span>
  )
}

export default Chord
