import Chord from './Chord'
import type { FunctionComponent } from 'preact'

export const C: FunctionComponent = ({ children }) => {
  return <Chord value="C">{children}</Chord>
}

export const Csus4: FunctionComponent = ({ children }) => {
  return <Chord value="C" extension="sus4">{children}</Chord>
}

export const Dm7: FunctionComponent = ({ children }) => {
  return <Chord value="D" symbol="m" extension="7">{children}</Chord>
}

export const Eb: FunctionComponent = ({ children }) => {
  return <Chord value="E" symbol="b">{children}</Chord>
}

export const F: FunctionComponent = ({ children }) => {
  return <Chord value="F">{children}</Chord>
}

export const Gm: FunctionComponent = ({ children }) => {
  return <Chord value="G" symbol="m">{children}</Chord>
}

export const Gm7: FunctionComponent = ({ children }) => {
  return <Chord value="G" symbol="m" extension="7">{children}</Chord>
}

export const Am: FunctionComponent = ({ children }) => {
  return <Chord value="A" symbol="m">{children}</Chord>
}

export const Bb: FunctionComponent = ({ children }) => {
  return <Chord value="B" symbol="b">{children}</Chord>
}

export const Bbsus2: FunctionComponent = ({ children }) => {
  return <Chord value="B" symbol="b" extension="sus2">{children}</Chord>
}

export const Bbadd2: FunctionComponent = ({ children }) => {
  return <Chord value="B" symbol="b" extension="add2">{children}</Chord>
}
