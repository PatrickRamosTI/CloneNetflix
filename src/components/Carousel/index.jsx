import React, { useState } from "react";
import Slider from "react-slick";
import {
  CarouselContainer,
  CarouselContent,
  StyledImage,
  InputContainer,
  CommentList,
} from "./style";

import demons from "../../assets/demons.jpg";
import demons2 from "../../assets/demons2.jpg";
import demons3 from "../../assets/demons3.jpg";
import gato from "../../assets/gato.jpg";
import gato2 from "../../assets/gato2.jpg";
import gato3 from "../../assets/gato3.jpg";
import hero from "../../assets/hero.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import pecados from "../../assets/pecados.jpg";
import pecados2 from "../../assets/pecados2.jpg";
import pecados3 from "../../assets/pecados3.jpg";

const imageGroups = [
  [
    { src: demons, alt: "Demon slayer" },
    { src: demons2, alt: "Demon slayer" },
    { src: demons3, alt: "Demon slayer" },
  ],
  [
    { src: gato, alt: "Gato" },
    { src: gato2, alt: "Gato 2" },
    { src: gato3, alt: "Gato 3" },
  ],
  [
    { src: hero, alt: "Hero" },
    { src: hero2, alt: "Hero" },
    { src: hero3, alt: "Hero" },
  ],
  [
    { src: pecados, alt: "Pecados" },
    { src: pecados2, alt: "Pecados" },
    { src: pecados3, alt: "Pecados" },
  ],
];

const Carousel = () => {
  const [comments, setComments] = useState(Array(imageGroups.length).fill([]));
  const [inputValues, setInputValues] = useState(
    Array(imageGroups.length).fill("")
  );

  const handleInputChange = (groupIndex, value) => {
    const newInputValues = [...inputValues];
    newInputValues[groupIndex] = value;
    setInputValues(newInputValues);
  };

  const handleAddComment = (groupIndex) => {
    if (inputValues[groupIndex].trim() !== "") {
      const newComments = [...comments];
      newComments[groupIndex] = [
        ...newComments[groupIndex],
        inputValues[groupIndex],
      ];
      setComments(newComments);
      const newInputValues = [...inputValues];
      newInputValues[groupIndex] = "";
      setInputValues(newInputValues);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <CarouselContent>
        <h2>Catalogo de animes</h2>
        {imageGroups.map((images, groupIndex) => (
          <div key={groupIndex}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <StyledImage src={image.src} alt={image.alt} />
                  {index === 0 && (
                    <p style={{ fontStyle: "italic" }}>{image.description}</p>
                  )}
                </div>
              ))}
            </Slider>
            <InputContainer>
              <input
                type="text"
                placeholder="Adicione um comentário"
                value={inputValues[groupIndex]}
                onChange={(e) => handleInputChange(groupIndex, e.target.value)}
              />
              <button onClick={() => handleAddComment(groupIndex)}>
                Adicionar
              </button>
            </InputContainer>
            <CommentList>
              {comments[groupIndex].map((comment, idx) => (
                <li key={idx}>{comment}</li>
              ))}
            </CommentList>
          </div>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

export default Carousel;
