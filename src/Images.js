import React from 'react'
import './Images.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Images = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className='container'>
                <div data-aos="fade-right" className='div'><img src='https://images.unsplash.com/photo-1682684123154-c21854fd90cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img></div>
                <div data-aos="fade-left" className='div'>
                    <h2>Patterns</h2>
                    <p>A pattern is a regularity in the world, in human-made design,[1] or in abstract ideas. As such, the elements of a pattern repeat in a predictable manner. A geometric pattern is a kind of pattern formed of geometric shapes and typically repeated like a wallpaper design.
                        Any of the senses may directly observe patterns. Conversely, abstract patterns in science, mathematics, or language may be observable only by analysis. Direct observation in practice means seeing visual patterns, which are widespread in nature and in art. Visual patterns in nature are often chaotic, rarely exactly repeating, and often involve fractals. Natural patterns include spirals, meanders, waves, foams, tilings, cracks, and those created by symmetries of rotation and reflection. Patterns have an underlying mathematical structure;[2]: 6  indeed, mathematics can be seen as the search for regularities, and the output of any function is a mathematical pattern. Similarly in the sciences, theories explain and predict regularities in the world.
                    </p>
                </div>
                <div data-aos="fade-down" className='div'>
                    <h2>Sun Rise</h2>
                    <p>Although the Sun appears to "rise" from the horizon, it is actually the Earth's motion that causes the Sun to appear. The illusion of a moving Sun results from Earth observers being in a rotating reference frame; this apparent motion caused many cultures to have mythologies and religions built around the geocentric model, which prevailed until astronomer Nicolaus Copernicus formulated his heliocentric model in the 16th century.[3]</p>
                </div>
                <div data-aos="fade-up" className='div'><img src='https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'></img></div>
                <div data-aos="flip-left" className='div'><img src='https://images.unsplash.com/photo-1682956101601-b4b76b162d18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'></img></div>
                <div data-aos="zoom-out-right" className='div'>
                    <h2>Women empowerment</h2>
                    <p>
                        Women's empowerment (or female empowerment) may be defined in several ways, including accepting women's viewpoints, making an effort to seek them and raising the status of women through education, awareness, literacy, and training.[1][2][3] Women's empowerment equips and allows women to make life-determining decisions through the different societal problems.[3] They may have the opportunity to re-define gender roles or other such roles, which allow them more freedom to pursue desired goals.[1]
                    </p>
                </div>
                <div data-aos="fade-right" className='div'>
                    <h2>Island</h2>
                    <p>
                        An island or isle is a piece of subcontinental land completely surrounded by water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys. An island in a river or a lake island may be called an eyot or ait, and a small island off the coast may be called a holm. Sedimentary islands in the Ganges Delta are called chars. A grouping of geographically or geologically related islands, such as the Philippines, is referred to as an archipelago.
                    </p>
                </div>
                <div data-aos="zoom-in-left" className='div'><img src='https://images.unsplash.com/photo-1682603812564-88b0a2896682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'></img></div>
            </div>
        </>
    )
}

export default Images
