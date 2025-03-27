import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <div className="display-4">About Us</div>
        <p className="lead">This is simpe about us page</p>
      </div>
      <div className="container">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            doloremque non beatae distinctio dolor praesentium quidem
            perspiciatis vel ipsa, voluptatem veritatis saepe aliquid iure
            expedita reiciendis, pariatur exercitationem. Officiis facere sed
            nesciunt atque dolorum dolores quo quia, maxime dicta exercitationem
            harum accusantium. Eos ipsum in debitis omnis vel, veniam quos,
            consequatur est quasi molestiae obcaecati odio eum nostrum ducimus
            eveniet animi eius incidunt dolor, architecto quisquam aliquid
            dolorum itaque. Soluta architecto a consequatur distinctio fuga
            rerum quis optio obcaecati maxime dolorem blanditiis sapiente ut
            incidunt vel, pariatur autem, ipsum eius? Labore id neque molestias!
            Ipsum corrupti consequatur asperiores laudantium? Laborum!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            corrupti animi eos. Corporis perferendis possimus voluptates in
            incidunt. Delectus ullam aliquid ipsum sit excepturi culpa.
            Voluptates adipisci tempore, voluptatibus cupiditate explicabo at
            numquam molestiae velit, ea provident eius laborum labore? Omnis,
            reiciendis praesentium aspernatur commodi facilis iusto cumque.
            Quidem, iure ipsam ipsum illum neque maiores fugit officiis numquam
            quas ad quis mollitia impedit unde, exercitationem veniam distinctio
            minus. Recusandae eius non neque fuga repellendus ipsam dolorum
            veritatis ratione animi? Debitis quod ea numquam officia fugit
            quasi, suscipit nulla! Facilis fuga natus, quidem repudiandae
            pariatur corrupti vitae a voluptates eveniet saepe?
          </p>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
