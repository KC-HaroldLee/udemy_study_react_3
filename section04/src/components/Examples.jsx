import TabButton from "./TabButton"
import { useState } from "react"
import { EXAMPLES } from "../data"
import Section from "./Section"
import Tabs from "./Tabs"

function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState('') 

  function handleSelected(selectedButton) {
    setSelectedTopic(selectedButton)
  }
    
  let tabContent = <p>Plz Slct a tpc</p>
  if (selectedTopic) {
    tabContent = <>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    </>
  }

  return <>
  {/* <section id="examples"> */}
  <Section title='examples' id="examples">
      <Tabs 
        ButtonContainer="menu"
        buttons={<>
        <TabButton isSelected={selectedTopic==='components'} onClick={() => handleSelected('components')}>Component!</TabButton> 
          <TabButton isSelected={selectedTopic==='jsx'} onClick={() => handleSelected('jsx')}>JSX!</TabButton>
          <TabButton isSelected={selectedTopic==='props'} onClick={() => handleSelected('props')}>Probs!</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onClick={() => handleSelected('state')}>State!</TabButton></>}>{tabContent}</Tabs>
      {/* <h2>Example</h2> */}
        {/* <menu> */}
        {/* Tabs 속성으로 넘어감... */}
          {/* <TabButton isSelected={selectedTopic==='components'} onClick={() => handleSelected('components')}>Component!</TabButton> 
          <TabButton isSelected={selectedTopic==='jsx'} onClick={() => handleSelected('jsx')}>JSX!</TabButton>
          <TabButton isSelected={selectedTopic==='props'} onClick={() => handleSelected('props')}>Probs!</TabButton>
          <TabButton isSelected={selectedTopic==='state'} onClick={() => handleSelected('state')}>State!</TabButton> */}
        {/* </menu> */}
        {/* {tabContent} */}
    </Section>
    {/* </section> */}
  </>
}
export default Examples