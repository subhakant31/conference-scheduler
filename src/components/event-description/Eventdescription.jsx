import styles from './Eventdescription.module.scss'
function Eventdescription() {

    return(
        
            <div className= {styles['Eventdescription-container']}>
                <div className= {styles['Eventdescription-container-wrapper']}>
                    <span className= {styles['Eventdescription-container-wrapper__spanone']}>world's largest</span>
                    <span className= {styles['Eventdescription-container-wrapper__spanone-two']}>react conference</span>
                    <p className= {styles['Eventdescription-container-wrapper__spanone-two-para']}>A 3-day React Celebration together with 2500 React Developers. Packed with the Latest React Updates by Authors, Creators and Experts.</p>
                    <p className= {styles['Eventdescription-container-wrapper__spanone-two-para']}>75 talks displaying the latest topics involving TypeScript, Node.js, React, Vue, Angular 15, Qwik, Vite, AuthZ, Demystifying Protocol Buffers and gRPC.</p>
                    <p className= {styles['Eventdescription-container-wrapper__spanone-two-para']}>On  SEP 25 - 27  this was an amazing opporutnity get in touch with Creators and Maintainers from Vue, Astro, Nuxt, Angular, Vite and Storybook. You will be provided with technical updates on the largest and hottest technologies alongside case studies on how to tackle your developer challenges.</p>
                </div>
            </div>
    );
}

export default Eventdescription;
