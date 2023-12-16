import React from 'react'
import styled from 'styled-components';

const Label = styled.h1`
  font-family: Magneto,serif;
  padding-left: 20px;
`

const Panel = styled.div`
  border: solid black 1px;
`

function LabelPanel() {
    return <Panel>
        <Label>CMonitoring</Label>
    </Panel>
}

export default LabelPanel;