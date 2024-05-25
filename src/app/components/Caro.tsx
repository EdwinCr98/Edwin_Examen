"use client";
import React from 'react'
import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import Image from 'next/image';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import Carro from './Carro';

const username: string = 'EdwinCr98';
export interface Repo {
    id: number;
    name: string;
    html_url: string;
    // Agrega otros campos que necesites del objeto de repositorio
}

const Caro = () => {
    const [x, setX] = useState(0);
    const handleSlide = (direction: string) => {
        if (window.matchMedia("(max-width: 700px)").matches) {
            if (direction === "left") {
                setX(x - 285.066666);
            } else {
                setX(x + 285.066666);
            }
        } else {
            if (direction === "left") {
                setX(x - 570.133333);
            } else {
                setX(x + 570.133333);
            }
        }
    };

    useEffect(() => {
        if (window.matchMedia("(max-width: 700px)").matches) {
            if (x > 570.133333) {
                setX(570.133333);
            }
            if (x < -570.133333) {
                setX(-570.133333);
            }
        } else {
            if (x > 1140.26667) {
                setX(1140.26667);
            }
            if (x < -1140.26667) {
                setX(-1140.26667);
            }
        }
    }, [x]);

    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const username = 'EdwinCr98';

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching repositories: {error.message}</p>;

    return (
        <>
            <div>
                <section className='caro__coutainer'>
                    <h2>My Work</h2>
                    <motion.div
                        animate={{ x }}
                        drag="x"
                        dragConstraints={{ left: -855.2, right: 855.2 }}
                    >
                        {repos.map((repo, index) => <Carro key={index} repo={repo} index={index} />)}
                    </motion.div>
                    <div>
                        <button type="button" onClick={() => handleSlide("right")}>
                            <svg
                                width={15}
                                height={16}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.12-5.12L8 0Z"
                                    fill="#fff"
                                />
                            </svg>
                        </button>
                        <button type="button" onClick={() => handleSlide("left")}>
                            <svg
                                width={15}
                                height={16}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m6.807 16 8-8-8-8-1.686 1.687 5.12 5.12H0v2.386h10.241l-5.12 5.12L6.807 16Z"
                                    fill="#fff"
                                />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Caro
