import React from 'react'

const Skills = () => {
    return (
        <div className='skill' >
            <article>
                <h2 className='skill__tittle'>
                    Studies
                </h2>
                <ul className='skill__body'>
                    <li>
                        C.T.P de Corredores Bachillerato Educación. Media
                    </li>
                    <li>
                        C.T.P de Corredores Tecnico Medio en Secretariado Ejecutivo
                    </li>
                    <li>
                        Networking Academy (Cisco) Endpoint Security 2023
                    </li>
                    <li>
                        Networking Academy (Cisco) Cyber Threat Management 2023
                    </li>
                </ul>
            </article>
            <article>
                <h3 className='skill__tittleExperience'>
                    Experience
                </h3>
                <ul className='skill__experience'>
                    <li>
                        Extremos experiencia Deportiva Vendedor
                    </li>
                    <li>
                        Corporación ACS S.A Servicio al cliente
                    </li>
                    <li>
                        Corporación Arrocera Nacional Oficinista
                    </li>
                    <li>
                        Extremos experiencia deportiva Vendedor
                    </li>
                    <li>
                        Heladeria Colombiana Vendedor
                    </li>
                </ul>
            </article>
            <article>
                <h4 className='skill__tittleSkill'>
                    Skill
                </h4>
                <ul className='skills__listSkill'>
                    <li>
                        Effective communication
                        <div className="skills__progressBar">
                            <div className="skills__progress" style={{ width: '90%' }}></div>
                        </div>
                    </li>
                    <li>
                        Teamwork
                        <div className="skills__progressBar">
                            <div className="skills__progress" style={{ width: '80%' }}></div>
                        </div>
                    </li>
                    <li>
                        Management of office tools
                        <div className="skills__progressBar">
                            <div className="skills__progress" style={{ width: '85%' }}></div>
                        </div>
                    </li>
                    <li>
                        Knowledge of computer security
                        <div className="skills__progressBar">
                            <div className="skills__progress" style={{ width: '75%' }}></div>
                        </div>
                    </li>
                    <li>
                        Customer Support
                        <div className="skills__progressBar">
                            <div className="skills__progress" style={{ width: '95%' }}></div>
                        </div>
                    </li>
                </ul>

            </article>

        </div>


    );
}

export default Skills;
