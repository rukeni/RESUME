/* eslint-disable max-len */
import React from 'react';

import Data from '../../context/globalContext';

const Card = () => (
  <Data.Consumer>
    { ({
      isHover, handleMouseOver, handleMouseOut,
    }) => (
      <div
        className="flex-1 flex w-full p-6 justify-center items-center relative z-50 hover:bg-transparent"
      >
        <span className="text-6xl font-sans font-extrabold">
          인간의 욕심은 끝이 없고... 나의
          { ' ' }
          {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
          <span
            className={`cursor-pointer ${isHover ? 'text-white' : 'text-indigo-500'}`}
            data-type="hover"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              transition: 'all .3s ease',
            }}
          >
            욕심

          </span>
          도 끝이 없다
        </span>
        <div
          className={`w-full min-h-screen ${isHover ? 'opacity-75' : 'hidden'}`}
          style={{
            zIndex: '-100',
            position: 'absolute',
            minWidth: '100vw',
            minHeight: '100vh',
            transition: 'all .5s ease-in-out',
            background: 'linear-gradient(180deg, #3d45b1, #844efc)',
          }}
        />
        <p
          style={{
            position: 'absolute',
            overflow: 'scrollY',
            width: '100px',
            height: '100px',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, similique exercitationem sequi quidem voluptas numquam, vero tempora ad a quos, sunt maxime molestias. Possimus eum fugiat quis error magni repellat?
          Similique harum nobis, deleniti inventore esse doloremque delectus at modi? Maxime, alias. Neque numquam vel voluptatem, iusto facilis distinctio modi delectus eius hic minima! Soluta quis aspernatur minima. Minus, ut!
          Consequuntur vero ad eos placeat quas? Iste aut assumenda optio deserunt non officia cum vero doloribus quae quis? Repellendus ut repudiandae voluptatum quis nam explicabo exercitationem odit incidunt voluptatibus perspiciatis?
          Ex, magnam! Voluptas optio molestiae voluptatem nostrum dolorem accusamus. Minus mollitia quidem iste ad officiis. Dolorum, animi doloremque nulla modi saepe voluptates esse quidem distinctio voluptate! Eligendi illum vitae autem.
          Odio, vero ipsam quidem optio placeat iure iusto at id suscipit consectetur harum modi tempore voluptatum eius eligendi exercitationem excepturi expedita doloremque ipsum unde quasi esse dolor nulla? Eligendi, ab!
          Nemo repellat quia est molestias eligendi quam beatae dolore. Repellat amet, hic vero expedita dignissimos adipisci iste eum maxime accusantium excepturi, maiores quisquam ipsam veniam doloribus illo consectetur modi aspernatur.
          Animi, mollitia consectetur quis repellat aspernatur maxime molestias odit quia ut, ratione voluptates corporis aut praesentium molestiae id tempora deserunt iure blanditiis consequuntur veritatis dicta nesciunt non facere. Illo, voluptas!
          Consequatur animi praesentium suscipit aut vero. Quo id temporibus cupiditate quis eveniet odit nemo unde, consequuntur harum odio ratione ex totam ipsam adipisci esse. Enim tempora quisquam suscipit aliquid voluptatum?
          Doloremque quo voluptatem adipisci aperiam illo earum, minus ad vero eos, natus nobis molestias provident est. Corrupti obcaecati eum error, asperiores odio autem qui quam rem consequuntur ullam voluptas iste.
          Soluta rerum harum nihil doloribus maiores minima sit animi quae cumque sapiente quo ratione porro nemo ab odit numquam, inventore debitis eveniet iste, illum eligendi tempora explicabo? Delectus, quasi labore!
        </p>
      </div>
    )}

  </Data.Consumer>
);

export default Card;
