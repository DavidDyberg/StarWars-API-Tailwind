import {  FC, useState } from "react";
import { CharacterTypes } from "../../utils/types";
import Image from '../../assets/star wars.webp'

export const StarWarsData: FC = () => {
  const [data, setData] = useState<CharacterTypes | null> (null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCharacter = async () => {
    setIsLoading(true)

    const id: number = Math.floor(Math.random() * 80)

    const response: any = await fetch(`https://swapi.dev/api/people/${id}/`);

    if (response.status === 200) {
      const data: CharacterTypes = await response.json();
      setData(data);
    }
    setIsLoading(false);
}

  return (
    <>
      <div className="flex justify-center items-center mt-8">
          {data && 
              <div className="md:w-[650px] w-[350px] bg-starwarsblue bg-opacity-20 text-xl font-semibold rounded-lg shadow-lg p-4">
                    <h2 className="text-3xl underline text-starwarsblue font-semibold text-center">{data.name}</h2>
                    <div className="flex justify-between gap-7 text-starwarsyellow">
                      <p className="gap-2 ">Height: {data.height} cm</p>
                      <p>Weight: {data.mass} kg</p>
                    </div>
          
                    <div className="flex justify-between text-starwarsyellow">
                      <p>Gender: {data.gender}</p>
                      <p>Birth Year: {data.birth_year}</p>
                    </div>
          
                    <div className="flex justify-center">
                      <img
                        className={`h-40 w-40 rounded-full transition-transform ${
                          isLoading ? 'animate-spin' : ''
                        }`}
                        src={Image}
                        alt=""
                      />
                    </div>
                      
                    <div className="flex justify-between gap-7 mt-5 text-starwarsyellow ">
                      <p>Hair Color: {data.hair_color}</p>
                      <p>Skin Color: {data.skin_color}</p>
                      <p>Eye Color: {data.eye_color}</p>
                    </div>
                </div>
      }

      </div>

          <div className="flex justify-center m-8">
                <button
                  onClick={getCharacter}
                  className="bg-darkeryellow hover:bg-starwarsyellow font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                >
                  Generate character
                </button>
              </div>
    </>
  );
}