import TabButton from "./TabButton"
import { useState } from "react"
import { EXAMPLES } from "../data"



function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState('') 
    console.log(selectedTopic)
    
    function handleSelected(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log('work?', selectedTopic)
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
    <section id="examples">
        <h2>Example</h2>
        <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelected('components')}>Component!</TabButton> 
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => handleSelected('jsx')}>JSX!</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => handleSelected('props')}>Probs!</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => handleSelected('state')}>State!</TabButton>
        </menu>
        {tabContent}
    </section>
    </>
}
export default Examples