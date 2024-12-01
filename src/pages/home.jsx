import React from 'react'
import MarioCard from '../components/cards';

const Home = () => {

    const characterCards = [
        {
            name: "Fire Mario",
            powerUp: "Fire flower",
            hability: "throw fireballs",
            imageUrl: "https://i.pinimg.com/originals/ec/1b/92/ec1b924366562d608b1726a7a8f63d7f.png",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://cdn.discordapp.com/attachments/1093593004327059457/1311894863247310858/mario.png?ex=674b2d8d&is=6749dc0d&hm=2e239c388dd3ee5e865ba4efa826191a10ce3d7a869b0745d6fa00e7daa43719&",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://cdn.discordapp.com/attachments/1093593004327059457/1311895413707767949/231004-armario-mario-12-trajes-heroe.png?ex=674b2e10&is=6749dc90&hm=c2e1058767ee590f87ddbc48ff0320bd122171bb71603a8f3478a24f9265375f&",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://static.wikia.nocookie.net/82b99d0f-b689-4828-896a-588843331a1d/scale-to-width/370",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://cdn.discordapp.com/attachments/1093593004327059457/1311896522572566619/latest.png?ex=674b2f18&is=6749dd98&hm=91da7f8e13a135a0f02d3373ca1859b841d77eb2b44fd5da7cd85ac7b5e64333&",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://cdn.discordapp.com/attachments/1093593004327059457/1311896024100507648/360.png?ex=674b2ea1&is=6749dd21&hm=2806b1a2ef0a1029c4531e56849800927608cefdc4211fb75dbc0611b4433a56&",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://smashultimatespirits.com/img/spiritImages/21.png",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://external-preview.redd.it/JaKct4zqd0_05MxP4_3tdeuhmy0sCZB3xzh0NLRnmxE.png?auto=webp&s=5a7016313e1a56c643c187c303b4270039f55c09",
        },
        {
            name: "Luigi",
            powerUp: "Feid",
            hability: "cantar chimba",
            imageUrl: "https://mario.wiki.gallery/images/thumb/2/28/MKT_Artwork_PenguinMario.png/200px-MKT_Artwork_PenguinMario.png",
        },

    ];
    return (
        <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characterCards.map((character, index) => (
                <MarioCard
                    key={index} // Clave única para cada tarjeta
                    name={character.name}
                    powerUp={character.powerUp}
                    hability={character.hability}
                    imageUrl={character.imageUrl}
                />
            ))}
        </section>
    )
}

export default Home
