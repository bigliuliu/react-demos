import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import al from './images/alexa.png'
import cor from './images/cortana.png'
import sir from './images/siri.png'
function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">personal digital assistants</p>
                    <p class="subtitle">Primary subtitle</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'><ProfileCard title="Al" handle="@al99" image={al}  desc = "this  is iiiisis"/></div>
                        <div className='column is-4'><ProfileCard title="Co" handle="@co32" image={cor} desc = "this  is iiiisis"/></div>
                        <div className='column is-4'><ProfileCard title="Sir" handle="@sir45" image={sir} desc = "this  is iiiisis"/></div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default App;