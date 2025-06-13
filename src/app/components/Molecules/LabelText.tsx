import LabelAtom from '../atoms/LabelAtom/LabelAtom';
import SpanAtom from '../atoms/SpanAtom/SpanAtom';

import React from 'react'


const LabelText = () => {
  return (
    <LabelAtom htmlFor="completed">
        <SpanAtom className="label-text" text="Completed" />
    </LabelAtom>
  )
}

export default LabelText

