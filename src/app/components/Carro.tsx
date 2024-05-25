import Image from 'next/image';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import { Repo } from './Caro';

/*Encapsular elementos para que sean mas legibles*/
interface CarroProps {
    repo: Repo;
    index: number;
}

const Carro: React.FC<CarroProps> = ({ repo, index }) => {
    const imgReport = [img6, img5, img1, img2, img3, img4]
    const imgSrc = imgReport[index % imgReport.length];

    //verificar los datos del repositorio y el enlace
    console.log(`Repo Name: ${repo.name}`);
    console.log(`Repo URL: https://github.com/EdwinCr98/${repo.name}`);

    return (
        <figure className='carro__car'>
            <Image className='carro__img' alt='Proyecto' src={imgSrc} placeholder="blur" />
            <figcaption>
                <h3>{repo.name}</h3>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    Ir al repositorio
                </a>
            </figcaption>
        </figure>
    );
};



export default Carro;
